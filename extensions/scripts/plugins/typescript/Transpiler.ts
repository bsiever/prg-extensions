import chalk from "chalk";
import fs from "fs";
import path from "path";
import ts from "typescript";
import { retrieveExtensionDetails } from "./typeProbing";
//import { generateCodeForExtensions } from "./codeGeneration";
import { profile, start, stop } from "../../../../scripts/profile";
import { Conditon, sendToParent } from "../../../../scripts/devComms";
import { extensionsFolder, vmSrc } from "../../../../scripts/paths";
import { oneliner } from "../../../../scripts/utils";
import { writeFileSync } from "fs";
import { getProgramMsg, printDiagnostics, reportDiagnostic, reportWatchStatusChanged } from "./diagnostics";

type Program = ts.EmitAndSemanticDiagnosticsBuilderProgram;
type Host = ts.WatchCompilerHostOfFilesAndCompilerOptions<Program>;
type Watcher = ts.WatchOfFilesAndCompilerOptions<Program>;

export type TranspileEvent = (ts: Transpiler) => void;

export default class Transpiler {
  compileCount: number = 0;
  error: boolean = false;
  watcher: Watcher;
  program: ts.Program;

  close() { this.watcher.close() }

  static Make(entries: string[], onSuccess: TranspileEvent, onError: TranspileEvent) {
    const errorCallbackContainer: { onErrorReported?: () => void } = { onErrorReported: undefined };
    const errorCallback = () => errorCallbackContainer.onErrorReported();
    const host = profile(() => getWatchHost(entries, errorCallback), chalk.green("Retrived watch host in"));

    const { createProgram, afterProgramCreate } = host;

    const instance = new Transpiler(host, createProgram, afterProgramCreate, onSuccess, onError);

    errorCallbackContainer.onErrorReported = instance.setErrorFlag.bind(instance);
    host.createProgram = instance.customCreateProgram.bind(instance);
    host.afterProgramCreate = instance.customAfterProgramCreate.bind(instance);
    instance.start();

    return instance;
  }

  private constructor(
    private host: Host,
    private originalCreateProgram: Host["createProgram"],
    private originalAfterProgramCreate: Host["afterProgramCreate"],
    private onSuccess: TranspileEvent,
    private onError: TranspileEvent
  ) { }

  private start() { this.watcher = profile(() => ts.createWatchProgram(this.host), "Created watcher in") }
  private increment() { this.compileCount++; }
  private setErrorFlag() { this.error = true; }

  private customCreateProgram(...params: Parameters<typeof this.originalCreateProgram>) {
    const { originalCreateProgram, compileCount } = this;
    start(getProgramMsg(compileCount));

    const builder = originalCreateProgram(...params);
    this.program = builder.getProgram();

    return builder;
  }

  private customAfterProgramCreate(...params: Parameters<typeof this.originalAfterProgramCreate>) {
    const [semanticProgram] = params;
    const { compileCount, originalAfterProgramCreate } = this;

    stop(getProgramMsg(compileCount));
    originalAfterProgramCreate(semanticProgram);

    this.error ? this.onError(this) : this.onSuccess(this);
    this.increment();
  }
}

const getWatchHost = (files: string[], onError: () => void): Host => {
  const srcDir = path.join(extensionsFolder, "src");
  const configFile = path.join(srcDir, "tsconfig.json");
  const { config } = ts.readConfigFile(configFile, ts.sys.readFile);
  const { options } = ts.parseJsonConfigFileContent(config, ts.sys, srcDir, undefined, configFile);

  return ts.createWatchCompilerHost(
    files,
    { ...options, noEmit: true },
    ts.sys,
    ts.createEmitAndSemanticDiagnosticsBuilderProgram,
    reportDiagnostic,
    (diagnostic, _, __, errorCount) => {
      reportWatchStatusChanged(diagnostic);
      if (errorCount) onError();
    },
  );
}
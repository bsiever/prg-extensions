var extensionProbe=function(e,t){"use strict";function n(){}function o(e){return e()}function i(){return Object.create(null)}function r(e){e.forEach(o)}function s(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let l,a;function u(e,t){e.appendChild(t)}function d(e,t,n){const o=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t&&t.host)return t;return e.ownerDocument}(e);if(!o.getElementById(t)){const e=g("style");e.id=t,e.textContent=n,function(e,t){u(e.head||e,t),t.sheet}(o,e)}}function f(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function h(){return m(" ")}function y(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t,n,o){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function b(e,t,n){e.classList.toggle(t,!!n)}function v(e){a=e}function w(e){(function(){if(!a)throw new Error("Function called outside component initialization");return a})().$$.on_mount.push(e)}const k=[],E=[];let I=[];const j=[],O=Promise.resolve();let _=!1;function S(e){I.push(e)}const C=new Set;let N=0;function R(){if(0!==N)return;const e=a;do{try{for(;N<k.length;){const e=k[N];N++,v(e),A(e.$$)}}catch(e){throw k.length=0,N=0,e}for(v(null),k.length=0,N=0;E.length;)E.pop()();for(let e=0;e<I.length;e+=1){const t=I[e];C.has(t)||(C.add(t),t())}I.length=0}while(k.length);for(;j.length;)j.pop()();_=!1,C.clear(),v(e)}function A(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const T=new Set;let P;function D(e,t){e&&e.i&&(T.delete(e),e.i(t))}function B(e,t,n,o){if(e&&e.o){if(T.has(e))return;T.add(e),P.c.push((()=>{T.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}else o&&o()}function L(e){return void 0!==e?.length?e:Array.from(e)}function M(e){e&&e.c()}function z(e,t,n){const{fragment:i,after_update:c}=e.$$;i&&i.m(t,n),S((()=>{const t=e.$$.on_mount.map(o).filter(s);e.$$.on_destroy?e.$$.on_destroy.push(...t):r(t),e.$$.on_mount=[]})),c.forEach(S)}function U(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];I.forEach((o=>-1===e.indexOf(o)?t.push(o):n.push(o))),n.forEach((e=>e())),I=t}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function q(e,t){-1===e.$$.dirty[0]&&(k.push(e),_||(_=!0,O.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(e,t,o,s,c,l,u=null,d=[-1]){const f=a;v(e);const g=e.$$={fragment:null,ctx:[],props:l,update:n,not_equal:c,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:i(),dirty:d,skip_bound:!1,root:t.target||f.$$.root};u&&u(g.root);let m=!1;if(g.ctx=o?o(e,t.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return g.ctx&&c(g.ctx[t],g.ctx[t]=i)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](i),m&&q(e,t)),n})):[],g.update(),m=!0,r(g.before_update),g.fragment=!!s&&s(g.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);g.fragment&&g.fragment.l(e),e.forEach(p)}else g.fragment&&g.fragment.c();t.intro&&D(e.$$.fragment),z(e,t.target,t.anchor),R()}v(f)}class G{$$=void 0;$$set=void 0;$destroy(){U(this,1),this.$destroy=n}$on(e,t){if(!s(t))return n;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const e=o.indexOf(t);-1!==e&&o.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function J(e,t,n,o,i,r){function s(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var c,l=o.kind,a="getter"===l?"get":"setter"===l?"set":"value",u=!t&&e?o.static?e:e.prototype:null,d=t||(u?Object.getOwnPropertyDescriptor(u,o.name):{}),f=!1,p=n.length-1;p>=0;p--){var g={};for(var m in o)g[m]="access"===m?{}:o[m];for(var m in o.access)g.access[m]=o.access[m];g.addInitializer=function(e){if(f)throw new TypeError("Cannot add initializers after decoration has completed");r.push(s(e||null))};var h=(0,n[p])("accessor"===l?{get:d.get,set:d.set}:d[a],g);if("accessor"===l){if(void 0===h)continue;if(null===h||"object"!=typeof h)throw new TypeError("Object expected");(c=s(h.get))&&(d.get=c),(c=s(h.set))&&(d.set=c),(c=s(h.init))&&i.unshift(c)}else(c=s(h))&&("field"===l?i.unshift(c):d[a]=c)}u&&Object.defineProperty(u,o.name,d),f=!0}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4"),"function"==typeof SuppressedError&&SuppressedError;const H="legacy.ts",Y="legacyFullSupport",K="legacyIncrementalSupport",Q="GenericExample",V=`export default class ${Q} extends Extension<..., ...> { ... }`,W=["// generic extension\n"+V,"vs","// configurable extension extension\nexport default class ConfigurableExample extends extension({...}) { ... }"].join("\n\n"),{legacyExtension:X,legacyDefinition:Z,legacyBlock:ee,ReservedNames:te}={legacyExtension:"legacyExtension",legacyDefinition:"legacyDefinition",legacyBlock:"legacyBlock",ReservedNames:"ReservedNames"},ne={legacyExtension:X,legacyDefinition:Z,ReservedNames:te},oe=e=>`const { ${Object.values(ne).join(", ")} } = ${e}<${Q}>();`,ie={[X]:{description:"A decorator to apply to your extension in order to give it legacy support",snippet:["@legacyExtension()",V].join("\n")},[Z]:{description:"A utility function to assist in defining legacy blocks within your extension",snippet:"defineBlocks() {\n  // Assuming that the legacy extension defined a block with the name 'exampleLegacyBlock'\n  return {\n    exampleLegacyBlock: legacyBlock.exampleLegacyBlock({\n      operation: (x: number) => { ... },\n      argumentMethods: {  \n        ...\n        // See jsdoc documentation\n      }\n    })\n  }\n}"},[te]:{description:"This member should not be used, but instead you can hover over it to identify names that have been 'reserved' by the legacy extension. \nThe names included within the 'blocks' property correspond to blocks your extension will have to define. \nYour class will be prohibited from defining members with the same name as any of these reserved names."}};let re=(()=>{var e;let n,o,i=t.extension({name:"Extension Probe",description:"(INTERNAL) Use this extension to probe the info of other estensions",tags:["PRG Internal"]},"ui"),r=[];return e=class extends i{constructor(){super(...arguments),this.extensionManager=void function(e,t,n){for(var o=arguments.length>2,i=0;i<t.length;i++)n=o?t[i].call(e,n):t[i].call(e)}(this,r),this.addedExtensions=[],this.defaultOption="Add an extension to probe it"}init({runtime:e,extensionManager:n}){this.extensionManager=n,e.addListener(t.RuntimeEvent.ExtensionAdded,(({name:e,id:t})=>{t!==this.id&&this.addedExtensions.push({text:e,value:t})}))}displayInfo(e){const t=this.getExtensionInfo(e);t&&(this.currentInfo=t,this.openUI("Info",`Info for ${t.name}`))}legacyProbe(e){const t=this.getExtensionInfo(e);t&&(le(H,ce(t)),this.openUI("Instructions","How to use legacy.ts"))}getExtension(e){if(e!==this.defaultOption)return this.extensionManager.getExtensionInstance(e);alert("You must load an extension and then select it's ID in order to probe it.")}getExtensionInfo(e){const t=this.getExtension(e);return t?se(t):void 0}getIDs(){return this.addedExtensions.length>0?this.addedExtensions:[this.defaultOption]}},(()=>{var s;const c="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(s=i[Symbol.metadata])&&void 0!==s?s:null):void 0;n=[t.block((e=>({type:"command",text:e=>`Show info for ${e}`,arg:{type:t.ArgumentType.String,options:e.getIDs}})))],o=[t.block((e=>({type:"command",text:e=>`Get legacy support for ${e}`,arg:{type:t.ArgumentType.String,options:e.getIDs}})))],J(e,null,n,{kind:"method",name:"displayInfo",static:!1,private:!1,access:{has:e=>"displayInfo"in e,get:e=>e.displayInfo},metadata:c},null,r),J(e,null,o,{kind:"method",name:"legacyProbe",static:!1,private:!1,access:{has:e=>"legacyProbe"in e,get:e=>e.legacyProbe},metadata:c},null,r),c&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:c})})(),e})();const se=e=>{const n=e.getInfo();return["blockIconURI","menuIconURI"].filter((e=>e in n)).forEach((e=>delete n[e])),n.blocks=n.blocks.map((e=>t.isString(e)?void 0:"blockType"in e?e:Object.assign(Object.assign({},e),{blockType:"command"}))).filter(Boolean),n.menus&&(n.menus=Object.entries(n.menus).reduce(((e,[n,o])=>{if(!t.isString(o)){const e="acceptReporters";e in o||(o[e]=!1)}return e[n]=o,e}),{})),n},ce=e=>{const t="legacy",n="info",o="export const",i=`import { ${t} } from "$common";`,r=`${o} ${n} = ${JSON.stringify(e,null,2)} as const;`,s=JSON.stringify({incrementalDevelopment:!0});return[i,r,[`${o} ${Y} = ${t}(${n});`,`${o} ${K} = ${t}(${n}, ${s});`].join("\n")].join("\n")},le=(e,t)=>{const n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)};function ae(e){d(e,"svelte-1mfppcc","button.svelte-1mfppcc{margin-top:0px}")}function ue(e){let t,o,i,r;return{c(){t=g("center"),o=g("button"),o.textContent="Copy Snippet",$(o,"class","svelte-1mfppcc")},m(n,s){f(n,t,s),u(t,o),i||(r=y(o,"click",e[4]),i=!0)},p:n,d(e){e&&p(t),i=!1,r()}}}function de(e){let t,o,i,r;return{c(){t=g("center"),o=g("button"),o.textContent="Copy Snippet",$(o,"class","svelte-1mfppcc")},m(n,s){f(n,t,s),u(t,o),i||(r=y(o,"click",e[5]),i=!0)},p:n,d(e){e&&p(t),i=!1,r()}}}function fe(e){let t,o,i,s,c,a,d,x,b,v,w,k,E="top"===e[1]&&ue(e),I=!0===e[1]&&de(e);return{c(){var n,r;t=g("link"),o=g("script"),s=h(),E&&E.c(),c=h(),a=g("pre"),d=g("code"),x=m(e[0]),b=h(),I&&I.c(),v=m(""),$(t,"rel","stylesheet"),$(t,"href","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/vs2015.min.css"),n=o.src,r=i="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js",n!==r&&(l||(l=document.createElement("a")),l.href=r,n!==l.href)&&$(o,"src","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"),$(d,"class","language-typescript")},m(n,i){u(document.head,t),u(document.head,o),f(n,s,i),E&&E.m(n,i),f(n,c,i),f(n,a,i),u(a,d),u(d,x),f(n,b,i),I&&I.m(n,i),f(n,v,i),w||(k=[y(t,"load",e[3]),y(o,"load",e[3])],w=!0)},p(e,[t]){"top"===e[1]?E?E.p(e,t):(E=ue(e),E.c(),E.m(c.parentNode,c)):E&&(E.d(1),E=null),1&t&&function(e,t){t=""+t,e.data!==t&&(e.data=t)}(x,e[0]),!0===e[1]?I?I.p(e,t):(I=de(e),I.c(),I.m(v.parentNode,v)):I&&(I.d(1),I=null)},i:n,o:n,d(e){e&&(p(s),p(c),p(a),p(b),p(v)),p(t),p(o),E&&E.d(e),I&&I.d(e),w=!1,r(k)}}}function pe(e,t,n){let{code:o}=t,{copyable:i=!0}=t;const r=e=>navigator.clipboard.writeText(e),s=()=>{var e;return null===(e=window.hljs)||void 0===e?void 0:e.highlightAll()};w(s);return e.$$set=e=>{"code"in e&&n(0,o=e.code),"copyable"in e&&n(1,i=e.copyable)},[o,i,r,s,()=>r(o),()=>r(o)]}class ge extends G{constructor(e){super(),F(this,e,pe,fe,c,{code:0,copyable:1},ae)}}function me(e){d(e,"svelte-7ob0w7",".container.svelte-7ob0w7{padding:30px;height:80vh;width:80vw;overflow:scroll}.codelike.svelte-7ob0w7{background-color:black;color:rgb(210, 134, 80);padding:3px;font-family:monospace}")}function he(e,t,n){const o=e.slice();return o[4]=t[n][0],o[5]=t[n][1].description,o[6]=t[n][1].snippet,o}function ye(e){let t,o,i,r,s,c,l,a=e[5]+"",d=e[6]&&function(e){let t,o;return t=new ge({props:{code:e[6]}}),{c(){M(t.$$.fragment)},m(e,n){z(t,e,n),o=!0},p:n,i(e){o||(D(t.$$.fragment,e),o=!0)},o(e){B(t.$$.fragment,e),o=!1},d(e){U(t,e)}}}(e);return{c(){t=g("li"),o=g("strong"),o.textContent=`${e[4]}:`,i=h(),r=m(a),s=h(),d&&d.c(),c=h()},m(e,n){f(e,t,n),u(t,o),u(t,i),u(t,r),u(t,s),d&&d.m(t,null),u(t,c),l=!0},p(e,t){e[6]&&d.p(e,t)},i(e){l||(D(d),l=!0)},o(e){B(d),l=!1},d(e){e&&p(t),d&&d.d()}}}function $e(e){let n,o,i,s,c,l,a,d,y,v,w,k,E,I,j,O,_,S,C,N,R,A,T,q,F,G,J,Q,V,X,Z,ee,te,ne,re,se,ce,le,ae,ue,de,fe;E=new ge({props:{code:e[1]}}),_=new ge({props:{code:W,copyable:!1}}),G=new ge({props:{code:oe(K)}});let pe=L(Object.entries(ie)),me=[];for(let t=0;t<pe.length;t+=1)me[t]=ye(he(e,pe,t));const $e=e=>B(me[e],1,1,(()=>{me[e]=null}));return le=new ge({props:{code:oe(Y)}}),{c(){n=g("div"),o=g("h3"),o.textContent="Next Steps",i=m("\n  Once you've downloaded the "),s=g("span"),s.textContent=`${H}`,c=m(" file:\n  "),l=g("ol"),a=g("li"),a.innerHTML='Move the download into your extension folder so you can use it in your extension&#39;s <span class="codelike svelte-7ob0w7">index.ts</span> file.',d=h(),y=g("li"),v=m("Import the following functions into your "),w=g("span"),w.textContent="index.ts",k=m(" file from the downloaded legacy file:\n          "),M(E.$$.fragment),I=m("\n      The remaining instructions vary depending on if you're extending the generic Extension base class vs using the onfigurable"),j=g("span"),j.textContent="extension()",O=m(" factory function.\n      "),M(_.$$.fragment),S=h(),C=g("h3"),C.textContent="Generic Extension",N=h(),R=g("ol"),A=g("li"),T=m("Extract the necessary properties from "),q=m(K),F=h(),M(G.$$.fragment),J=h(),Q=g("li"),V=m("Utilize the elements like so:\n        "),X=g("ul");for(let e=0;e<me.length;e+=1)me[e].c();Z=h(),ee=g("li"),te=m("Once you've implemented all legacy blocks, you can finally replace the usage of "),ne=m(K),re=m(" with "),se=m(Y),ce=m(". \n        If this does not cause type errors, it means you've succesfully implemented all legacy blocks. \n        If you do get errors, there are likely some blocks you still need to implement, or perhaps you have a member that uses a Reserved Name. \n        "),M(le.$$.fragment),ae=h(),ue=g("h3"),ue.textContent="Configurable Extension",de=m("\n  TODO"),$(s,"class","codelike svelte-7ob0w7"),$(w,"class","codelike svelte-7ob0w7"),$(j,"class","codelike svelte-7ob0w7"),$(n,"class","svelte-7ob0w7"),b(n,"container",e[0]),x(n,"background-color",t.color.ui.white),x(n,"color",t.color.text.primary)},m(e,t){f(e,n,t),u(n,o),u(n,i),u(n,s),u(n,c),u(n,l),u(l,a),u(l,d),u(l,y),u(y,v),u(y,w),u(y,k),z(E,y,null),u(l,I),u(l,j),u(l,O),z(_,l,null),u(n,S),u(n,C),u(n,N),u(n,R),u(R,A),u(A,T),u(A,q),u(A,F),z(G,A,null),u(R,J),u(R,Q),u(Q,V),u(Q,X);for(let e=0;e<me.length;e+=1)me[e]&&me[e].m(X,null);u(R,Z),u(R,ee),u(ee,te),u(ee,ne),u(ee,re),u(ee,se),u(ee,ce),z(le,ee,null),u(n,ae),u(n,ue),u(n,de),fe=!0},p(e,[t]){if(0&t){let n;for(pe=L(Object.entries(ie)),n=0;n<pe.length;n+=1){const o=he(e,pe,n);me[n]?(me[n].p(o,t),D(me[n],1)):(me[n]=ye(o),me[n].c(),D(me[n],1),me[n].m(X,null))}for(P={r:0,c:[],p:P},n=pe.length;n<me.length;n+=1)$e(n);P.r||r(P.c),P=P.p}},i(e){if(!fe){D(E.$$.fragment,e),D(_.$$.fragment,e),D(G.$$.fragment,e);for(let e=0;e<pe.length;e+=1)D(me[e]);D(le.$$.fragment,e),fe=!0}},o(e){B(E.$$.fragment,e),B(_.$$.fragment,e),B(G.$$.fragment,e),me=me.filter(Boolean);for(let e=0;e<me.length;e+=1)B(me[e]);B(le.$$.fragment,e),fe=!1},d(e){e&&p(n),U(E),U(_),U(G),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(me,e),U(le)}}}function xe(e,n,o){let{extension:i}=n,{close:r}=n;const s=t.activeClass,c=`import { ${Y}, ${K} } from "./${H.replace(".ts","")}";`;return e.$$set=e=>{"extension"in e&&o(2,i=e.extension),"close"in e&&o(3,r=e.close)},[s,c,i,r]}function be(e){d(e,"svelte-qmu6lz",".container.svelte-qmu6lz{padding:30px;height:80vh;width:80vw;overflow:scroll}")}function ve(e){let n,o,i;return o=new ge({props:{code:JSON.stringify(e[0].currentInfo??"ERROR: No info",null,4)}}),{c(){n=g("div"),M(o.$$.fragment),$(n,"class","svelte-qmu6lz"),b(n,"container",e[1]),x(n,"background-color",t.color.ui.white),x(n,"color",t.color.text.primary)},m(e,t){f(e,n,t),z(o,n,null),i=!0},p(e,[t]){const n={};1&t&&(n.code=JSON.stringify(e[0].currentInfo??"ERROR: No info",null,4)),o.$set(n)},i(e){i||(D(o.$$.fragment,e),i=!0)},o(e){B(o.$$.fragment,e),i=!1},d(e){e&&p(n),U(o)}}}function we(e,n,o){let{extension:i}=n,{close:r}=n;const s=t.activeClass;return e.$$set=e=>{"extension"in e&&o(0,i=e.extension),"close"in e&&o(2,r=e.close)},[i,s,r]}return e.Extension=re,e.Info=class extends G{constructor(e){super(),F(this,e,we,ve,c,{extension:0,close:2},be)}},e.Instructions=class extends G{constructor(e){super(),F(this,e,xe,$e,c,{extension:2,close:3},me)}},Object.defineProperty(e,"__esModule",{value:!0}),e}({},ExtensionFramework);//# sourceMappingURL=extensionProbe.js.map

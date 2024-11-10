import{o as it}from"./scheduler.Cs0xm5t1.js";function st(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ce(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],u=typeof n;(u==="object"||u==="function")&&!Object.isFrozen(n)&&Ce(n)}),e}class Ne{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function De(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function k(e,...t){const n=Object.create(null);for(const u in e)n[u]=e[u];return t.forEach(function(u){for(const E in u)n[E]=u[E]}),n}const rt="</span>",we=e=>!!e.scope,at=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((u,E)=>`${u}${"_".repeat(E+1)}`)].join(" ")}return`${t}${e}`};class ct{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=De(t)}openNode(t){if(!we(t))return;const n=at(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){we(t)&&(this.buffer+=rt)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const ye=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class oe{constructor(){this.rootNode=ye(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=ye({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(u=>this._walk(t,u)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{oe._collapse(n)}))}}class ot extends oe{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const u=t.root;n&&(u.scope=`language:${n}`),this.add(u)}toHTML(){return new ct(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function G(e){return e?typeof e=="string"?e:e.source:null}function Ie(e){return B("(?=",e,")")}function lt(e){return B("(?:",e,")*")}function ut(e){return B("(?:",e,")?")}function B(...e){return e.map(n=>G(n)).join("")}function ft(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function le(...e){return"("+(ft(e).capture?"":"?:")+e.map(u=>G(u)).join("|")+")"}function Le(e){return new RegExp(e.toString()+"|").exec("").length-1}function gt(e,t){const n=e&&e.exec(t);return n&&n.index===0}const dt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ue(e,{joinWith:t}){let n=0;return e.map(u=>{n+=1;const E=n;let O=G(u),a="";for(;O.length>0;){const r=dt.exec(O);if(!r){a+=O;break}a+=O.substring(0,r.index),O=O.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?a+="\\"+String(Number(r[1])+E):(a+=r[0],r[0]==="("&&n++)}return a}).map(u=>`(${u})`).join(t)}const ht=/\b\B/,ke="[a-zA-Z]\\w*",fe="[a-zA-Z_]\\w*",ve="\\b\\d+(\\.\\d+)?",me="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Be="\\b(0b[01]+)",pt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Et=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=B(t,/.*\b/,e.binary,/\b.*/)),k({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,u)=>{n.index!==0&&u.ignoreMatch()}},e)},z={begin:"\\\\[\\s\\S]",relevance:0},_t={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[z]},bt={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[z]},Mt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ne=function(e,t,n={}){const u=k({scope:"comment",begin:e,end:t,contains:[]},n);u.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const E=le("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return u.contains.push({begin:B(/[ ]+/,"(",E,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),u},Ot=ne("//","$"),Nt=ne("/\\*","\\*/"),wt=ne("#","$"),yt={scope:"number",begin:ve,relevance:0},Rt={scope:"number",begin:me,relevance:0},St={scope:"number",begin:Be,relevance:0},Tt={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[z,{begin:/\[/,end:/\]/,relevance:0,contains:[z]}]},xt={scope:"title",begin:ke,relevance:0},At={scope:"title",begin:fe,relevance:0},Ct={begin:"\\.\\s*"+fe,relevance:0},Dt=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var V=Object.freeze({__proto__:null,APOS_STRING_MODE:_t,BACKSLASH_ESCAPE:z,BINARY_NUMBER_MODE:St,BINARY_NUMBER_RE:Be,COMMENT:ne,C_BLOCK_COMMENT_MODE:Nt,C_LINE_COMMENT_MODE:Ot,C_NUMBER_MODE:Rt,C_NUMBER_RE:me,END_SAME_AS_BEGIN:Dt,HASH_COMMENT_MODE:wt,IDENT_RE:ke,MATCH_NOTHING_RE:ht,METHOD_GUARD:Ct,NUMBER_MODE:yt,NUMBER_RE:ve,PHRASAL_WORDS_MODE:Mt,QUOTE_STRING_MODE:bt,REGEXP_MODE:Tt,RE_STARTERS_RE:pt,SHEBANG:Et,TITLE_MODE:xt,UNDERSCORE_IDENT_RE:fe,UNDERSCORE_TITLE_MODE:At});function It(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function Lt(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function kt(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=It,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function vt(e,t){Array.isArray(e.illegal)&&(e.illegal=le(...e.illegal))}function mt(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Bt(e,t){e.relevance===void 0&&(e.relevance=1)}const Pt=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(u=>{delete e[u]}),e.keywords=n.keywords,e.begin=B(n.beforeMatch,Ie(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},Ut=["of","and","for","in","not","or","if","then","parent","list","value"],Ht="keyword";function Pe(e,t,n=Ht){const u=Object.create(null);return typeof e=="string"?E(n,e.split(" ")):Array.isArray(e)?E(n,e):Object.keys(e).forEach(function(O){Object.assign(u,Pe(e[O],t,O))}),u;function E(O,a){t&&(a=a.map(r=>r.toLowerCase())),a.forEach(function(r){const l=r.split("|");u[l[0]]=[O,$t(l[0],l[1])]})}}function $t(e,t){return t?Number(t):Kt(e)?0:1}function Kt(e){return Ut.includes(e.toLowerCase())}const Re={},m=e=>{console.error(e)},Se=(e,...t)=>{console.log(`WARN: ${e}`,...t)},U=(e,t)=>{Re[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Re[`${e}/${t}`]=!0)},te=new Error;function Ue(e,t,{key:n}){let u=0;const E=e[n],O={},a={};for(let r=1;r<=t.length;r++)a[r+u]=E[r],O[r+u]=!0,u+=Le(t[r-1]);e[n]=a,e[n]._emit=O,e[n]._multi=!0}function Ft(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw m("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),te;if(typeof e.beginScope!="object"||e.beginScope===null)throw m("beginScope must be object"),te;Ue(e,e.begin,{key:"beginScope"}),e.begin=ue(e.begin,{joinWith:""})}}function Gt(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw m("skip, excludeEnd, returnEnd not compatible with endScope: {}"),te;if(typeof e.endScope!="object"||e.endScope===null)throw m("endScope must be object"),te;Ue(e,e.end,{key:"endScope"}),e.end=ue(e.end,{joinWith:""})}}function zt(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Wt(e){zt(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Ft(e),Gt(e)}function Yt(e){function t(a,r){return new RegExp(G(a),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,r]),this.matchAt+=Le(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(l=>l[1]);this.matcherRe=t(ue(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(r);if(!l)return null;const p=l.findIndex((x,K)=>K>0&&x!==void 0),_=this.matchIndexes[p];return l.splice(0,p),Object.assign(l,_)}}class u{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const l=new n;return this.rules.slice(r).forEach(([p,_])=>l.addRule(p,_)),l.compile(),this.multiRegexes[r]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,l){this.rules.push([r,l]),l.type==="begin"&&this.count++}exec(r){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let p=l.exec(r);if(this.resumingScanAtSamePosition()&&!(p&&p.index===this.lastIndex)){const _=this.getMatcher(0);_.lastIndex=this.lastIndex+1,p=_.exec(r)}return p&&(this.regexIndex+=p.position+1,this.regexIndex===this.count&&this.considerAll()),p}}function E(a){const r=new u;return a.contains.forEach(l=>r.addRule(l.begin,{rule:l,type:"begin"})),a.terminatorEnd&&r.addRule(a.terminatorEnd,{type:"end"}),a.illegal&&r.addRule(a.illegal,{type:"illegal"}),r}function O(a,r){const l=a;if(a.isCompiled)return l;[Lt,mt,Wt,Pt].forEach(_=>_(a,r)),e.compilerExtensions.forEach(_=>_(a,r)),a.__beforeBegin=null,[kt,vt,Bt].forEach(_=>_(a,r)),a.isCompiled=!0;let p=null;return typeof a.keywords=="object"&&a.keywords.$pattern&&(a.keywords=Object.assign({},a.keywords),p=a.keywords.$pattern,delete a.keywords.$pattern),p=p||/\w+/,a.keywords&&(a.keywords=Pe(a.keywords,e.case_insensitive)),l.keywordPatternRe=t(p,!0),r&&(a.begin||(a.begin=/\B|\b/),l.beginRe=t(l.begin),!a.end&&!a.endsWithParent&&(a.end=/\B|\b/),a.end&&(l.endRe=t(l.end)),l.terminatorEnd=G(l.end)||"",a.endsWithParent&&r.terminatorEnd&&(l.terminatorEnd+=(a.end?"|":"")+r.terminatorEnd)),a.illegal&&(l.illegalRe=t(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map(function(_){return Xt(_==="self"?a:_)})),a.contains.forEach(function(_){O(_,l)}),a.starts&&O(a.starts,r),l.matcher=E(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=k(e.classNameAliases||{}),O(e)}function He(e){return e?e.endsWithParent||He(e.starts):!1}function Xt(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return k(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:He(e)?k(e,{starts:e.starts?k(e.starts):null}):Object.isFrozen(e)?k(e):e}var jt="11.10.0";class Zt extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const ce=De,Te=k,xe=Symbol("nomatch"),qt=7,$e=function(e){const t=Object.create(null),n=Object.create(null),u=[];let E=!0;const O="Could not find the language '{}', did you forget to load/include a language module?",a={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:ot};function l(i){return r.noHighlightRe.test(i)}function p(i){let o=i.className+" ";o+=i.parentNode?i.parentNode.className:"";const d=r.languageDetectRe.exec(o);if(d){const b=I(d[1]);return b||(Se(O.replace("{}",d[1])),Se("Falling back to no-highlight mode for this block.",i)),b?d[1]:"no-highlight"}return o.split(/\s+/).find(b=>l(b)||I(b))}function _(i,o,d){let b="",N="";typeof o=="object"?(b=i,d=o.ignoreIllegals,N=o.language):(U("10.7.0","highlight(lang, code, ...args) has been deprecated."),U("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),N=i,b=o),d===void 0&&(d=!0);const T={code:b,language:N};j("before:highlight",T);const L=T.result?T.result:x(T.language,T.code,d);return L.code=T.code,j("after:highlight",L),L}function x(i,o,d,b){const N=Object.create(null);function T(s,c){return s.keywords[c]}function L(){if(!f.keywords){w.addText(M);return}let s=0;f.keywordPatternRe.lastIndex=0;let c=f.keywordPatternRe.exec(M),g="";for(;c;){g+=M.substring(s,c.index);const h=C.case_insensitive?c[0].toLowerCase():c[0],y=T(f,h);if(y){const[D,tt]=y;if(w.addText(g),g="",N[h]=(N[h]||0)+1,N[h]<=qt&&(J+=tt),D.startsWith("_"))g+=c[0];else{const nt=C.classNameAliases[D]||D;A(c[0],nt)}}else g+=c[0];s=f.keywordPatternRe.lastIndex,c=f.keywordPatternRe.exec(M)}g+=M.substring(s),w.addText(g)}function Z(){if(M==="")return;let s=null;if(typeof f.subLanguage=="string"){if(!t[f.subLanguage]){w.addText(M);return}s=x(f.subLanguage,M,!0,Oe[f.subLanguage]),Oe[f.subLanguage]=s._top}else s=P(M,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(J+=s.relevance),w.__addSublanguage(s._emitter,s.language)}function R(){f.subLanguage!=null?Z():L(),M=""}function A(s,c){s!==""&&(w.startScope(c),w.addText(s),w.endScope())}function Ee(s,c){let g=1;const h=c.length-1;for(;g<=h;){if(!s._emit[g]){g++;continue}const y=C.classNameAliases[s[g]]||s[g],D=c[g];y?A(D,y):(M=D,L(),M=""),g++}}function _e(s,c){return s.scope&&typeof s.scope=="string"&&w.openNode(C.classNameAliases[s.scope]||s.scope),s.beginScope&&(s.beginScope._wrap?(A(M,C.classNameAliases[s.beginScope._wrap]||s.beginScope._wrap),M=""):s.beginScope._multi&&(Ee(s.beginScope,c),M="")),f=Object.create(s,{parent:{value:f}}),f}function be(s,c,g){let h=gt(s.endRe,g);if(h){if(s["on:end"]){const y=new Ne(s);s["on:end"](c,y),y.isMatchIgnored&&(h=!1)}if(h){for(;s.endsParent&&s.parent;)s=s.parent;return s}}if(s.endsWithParent)return be(s.parent,c,g)}function qe(s){return f.matcher.regexIndex===0?(M+=s[0],1):(ae=!0,0)}function Je(s){const c=s[0],g=s.rule,h=new Ne(g),y=[g.__beforeBegin,g["on:begin"]];for(const D of y)if(D&&(D(s,h),h.isMatchIgnored))return qe(c);return g.skip?M+=c:(g.excludeBegin&&(M+=c),R(),!g.returnBegin&&!g.excludeBegin&&(M=c)),_e(g,s),g.returnBegin?0:c.length}function Ve(s){const c=s[0],g=o.substring(s.index),h=be(f,s,g);if(!h)return xe;const y=f;f.endScope&&f.endScope._wrap?(R(),A(c,f.endScope._wrap)):f.endScope&&f.endScope._multi?(R(),Ee(f.endScope,s)):y.skip?M+=c:(y.returnEnd||y.excludeEnd||(M+=c),R(),y.excludeEnd&&(M=c));do f.scope&&w.closeNode(),!f.skip&&!f.subLanguage&&(J+=f.relevance),f=f.parent;while(f!==h.parent);return h.starts&&_e(h.starts,s),y.returnEnd?0:c.length}function Qe(){const s=[];for(let c=f;c!==C;c=c.parent)c.scope&&s.unshift(c.scope);s.forEach(c=>w.openNode(c))}let q={};function Me(s,c){const g=c&&c[0];if(M+=s,g==null)return R(),0;if(q.type==="begin"&&c.type==="end"&&q.index===c.index&&g===""){if(M+=o.slice(c.index,c.index+1),!E){const h=new Error(`0 width match regex (${i})`);throw h.languageName=i,h.badRule=q.rule,h}return 1}if(q=c,c.type==="begin")return Je(c);if(c.type==="illegal"&&!d){const h=new Error('Illegal lexeme "'+g+'" for mode "'+(f.scope||"<unnamed>")+'"');throw h.mode=f,h}else if(c.type==="end"){const h=Ve(c);if(h!==xe)return h}if(c.type==="illegal"&&g==="")return 1;if(re>1e5&&re>c.index*3)throw new Error("potential infinite loop, way more iterations than matches");return M+=g,g.length}const C=I(i);if(!C)throw m(O.replace("{}",i)),new Error('Unknown language: "'+i+'"');const et=Yt(C);let se="",f=b||et;const Oe={},w=new r.__emitter(r);Qe();let M="",J=0,v=0,re=0,ae=!1;try{if(C.__emitTokens)C.__emitTokens(o,w);else{for(f.matcher.considerAll();;){re++,ae?ae=!1:f.matcher.considerAll(),f.matcher.lastIndex=v;const s=f.matcher.exec(o);if(!s)break;const c=o.substring(v,s.index),g=Me(c,s);v=s.index+g}Me(o.substring(v))}return w.finalize(),se=w.toHTML(),{language:i,value:se,relevance:J,illegal:!1,_emitter:w,_top:f}}catch(s){if(s.message&&s.message.includes("Illegal"))return{language:i,value:ce(o),illegal:!0,relevance:0,_illegalBy:{message:s.message,index:v,context:o.slice(v-100,v+100),mode:s.mode,resultSoFar:se},_emitter:w};if(E)return{language:i,value:ce(o),illegal:!1,relevance:0,errorRaised:s,_emitter:w,_top:f};throw s}}function K(i){const o={value:ce(i),illegal:!1,relevance:0,_top:a,_emitter:new r.__emitter(r)};return o._emitter.addText(i),o}function P(i,o){o=o||r.languages||Object.keys(t);const d=K(i),b=o.filter(I).filter(pe).map(R=>x(R,i,!1));b.unshift(d);const N=b.sort((R,A)=>{if(R.relevance!==A.relevance)return A.relevance-R.relevance;if(R.language&&A.language){if(I(R.language).supersetOf===A.language)return 1;if(I(A.language).supersetOf===R.language)return-1}return 0}),[T,L]=N,Z=T;return Z.secondBest=L,Z}function de(i,o,d){const b=o&&n[o]||d;i.classList.add("hljs"),i.classList.add(`language-${b}`)}function W(i){let o=null;const d=p(i);if(l(d))return;if(j("before:highlightElement",{el:i,language:d}),i.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",i);return}if(i.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(i)),r.throwUnescapedHTML))throw new Zt("One of your code blocks includes unescaped HTML.",i.innerHTML);o=i;const b=o.textContent,N=d?_(b,{language:d,ignoreIllegals:!0}):P(b);i.innerHTML=N.value,i.dataset.highlighted="yes",de(i,d,N.language),i.result={language:N.language,re:N.relevance,relevance:N.relevance},N.secondBest&&(i.secondBest={language:N.secondBest.language,relevance:N.secondBest.relevance}),j("after:highlightElement",{el:i,result:N,text:b})}function S(i){r=Te(r,i)}const F=()=>{X(),U("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function ie(){X(),U("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Y=!1;function X(){if(document.readyState==="loading"){Y=!0;return}document.querySelectorAll(r.cssSelector).forEach(W)}function Fe(){Y&&X()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Fe,!1);function Ge(i,o){let d=null;try{d=o(e)}catch(b){if(m("Language definition for '{}' could not be registered.".replace("{}",i)),E)m(b);else throw b;d=a}d.name||(d.name=i),t[i]=d,d.rawDefinition=o.bind(null,e),d.aliases&&he(d.aliases,{languageName:i})}function ze(i){delete t[i];for(const o of Object.keys(n))n[o]===i&&delete n[o]}function We(){return Object.keys(t)}function I(i){return i=(i||"").toLowerCase(),t[i]||t[n[i]]}function he(i,{languageName:o}){typeof i=="string"&&(i=[i]),i.forEach(d=>{n[d.toLowerCase()]=o})}function pe(i){const o=I(i);return o&&!o.disableAutodetect}function Ye(i){i["before:highlightBlock"]&&!i["before:highlightElement"]&&(i["before:highlightElement"]=o=>{i["before:highlightBlock"](Object.assign({block:o.el},o))}),i["after:highlightBlock"]&&!i["after:highlightElement"]&&(i["after:highlightElement"]=o=>{i["after:highlightBlock"](Object.assign({block:o.el},o))})}function Xe(i){Ye(i),u.push(i)}function je(i){const o=u.indexOf(i);o!==-1&&u.splice(o,1)}function j(i,o){const d=i;u.forEach(function(b){b[d]&&b[d](o)})}function Ze(i){return U("10.7.0","highlightBlock will be removed entirely in v12.0"),U("10.7.0","Please use highlightElement now."),W(i)}Object.assign(e,{highlight:_,highlightAuto:P,highlightAll:X,highlightElement:W,highlightBlock:Ze,configure:S,initHighlighting:F,initHighlightingOnLoad:ie,registerLanguage:Ge,unregisterLanguage:ze,listLanguages:We,getLanguage:I,registerAliases:he,autoDetection:pe,inherit:Te,addPlugin:Xe,removePlugin:je}),e.debugMode=function(){E=!1},e.safeMode=function(){E=!0},e.versionString=jt,e.regex={concat:B,lookahead:Ie,either:le,optional:ut,anyNumberOfTimes:lt};for(const i in V)typeof V[i]=="object"&&Ce(V[i]);return Object.assign(e,V),e},$=$e({});$.newInstance=()=>$e({});var Jt=$;$.HighlightJS=$;$.default=$;const ge=st(Jt);function Vt(e){const t=e.regex,n=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),u="decltype\\(auto\\)",E="[a-zA-Z_]\\w*::",a="("+u+"|"+t.optional(E)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",r={className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{match:/\batomic_[a-z]{3,6}\b/}]},p={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},_={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},x={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(p,{className:"string"}),{className:"string",begin:/<.*?>/},n,e.C_BLOCK_COMMENT_MODE]},K={className:"title",begin:t.optional(E)+e.IDENT_RE,relevance:0},P=t.optional(E)+e.IDENT_RE+"\\s*\\(",S={keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","typeof","typeof_unqual","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_BitInt","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal96","_Decimal128","_Decimal64x","_Decimal128x","_Float16","_Float32","_Float64","_Float128","_Float32x","_Float64x","_Float128x","const","static","constexpr","complex","bool","imaginary"],literal:"true false NULL",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"},F=[x,r,n,e.C_BLOCK_COMMENT_MODE,_,p],ie={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:S,contains:F.concat([{begin:/\(/,end:/\)/,keywords:S,contains:F.concat(["self"]),relevance:0}]),relevance:0},Y={begin:"("+a+"[\\*&\\s]+)+"+P,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:S,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:u,keywords:S,relevance:0},{begin:P,returnBegin:!0,contains:[e.inherit(K,{className:"title.function"})],relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:S,relevance:0,contains:[n,e.C_BLOCK_COMMENT_MODE,p,_,r,{begin:/\(/,end:/\)/,keywords:S,relevance:0,contains:["self",n,e.C_BLOCK_COMMENT_MODE,p,_,r]}]},r,n,e.C_BLOCK_COMMENT_MODE,x]};return{name:"C",aliases:["h"],keywords:S,disableAutodetect:!0,illegal:"</",contains:[].concat(ie,Y,F,[x,{begin:e.IDENT_RE+"::",keywords:S},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:x,strings:p,keywords:S}}}var H="[0-9](_*[0-9])*",Q=`\\.(${H})`,ee="[0-9a-fA-F](_*[0-9a-fA-F])*",Ae={className:"number",variants:[{begin:`(\\b(${H})((${Q})|\\.)?|(${Q}))[eE][+-]?(${H})[fFdD]?\\b`},{begin:`\\b(${H})((${Q})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${Q})[fFdD]?\\b`},{begin:`\\b(${H})[fFdD]\\b`},{begin:`\\b0[xX]((${ee})\\.?|(${ee})?\\.(${ee}))[pP][+-]?(${H})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${ee})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function Ke(e,t,n){return n===-1?"":e.replace(t,u=>Ke(e,t,n-1))}function Qt(e){const t=e.regex,n="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",u=n+Ke("(?:<"+n+"~~~(?:\\s*,\\s*"+n+"~~~)*>)?",/~~~/g,2),l={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},p={className:"meta",begin:"@"+n,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},_={className:"params",begin:/\(/,end:/\)/,keywords:l,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:l,illegal:/<\/|#/,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[e.BACKSLASH_ESCAPE]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,n],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[t.concat(/(?!else)/,n),/\s+/,n,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,n],className:{1:"keyword",3:"title.class"},contains:[_,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+u+"\\s+)",e.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:l,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:l,relevance:0,contains:[p,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,Ae,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},Ae,p]}}ge.registerLanguage("c",Vt);ge.registerLanguage("java",Qt);function nn(e){return e.toLowerCase().replaceAll(" ","-")}function sn(e){return e.slice(0,1).toUpperCase()+e.slice(1).replaceAll("-"," ")}function en(e){it(()=>{for(let t of document.getElementsByTagName("code"))t.innerHTML=ge.highlight(t.innerText,{language:e}).value})}function rn(){en("c")}export{en as a,rn as h,sn as p,nn as t};

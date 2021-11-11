var rt=Object.defineProperty;var me=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var we=(e,t,n)=>t in e?rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))ot.call(t,n)&&we(e,n,t[n]);if(me)for(var n of me(t))it.call(t,n)&&we(e,n,t[n]);return e};function M(){}function V(e,t){for(const n in t)e[n]=t[n];return e}function Ie(e){return e()}function xe(){return Object.create(null)}function O(e){e.forEach(Ie)}function st(e){return typeof e=="function"}function ct(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function lt(e){return Object.keys(e).length===0}function _e(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function On(e,t){e.appendChild(t)}function ke(e,t,n){e.insertBefore(t,n||null)}function z(e){e.parentNode.removeChild(e)}function Cn(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function An(e){return document.createElement(e)}function at(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function je(e){return document.createTextNode(e)}function Sn(){return je(" ")}function ft(){return je("")}function Pn(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function ut(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ee(e,t){for(const n in t)ut(e,n,t[n])}function Tn(e,t,n){e.setAttributeNS("http://www.w3.org/1999/xlink",t,n)}function dt(e){return Array.from(e.childNodes)}function Fn(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Mn(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function ht(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}let $;function L(e){$=e}function Y(){if(!$)throw new Error("Function called outside component initialization");return $}function pt(e){Y().$$.on_mount.push(e)}function gt(e){Y().$$.on_destroy.push(e)}function yt(){const e=Y();return(t,n)=>{const r=e.$$.callbacks[t];if(r){const i=ht(t,n);r.slice().forEach(o=>{o.call(e,i)})}}}const C=[],Oe=[],D=[],Ce=[],vt=Promise.resolve();let G=!1;function bt(){G||(G=!0,vt.then(Ae))}function J(e){D.push(e)}let W=!1;const X=new Set;function Ae(){if(!W){W=!0;do{for(let e=0;e<C.length;e+=1){const t=C[e];L(t),mt(t.$$)}for(L(null),C.length=0;Oe.length;)Oe.pop()();for(let e=0;e<D.length;e+=1){const t=D[e];X.has(t)||(X.add(t),t())}D.length=0}while(C.length);for(;Ce.length;)Ce.pop()();G=!1,W=!1,X.clear()}}function mt(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}const N=new Set;let I;function $n(){I={r:0,c:[],p:I}}function Ln(){I.r||O(I.c),I=I.p}function wt(e,t){e&&e.i&&(N.delete(e),e.i(t))}function Dn(e,t,n,r){if(e&&e.o){if(N.has(e))return;N.add(e),I.c.push(()=>{N.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function It(e,t){const n={},r={},i={$$scope:1};let o=e.length;for(;o--;){const s=e[o],c=t[o];if(c){for(const a in s)a in c||(r[a]=1);for(const a in c)i[a]||(n[a]=c[a],i[a]=1);e[o]=c}else for(const a in s)i[a]=1}for(const s in r)s in n||(n[s]=void 0);return n}function Nn(e){e&&e.c()}function xt(e,t,n,r){const{fragment:i,on_mount:o,on_destroy:s,after_update:c}=e.$$;i&&i.m(t,n),r||J(()=>{const a=o.map(Ie).filter(st);s?s.push(...a):O(a),e.$$.on_mount=[]}),c.forEach(J)}function _t(e,t){const n=e.$$;n.fragment!==null&&(O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function kt(e,t){e.$$.dirty[0]===-1&&(C.push(e),bt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function jt(e,t,n,r,i,o,s,c=[-1]){const a=$;L(e);const l=e.$$={fragment:null,ctx:null,props:o,update:M,not_equal:i,bound:xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:xe(),dirty:c,skip_bound:!1,root:t.target||a.$$.root};s&&s(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(f,d,...p)=>{const g=p.length?p[0]:d;return l.ctx&&i(l.ctx[f],l.ctx[f]=g)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](g),u&&kt(e,f)),d}):[],l.update(),u=!0,O(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const f=dt(t.target);l.fragment&&l.fragment.l(f),f.forEach(z)}else l.fragment&&l.fragment.c();t.intro&&wt(e.$$.fragment),xt(e,t.target,t.anchor,t.customElement),Ae()}L(a)}class Et{$destroy(){_t(this,1),this.$destroy=M}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!lt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var x=/^[a-z0-9]+(-[a-z0-9]+)*$/,j=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function Z(e){return E(E({},j),e)}var R=(e,t,n,r="")=>{const i=e.split(":");if(e.slice(0,1)==="@"){if(i.length<2||i.length>3)return null;r=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const c=i.pop(),a=i.pop(),l={provider:i.length>0?i[0]:r,prefix:a,name:c};return t&&!A(l)?null:l}const o=i[0],s=o.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!A(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:o};return t&&!A(c,n)?null:c}return null},A=(e,t)=>e?!!((e.provider===""||e.provider.match(x))&&(t&&e.prefix===""||e.prefix.match(x))&&e.name.match(x)):!1;function Ot(e,t){const n=E({},e);for(const r in j){const i=r;if(t[i]!==void 0){const o=t[i];if(n[i]===void 0){n[i]=o;continue}switch(i){case"rotate":n[i]=(n[i]+o)%4;break;case"hFlip":case"vFlip":n[i]=o!==n[i];break;default:n[i]=o}}}return n}function Se(e,t,n=!1){function r(o,s){var c,a,l,u;if(e.icons[o]!==void 0)return Object.assign({},e.icons[o]);if(s>5)return null;if(((c=e.aliases)==null?void 0:c[o])!==void 0){const f=(a=e.aliases)==null?void 0:a[o],d=r(f.parent,s+1);return d&&Ot(d,f)}return s===0&&((l=e.chars)==null?void 0:l[o])!==void 0?r((u=e.chars)==null?void 0:u[o],s+1):null}const i=r(t,0);if(i)for(const o in j)i[o]===void 0&&e[o]!==void 0&&(i[o]=e[o]);return i&&n?Z(i):i}var Ct=/^[a-f0-9]+(-[a-f0-9]+)*$/;function Pe(e,t){for(const n in e){const r=n,o=typeof e[r];if(o==="undefined"){delete e[r];continue}switch(n){case"body":case"parent":if(o!=="string")return n;break;case"hFlip":case"vFlip":case"hidden":if(o!=="boolean")if(t)delete e[r];else return n;break;case"width":case"height":case"left":case"top":case"rotate":case"inlineHeight":case"inlineTop":case"verticalAlign":if(o!=="number")if(t)delete e[r];else return n;break;default:if(o==="object")if(t)delete e[r];else return n}}return null}function At(e,t){const n=!!(t==null?void 0:t.fix);if(typeof e!="object"||e===null||typeof e.icons!="object"||!e.icons)throw new Error("Bad icon set");const r=e;if(typeof(t==null?void 0:t.prefix)=="string")r.prefix=t.prefix;else if(typeof r.prefix!="string"||!r.prefix.match(x))throw new Error("Invalid prefix");if(typeof(t==null?void 0:t.provider)=="string")r.provider=t.provider;else if(r.provider!==void 0){const o=r.provider;if(typeof o!="string"||o!==""&&!o.match(x))if(n)delete r.provider;else throw new Error("Invalid provider")}const i=r.icons;if(Object.keys(i).forEach(o=>{if(!o.match(x)){if(n){delete i[o];return}throw new Error(`Invalid icon name: "${o}"`)}const s=i[o];if(typeof s!="object"||s===null||typeof s.body!="string"){if(n){delete i[o];return}throw new Error(`Invalid icon: "${o}"`)}const c=typeof s.parent=="string"?"parent":Pe(s,n);if(c!==null){if(n){delete i[o];return}throw new Error(`Invalid property "${c}" in icon "${o}"`)}}),!Object.keys(r.icons).length)throw new Error("Icon set is empty");if(r.aliases!==void 0&&(typeof r.aliases!="object"||r.aliases===null))if(n)delete r.aliases;else throw new Error("Invalid aliases list");if(typeof r.aliases=="object"){let o=function(l,u){if(c.has(l))return!a.has(l);const f=s[l];if(u>5||typeof f!="object"||f===null||typeof f.parent!="string"||!l.match(x)){if(n)return delete s[l],a.add(l),!1;throw new Error(`Invalid icon alias: "${l}"`)}const d=f.parent;if(r.icons[d]===void 0&&(s[d]===void 0||!o(d,u+1))){if(n)return delete s[l],a.add(l),!1;throw new Error(`Missing parent icon for alias "${l}`)}n&&f.body!==void 0&&delete f.body;const p=f.body!==void 0?"body":Pe(f,n);if(p!==null){if(n)return delete s[l],a.add(l),!1;throw new Error(`Invalid property "${p}" in alias "${l}"`)}return c.add(l),!0};const s=r.aliases,c=new Set,a=new Set;Object.keys(s).forEach(l=>{o(l,0)}),n&&!Object.keys(r.aliases).length&&delete r.aliases}if(Object.keys(j).forEach(o=>{const s=typeof j[o],c=typeof r[o];if(c!=="undefined"&&c!==s)throw new Error(`Invalid value type for "${o}"`)}),r.chars!==void 0&&(typeof r.chars!="object"||r.chars===null))if(n)delete r.chars;else throw new Error("Invalid characters map");if(typeof r.chars=="object"){const o=r.chars;Object.keys(o).forEach(s=>{var c;if(!s.match(Ct)||typeof o[s]!="string"){if(n){delete o[s];return}throw new Error(`Invalid character "${s}"`)}const a=o[s];if(r.icons[a]===void 0&&((c=r.aliases)==null?void 0:c[a])===void 0){if(n){delete o[s];return}throw new Error(`Character "${s}" points to missing icon "${a}"`)}}),n&&!Object.keys(r.chars).length&&delete r.chars}return r}function St(e){for(const t in j)if(e[t]!==void 0)return!0;return!1}function Te(e,t,n){n=n||{};const r=[];if(typeof e!="object"||typeof e.icons!="object")return r;const i=n.validate;if(i!==!1)try{At(e,typeof i=="object"?i:{fix:!0})}catch{return r}e.not_found instanceof Array&&e.not_found.forEach(c=>{t(c,null),r.push(c)});const o=e.icons;Object.keys(o).forEach(c=>{const a=Se(e,c,!0);a&&(t(c,a),r.push(c))});const s=n.aliases||"all";if(s!=="none"&&typeof e.aliases=="object"){const c=e.aliases;Object.keys(c).forEach(a=>{if(s==="variations"&&St(c[a]))return;const l=Se(e,a,!0);l&&(t(a,l),r.push(a))})}return r}var ee=Object.create(null);function Pt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:Object.create(null)}}function _(e,t){ee[e]===void 0&&(ee[e]=Object.create(null));const n=ee[e];return n[t]===void 0&&(n[t]=Pt(e,t)),n[t]}function te(e,t){const n=Date.now();return Te(t,(r,i)=>{i?e.icons[r]=i:e.missing[r]=n})}function Tt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]=Object.freeze(Z(n)),!0}catch{}return!1}function Ft(e,t){const n=e.icons[t];return n===void 0?null:n}var S=!1;function Fe(e){return typeof e=="boolean"&&(S=e),S}function Mt(e){const t=typeof e=="string"?R(e,!0,S):e;return t?Ft(_(t.provider,t.prefix),t.name):null}function $t(e,t){const n=R(e,!0,S);if(!n)return!1;const r=_(n.provider,n.prefix);return Tt(r,n.name,t)}function Lt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=typeof e.provider=="string"?e.provider:""),S&&t===""&&(typeof e.prefix!="string"||e.prefix==="")){let r=!1;return Te(e,(i,o)=>{o&&$t(i,o)&&(r=!0)},{validate:{fix:!0,prefix:""}}),r}if(typeof e.prefix!="string"||!A({provider:t,prefix:e.prefix,name:"a"}))return!1;const n=_(t,e.prefix);return!!te(n,e)}var Me=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});function Dt(e,t){const n={};for(const r in e){const i=r;if(n[i]=e[i],t[i]===void 0)continue;const o=t[i];switch(i){case"inline":case"slice":typeof o=="boolean"&&(n[i]=o);break;case"hFlip":case"vFlip":o===!0&&(n[i]=!n[i]);break;case"hAlign":case"vAlign":typeof o=="string"&&o!==""&&(n[i]=o);break;case"width":case"height":(typeof o=="string"&&o!==""||typeof o=="number"&&o||o===null)&&(n[i]=o);break;case"rotate":typeof o=="number"&&(n[i]+=o);break}}return n}var Nt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Rt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ne(e,t,n){if(t===1)return e;if(n=n===void 0?100:n,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(Nt);if(r===null||!r.length)return e;const i=[];let o=r.shift(),s=Rt.test(o);for(;;){if(s){const c=parseFloat(o);isNaN(c)?i.push(o):i.push(Math.ceil(c*t*n)/n)}else i.push(o);if(o=r.shift(),o===void 0)return i.join("");s=!s}}function qt(e){let t="";switch(e.hAlign){case"left":t+="xMin";break;case"right":t+="xMax";break;default:t+="xMid"}switch(e.vAlign){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet",t}function Ut(e,t){const n={left:e.left,top:e.top,width:e.width,height:e.height};let r=e.body;[e,t].forEach(c=>{const a=[],l=c.hFlip,u=c.vFlip;let f=c.rotate;l?u?f+=2:(a.push("translate("+(n.width+n.left)+" "+(0-n.top)+")"),a.push("scale(-1 1)"),n.top=n.left=0):u&&(a.push("translate("+(0-n.left)+" "+(n.height+n.top)+")"),a.push("scale(1 -1)"),n.top=n.left=0);let d;switch(f<0&&(f-=Math.floor(f/4)*4),f=f%4,f){case 1:d=n.height/2+n.top,a.unshift("rotate(90 "+d+" "+d+")");break;case 2:a.unshift("rotate(180 "+(n.width/2+n.left)+" "+(n.height/2+n.top)+")");break;case 3:d=n.width/2+n.left,a.unshift("rotate(-90 "+d+" "+d+")");break}f%2==1&&((n.left!==0||n.top!==0)&&(d=n.left,n.left=n.top,n.top=d),n.width!==n.height&&(d=n.width,n.width=n.height,n.height=d)),a.length&&(r='<g transform="'+a.join(" ")+'">'+r+"</g>")});let i,o;t.width===null&&t.height===null?(o="1em",i=ne(o,n.width/n.height)):t.width!==null&&t.height!==null?(i=t.width,o=t.height):t.height!==null?(o=t.height,i=ne(o,n.width/n.height)):(i=t.width,o=ne(i,n.height/n.width)),i==="auto"&&(i=n.width),o==="auto"&&(o=n.height),i=typeof i=="string"?i:i+"",o=typeof o=="string"?o:o+"";const s={attributes:{width:i,height:o,preserveAspectRatio:qt(t),viewBox:n.left+" "+n.top+" "+n.width+" "+n.height},body:r};return t.inline&&(s.inline=!0),s}var Qt=/\sid="(\S+)"/g,Bt="IconifyId-"+Date.now().toString(16)+"-"+(Math.random()*16777216|0).toString(16)+"-",Ht=0;function Kt(e,t=Bt){const n=[];let r;for(;r=Qt.exec(e);)n.push(r[1]);return n.length&&n.forEach(i=>{const o=typeof t=="function"?t(i):t+Ht++,s=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+o+"$3")}),e}var re=Object.create(null);function Vt(e,t){re[e]=t}function oe(e){return re[e]||re[""]}function ie(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path===void 0?"/":e.path,maxURL:e.maxURL?e.maxURL:500,rotate:e.rotate?e.rotate:750,timeout:e.timeout?e.timeout:5e3,random:e.random===!0,index:e.index?e.index:0,dataAfterTimeout:e.dataAfterTimeout!==!1}}var se=Object.create(null),P=["https://api.simplesvg.com","https://api.unisvg.com"],q=[];for(;P.length>0;)P.length===1||Math.random()>.5?q.push(P.shift()):q.push(P.pop());se[""]=ie({resources:["https://api.iconify.design"].concat(q)});function zt(e,t){const n=ie(t);return n===null?!1:(se[e]=n,!0)}function ce(e){return se[e]}var $e=(e,t)=>{let n=e,r=n.indexOf("?")!==-1;function i(o){switch(typeof o){case"boolean":return o?"true":"false";case"number":return encodeURIComponent(o);case"string":return encodeURIComponent(o);default:throw new Error("Invalid parameter")}}return Object.keys(t).forEach(o=>{let s;try{s=i(t[o])}catch{return}n+=(r?"&":"?")+encodeURIComponent(o)+"="+s,r=!0}),n},Le=Object.create(null),U=Object.create(null),Yt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}try{const t=String.fromCharCode(114)+String.fromCharCode(101);if(e=global[t+"qui"+t]("cross-fetch"),typeof e=="function")return e}catch{}return null},De=Yt();function Gt(e,t){const n=ce(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(c=>{o=Math.max(o,c.length)});const s=$e(t+".json",{icons:""});r=n.maxURL-o-n.path.length-s.length}const i=e+":"+t;return U[e]=n.path,Le[i]=r,r}var Jt=(e,t,n)=>{const r=[];let i=Le[t];i===void 0&&(i=Gt(e,t));const o="icons";let s={type:o,provider:e,prefix:t,icons:[]},c=0;return n.forEach((a,l)=>{c+=a.length+1,c>=i&&l>0&&(r.push(s),s={type:o,provider:e,prefix:t,icons:[]},c=a.length),s.icons.push(a)}),r.push(s),r};function Wt(e){if(typeof e=="string"){if(U[e]===void 0){const t=ce(e);if(!t)return"/";U[e]=t.path}return U[e]}return"/"}var Xt=(e,t,n)=>{if(!De){n.done(void 0,424);return}let r=Wt(t.provider);switch(t.type){case"icons":{const o=t.prefix,c=t.icons.join(",");r+=$e(o+".json",{icons:c});break}case"custom":{const o=t.uri;r+=o.slice(0,1)==="/"?o.slice(1):o;break}default:n.done(void 0,400);return}let i=503;De(e+r).then(o=>{if(o.status!==200){setTimeout(()=>{n.done(void 0,o.status)});return}return i=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{n.done(void 0,i)});return}setTimeout(()=>{n.done(o)})}).catch(()=>{n.done(void 0,i)})},Zt={prepare:Jt,send:Xt};function en(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((i,o)=>i.provider!==o.provider?i.provider.localeCompare(o.provider):i.prefix!==o.prefix?i.prefix.localeCompare(o.prefix):i.name.localeCompare(o.name));let r={provider:"",prefix:"",name:""};return e.forEach(i=>{if(r.name===i.name&&r.prefix===i.prefix&&r.provider===i.provider)return;r=i;const o=i.provider,s=i.prefix,c=i.name;n[o]===void 0&&(n[o]=Object.create(null));const a=n[o];a[s]===void 0&&(a[s]=_(o,s));const l=a[s];let u;l.icons[c]!==void 0?u=t.loaded:s===""||l.missing[c]!==void 0?u=t.missing:u=t.pending;const f={provider:o,prefix:s,name:c};u.push(f)}),t}var m=Object.create(null),le=Object.create(null);function Ne(e,t){e.forEach(n=>{const r=n.provider;if(m[r]===void 0)return;const i=m[r],o=n.prefix,s=i[o];s&&(i[o]=s.filter(c=>c.id!==t))})}function tn(e,t){le[e]===void 0&&(le[e]=Object.create(null));const n=le[e];n[t]||(n[t]=!0,setTimeout(()=>{if(n[t]=!1,m[e]===void 0||m[e][t]===void 0)return;const r=m[e][t].slice(0);if(!r.length)return;const i=_(e,t);let o=!1;r.forEach(s=>{const c=s.icons,a=c.pending.length;c.pending=c.pending.filter(l=>{if(l.prefix!==t)return!0;const u=l.name;if(i.icons[u]!==void 0)c.loaded.push({provider:e,prefix:t,name:u});else if(i.missing[u]!==void 0)c.missing.push({provider:e,prefix:t,name:u});else return o=!0,!0;return!1}),c.pending.length!==a&&(o||Ne([{provider:e,prefix:t}],s.id),s.callback(c.loaded.slice(0),c.missing.slice(0),c.pending.slice(0),s.abort))})}))}var nn=0;function rn(e,t,n){const r=nn++,i=Ne.bind(null,n,r);if(!t.pending.length)return i;const o={id:r,icons:t,callback:e,abort:i};return n.forEach(s=>{const c=s.provider,a=s.prefix;m[c]===void 0&&(m[c]=Object.create(null));const l=m[c];l[a]===void 0&&(l[a]=[]),l[a].push(o)}),i}function on(e,t=!0,n=!1){const r=[];return e.forEach(i=>{const o=typeof i=="string"?R(i,!1,n):i;(!t||A(o,n))&&r.push({provider:o.provider,prefix:o.prefix,name:o.name})}),r}var Re={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function sn(e,t,n,r,i){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let c;if(e.random){let h=e.resources.slice(0);for(c=[];h.length>1;){const y=Math.floor(Math.random()*h.length);c.push(h[y]),h=h.slice(0,y).concat(h.slice(y+1))}c=c.concat(h)}else c=e.resources.slice(s).concat(e.resources.slice(0,s));const a=Date.now();let l="pending",u=0,f,d=null,p=[],g=[];typeof r=="function"&&g.push(r);function b(){d&&(clearTimeout(d),d=null)}function B(){l==="pending"&&(l="aborted"),b(),p.forEach(h=>{h.abort&&h.abort(),h.status==="pending"&&(h.status="aborted")}),p=[]}function tt(h,y){y&&(g=[]),typeof h=="function"&&g.push(h)}function ve(){return{startTime:a,payload:t,status:l,queriesSent:u,queriesPending:p.length,subscribe:tt,abort:B}}function H(){l="failed",g.forEach(h=>{h(void 0,f)})}function be(){p=p.filter(h=>(h.status==="pending"&&(h.status="aborted"),h.abort&&h.abort(),!1))}function nt(h,y,F){const w=y===void 0;switch(p=p.filter(v=>v!==h),l){case"pending":break;case"failed":if(w||!e.dataAfterTimeout)return;break;default:return}if(w){F!==void 0&&(f=F),p.length||(c.length?K():H());return}if(b(),be(),i&&!e.random){const v=e.resources.indexOf(h.resource);v!==-1&&v!==e.index&&i(v)}l="completed",g.forEach(v=>{v(y)})}function K(){if(l!=="pending")return;b();const h=c.shift();if(h===void 0){if(p.length){const w=typeof e.timeout=="function"?e.timeout(a):e.timeout;if(w){d=setTimeout(()=>{b(),l==="pending"&&(be(),H())},w);return}}H();return}const y={getQueryStatus:ve,status:"pending",resource:h,done:(w,v)=>{nt(y,w,v)}};p.push(y),u++;const F=typeof e.rotate=="function"?e.rotate(u,a):e.rotate;d=setTimeout(K,F),n(h,t,y)}return setTimeout(K),ve}function cn(e){if(typeof e!="object"||typeof e.resources!="object"||!(e.resources instanceof Array)||!e.resources.length)throw new Error("Invalid Reduncancy configuration");const t=Object.create(null);let n;for(n in Re)e[n]!==void 0?t[n]=e[n]:t[n]=Re[n];return t}function qe(e){const t=cn(e);let n=[];function r(){n=n.filter(c=>c().status==="pending")}function i(c,a,l){const u=sn(t,c,a,(f,d)=>{r(),l&&l(f,d)},f=>{t.index=f});return n.push(u),u}function o(c){const a=n.find(l=>c(l));return a!==void 0?a:null}return{query:i,find:o,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function Ue(){}var ae=Object.create(null);function ln(e){if(ae[e]===void 0){const t=ce(e);if(!t)return;const n=qe(t),r={config:t,redundancy:n};ae[e]=r}return ae[e]}function an(e,t,n){let r,i;if(typeof e=="string"){const o=oe(e);if(!o)return n(void 0,424),Ue;i=o.send;const s=ln(e);s&&(r=s.redundancy)}else{const o=ie(e);if(o){r=qe(o);const s=e.resources?e.resources[0]:"",c=oe(s);c&&(i=c.send)}}return!r||!i?(n(void 0,424),Ue):r.query(t,i,n)().abort}var fe={};function Qe(){}var k=Object.create(null),ue=Object.create(null),de=Object.create(null),he=Object.create(null);function fn(e,t){de[e]===void 0&&(de[e]=Object.create(null));const n=de[e];n[t]||(n[t]=!0,setTimeout(()=>{n[t]=!1,tn(e,t)}))}var Be=Object.create(null);function un(e,t,n){function r(){const c=(e===""?"":"@"+e+":")+t,a=Math.floor(Date.now()/6e4);Be[c]<a&&(Be[c]=a,console.error('Unable to retrieve icons for "'+c+'" because API is not configured properly.'))}ue[e]===void 0&&(ue[e]=Object.create(null));const i=ue[e];he[e]===void 0&&(he[e]=Object.create(null));const o=he[e];k[e]===void 0&&(k[e]=Object.create(null));const s=k[e];i[t]===void 0?i[t]=n:i[t]=i[t].concat(n).sort(),o[t]||(o[t]=!0,setTimeout(()=>{o[t]=!1;const c=i[t];delete i[t];const a=oe(e);if(!a){r();return}a.prepare(e,t,c).forEach(u=>{an(e,u,(f,d)=>{const p=_(e,t);if(typeof f!="object"){if(d!==404)return;const g=Date.now();u.icons.forEach(b=>{p.missing[b]=g})}else try{const g=te(p,f);if(!g.length)return;const b=s[t];g.forEach(B=>{delete b[B]}),fe.store&&fe.store(e,f)}catch(g){console.error(g)}fn(e,t)})})}))}var dn=(e,t)=>{const n=on(e,!0,Fe()),r=en(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,Qe)}),()=>{l=!1}}const i=Object.create(null),o=[];let s,c;r.pending.forEach(l=>{const u=l.provider,f=l.prefix;if(f===c&&u===s)return;s=u,c=f,o.push({provider:u,prefix:f}),k[u]===void 0&&(k[u]=Object.create(null));const d=k[u];d[f]===void 0&&(d[f]=Object.create(null)),i[u]===void 0&&(i[u]=Object.create(null));const p=i[u];p[f]===void 0&&(p[f]=[])});const a=Date.now();return r.pending.forEach(l=>{const u=l.provider,f=l.prefix,d=l.name,p=k[u][f];p[d]===void 0&&(p[d]=a,i[u][f].push(d))}),o.forEach(l=>{const u=l.provider,f=l.prefix;i[u][f].length&&un(u,f,i[u][f])}),t?rn(t,r,o):Qe},He="iconify2",T="iconify",Ke=T+"-count",Ve=T+"-version",ze=36e5,hn=168,pe={local:!0,session:!0},ge=!1,Ye={local:0,session:0},Ge={local:[],session:[]},Q=typeof window=="undefined"?{}:window;function Je(e){const t=e+"Storage";try{if(Q&&Q[t]&&typeof Q[t].length=="number")return Q[t]}catch{}return pe[e]=!1,null}function ye(e,t,n){try{return e.setItem(Ke,n+""),Ye[t]=n,!0}catch{return!1}}function We(e){const t=e.getItem(Ke);if(t){const n=parseInt(t);return n||0}return 0}function pn(e,t){try{e.setItem(Ve,He)}catch{}ye(e,t,0)}function gn(e){try{const t=We(e);for(let n=0;n<t;n++)e.removeItem(T+n)}catch{}}var Xe=()=>{if(ge)return;ge=!0;const e=Math.floor(Date.now()/ze)-hn;function t(n){const r=Je(n);if(!r)return;const i=o=>{const s=T+o,c=r.getItem(s);if(typeof c!="string")return!1;let a=!0;try{const l=JSON.parse(c);if(typeof l!="object"||typeof l.cached!="number"||l.cached<e||typeof l.provider!="string"||typeof l.data!="object"||typeof l.data.prefix!="string")a=!1;else{const u=l.provider,f=l.data.prefix,d=_(u,f);a=te(d,l.data).length>0}}catch{a=!1}return a||r.removeItem(s),a};try{const o=r.getItem(Ve);if(o!==He){o&&gn(r),pn(r,n);return}let s=We(r);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?s--:Ge[n].push(c));ye(r,n,s)}catch{}}for(const n in pe)t(n)},yn=(e,t)=>{ge||Xe();function n(r){if(!pe[r])return!1;const i=Je(r);if(!i)return!1;let o=Ge[r].shift();if(o===void 0&&(o=Ye[r],!ye(i,r,o+1)))return!1;try{const s={cached:Math.floor(Date.now()/ze),provider:e,data:t};i.setItem(T+o,JSON.stringify(s))}catch{return!1}return!0}n("local")||n("session")},Ze=/[\s,]+/;function vn(e,t){t.split(Ze).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function bn(e,t){t.split(Ze).forEach(n=>{const r=n.trim();switch(r){case"left":case"center":case"right":e.hAlign=r;break;case"top":case"middle":case"bottom":e.vAlign=r;break;case"slice":case"crop":e.slice=!0;break;case"meet":e.slice=!1}})}function mn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(i){for(;i<0;)i+=4;return i%4}if(n===""){const i=parseInt(e);return isNaN(i)?0:r(i)}else if(n!==e){let i=0;switch(n){case"%":i=25;break;case"deg":i=90}if(i){let o=parseFloat(e.slice(0,e.length-n.length));return isNaN(o)?0:(o=o/i,o%1==0?r(o):0)}}return t}const wn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"};function In(e,t){const n=Dt(Me,t),r=E({},wn);let i=typeof t.style=="string"?t.style:"";for(let a in t){const l=t[a];if(l!==void 0)switch(a){case"icon":case"style":case"onLoad":break;case"inline":case"hFlip":case"vFlip":n[a]=l===!0||l==="true"||l===1;break;case"flip":typeof l=="string"&&vn(n,l);break;case"align":typeof l=="string"&&bn(n,l);break;case"color":i=i+(i.length>0&&i.trim().slice(-1)!==";"?";":"")+"color: "+l+"; ";break;case"rotate":typeof l=="string"?n[a]=mn(l):typeof l=="number"&&(n[a]=l);break;case"ariaHidden":case"aria-hidden":l!==!0&&l!=="true"&&delete r["aria-hidden"];break;default:if(a.slice(0,3)==="on:")break;Me[a]===void 0&&(r[a]=l)}}const o=Ut(e,n);for(let a in o.attributes)r[a]=o.attributes[a];o.inline&&(i="vertical-align: -0.125em; "+i),i!==""&&(r.style=i);let s=0;const c=t.id;return{attributes:r,body:Kt(o.body,c?()=>c+"-"+s++:"iconify-svelte-")}}Fe(!0);Vt("",Zt);if(typeof document!="undefined"&&typeof window!="undefined"){fe.store=yn,Xe();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Lt(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const i=t[n];if(typeof i!="object"||!i||i.resources===void 0)continue;zt(n,i)||console.error(r)}catch{console.error(r)}}}}function xn(e,t,n,r,i){function o(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",o(),{data:Z(e)};let s;if(typeof e!="string"||(s=R(e,!1,!0))===null)return o(),null;const c=Mt(s);if(c===null)return n&&(!t.loading||t.loading.name!==e)&&(o(),t.name="",t.loading={name:e,abort:dn([s],r)}),null;o(),t.name!==e&&(t.name=e,i&&!t.destroyed&&i(e));const a=["iconify"];return s.prefix!==""&&a.push("iconify--"+s.prefix),s.provider!==""&&a.push("iconify--"+s.provider),{data:c,classes:a}}function _n(e,t){return e?In(e,t):null}function et(e){let t,n=e[0].body+"",r=[e[0].attributes],i={};for(let o=0;o<r.length;o+=1)i=V(i,r[o]);return{c(){t=at("svg"),Ee(t,i)},m(o,s){ke(o,t,s),t.innerHTML=n},p(o,s){s&1&&n!==(n=o[0].body+"")&&(t.innerHTML=n),Ee(t,i=It(r,[s&1&&o[0].attributes]))},d(o){o&&z(t)}}}function kn(e){let t,n=e[0]!==null&&et(e);return{c(){n&&n.c(),t=ft()},m(r,i){n&&n.m(r,i),ke(r,t,i)},p(r,[i]){r[0]!==null?n?n.p(r,i):(n=et(r),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:M,o:M,d(r){n&&n.d(r),r&&z(t)}}}function jn(e,t,n){const r={name:"",loading:null,destroyed:!1};let i=!1,o=0,s;const c=l=>{typeof t.onLoad=="function"&&t.onLoad(l),yt()("load",{icon:l})};function a(){n(3,o++,o)}return pt(()=>{n(2,i=!0)}),gt(()=>{n(1,r.destroyed=!0,r),r.loading&&(r.loading.abort(),n(1,r.loading=null,r))}),e.$$set=l=>{n(6,t=V(V({},t),_e(l)))},e.$$.update=()=>{{const l=xn(t.icon,r,i,a,c);n(0,s=l?_n(l.data,t):null),s&&l.classes&&n(0,s.attributes.class=(typeof t.class=="string"?t.class+" ":"")+l.classes.join(" "),s)}},t=_e(t),[s,r,i,o]}class Rn extends Et{constructor(t){super();jt(this,t,jn,kn,ct,{})}}export{Rn as I,Et as S,Sn as a,at as b,ut as c,ke as d,An as e,On as f,z as g,Mn as h,jt as i,Fn as j,Cn as k,Pn as l,Nn as m,M as n,xt as o,wt as p,Dn as q,_t as r,ct as s,je as t,$n as u,Ln as v,Tn as x};

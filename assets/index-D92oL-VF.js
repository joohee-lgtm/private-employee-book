var x=Object.defineProperty;var A=(i,o,e)=>o in i?x(i,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[o]=e;var d=(i,o,e)=>A(i,typeof o!="symbol"?o+"":o,e);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();const w=[{id:"choonsik",name:"춘식",departmentName:"대표",departmentCode:"11003",departmentNamePath:"춘식company;대표",departmentCodePath:"10000;11003",dutyName:"대표",dutyCode:"110",telephoneNumber:"010-0000-0000",email:"choonsik@kakaobank.com"},{id:"elly",name:"안나연",departmentName:"CX개발",departmentCode:"19400",departmentNamePath:"춘식company;대표;개발;CX개발",departmentCodePath:"10000;11003;19000;19400",dutyName:"팀장",dutyCode:"710",telephoneNumber:"010-0000-0000",email:"elly@kakaobank.com"},{id:"alice",name:"김현아",departmentName:"CX개발",departmentCode:"19400",departmentNamePath:"춘식company;대표;개발;CX개발",departmentCodePath:"10000;11003;19000;19400",dutyName:"팀원",dutyCode:"999",telephoneNumber:"010-0000-0000",email:"alice@kakaobank.com"},{id:"ryan",name:"라이언",departmentName:"CX개발",departmentCode:"19400",departmentNamePath:"춘식company;대표;개발;CX개발",departmentCodePath:"10000;11003;19000;19400",dutyName:"팀원",dutyCode:"999",telephoneNumber:"010-0000-0000",email:"ryan@kakaobank.com"},{id:"may",name:"남소연",departmentName:"디자인",departmentCode:"14200",departmentNamePath:"춘식company;대표;서비스;디자인",departmentCodePath:"10000;11003;13980;14200",dutyName:"팀장",dutyCode:"710",telephoneNumber:"010-0000-0000",email:"may@kakaobank.com"},{id:"joy",name:"이수민",departmentName:"인사",departmentCode:"13101",departmentNamePath:"춘식company;대표;매니지먼트;인사",telephoneNumber:"010-0000-0000",dutyName:"팀장",dutyCode:"710",departmentCodePath:"10000;11003;13020;13101",email:"joy@kakaobank.com"},{id:"maya",name:"권유진",departmentName:"총무",departmentCode:"13102",dutyName:"팀장",dutyCode:"710",departmentNamePath:"춘식company;대표;매니지먼트;총무",telephoneNumber:"010-0000-0000",departmentCodePath:"10000;11003;13020;13102",email:"maya@kakaobank.com"},{id:"luna",name:"김혜경",departmentName:"총무",departmentCode:"13102",departmentNamePath:"춘식company;대표;매니지먼트;총무",departmentCodePath:"10000;11003;13020;13102",dutyName:"팀원",dutyCode:"999",telephoneNumber:"010-0000-0000",email:"luna@kakaobank.com"},{id:"belly",name:"이지연",departmentName:"서비스개발",departmentCode:"19500",departmentNamePath:"춘식company;대표;개발;서비스개발",departmentCodePath:"10000;11003;19000;19500",dutyName:"팀장",dutyCode:"710",telephoneNumber:"010-0000-0000",email:"belly@kakaobank.com"},{id:"glory",name:"노선경",departmentName:"수신개발",departmentCode:"19520",departmentNamePath:"춘식company;대표;개발;서비스개발;수신개발",departmentCodePath:"10000;11003;19000;19500;19520",dutyName:"팀장",dutyCode:"715",telephoneNumber:"010-0000-0000",email:"glory@kakaobank.com"},{id:"luke",name:"김진희",departmentName:"수신개발",departmentCode:"19520",departmentNamePath:"춘식company;대표;개발;서비스개발;수신개발",departmentCodePath:"10000;11003;19000;19500;19520",dutyName:"팀원",dutyCode:"999",telephoneNumber:"010-0000-0000",email:"luke@kakaobank.com"},{id:"janice",name:"남민석",departmentName:"채널서버",departmentCode:"14721",departmentNamePath:"춘식company;대표;개발;서비스개발;채널서버",departmentCodePath:"10000;11003;19000;19500;14721",dutyName:"팀장",dutyCode:"715",telephoneNumber:"010-0000-0000",email:"janice@kakaobank.com"},{id:"hoon",name:"지주희",departmentName:"채널서버",departmentCode:"14721",departmentNamePath:"춘식company;대표;개발;서비스개발;채널서버",departmentCodePath:"10000;11003;19000;19500;14721",dutyName:"팀원",dutyCode:"999",telephoneNumber:"010-0000-0000",email:"hoon@kakaobank.com"},{id:"jay",name:"고진성",departmentName:"여신개발",departmentCode:"14741",departmentNamePath:"춘식company;대표;개발;서비스개발;여신개발",departmentCodePath:"10000;11003;19000;19500;14741",dutyName:"팀장",dutyCode:"715",telephoneNumber:"010-0000-0000",email:"jay@kakaobank.com"},{id:"lizzy",name:"최재만",departmentName:"모바일개발",departmentCode:"19600",departmentNamePath:"춘식company;대표;개발;모바일개발",departmentCodePath:"10000;11003;19000;19600",dutyName:"팀장",dutyCode:"710",telephoneNumber:"010-0000-0000",email:"lizzy@kakaobank.com"},{id:"alan",name:"곽지은",departmentName:"서비스",departmentCode:"13980",departmentNamePath:"춘식company;대표;서비스",departmentCodePath:"10000;11003;13980",dutyName:"그룹장",dutyCode:"700",telephoneNumber:"010-0000-0000",email:"alan@kakaobank.com"},{id:"moa",name:"김혜린",departmentName:"디자인",departmentCode:"14200",departmentNamePath:"춘식company;대표;서비스;디자인",departmentCodePath:"10000;11003;13980;14200",dutyName:"팀원",dutyCode:"999",telephoneNumber:"010-0000-0000",email:"moa@kakaobank.com"},{id:"nikki",name:"이하영",departmentName:"매니지먼트",departmentCode:"13020",departmentNamePath:"춘식company;대표;매니지먼트",departmentCodePath:"10000;11003;13020",dutyName:"그룹장",dutyCode:"700",telephoneNumber:"010-0000-0000",email:"nikki@kakaobank.com"},{id:"top",name:"허진영",departmentName:"사외이사",departmentCode:"11001",departmentNamePath:"춘식company;사외이사",departmentCodePath:"10000;11001",dutyName:"팀원",dutyCode:"999",telephoneNumber:"010-0000-0000",email:"top@kakaobank.com"},{id:"lucy",name:"이영은",departmentName:"마케팅",departmentCode:"14080",departmentNamePath:"춘식company;대표;서비스;마케팅",departmentCodePath:"10000;11003;13980;14080",dutyName:"팀장",dutyCode:"710",telephoneNumber:"010-0000-0000",email:"lucy@kakaobank.com"},{id:"jack",name:"김형식",departmentName:"개발",departmentCode:"19000",dutyName:"그룹장",dutyCode:"700",departmentNamePath:"춘식company;대표;개발",departmentCodePath:"10000;11003;19000",telephoneNumber:"010-9177-4246",email:"jack@kakaobank.com"}],_=[{code:"10000",name:"춘식company",parentCode:"0"},{code:"11003",name:"대표",parentCode:"10000"},{code:"13020",name:"매니지먼트",parentCode:"11003"},{code:"13101",name:"인사",parentCode:"13020"},{code:"13102",name:"총무",parentCode:"13020"},{code:"13980",name:"서비스",parentCode:"11003"},{code:"14200",name:"디자인",parentCode:"13980"},{code:"14080",name:"마케팅",parentCode:"13980"},{code:"19000",name:"개발",parentCode:"11003"},{code:"19400",name:"CX개발",parentCode:"19000"},{code:"19500",name:"서비스개발",parentCode:"19000"},{code:"19520",name:"수신개발",parentCode:"19500"},{code:"14721",name:"채널서버",parentCode:"19500"},{code:"14741",name:"여신개발",parentCode:"19500"},{code:"19600",name:"모바일개발",parentCode:"19000"},{code:"11001",name:"사외이사",parentCode:"10000"}],O={userList:w,departmentList:_},q=Object.freeze(Object.defineProperty({__proto__:null,default:O,departmentList:_,userList:w},Symbol.toStringTag,{value:"Module"})),U=()=>{let i=null;const o=()=>{if(i)return Promise.resolve(i);const n=Object.assign({"./mockup.json":q});return Promise.resolve(Object.values(n)[0]).then(a=>a.default).catch(a=>{throw i=null,a})};return{getDepartment:async()=>o().then(n=>n.departmentList),getUserList:async()=>o().then(n=>n.userList)}},E=U();class X{constructor(o){d(this,"depthTree",[]);this.transformResponse(o)}getReferInDepth(o,e){if(o.length<1)return null;let t=null;for(const n in o){const a=o[n];if(a.code===e){t=a;break}else if(t=this.getReferInDepth(a.childNodes,e),t)break}return t}transformResponse(o){let e=[];o.forEach(({code:t,name:n,parentCode:a})=>{const r=a?this.getReferInDepth(e,a):null;r?r.childNodes.push({code:t,name:n,parentCode:a,childNodes:[]}):e.push({code:t,name:n,parentCode:a,childNodes:[]});const s=this.getReferInDepth(e,t);e=e.filter(h=>h.parentCode===t?(s.childNodes.push(h),s.childNodes.sort((m,p)=>m.code.localeCompare(p.code)),!1):!0)}),this.depthTree=e}getCodeDepth(o){let e=this.depthTree;const t=[];return o.forEach((n,a)=>{const r=e.findIndex(s=>s.code===n);t.push(r),a<o.length-1&&(e=e[r].childNodes)}),t}getDepthTree(){return this.depthTree}}class b extends EventTarget{constructor(e,{root:t,actionRoot:n}={}){var a,r;super();d(this,"root","");d(this,"templateString","");d(this,"actionRoot","");d(this,"handleClick",e=>{if(!this.actionRoot)return;let t=e.target;for(;t.dataset.actionRoot!==this.actionRoot;)if(t=t.parentElement,!this.root.contains(t)){t=null;break}t&&this.dispatchEvent(new CustomEvent("clickItem",{detail:{actionRootTarget:t,originalTarget:e.target}}))});e&&(typeof t=="string"?this.root=document.querySelector(t):t&&(this.root=t),this.templateString=((a=document.querySelector(`#${e}`))==null?void 0:a.innerHTML)||"",this.actionRoot=n,(r=this.root)==null||r.addEventListener("click",this.handleClick))}template(e,t=this.templateString){let n=t;return Object.keys(e).forEach(a=>{n=n.replaceAll(`{{${a}}}`,e[a])}),n}render(e){if(Array.isArray(e)){const t=e.map(n=>this.template(n)).join("");this.root.innerHTML=t}else this.root.innerHTML=this.template(e)}}const l=class l extends EventTarget{constructor(e){super();d(this,"root",null);d(this,"list",null);d(this,"depthData",[]);d(this,"depthPath",[]);d(this,"handleClickItem",e=>{const t=e.detail.originalTarget.classList.contains("toggle"),a=e.detail.actionRootTarget.dataset.treePath;if(t)e.detail.actionRootTarget.classList.contains(l.showClass)?this.close({path:a}):this.open({path:a.split(l.pathDivider)});else{const r=a.split(l.pathDivider);let s=this.depthData;r.forEach((h,m)=>{m<r.length-1?s=s[h].childNodes:s=s[h]}),this.dispatchEvent(new CustomEvent("clickNode",{detail:{...e.detail.actionRootTarget.dataset,item:s,depth:r.length-1}}))}});this.root=e,this.list=new b("tree_node_template",{root:e,actionRoot:"node"}),this.list.addEventListener("clickItem",this.handleClickItem)}getTreePathQuery(e){return Array.isArray(e)?"[data-tree-path='"+e.join("'],[data-tree-path='")+"']":`[data-tree-path="${e}"]`}close({path:e}){const t=this.root.querySelector(this.getTreePathQuery(e));t.classList.remove(l.showClass),t.querySelectorAll("."+l.showClass).forEach(n=>{n.classList.remove(l.showClass)})}open({depth:e,path:t},{closeOther:n}={}){if((n||typeof e=="number")&&document.querySelectorAll("."+l.showClass).forEach(r=>r.classList.remove(l.showClass)),typeof e=="number"){const a=this.getDepthPath(e),r=this.getTreePathQuery(a);this.root.querySelectorAll(r).forEach(s=>s.classList.add(l.showClass))}else{const a=t.map(h=>parseInt(h,10));let r=this.root,s;for(const h in a){s=(s?`${s}${l.pathDivider}`:"")+a[h];const m=r.querySelector(this.getTreePathQuery(s));m.classList.add(l.showClass),r=m}}}getDepthPath(e){const t=this.depthData.map((a,r)=>`${r}`),n=this.depthPath.filter(a=>{var r;return((r=a.match(/_/g))==null?void 0:r.length)<=e});return[...t,...n]}templateTree(e,t=[]){return e.map((n,a)=>{const r=[...t,a];return this.depthPath.push(r.join(l.pathDivider)),{...n,path:r.join(l.pathDivider),depth:t.length,actionWrapClass:n.childNodes.length>0?"":"no_child",children:this.templateTree(n.childNodes,r).map(s=>this.list.template(s)).join("")}})}render(e){this.depthData=e;const t=this.templateTree(this.depthData);this.depthPath.sort((n,a)=>n.localeCompare(a)),this.list.render(t)}};d(l,"pathDivider","_"),d(l,"showClass","show");let k=l;const v=";",$={title:"검색결과가 없습니다.",message:"전체 목록으로 돌아갑니다.",confirmLabel:"확인"},z=/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,T=/^\w/,I=/(\d+)/g;class H{constructor(o){d(this,"userList",[]);d(this,"userIndex",{});d(this,"charDictionary",{___FIELD:["name","enName"]});d(this,"exactDictionary",{___FIELD:["departmentName","dutyName"]});d(this,"numberFilter",{___FIELD:["telephoneNumber"]});this.userList=o.sort((e,t)=>e.departmentCodePath===t.departmentCodePath?e.dutyCode.localeCompare(t.dutyCode):e.departmentCodePath.localeCompare(t.departmentCodePath)),this.userList=this.userList.map(e=>{const t={...e,enName:e.id};return this.userIndex[e.id]=t,this.charDictionary.___FIELD.forEach(n=>{t[n].split("").forEach(a=>{const r=this.charDictionary[a]||[];this.charDictionary[a]=r.includes(e.id)?r:[...r,e.id]})}),this.exactDictionary.___FIELD.forEach(n=>{const a=t[n];this.exactDictionary[a]=[...this.exactDictionary[a]||[],e.id]}),t})}getAll(){return this.userList}getFilterList(o,e){return this.userList.filter(t=>t[o]===e)}search(o){var r,s,h,m;const e=(r=o.match(z))==null?void 0:r.join(""),t=(s=o.match(T))==null?void 0:s.join(""),n=(h=o.match(T))==null?void 0:h.join("");if(this.charDictionary[e]){const p=this.getMatchItemsFromIds(o,this.charDictionary[e],this.charDictionary.___FIELD);if(p)return p}if(this.charDictionary[t]){const p=this.getMatchItemsFromIds(o,this.charDictionary[t],this.charDictionary.___FIELD);if(p)return p}if(this.exactDictionary[o])return this.getMatchItemsFromIds(o,this.exactDictionary[o],this.exactDictionary.___FIELD);const a=[];if(n){const p=(m=o.match(I))==null?void 0:m.join(""),f=new RegExp(`(${p})`);this.numberFilter.___FIELD.forEach(y=>{this.userList.forEach(g=>{f.test(g[y].match(I).join(""))&&a.push(g)})})}return a}getMatchItemsFromIds(o,e,t){let n=null;return e.forEach(a=>{t.some(s=>this.userIndex[a][s].includes(o))&&(n=[...n||[],this.userIndex[a]])}),n}}const C=class C extends EventTarget{constructor(e,t,{defaultMeaage:n,actionRoot:a}={}){super();d(this,"defaultMessage",{});d(this,"dimmed");d(this,"handleClick",e=>{e.detail.originalTarget.classList.contains(C.confirmClassName)&&(this.dispatchEvent(new CustomEvent("confirm")),this.hide())});!(!e||!t)&&(this.dimmed=t,this.alertTemplate=new b(e,{root:this.dimmed,actionRoot:a||"alert"}),this.defaultMessage=n||{},this.alertTemplate.addEventListener("clickItem",this.handleClick))}hide(){this.dimmed.classList.remove(C.toggleClassName)}show(e={}){this.alertTemplate.render({...this.defaultMessage,...e}),this.dimmed.classList.add(C.toggleClassName)}};d(C,"confirmClassName","confirm"),d(C,"toggleClassName","show");let P=C;const Q=i=>{const o=i.querySelector(".search"),e=o.querySelector("input"),t=document.querySelector(".dimmed"),n=i.querySelector(".tree"),a=i.querySelector(".user"),r=o.querySelector(".total");let s,h,m,p;const f=new P("alert_template",t,{defaultMeaage:$}),y=c=>{h.render(c),r.innerHTML=c.length},g=c=>{if(c.preventDefault(),e.value){const u=m.search(e.value);u.length?y(u):(e.value="",f.show())}else y(m.getAll())},L=c=>{const u=m.getFilterList("departmentCode",c.detail.item.code);u.length>0?y(u):c.detail.depth<1?y(m.getAll()):f.show({title:"부서 소속 멤버가 없습니다."})},S=c=>{var D;const u=c.detail.actionRootTarget.dataset,N=(D=m.search(u.id))==null?void 0:D[0],F=N.departmentCodePath.split(v),M=p.getCodeDepth(F);s.open({path:M},{closeOther:!0}),y(m.getFilterList("departmentCode",N.departmentCode))},R=c=>{const u=c.map(N=>({...N,parentCode:Number(N.parentCode)<1?null:N.parentCode}));p=new X(u),s=new k(n),s.addEventListener("clickNode",L),s.render(p.getDepthTree()),s.open({depth:0})},j=c=>{h=new b("user_card_template",{root:a,actionRoot:"user"}),m=new H(c.map(u=>({...u,departmentNamePath:u.departmentNamePath.split(v).slice(1).join(" > ")}))),h.addEventListener("clickItem",S),y(m.getAll())};f.addEventListener("confirm",()=>{y(m.getAll())}),o.addEventListener("submit",g),E.getDepartment().then(c=>R(c)),E.getUserList().then(c=>j(c))};window.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector("#app");i?Q(i):console.warn("초기화 실패")});

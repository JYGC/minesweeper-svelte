var mt=Object.defineProperty;var _t=(i,t,e)=>t in i?mt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var a=(i,t,e)=>(_t(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function M(){}function yt(i,t){for(const e in t)i[e]=t[e];return i}function ut(i){return i()}function tt(){return Object.create(null)}function A(i){i.forEach(ut)}function z(i){return typeof i=="function"}function T(i,t){return i!=i?t==t:i!==t||i&&typeof i=="object"||typeof i=="function"}function xt(i){return Object.keys(i).length===0}function bt(i,t,e,n){if(i){const s=lt(i,t,e,n);return i[0](s)}}function lt(i,t,e,n){return i[1]&&n?yt(e.ctx.slice(),i[1](n(t))):e.ctx}function wt(i,t,e,n){if(i[2]&&n){const s=i[2](n(e));if(t.dirty===void 0)return s;if(typeof s=="object"){const o=[],c=Math.max(t.dirty.length,s.length);for(let h=0;h<c;h+=1)o[h]=t.dirty[h]|s[h];return o}return t.dirty|s}return t.dirty}function vt(i,t,e,n,s,o){if(s){const c=lt(t,e,n,o);i.p(c,s)}}function St(i){if(i.ctx.length>32){const t=[],e=i.ctx.length/32;for(let n=0;n<e;n++)t[n]=-1;return t}return-1}function Ot(i){return i&&z(i.destroy)?i.destroy:M}function J(i,t){i.appendChild(t)}function v(i,t,e){i.insertBefore(t,e||null)}function b(i){i.parentNode&&i.parentNode.removeChild(i)}function ft(i,t){for(let e=0;e<i.length;e+=1)i[e]&&i[e].d(t)}function L(i){return document.createElement(i)}function K(i){return document.createTextNode(i)}function F(){return K(" ")}function et(i,t,e,n){return i.addEventListener(t,e,n),()=>i.removeEventListener(t,e,n)}function w(i,t,e){e==null?i.removeAttribute(t):i.getAttribute(t)!==e&&i.setAttribute(t,e)}function Mt(i){return Array.from(i.childNodes)}function dt(i,t){t=""+t,i.data!==t&&(i.data=t)}let V;function q(i){V=i}const E=[],U=[];let C=[];const it=[],kt=Promise.resolve();let B=!1;function Et(){B||(B=!0,kt.then(pt))}function Y(i){C.push(i)}const G=new Set;let k=0;function pt(){if(k!==0)return;const i=V;do{try{for(;k<E.length;){const t=E[k];k++,q(t),Ct(t.$$)}}catch(t){throw E.length=0,k=0,t}for(q(null),E.length=0,k=0;U.length;)U.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];G.has(e)||(G.add(e),e())}C.length=0}while(E.length);for(;it.length;)it.pop()();B=!1,G.clear(),q(i)}function Ct(i){if(i.fragment!==null){i.update(),A(i.before_update);const t=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,t),i.after_update.forEach(Y)}}function Lt(i){const t=[],e=[];C.forEach(n=>i.indexOf(n)===-1?t.push(n):e.push(n)),e.forEach(n=>n()),C=t}const W=new Set;let S;function H(){S={r:0,c:[],p:S}}function X(){S.r||A(S.c),S=S.p}function _(i,t){i&&i.i&&(W.delete(i),i.i(t))}function x(i,t,e,n){if(i&&i.o){if(W.has(i))return;W.add(i),S.c.push(()=>{W.delete(i),n&&(e&&i.d(1),n())}),i.o(t)}else n&&n()}function P(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Q(i){i&&i.c()}function N(i,t,e){const{fragment:n,after_update:s}=i.$$;n&&n.m(t,e),Y(()=>{const o=i.$$.on_mount.map(ut).filter(z);i.$$.on_destroy?i.$$.on_destroy.push(...o):A(o),i.$$.on_mount=[]}),s.forEach(Y)}function j(i,t){const e=i.$$;e.fragment!==null&&(Lt(e.after_update),A(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function At(i,t){i.$$.dirty[0]===-1&&(E.push(i),Et(),i.$$.dirty.fill(0)),i.$$.dirty[t/31|0]|=1<<t%31}function D(i,t,e,n,s,o,c,h=[-1]){const u=V;q(i);const r=i.$$={fragment:null,ctx:[],props:o,update:M,not_equal:s,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:tt(),dirty:h,skip_bound:!1,root:t.target||u.$$.root};c&&c(r.root);let g=!1;if(r.ctx=e?e(i,t.props||{},(f,d,...l)=>{const p=l.length?l[0]:d;return r.ctx&&s(r.ctx[f],r.ctx[f]=p)&&(!r.skip_bound&&r.bound[f]&&r.bound[f](p),g&&At(i,f)),d}):[],r.update(),g=!0,A(r.before_update),r.fragment=n?n(r.ctx):!1,t.target){if(t.hydrate){const f=Mt(t.target);r.fragment&&r.fragment.l(f),f.forEach(b)}else r.fragment&&r.fragment.c();t.intro&&_(i.$$.fragment),N(i,t.target,t.anchor),pt()}q(u)}class R{constructor(){a(this,"$$");a(this,"$$set")}$destroy(){j(this,1),this.$destroy=M}$on(t,e){if(!z(e))return M;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}$set(t){this.$$set&&!xt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const qt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(qt);function I(i){return Math.abs(Math.floor(i))}function O(i,t){return Math.random()*(t-i)+i}function y(i,t){return Math.floor(O(i,t+1))}function nt(i,t,e,n){const s=Math.pow;return Math.sqrt(s(i-e,2)+s(t-n,2))}function $(i,t,e=1){if(i>360||i<0)throw new Error(`Expected hue 0-360 range, got \`${i}\``);if(t>100||t<0)throw new Error(`Expected lightness 0-100 range, got \`${t}\``);if(e>1||e<0)throw new Error(`Expected alpha 0-1 range, got \`${e}\``);return`hsla(${i}, 100%, ${t}%, ${e})`}const st=i=>{if(typeof i=="object"&&i!==null){if(typeof Object.getPrototypeOf=="function"){const t=Object.getPrototypeOf(i);return t===Object.prototype||t===null}return Object.prototype.toString.call(i)==="[object Object]"}return!1},zt=["__proto__","constructor","prototype"],gt=(...i)=>i.reduce((t,e)=>(Object.keys(e).forEach(n=>{zt.includes(n)||(Array.isArray(t[n])&&Array.isArray(e[n])?t[n]=e[n]:st(t[n])&&st(e[n])?t[n]=gt(t[n],e[n]):t[n]=e[n])}),t),{});function Wt(i,t){let e;return(...n)=>{e&&clearTimeout(e),e=setTimeout(()=>i(...n),t)}}class Pt{constructor({x:t,y:e,ctx:n,hue:s,decay:o,gravity:c,friction:h,brightness:u,flickering:r,lineWidth:g,explosionLength:f}){a(this,"x");a(this,"y");a(this,"ctx");a(this,"hue");a(this,"friction");a(this,"gravity");a(this,"flickering");a(this,"lineWidth");a(this,"explosionLength");a(this,"angle");a(this,"speed");a(this,"brightness");a(this,"coordinates",[]);a(this,"decay");a(this,"alpha",1);for(this.x=t,this.y=e,this.ctx=n,this.hue=s,this.gravity=c,this.friction=h,this.flickering=r,this.lineWidth=g,this.explosionLength=f,this.angle=O(0,Math.PI*2),this.speed=y(1,10),this.brightness=y(u.min,u.max),this.decay=O(o.min,o.max);this.explosionLength--;)this.coordinates.push([t,e])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=this.decay&&t()}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth,this.ctx.fillStyle=$(this.hue,this.brightness,this.alpha),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=$(this.hue,this.flickering?O(0,this.brightness):this.brightness,this.alpha),this.ctx.stroke()}}class Tt{constructor(t,e){a(this,"active",!1);a(this,"x");a(this,"y");this.options=t,this.canvas=e,this.pointerDown=this.pointerDown.bind(this),this.pointerUp=this.pointerUp.bind(this),this.pointerMove=this.pointerMove.bind(this)}get mouseOptions(){return this.options.mouse}mount(){this.canvas.addEventListener("pointerdown",this.pointerDown),this.canvas.addEventListener("pointerup",this.pointerUp),this.canvas.addEventListener("pointermove",this.pointerMove)}unmount(){this.canvas.removeEventListener("pointerdown",this.pointerDown),this.canvas.removeEventListener("pointerup",this.pointerUp),this.canvas.removeEventListener("pointermove",this.pointerMove)}usePointer(t,e){const{click:n,move:s}=this.mouseOptions;(n||s)&&(this.x=t.pageX-this.canvas.offsetLeft,this.y=t.pageY-this.canvas.offsetTop,this.active=e)}pointerDown(t){this.usePointer(t,this.mouseOptions.click)}pointerUp(t){this.usePointer(t,!1)}pointerMove(t){this.usePointer(t,this.active)}}class Nt{constructor(){a(this,"hue");a(this,"rocketsPoint");a(this,"opacity");a(this,"acceleration");a(this,"friction");a(this,"gravity");a(this,"particles");a(this,"explosion");a(this,"mouse");a(this,"boundaries");a(this,"sound");a(this,"delay");a(this,"brightness");a(this,"decay");a(this,"flickering");a(this,"intensity");a(this,"traceLength");a(this,"traceSpeed");a(this,"lineWidth");a(this,"lineStyle");a(this,"autoresize");this.autoresize=!0,this.lineStyle="round",this.flickering=50,this.traceLength=3,this.traceSpeed=10,this.intensity=30,this.explosion=5,this.gravity=1.5,this.opacity=.5,this.particles=50,this.friction=.95,this.acceleration=1.05,this.hue={min:0,max:360},this.rocketsPoint={min:50,max:50},this.lineWidth={explosion:{min:1,max:3},trace:{min:1,max:2}},this.mouse={click:!1,move:!1,max:1},this.delay={min:30,max:60},this.brightness={min:50,max:80},this.decay={min:.015,max:.03},this.sound={enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},this.boundaries={debug:!1,height:0,width:0,x:50,y:50}}update(t){Object.assign(this,gt(this,t))}}class jt{constructor(t,e){a(this,"tick",0);a(this,"rafId",0);a(this,"fps",60);a(this,"tolerance",.1);a(this,"now");this.options=t,this.render=e}mount(){this.now=performance.now();const t=1e3/this.fps,e=n=>{this.rafId=requestAnimationFrame(e);const s=n-this.now;s>=t-this.tolerance&&(this.render(),this.now=n-s%t,this.tick+=s*(this.options.intensity*Math.PI)/1e3)};this.rafId=requestAnimationFrame(e)}unmount(){cancelAnimationFrame(this.rafId)}}class Dt{constructor(t,e,n){a(this,"resizer");this.options=t,this.updateSize=e,this.container=n}mount(){if(!this.resizer){const t=Wt(()=>this.updateSize(),100);this.resizer=new ResizeObserver(t)}this.options.autoresize&&this.resizer.observe(this.container)}unmount(){this.resizer&&this.resizer.unobserve(this.container)}}class Rt{constructor(t){a(this,"buffers",[]);a(this,"audioContext");a(this,"onInit",!1);this.options=t,this.init()}get isEnabled(){return this.options.sound.enabled}get soundOptions(){return this.options.sound}init(){!this.onInit&&this.isEnabled&&(this.onInit=!0,this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.loadSounds())}async loadSounds(){for(const t of this.soundOptions.files){const e=await(await fetch(t)).arrayBuffer();this.audioContext.decodeAudioData(e).then(n=>{this.buffers.push(n)}).catch(n=>{throw n})}}play(){if(this.isEnabled&&this.buffers.length){const t=this.audioContext.createBufferSource(),e=this.buffers[y(0,this.buffers.length-1)],n=this.audioContext.createGain();t.buffer=e,n.gain.value=O(this.soundOptions.volume.min/100,this.soundOptions.volume.max/100),n.connect(this.audioContext.destination),t.connect(n),t.start(0)}else this.init()}}class Gt{constructor({x:t,y:e,dx:n,dy:s,ctx:o,hue:c,speed:h,traceLength:u,acceleration:r}){a(this,"x");a(this,"y");a(this,"sx");a(this,"sy");a(this,"dx");a(this,"dy");a(this,"ctx");a(this,"hue");a(this,"speed");a(this,"acceleration");a(this,"traceLength");a(this,"totalDistance");a(this,"angle");a(this,"brightness");a(this,"coordinates",[]);a(this,"currentDistance",0);for(this.x=t,this.y=e,this.sx=t,this.sy=e,this.dx=n,this.dy=s,this.ctx=o,this.hue=c,this.speed=h,this.traceLength=u,this.acceleration=r,this.totalDistance=nt(t,e,n,s),this.angle=Math.atan2(s-e,n-t),this.brightness=y(50,70);this.traceLength--;)this.coordinates.push([t,e])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.acceleration;const e=Math.cos(this.angle)*this.speed,n=Math.sin(this.angle)*this.speed;this.currentDistance=nt(this.sx,this.sy,this.x+e,this.y+n),this.currentDistance>=this.totalDistance?t(this.dx,this.dy,this.hue):(this.x+=e,this.y+=n)}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=$(this.hue,this.brightness),this.ctx.stroke()}}class It{constructor(t,e={}){a(this,"target");a(this,"container");a(this,"canvas");a(this,"ctx");a(this,"width");a(this,"height");a(this,"traces",[]);a(this,"explosions",[]);a(this,"waitStopRaf");a(this,"running",!1);a(this,"opts");a(this,"sound");a(this,"resize");a(this,"mouse");a(this,"raf");this.target=t,this.container=t,this.opts=new Nt,this.createCanvas(this.target),this.updateOptions(e),this.sound=new Rt(this.opts),this.resize=new Dt(this.opts,this.updateSize.bind(this),this.container),this.mouse=new Tt(this.opts,this.canvas),this.raf=new jt(this.opts,this.render.bind(this))}get isRunning(){return this.running}get version(){return"2.10.7"}get currentOptions(){return this.opts}start(){this.running||(this.canvas.isConnected||this.createCanvas(this.target),this.running=!0,this.resize.mount(),this.mouse.mount(),this.raf.mount())}stop(t=!1){!this.running||(this.running=!1,this.resize.unmount(),this.mouse.unmount(),this.raf.unmount(),this.clear(),t&&this.canvas.remove())}async waitStop(t){if(this.running)return new Promise(e=>{this.waitStopRaf=()=>{!this.waitStopRaf||(requestAnimationFrame(this.waitStopRaf),!this.traces.length&&!this.explosions.length&&(this.waitStopRaf=null,this.stop(t),e()))},this.waitStopRaf()})}pause(){this.running=!this.running,this.running?this.raf.mount():this.raf.unmount()}clear(){!this.ctx||(this.traces=[],this.explosions=[],this.ctx.clearRect(0,0,this.width,this.height))}launch(t=1){for(let e=0;e<t;e++)this.createTrace();this.waitStopRaf||(this.start(),this.waitStop())}updateOptions(t){this.opts.update(t)}updateSize({width:t=this.container.clientWidth,height:e=this.container.clientHeight}={}){this.width=t,this.height=e,this.canvas.width=t,this.canvas.height=e,this.updateBoundaries({...this.opts.boundaries,width:t,height:e})}updateBoundaries(t){this.updateOptions({boundaries:t})}createCanvas(t){t instanceof HTMLCanvasElement?(t.isConnected||document.body.append(t),this.canvas=t):(this.canvas=document.createElement("canvas"),this.container.append(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.updateSize()}render(){if(!this.ctx||!this.running)return;const{opacity:t,lineStyle:e,lineWidth:n}=this.opts;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=`rgba(0, 0, 0, ${t})`,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalCompositeOperation="lighter",this.ctx.lineCap=e,this.ctx.lineJoin="round",this.ctx.lineWidth=O(n.trace.min,n.trace.max),this.initTrace(),this.drawTrace(),this.drawExplosion()}createTrace(){const{hue:t,rocketsPoint:e,boundaries:n,traceLength:s,traceSpeed:o,acceleration:c,mouse:h}=this.opts;this.traces.push(new Gt({x:this.width*y(e.min,e.max)/100,y:this.height,dx:this.mouse.x&&h.move||this.mouse.active?this.mouse.x:y(n.x,n.width-n.x*2),dy:this.mouse.y&&h.move||this.mouse.active?this.mouse.y:y(n.y,n.height*.5),ctx:this.ctx,hue:y(t.min,t.max),speed:o,acceleration:c,traceLength:I(s)}))}initTrace(){if(this.waitStopRaf)return;const{delay:t,mouse:e}=this.opts;(this.raf.tick>y(t.min,t.max)||this.mouse.active&&e.max>this.traces.length)&&(this.createTrace(),this.raf.tick=0)}drawTrace(){let t=this.traces.length;for(;t--;)this.traces[t].draw(),this.traces[t].update((e,n,s)=>{this.initExplosion(e,n,s),this.sound.play(),this.traces.splice(t,1)})}initExplosion(t,e,n){const{particles:s,flickering:o,lineWidth:c,explosion:h,brightness:u,friction:r,gravity:g,decay:f}=this.opts;let d=I(s);for(;d--;)this.explosions.push(new Pt({x:t,y:e,ctx:this.ctx,hue:n,friction:r,gravity:g,flickering:y(0,100)<=o,lineWidth:O(c.explosion.min,c.explosion.max),explosionLength:I(h),brightness:u,decay:f}))}drawExplosion(){let t=this.explosions.length;for(;t--;)this.explosions[t].draw(),this.explosions[t].update(()=>{this.explosions.splice(t,1)})}}function Ft(i){let t,e,n,s,o;const c=i[7].default,h=bt(c,i,i[6],null);return{c(){t=L("div"),h&&h.c(),w(t,"class",i[0]),w(t,"style",i[1])},m(u,r){v(u,t,r),h&&h.m(t,null),n=!0,s||(o=Ot(e=i[3].call(null,t,i[2])),s=!0)},p(u,[r]){h&&h.p&&(!n||r&64)&&vt(h,c,u,u[6],n?wt(c,u[6],r,null):St(u[6]),null),(!n||r&1)&&w(t,"class",u[0]),(!n||r&2)&&w(t,"style",u[1]),e&&z(e.update)&&r&4&&e.update.call(null,u[2])},i(u){n||(_(h,u),n=!0)},o(u){x(h,u),n=!1},d(u){u&&b(t),h&&h.d(u),s=!1,o()}}}function Ut(i,t,e){let{$$slots:n={},$$scope:s}=t,{class:o=""}=t,{autostart:c=!0}=t,{style:h=""}=t,{options:u={}}=t,r;function g(){return r}function f(d,l){return r=new It(d,l),c&&r.start(),{update(p){r.updateOptions(p)},destroy(){r.stop()}}}return i.$$set=d=>{"class"in d&&e(0,o=d.class),"autostart"in d&&e(4,c=d.autostart),"style"in d&&e(1,h=d.style),"options"in d&&e(2,u=d.options),"$$scope"in d&&e(6,s=d.$$scope)},[o,h,u,f,c,g,s,n]}class Bt extends R{constructor(t){super(),D(this,t,Ut,Ft,T,{class:0,autostart:4,style:1,options:2,fireworksInstance:5})}get fireworksInstance(){return this.$$.ctx[5]}}function Yt(i){let t,e,n,s,o,c;return{c(){t=L("button"),e=K(i[2]),w(t,"class",n="square "+(i[0].mineExploded?"exploded":"")+" svelte-9oo8um"),t.disabled=s=i[0].digged},m(h,u){v(h,t,u),J(t,e),o||(c=[et(t,"click",function(){z(i[1])&&i[1].apply(this,arguments)}),et(t,"contextmenu",i[5])],o=!0)},p(h,[u]){i=h,u&4&&dt(e,i[2]),u&1&&n!==(n="square "+(i[0].mineExploded?"exploded":"")+" svelte-9oo8um")&&w(t,"class",n),u&1&&s!==(s=i[0].digged)&&(t.disabled=s)},i:M,o:M,d(h){h&&b(t),o=!1,A(c)}}}function Ht(i,t,e){let{squareState:n}=t,{onClick:s}=t,{onContextMenu:o}=t,c;const h=r=>{r.preventDefault(),o()},u=r=>h(r);return i.$$set=r=>{"squareState"in r&&e(0,n=r.squareState),"onClick"in r&&e(1,s=r.onClick),"onContextMenu"in r&&e(4,o=r.onContextMenu)},i.$$.update=()=>{if(i.$$.dirty&1&&(e(2,c=n.noOfMinesAround>0?n.noOfMinesAround.toString():"0"),n.hasMine&&e(2,c="(*)"),!n.digged))switch(n.flag){case 1:e(2,c="X");break;case 2:e(2,c="?");break;default:e(2,c="_")}},[n,s,c,h,o,u]}class Xt extends R{constructor(t){super(),D(this,t,Ht,Yt,T,{squareState:0,onClick:1,onContextMenu:4})}}const $t=()=>({digged:!1,hasMine:!1,mineExploded:!1,noOfMinesAround:0,flag:0});class Jt{constructor(){a(this,"__board");a(this,"__numberOfMines");a(this,"__gameState");a(this,"__determineWinOrLose",t=>{let e=0;for(let n=0;n<t.length;n++)for(let s=0;s<t[n].length;s++){if(t[n][s].hasMine&&t[n][s].digged){this.__gameState="LOST";return}!t[n][s].hasMine&&!t[n][s].digged&&e++}e===0&&(this.__gameState="WON")});this.__numberOfMines=3+Math.floor(Math.random()*5),this.__gameState="ONGOING",this.__board=[];const t=5+Math.floor(Math.random()*11);for(let e=0;e<t;e++){this.__board[e]=[];for(let n=0;n<t;n++)this.__board[e][n]=$t()}for(let e=1;e<=this.__numberOfMines;e++){let n=!1;for(;!n;){const s=Math.floor(Math.random()*t),o=Math.floor(Math.random()*t);this.__board[s][o].hasMine||(this.__board[s][o].hasMine=n=!0)}}for(let e=0;e<this.__board.length;e++)for(let n=0;n<this.__board[e].length;n++){let s=0;this.__lookAround(e,n,this.__board,(o,c)=>{this.__board[o][c].hasMine&&s++}),this.__board[e][n].noOfMinesAround=s}}get board(){return this.__board}get numberOfMines(){return this.__numberOfMines}__lookAround(t,e,n,s){t>0&&s(t-1,e),t>0&&e<n[t].length-1&&s(t-1,e+1),e<n[t].length-1&&s(t,e+1),t<n.length-1&&e<n[t].length-1&&s(t+1,e+1),t<n.length-1&&s(t+1,e),t<n.length-1&&e>0&&s(t+1,e-1),e>0&&s(t,e-1),t>0&&e>0&&s(t-1,e-1)}flagSquare(t,e){this.__board[t][e].flag=(this.__board[t][e].flag+1)%3}__chainDig(t,e){let n=[];for(n.push({r:t,c:e});n.length>0;){let s=n[0].r,o=n[0].c;n.splice(0,1),this.__board[s][o].digged=!0,!(this.__board[s][o].noOfMinesAround>0||this.__board[s][o].hasMine)&&this.__lookAround(s,o,this.__board,(c,h)=>{!this.__board[c][h].digged&&typeof n.find(u=>u.r===c&&u.c===h)>"u"&&n.push({r:c,c:h})})}}get gameState(){return this.__gameState}get hasWon(){return this.__gameState==="WON"}get isGameOngoing(){return this.__gameState==="ONGOING"}digSquare(t,e){this.__board[t][e].digged=!0,this.__board[t][e].mineExploded=this.__board[t][e].hasMine,this.__chainDig(t,e),this.__determineWinOrLose(this.__board)}}function ot(i,t,e){const n=i.slice();return n[9]=t[e],n[11]=e,n}function rt(i,t,e){const n=i.slice();return n[12]=t[e],n[14]=e,n}function at(i){let t,e,n={options:i[5],class:"fireworks"};return t=new Bt({props:n}),i[6](t),{c(){Q(t.$$.fragment)},m(s,o){N(t,s,o),e=!0},p(s,o){const c={};t.$set(c)},i(s){e||(_(t.$$.fragment,s),e=!0)},o(s){x(t.$$.fragment,s),e=!1},d(s){i[6](null),j(t,s)}}}function ht(i){let t,e;function n(){return i[7](i[11],i[14])}function s(){return i[8](i[11],i[14])}return t=new Xt({props:{squareState:i[12],onClick:n,onContextMenu:s}}),{c(){Q(t.$$.fragment)},m(o,c){N(t,o,c),e=!0},p(o,c){i=o;const h={};c&1&&(h.squareState=i[12]),t.$set(h)},i(o){e||(_(t.$$.fragment,o),e=!0)},o(o){x(t.$$.fragment,o),e=!1},d(o){j(t,o)}}}function ct(i){let t,e,n,s=P(i[9]),o=[];for(let h=0;h<s.length;h+=1)o[h]=ht(rt(i,s,h));const c=h=>x(o[h],1,1,()=>{o[h]=null});return{c(){t=L("div");for(let h=0;h<o.length;h+=1)o[h].c();e=F()},m(h,u){v(h,t,u);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(t,null);J(t,e),n=!0},p(h,u){if(u&25){s=P(h[9]);let r;for(r=0;r<s.length;r+=1){const g=rt(h,s,r);o[r]?(o[r].p(g,u),_(o[r],1)):(o[r]=ht(g),o[r].c(),_(o[r],1),o[r].m(t,e))}for(H(),r=s.length;r<o.length;r+=1)c(r);X()}},i(h){if(!n){for(let u=0;u<s.length;u+=1)_(o[u]);n=!0}},o(h){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)x(o[u]);n=!1},d(h){h&&b(t),ft(o,h)}}}function Kt(i){let t,e,n=(i[0].isGameOngoing?`Find ${i[0].numberOfMines} hidden mines`:i[1])+"",s,o,c,h,u,r=i[0].hasWon&&at(i),g=P(i[0].board),f=[];for(let l=0;l<g.length;l+=1)f[l]=ct(ot(i,g,l));const d=l=>x(f[l],1,1,()=>{f[l]=null});return{c(){r&&r.c(),t=F(),e=L("div"),s=K(n),o=F(),c=L("div");for(let l=0;l<f.length;l+=1)f[l].c();w(e,"class","msg-container svelte-11nuxj5"),w(c,"class",h="board-container"+(i[1].length>0?" game-ended":"")+" svelte-11nuxj5")},m(l,p){r&&r.m(l,p),v(l,t,p),v(l,e,p),J(e,s),v(l,o,p),v(l,c,p);for(let m=0;m<f.length;m+=1)f[m]&&f[m].m(c,null);u=!0},p(l,[p]){if(l[0].hasWon?r?(r.p(l,p),p&1&&_(r,1)):(r=at(l),r.c(),_(r,1),r.m(t.parentNode,t)):r&&(H(),x(r,1,1,()=>{r=null}),X()),(!u||p&3)&&n!==(n=(l[0].isGameOngoing?`Find ${l[0].numberOfMines} hidden mines`:l[1])+"")&&dt(s,n),p&25){g=P(l[0].board);let m;for(m=0;m<g.length;m+=1){const Z=ot(l,g,m);f[m]?(f[m].p(Z,p),_(f[m],1)):(f[m]=ct(Z),f[m].c(),_(f[m],1),f[m].m(c,null))}for(H(),m=g.length;m<f.length;m+=1)d(m);X()}(!u||p&2&&h!==(h="board-container"+(l[1].length>0?" game-ended":"")+" svelte-11nuxj5"))&&w(c,"class",h)},i(l){if(!u){_(r);for(let p=0;p<g.length;p+=1)_(f[p]);u=!0}},o(l){x(r),f=f.filter(Boolean);for(let p=0;p<f.length;p+=1)x(f[p]);u=!1},d(l){l&&(b(t),b(e),b(o),b(c)),r&&r.d(l),ft(f,l)}}}function Vt(i,t,e){let n=new Jt;const s=(d,l)=>{n.flagSquare(d,l),e(0,n)},o=(d,l)=>{n.digSquare(d,l),e(0,n)};let c="",h;const u={opacity:1};function r(d){U[d?"unshift":"push"](()=>{h=d,e(2,h)})}const g=(d,l)=>o(d,l),f=(d,l)=>s(d,l);return i.$$.update=()=>{if(i.$$.dirty&1)switch(n.gameState){case"LOST":e(1,c="You were killed by a mine!");break;case"WON":e(1,c="You found all the mines!");break;default:e(1,c="")}},[n,c,h,s,o,u,r,g,f]}class Qt extends R{constructor(t){super(),D(this,t,Vt,Kt,T,{})}}function Zt(i){let t,e,n;return e=new Qt({}),{c(){t=L("main"),Q(e.$$.fragment)},m(s,o){v(s,t,o),N(e,t,null),n=!0},p:M,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){s&&b(t),j(e)}}}class te extends R{constructor(t){super(),D(this,t,null,Zt,T,{})}}new te({target:document.getElementById("app")});

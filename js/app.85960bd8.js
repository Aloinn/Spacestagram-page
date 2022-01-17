(()=>{"use strict";var e={9965:(e,t,n)=>{n(5363),n(71);var o=n(8880),r=n(9592),a=n(8019),l=n(6783),i=n(4260);const u=(0,i.Z)(l.Z,[["render",a.s]]),c=u;var s=n(7969);async function d(e,t){const n="function"===typeof s.Z?await(0,s.Z)({}):s.Z,o=e(c);return o.use(r.Z,t),{app:o,router:n}}var f=n(4702);const p={config:{},plugins:{Dialog:f.Z}},v="/";async function m({app:e,router:t},n){let o=!1;const r=e=>{try{return t.resolve(e).href}catch(n){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=r(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===o&&u<n.length;u++)try{await n[u]({app:e,router:t,ssrContext:null,redirect:a,urlPath:l,publicPath:v})}catch(i){return i&&i.url?void a(i.url):void console.error("[Quasar] boot error:",i)}!0!==o&&(e.use(t),e.mount("#q-app"))}d(o.ri,p).then((e=>Promise.all([Promise.resolve().then(n.bind(n,2942))]).then((t=>{const n=t.map((e=>e.default)).filter((e=>"function"===typeof e));m(e,n)}))))},6783:(e,t,n)=>{var o=n(5166);t.Z=(0,o.defineComponent)({name:"App"})},3714:(e,t,n)=>{Object.defineProperty(t,"X",{value:!0});var o=n(9087),r=n(5166),a=n(248);t.Z=(0,r.defineComponent)({components:{LoginGoogleBtn:a.default},setup:function(){var e=(0,o.useDialogPluginComponent)(),t=e.dialogRef,n=e.onDialogOK;return{dialogRef:t,onDialogOK:n}}})},929:(e,t,n)=>{Object.defineProperty(t,"X",{value:!0});var o=n(5166),r=n(9418),a=n(4418);t.Z=(0,o.defineComponent)({components:{LogoutGoogleBtn:a.default},setup:function(){var e=(0,r.useFirebaseUser)();return{userAuth:e}}})},2014:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function l(e){try{u(o.next(e))}catch(t){a(t)}}function i(e){try{u(o["throw"](e))}catch(t){a(t)}}function u(e){e.done?n(e.value):r(e.value).then(l,i)}u((o=o.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,o,r,a,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(e){return function(t){return u([e,t])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(l)try{if(n=1,o&&(r=2&a[0]?o["return"]:a[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,o=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(r=l.trys,!(r=r.length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){l.label=a[1];break}if(6===a[0]&&l.label<r[1]){l.label=r[1],r=a;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(a);break}r[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(i){a=[6,i],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(5166),l=n(5720);n(8511),t["default"]=(0,a.defineComponent)({props:{label:String},emits:["authed"],setup:function(e,t){var n=this,a=t.emit,i=new l.default.auth.GoogleAuthProvider,u=function(){return o(n,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,l.default.auth().signInWithPopup(i)];case 1:return e.sent(),a("authed",!0),[2]}}))}))};return{signIn:u}}})},4739:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function l(e){try{u(o.next(e))}catch(t){a(t)}}function i(e){try{u(o["throw"](e))}catch(t){a(t)}}function u(e){e.done?n(e.value):r(e.value).then(l,i)}u((o=o.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,o,r,a,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(e){return function(t){return u([e,t])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(l)try{if(n=1,o&&(r=2&a[0]?o["return"]:a[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,o=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(r=l.trys,!(r=r.length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){l.label=a[1];break}if(6===a[0]&&l.label<r[1]){l.label=r[1],r=a;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(a);break}r[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(i){a=[6,i],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(5166),l=n(5720);n(8511),t["default"]=(0,a.defineComponent)({name:"AuthGmailConnect",props:{label:String},setup:function(){var e=this,t=function(){return o(e,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,l.default.auth().signOut()];case 1:return e.sent(),[2]}}))}))};return{signOut:t}}})},2013:(e,t,n)=>{Object.defineProperty(t,"X",{value:!0});var o=n(5166);t.Z=(0,o.defineComponent)({props:{modelValue:String},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,r=(0,o.computed)({get:function(){return e.modelValue},set:function(e){n("update:modelValue",e)}});return{content:r}}})},1293:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function l(e){try{u(o.next(e))}catch(t){a(t)}}function i(e){try{u(o["throw"](e))}catch(t){a(t)}}function u(e){e.done?n(e.value):r(e.value).then(l,i)}u((o=o.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,o,r,a,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(e){return function(t){return u([e,t])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(l)try{if(n=1,o&&(r=2&a[0]?o["return"]:a[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,o=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(r=l.trys,!(r=r.length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){l.label=a[1];break}if(6===a[0]&&l.label<r[1]){l.label=r[1],r=a;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(a);break}r[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(i){a=[6,i],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(5166),l=n(5636);n(8064),n(8511);var i=n(9418),u=n(5869),c=n(9087),s=n(9582),d=n(8112);t["default"]=(0,a.defineComponent)({props:{info:Object,date:String},setup:function(e){var t,n=this,f=l.default.firestore(),p=(0,a.ref)([]),v=f.collection("likes").doc(""+((null===(t=null===e||void 0===e?void 0:e.info)||void 0===t?void 0:t.date)||e.date));v.onSnapshot((function(e){var t,n;p.value=null!==(n=null===(t=e.data())||void 0===t?void 0:t.likes)&&void 0!==n?n:[]}));var m=(0,i.useFirebaseUser)(),h=(0,c.useQuasar)(),y=function(){var t,n=(0,d.default)();n.toClipboard("https://aloinn.github.io/Spacestagram-page/images/"+((null===(t=null===e||void 0===e?void 0:e.info)||void 0===t?void 0:t.date)||e.date)),h.dialog({title:"Link copied!",message:"You can send this space image to your friends now!"})},b=function(){return o(n,void 0,void 0,(function(){var e,t,n,o;return r(this,(function(r){switch(r.label){case 0:return(null===m||void 0===m?void 0:m.value)?[4,v.set({likes:(null===(e=p.value)||void 0===e?void 0:e.includes((null===(t=null===m||void 0===m?void 0:m.value)||void 0===t?void 0:t.uid)||""))?l.default.firestore.FieldValue.arrayRemove(null===(n=null===m||void 0===m?void 0:m.value)||void 0===n?void 0:n.uid):l.default.firestore.FieldValue.arrayUnion(null===(o=null===m||void 0===m?void 0:m.value)||void 0===o?void 0:o.uid)},{merge:!0})]:(h.dialog({component:u.default}),[2]);case 1:return r.sent(),[2]}}))}))},g=(0,a.computed)((function(){var e,t,n;return null!==(n=null===(e=null===p||void 0===p?void 0:p.value)||void 0===e?void 0:e.includes((null===(t=null===m||void 0===m?void 0:m.value)||void 0===t?void 0:t.uid)||"ANON"))&&void 0!==n&&n})),w=(0,s.useRouter)(),k=function(e){w.push("/images/"+e)};return{like:b,likes:p,liked:g,share:y,reroute:k,userAuth:m}}})},625:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function l(e){try{u(o.next(e))}catch(t){a(t)}}function i(e){try{u(o["throw"](e))}catch(t){a(t)}}function u(e){e.done?n(e.value):r(e.value).then(l,i)}u((o=o.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,o,r,a,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(e){return function(t){return u([e,t])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(l)try{if(n=1,o&&(r=2&a[0]?o["return"]:a[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,o=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(r=l.trys,!(r=r.length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){l.label=a[1];break}if(6===a[0]&&l.label<r[1]){l.label=r[1],r=a;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(a);break}r[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(i){a=[6,i],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(52),l=n(5166),i=n(5893),u=n(1905),c=n(9087);t["default"]=(0,l.defineComponent)({components:{NasaCard:i.default,DatePicker:u.default},setup:function(){var e=this,t=(0,l.ref)([]),n=(0,l.ref)(null),i=(0,l.ref)(!1),u=(0,l.ref)((new Date).toISOString().split("T")[0].replace(/-/gi,"/")),s=(0,l.computed)({get:function(){return u.value},set:function(e){if(u.value=e,NaN==Date.parse(e)||Date.parse(e)>Date.now())return t.value=[],i.value=!0,void n.value.stop();i.value=!1,t.value=[],n.value.reset(),n.value.resume(),n.value.trigger()}}),d=(0,l.computed)((function(){var e=Date.parse(s.value);return NaN==e?null:new Date(e)})),f=function(e){var t=new Date(d.value);return t.setDate(t.getDate()-e+1),t.toISOString().split("T")[0]},p=function(n,l){return o(e,void 0,void 0,(function(){var e;return r(this,(function(o){switch(o.label){case 0:return[4,a.default.get("https://api.nasa.gov/planetary/apod?date="+f(n)+"&api_key=yKXLPMsNGHVd1mboSKerxFqp8v4cfraE4nJdmdQM")];case 1:return e=o.sent(),t.value.push(e.data),l(),[2]}}))}))},v=(0,c.useQuasar)(),m=(0,l.computed)((function(){return v.screen.lt.md?t.value:t.value.filter((function(e,t){return t%2==0}))})),h=(0,l.computed)((function(){return t.value.filter((function(e,t){return t%2==1}))}));return{today:d,nasaInfo:t,loadNasaInfo:p,leftRow:m,rightRow:h,todayString:s,infiniteScroll:n,invalidDate:i}}})},4726:(e,t,n)=>{Object.defineProperty(t,"X",{value:!0});var o=n(5166),r=n(646);t.Z=(0,o.defineComponent)({name:"MainLayout",components:{Header:r.default}})},8812:(e,t,n)=>{Object.defineProperty(t,"X",{value:!0});var o=n(5166);t.Z=(0,o.defineComponent)({name:"Error404"})},2552:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function l(e){try{u(o.next(e))}catch(t){a(t)}}function i(e){try{u(o["throw"](e))}catch(t){a(t)}}function u(e){e.done?n(e.value):r(e.value).then(l,i)}u((o=o.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,o,r,a,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(e){return function(t){return u([e,t])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(l)try{if(n=1,o&&(r=2&a[0]?o["return"]:a[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,o=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(r=l.trys,!(r=r.length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){l.label=a[1];break}if(6===a[0]&&l.label<r[1]){l.label=r[1],r=a;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(a);break}r[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(i){a=[6,i],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(5166),l=n(7531),i=n(5893),u=n(52);t["default"]=(0,a.defineComponent)({components:{AuthHeader:l.default,NasaCard:i.default},name:"ImagePage",props:{imageId:String},setup:function(e){var t=this,n=(0,a.ref)();return function(){o(t,void 0,void 0,(function(){var t;return r(this,(function(o){switch(o.label){case 0:return[4,u.default.get("https://api.nasa.gov/planetary/apod?date="+e.imageId+"&api_key=n456AUusbyyIwzzavMoVnUhpzb77qx4TTKKTt0cS")];case 1:return t=o.sent(),n.value=t.data,[2]}}))}))}(),{nasaInfo:n}}})},6339:(e,t,n)=>{Object.defineProperty(t,"X",{value:!0});var o=n(5166),r=n(9418),a=n(7531),l=n(9056);t.Z=(0,o.defineComponent)({components:{AuthHeader:a.default,NasaFeed:l.default},name:"HomePage",setup:function(){var e=(0,r.useFirebaseUser)();return{userAuth:e}}})},8019:(e,t,n)=>{t.s=void 0;var o=n(5166);function r(e,t,n,r,a,l){var i=(0,o.resolveComponent)("router-view");return(0,o.openBlock)(),(0,o.createBlock)(i)}t.s=r},896:(e,t,n)=>{t.s=void 0;var o=n(5166),r=(0,o.createElementVNode)("h2",{class:"fn-lg fn-w-bold q-mb-none"},"Beam me up!",-1),a=(0,o.createElementVNode)("p",{class:"q-my-md"}," Login with a Google Account to heart your favourite space images ",-1);function l(e,t,n,l,i,u){var c=(0,o.resolveComponent)("login-google-btn"),s=(0,o.resolveComponent)("q-card"),d=(0,o.resolveComponent)("q-dialog");return(0,o.openBlock)(),(0,o.createBlock)(d,{ref:"dialogRef"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(s,{class:"q-px-lg q-py-md"},{default:(0,o.withCtx)((function(){return[r,a,(0,o.createVNode)(c,{onAuthed:t[0]||(t[0]=function(t){return e.onDialogOK()}),class:"text-white q-my-md q-py-sm fit",outline:""})]})),_:1})]})),_:1},512)}t.s=l},1724:(e,t,n)=>{t.s=void 0;var o=n(5166),r={key:0},a={class:"row justify-between items-center q-my-md"},l={class:"fn-lg fn-w-light q-mb-none text-primary"},i={class:"row q-gutter-x-sm items-center"};function u(e,t,n,u,c,s){var d=(0,o.resolveComponent)("q-img"),f=(0,o.resolveComponent)("q-avatar"),p=(0,o.resolveComponent)("logout-google-btn");return e.userAuth?((0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",l," Hi "+(0,o.toDisplayString)(e.userAuth.displayName),1),(0,o.createElementVNode)("div",i,[(0,o.createVNode)(f,{size:"40px"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(d,{src:e.userAuth.photoURL},null,8,["src"])]})),_:1}),(0,o.createVNode)(p,{class:"text-white q-my-none"})])]),(0,o.renderSlot)(e.$slots,"default")])):(0,o.createCommentVNode)("",!0)}t.s=u},3998:(e,t,n)=>{t.s=void 0;var o=n(5166);function r(e,t,n,r,a,l){var i=(0,o.resolveComponent)("q-btn");return(0,o.openBlock)(),(0,o.createBlock)(i,(0,o.mergeProps)({dark:"",label:e.label||"Sign in with Google",class:"bg-primary text-white",onClick:e.signIn,clickable:""},e.$attrs),null,16,["label","onClick"])}t.s=r},4597:(e,t,n)=>{t.s=void 0;var o=n(5166);function r(e,t,n,r,a,l){var i=(0,o.resolveComponent)("q-btn");return(0,o.openBlock)(),(0,o.createBlock)(i,(0,o.mergeProps)({flat:"",label:e.label||"Sign out",class:"bg-primary text-white",onClick:e.signOut,clickable:""},e.$attrs),null,16,["label","onClick"])}t.s=r},2098:(e,t,n)=>{t.s=void 0;var o=n(5166),r={style:{"max-width":"300px"}},a={class:"row items-center justify-end"};function l(e,t,n,l,i,u){var c=(0,o.resolveComponent)("q-btn"),s=(0,o.resolveComponent)("q-date"),d=(0,o.resolveComponent)("q-popup-proxy"),f=(0,o.resolveComponent)("q-icon"),p=(0,o.resolveComponent)("q-input"),v=(0,o.resolveDirective)("close-popup");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createVNode)(p,{filled:"",modelValue:e.content,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.content=t}),mask:"date",rules:["date"]},{append:(0,o.withCtx)((function(){return[(0,o.createVNode)(f,{name:"event",class:"cursor-pointer"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(d,{ref:"qDateProxy",cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(s,{modelValue:e.content,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.content=t})},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",a,[(0,o.withDirectives)((0,o.createVNode)(c,{label:"Close",color:"primary",flat:""},null,512),[[v]])])]})),_:1},8,["modelValue"])]})),_:1},512)]})),_:1})]})),_:1},8,["modelValue"])])}t.s=l},8791:(e,t,n)=>{t.s=void 0;var o=n(5166),r=["alt","src"],a={key:1},l=["alt","src"],i={class:"q-pa-md"},u={class:"fn-w-bold fn-lg q-mb-none q-mt-md"},c=["datetime"],s={class:"q-mt-md fn-sm"},d={class:"row q-gutter-sm justify-end"},f={key:0,class:"fn-sm fn-w-light q-mr-sm"};function p(e,t,n,p,v,m){var h=(0,o.resolveComponent)("q-btn"),y=(0,o.resolveComponent)("q-card-section"),b=(0,o.resolveComponent)("q-card");return e.info?((0,o.openBlock)(),(0,o.createElementBlock)("article",{key:0,class:(0,o.normalizeClass)(e.date?"":"cursor-pointer"),onClick:t[0]||(t[0]=function(t){var n;return e.date?"":e.reroute(null===(n=e.info)||void 0===n?void 0:n.date)})},[(0,o.createVNode)(b,{flat:"",bordered:"",class:"rounded-borders"},{default:(0,o.withCtx)((function(){return["image"==e.info.media_type?((0,o.openBlock)(),(0,o.createElementBlock)("img",{key:0,alt:e.info.title,src:e.info.url},null,8,r)):((0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createElementVNode)("iframe",{alt:e.info.title,class:"fit video",src:e.info.url,frameborder:"0"},null,8,l)])),(0,o.createVNode)(y,null,{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("h2",u,(0,o.toDisplayString)(e.info.title),1),(0,o.createElementVNode)("time",{datetime:e.info.date,class:"fn-w-light text-grey-6 fn-sm"},(0,o.toDisplayString)(e.info.date.replace(/-/gi,"/")),9,c),(0,o.createElementVNode)("p",s,(0,o.toDisplayString)(e.info.explanation),1),(0,o.createElementVNode)("div",d,[(0,o.createVNode)(h,{onClick:(0,o.withModifiers)(e.like,["stop"]),outline:"","icon-right":e.liked?"favorite":"favorite_border",color:"pink",size:"md"},{default:(0,o.withCtx)((function(){return[e.likes.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",f,(0,o.toDisplayString)(e.likes.length),1)):(0,o.createCommentVNode)("",!0)]})),_:1},8,["onClick","icon-right"]),(0,o.createVNode)(h,{outline:"",onClick:(0,o.withModifiers)(e.share,["stop"]),icon:"share",color:"primary",size:"md"},null,8,["onClick"])])])]})),_:1})]})),_:1})],2)):(0,o.createCommentVNode)("",!0)}t.s=p},9294:(e,t,n)=>{t.s=void 0;var o=n(5166),r=function(e){return(0,o.pushScopeId)("data-v-14ed6e7b"),e=e(),(0,o.popScopeId)(),e},a={class:"row justify-end q-mt-md"},l={class:"row q-col-gutter-x-lg scroll"},i={class:"column col-md-6 q-gutter-y-lg col-12"},u={class:"column col-6 q-gutter-y-lg gt-sm"},c={class:"row justify-center"},s=r((function(){return(0,o.createElementVNode)("h2",{class:"fn-lg fn-w-bold q-my-none q-my-sm"},"Invalid date!",-1)})),d=r((function(){return(0,o.createElementVNode)("p",null," The selected date is either invalid or in the future. Please select another date ",-1)}));function f(e,t,n,r,f,p){var v=(0,o.resolveComponent)("date-picker"),m=(0,o.resolveComponent)("nasa-card"),h=(0,o.resolveComponent)("q-infinite-scroll"),y=(0,o.resolveComponent)("q-card-section"),b=(0,o.resolveComponent)("q-card"),g=(0,o.resolveComponent)("q-spinner");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("div",a,[(0,o.createVNode)(v,{modelValue:e.todayString,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.todayString=t})},null,8,["modelValue"])]),e.todayString?((0,o.openBlock)(),(0,o.createBlock)(h,{key:0,offset:700,ref:"infiniteScroll",onLoad:e.loadNasaInfo},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",i,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.leftRow,(function(e){return(0,o.openBlock)(),(0,o.createBlock)(m,{key:e.date,info:e},null,8,["info"])})),128))]),(0,o.createElementVNode)("div",u,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.rightRow,(function(e){return(0,o.openBlock)(),(0,o.createBlock)(m,{key:e.date,info:e},null,8,["info"])})),128))])])]})),_:1},8,["onLoad"])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",c,[e.invalidDate?((0,o.openBlock)(),(0,o.createBlock)(b,{key:0,flat:"",bordered:"",class:"fit"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(y,null,{default:(0,o.withCtx)((function(){return[s,d]})),_:1})]})),_:1})):((0,o.openBlock)(),(0,o.createBlock)(g,{key:1,size:"50px"}))])])}t.s=f},7089:(e,t,n)=>{t.s=void 0;var o=n(5166);function r(e,t,n,r,a,l){var i=(0,o.resolveComponent)("Header"),u=(0,o.resolveComponent)("router-view"),c=(0,o.resolveComponent)("q-page-container"),s=(0,o.resolveComponent)("q-layout");return(0,o.openBlock)(),(0,o.createBlock)(s,{view:"lhh lpr fff"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(i),(0,o.createVNode)(c,null,{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(u)]})),_:1})]})),_:1})}t.s=r},3474:(e,t,n)=>{t.s=void 0;var o=n(5166),r={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},a=(0,o.createElementVNode)("div",{style:{"font-size":"30vh"}}," 404 ",-1),l=(0,o.createElementVNode)("div",{class:"text-h2",style:{opacity:".4"}}," Oops. Nothing here... ",-1);function i(e,t,n,i,u,c){var s=(0,o.resolveComponent)("q-btn");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",null,[a,l,(0,o.createVNode)(s,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""})])])}t.s=i},1408:(e,t,n)=>{t.s=void 0;var o=n(5166),r={class:"container q-mx-auto q-mt-xl"};function a(e,t,n,a,l,i){var u=(0,o.resolveComponent)("auth-header"),c=(0,o.resolveComponent)("nasa-card"),s=(0,o.resolveComponent)("q-page");return(0,o.openBlock)(),(0,o.createBlock)(s,{class:"q-mt-md fn-md"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",r,[(0,o.createVNode)(u),(0,o.createVNode)(c,{info:e.nasaInfo,date:e.imageId},null,8,["info","date"])])]})),_:1})}t.s=a},5808:(e,t,n)=>{t.s=void 0;var o=n(5166),r={class:"container q-mx-auto q-mt-xl"};function a(e,t,n,a,l,i){var u=(0,o.resolveComponent)("auth-header"),c=(0,o.resolveComponent)("nasa-feed"),s=(0,o.resolveComponent)("q-page");return(0,o.openBlock)(),(0,o.createBlock)(s,{class:"q-mt-md fn-md"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",r,[(0,o.createVNode)(u),(0,o.createVNode)(c)])]})),_:1})}t.s=a},9864:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=n(5720);n(8064),n(3439);var r=function(e,t){o.default.apps.length||(o.default.initializeApp(t),o.default.firestore().settings({ignoreUndefinedProperties:!0}),/localhost:/.exec(location.host)&&o.default.functions().useEmulator("localhost",5001))};t["default"]=r},2942:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=n(7083),r=n(9864);t["default"]=(0,o.boot)((function(e){var t=e.app;t.use(r.default,{apiKey:"AIzaSyB5SAuajoGJJGAri2YtzJ8z9hGcGeQS95g",authDomain:"alain-shopify-backend.firebaseapp.com",projectId:"alain-shopify-backend",storageBucket:"alain-shopify-backend.appspot.com",messagingSenderId:"469146646247",appId:"1:469146646247:web:4ea64d91bb68041b965442"})}))},7969:(e,t,n)=>{var o=n(7083),r=n(9582),a=n(8406);t.Z=(0,o.route)((function(){var e=r.createWebHistory,t=(0,r.createRouter)({scrollBehavior:function(){return{left:0,top:0}},routes:a.default,history:e("/")});return t}))},8406:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=[{path:"/",component:function(){return Promise.resolve().then((function(){return n(8027)}))},children:[{path:"",component:function(){return Promise.resolve().then((function(){return n(8881)}))}},{path:"images/:imageId",props:!0,component:function(){return Promise.resolve().then((function(){return n(8037)}))}}]},{path:"/:catchAll(.*)*",component:function(){return Promise.resolve().then((function(){return n(8313)}))}}];t["default"]=o},9418:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useFirebaseUser=void 0;var o=n(5166),r=n(5720);function a(){var e=(0,o.shallowRef)();return(0,o.watchEffect)((function(t){var n=r.default.auth().onAuthStateChanged((function(t){e.value=t}));t(n)})),e}n(8511),t.useFirebaseUser=a},5869:(e,t,n)=>{n.r(t),n.d(t,{__esModule:()=>r.X,default:()=>d});var o=n(896),r=n(3714),a=n(4260),l=n(5926),i=n(151),u=n(7518),c=n.n(u);const s=(0,a.Z)(r.Z,[["render",o.s]]),d=s;c()(r.Z,"components",{QDialog:l.Z,QCard:i.Z})},7531:(e,t,n)=>{n.r(t),n.d(t,{__esModule:()=>r.X,default:()=>d});var o=n(1724),r=n(929),a=n(4260),l=n(5096),i=n(4027),u=n(7518),c=n.n(u);const s=(0,a.Z)(r.Z,[["render",o.s]]),d=s;c()(r.Z,"components",{QAvatar:l.Z,QImg:i.Z})},248:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var o=n(9458),r=n(2314),a={};for(const f in r)"default"!==f&&(a[f]=()=>r[f]);n.d(t,a);var l=n(4260),i=n(9892),u=n(7518),c=n.n(u);const s=(0,l.Z)(r["default"],[["render",o.s]]),d=s;c()(r["default"],"components",{QBtn:i.Z})},4418:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var o=n(9094),r=n(1594),a={};for(const f in r)"default"!==f&&(a[f]=()=>r[f]);n.d(t,a);var l=n(4260),i=n(9892),u=n(7518),c=n.n(u);const s=(0,l.Z)(r["default"],[["render",o.s]]),d=s;c()(r["default"],"components",{QBtn:i.Z})},646:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var o=n(3673);const r=e=>((0,o.dD)("data-v-2a96f876"),e=e(),(0,o.Cn)(),e),a={class:"row fit justify-center"},l=r((()=>(0,o._)("div",{class:"fn-xl"},"🚀",-1))),i=r((()=>(0,o._)("div",null,[(0,o._)("h1",{class:"fn-xl fn-w-bold q-my-none q-mb-sm"},"Spacestagram"),(0,o._)("div",{class:"fn-w-light text-grey-6"},"Thank you NASA Image API!")],-1))),u=[l,i],c={class:"text-right fn-sm col-md col-12 q-mt-md-none q-mt-md"},s=r((()=>(0,o._)("div",{class:"fn-w-light"},"Shopify Frontend Developer Application",-1))),d=r((()=>(0,o._)("div",null,[(0,o._)("a",{class:"fn-w-bold text-primary",href:"https://www.aloinn.com/#/"},"Alain Nguyen"),(0,o.Uk)(", Summer 2022 ")],-1))),f={class:"fn-w-light text-primary no-underline",href:"https://github.com/Aloinn/shopify-frontend"},p=r((()=>(0,o._)("span",null,"Github Repo",-1)));function v(e,t,n,r,l,i){const v=(0,o.up)("q-space"),m=(0,o.up)("q-icon"),h=(0,o.up)("q-chip"),y=(0,o.up)("q-toolbar");return(0,o.wg)(),(0,o.j4)(y,{class:"container q-mx-auto q-pt-lg"},{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o._)("div",{class:"col-none col-md row items-center cursor-pointer",onClick:t[0]||(t[0]=t=>e.routeHome())},u),(0,o.Wm)(v,{class:"gt-md"}),(0,o._)("div",c,[s,d,(0,o._)("a",f,[(0,o.Wm)(h,{class:"q-mx-none"},{default:(0,o.w5)((()=>[p,(0,o.Wm)(m,{name:"ion-logo-github",class:"q-ml-sm",size:"sm"})])),_:1})])])])])),_:1})}var m=n(9582);const h=(0,o.aZ)({setup(){const e=(0,m.useRouter)(),t=()=>{e.push("/")};return{routeHome:t}}});var y=n(4260),b=n(9570),g=n(2025),w=n(7030),k=n(4554),C=n(7518),_=n.n(C);const x=(0,y.Z)(h,[["render",v],["__scopeId","data-v-2a96f876"]]),q=x;_()(h,"components",{QToolbar:b.Z,QSpace:g.Z,QChip:w.Z,QIcon:k.Z})},1905:(e,t,n)=>{n.r(t),n.d(t,{__esModule:()=>r.X,default:()=>m});var o=n(2098),r=n(2013),a=n(4260),l=n(8508),i=n(4554),u=n(8952),c=n(643),s=n(9892),d=n(677),f=n(7518),p=n.n(f);const v=(0,a.Z)(r.Z,[["render",o.s]]),m=v;p()(r.Z,"components",{QInput:l.Z,QIcon:i.Z,QPopupProxy:u.Z,QDate:c.Z,QBtn:s.Z}),p()(r.Z,"directives",{ClosePopup:d.Z})},5893:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var o=n(3959),r=n(1622),a={};for(const v in r)"default"!==v&&(a[v]=()=>r[v]);n.d(t,a);var l=n(4260),i=n(151),u=n(5589),c=n(9892),s=n(7518),d=n.n(s);const f=(0,l.Z)(r["default"],[["render",o.s],["__scopeId","data-v-389d47cf"]]),p=f;d()(r["default"],"components",{QCard:i.Z,QCardSection:u.Z,QBtn:c.Z})},9056:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var o=n(1434),r=n(2539),a={};for(const m in r)"default"!==m&&(a[m]=()=>r[m]);n.d(t,a);var l=n(4260),i=n(2729),u=n(151),c=n(5589),s=n(9754),d=n(7518),f=n.n(d);const p=(0,l.Z)(r["default"],[["render",o.s],["__scopeId","data-v-14ed6e7b"]]),v=p;f()(r["default"],"components",{QInfiniteScroll:i.Z,QCard:u.Z,QCardSection:c.Z,QSpinner:s.Z})},8027:(e,t,n)=>{n.r(t),n.d(t,{__esModule:()=>r.X,default:()=>d});var o=n(7089),r=n(4726),a=n(4260),l=n(4899),i=n(2652),u=n(7518),c=n.n(u);const s=(0,a.Z)(r.Z,[["render",o.s]]),d=s;c()(r.Z,"components",{QLayout:l.Z,QPageContainer:i.Z})},8313:(e,t,n)=>{n.r(t),n.d(t,{__esModule:()=>r.X,default:()=>s});var o=n(3474),r=n(8812),a=n(4260),l=n(9892),i=n(7518),u=n.n(i);const c=(0,a.Z)(r.Z,[["render",o.s]]),s=c;u()(r.Z,"components",{QBtn:l.Z})},8037:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var o=n(8951),r=n(618),a={};for(const f in r)"default"!==f&&(a[f]=()=>r[f]);n.d(t,a);var l=n(4260),i=n(4379),u=n(7518),c=n.n(u);const s=(0,l.Z)(r["default"],[["render",o.s]]),d=s;c()(r["default"],"components",{QPage:i.Z})},8881:(e,t,n)=>{n.r(t),n.d(t,{__esModule:()=>r.X,default:()=>s});var o=n(5808),r=n(6339),a=n(4260),l=n(4379),i=n(7518),u=n.n(i);const c=(0,a.Z)(r.Z,[["render",o.s]]),s=c;u()(r.Z,"components",{QPage:l.Z})},2314:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r.a});var o=n(2014),r=n.n(o),a={};for(const l in o)"default"!==l&&(a[l]=()=>o[l]);n.d(t,a)},1594:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r.a});var o=n(4739),r=n.n(o),a={};for(const l in o)"default"!==l&&(a[l]=()=>o[l]);n.d(t,a)},1622:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r.a});var o=n(1293),r=n.n(o),a={};for(const l in o)"default"!==l&&(a[l]=()=>o[l]);n.d(t,a)},2539:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r.a});var o=n(625),r=n.n(o),a={};for(const l in o)"default"!==l&&(a[l]=()=>o[l]);n.d(t,a)},618:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r.a});var o=n(2552),r=n.n(o),a={};for(const l in o)"default"!==l&&(a[l]=()=>o[l]);n.d(t,a)},9458:(e,t,n)=>{n.d(t,{s:()=>o.s});var o=n(3998)},9094:(e,t,n)=>{n.d(t,{s:()=>o.s});var o=n(4597)},3959:(e,t,n)=>{n.d(t,{s:()=>o.s});var o=n(8791)},1434:(e,t,n)=>{n.d(t,{s:()=>o.s});var o=n(9294)},8951:(e,t,n)=>{n.d(t,{s:()=>o.s});var o=n(1408)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,(()=>{var e=[];n.O=(t,o,r,a)=>{if(!o){var l=1/0;for(s=0;s<e.length;s++){for(var[o,r,a]=e[s],i=!0,u=0;u<o.length;u++)(!1&a||l>=a)&&Object.keys(n.O).every((e=>n.O[e](o[u])))?o.splice(u--,1):(i=!1,a<l&&(l=a));if(i){e.splice(s--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,[l,i,u]=o,c=0;if(l.some((t=>0!==e[t]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(u)var s=u(n)}for(t&&t(o);c<l.length;c++)a=l[c],n.o(e,a)&&e[a]&&e[a][0](),e[l[c]]=0;return n.O(s)},o=self["webpackChunkshopify_frontend"]=self["webpackChunkshopify_frontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[736],(()=>n(9965)));o=n.O(o)})();
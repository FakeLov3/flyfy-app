(this.webpackJsonpflyfy=this.webpackJsonpflyfy||[]).push([[0],[,,,,function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(77),function(e){return r.a.createElement("div",{className:"bar ".concat(e.className||"")},e.children)}),o=(a(78),function(e){return r.a.createElement("button",{className:"btn ".concat(e.className||""),style:e.style||{},type:e.type||"button",onClick:e.onClick||null},e.label||e.children||"Button")}),l=(a(79),function(e){return r.a.createElement("div",{style:e.style||{},className:"card ".concat(e.className||"")},e.children)}),s=a(11),i=a(8),u=a(1),m=a(5),f=a(19),p=a(3),d=a.n(p),b=a(2),E=(a(35),function(e){var t=e.room,a=e.connected,c=e.client,o=e.messages,l=e.position,s=Object(n.useState)(""),i=Object(u.a)(s,2),m=i[0],p=i[1];Object(n.useEffect)((function(){c.send(JSON.stringify(t))}),[]);return r.a.createElement("div",{style:{right:l},className:"chat-popup"},r.a.createElement("div",{className:"head"},r.a.createElement("p",null,t.name||t.room)),r.a.createElement("div",{className:"chat"},o?o.map((function(e,t){var a=o[t+1]||!0,n=a&&e.from!==a.from;return r.a.createElement("div",{className:"text-message from-".concat(e.isUser?"user":"friend").concat(n?" last":""),key:t},r.a.createElement("p",null,e.content.message))})):r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"message"},r.a.createElement(f.a,{maxRows:5,value:m,onChange:function(e){return p(e.target.value)},spellCheck:"false",draggable:"false",placeholder:"Type your message"})),r.a.createElement("div",{className:"actions"},r.a.createElement(d.a,{className:"send-icon",onClick:function(){var e={type:"message",to:t.room,content:{message:m}};p(""),a&&c.send(JSON.stringify(e))},path:b.B,size:.7,color:"#303030"}))))});function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var h=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)({}),f=Object(u.a)(l,2),p=f[0],d=f[1],b=Object(n.useState)(null),h=Object(u.a)(b,2),O=h[0],v=h[1],y=Object(n.useContext)(m.a).openRooms;Object(n.useEffect)((function(){var e=localStorage.token||sessionStorage.token,t=new WebSocket("".concat("wss://flyfy.herokuapp.com","?token=").concat(e));t.onclose=function(){return o(!1)},t.onerror=function(e){console.log("WebSocket error: ".concat(e)),o(!1)},t.onmessage=function(e){return j(e)},v(t)}),[]);var j=function(e){var t=JSON.parse(e.data);({message:function(){return d((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,Object(i.a)({},t.to,[].concat(Object(s.a)(e[t.to]||[]),[t])))}))},connection:function(){return o(!0)}})[t.type].call()};return y.map((function(e,t){return r.a.createElement(E,{key:t,connected:c,room:e,position:325*(t+1)-100,client:O,receive:j,messages:p[e.room]})}))},O=(a(82),function(e){return r.a.createElement("div",{onClick:e.onClick,className:"checkbox".concat(e.active?" active":"")})}),v=a(7);a(83);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var j=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],p=a[1],E=Object(n.useState)([]),g=Object(u.a)(E,2),h=g[0],O=g[1],j=Object(n.useState)([]),w=Object(u.a)(j,2),N=w[0],C=w[1],k=Object(n.useContext)(m.c),S=Object(u.a)(k,2),x=S[0],P=S[1],A=Object(n.useContext)(m.d).setLoader,D=Object(n.useRef)(null),R=x.posts;return r.a.createElement(l,{className:"create-post"},r.a.createElement("div",{className:"head"},r.a.createElement("p",null,"Create new post")),r.a.createElement("div",{className:"post-content".concat(!N.length>0?" has-no-files":"")},r.a.createElement("div",{style:{padding:"12px 12px 0"}},r.a.createElement("div",{className:"text"},r.a.createElement(f.a,{value:c,onChange:function(e){return p(e.target.value)},spellCheck:"false",draggable:"false",placeholder:"Share it to the world!"}))),r.a.createElement("div",{className:"preview-wrapper"},N.map((function(e,t){return r.a.createElement("img",{alt:"preview",className:"preview",key:t,src:e.file})}))),r.a.createElement("div",{className:"action"},r.a.createElement(o,{onClick:function(){return D.current.click()}},r.a.createElement(d.a,{path:b.o,size:.7,color:"#ffffff"}),r.a.createElement("p",null,"Picture")),r.a.createElement(o,{onClick:function(){A("active"),p(""),O([]),C([]);var e=new FormData;e.append("text",c),h.forEach((function(t,a){return e.append("files[".concat(a,"]"),t)})),v.a.post("/createPost",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t=e.data;P((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{posts:[].concat(Object(s.a)(t),Object(s.a)(R))})}))})).catch((function(e){return console.error(e)})).finally((function(){return A("")}))},className:"post-btn",label:"Create post"}))),r.a.createElement("input",{className:"input-file",ref:D,type:"file",multiple:!0,onChange:function(e){for(var t=e.target,a=function(e){if(!h.some((function(a){return t.files[e].name===a.name}))){O((function(a){return[].concat(Object(s.a)(a),[t.files[e]])}));var a=new FileReader;a.onload=function(e){C((function(t){return[].concat(Object(s.a)(t),[{file:e.target.result}])}))},a.readAsDataURL(t.files[e])}},n=0;n<t.files.length;n++)a(n)}}))},w=a(46),N=a.n(w),C=(a(84),a(85),function(e){var t=e.data,a=t.active,n=t.src,c=t.crop,l=t.events,s=t.onFinish,i=t.onCancel;return r.a.createElement("div",{className:"react-crop".concat(a?" active":"")},r.a.createElement(N.a,Object.assign({className:"cropper",src:n,crop:c},l)),r.a.createElement("div",{className:"actions"},r.a.createElement(o,{onClick:s},"Save",r.a.createElement(d.a,{path:b.k,size:.7,color:"#ffffff"})),r.a.createElement(o,{onClick:i},"Cancel",r.a.createElement(d.a,{path:b.i,size:.7,color:"#ffffff"}))))});a(86);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var S=function(e){return r.a.createElement("div",{onClick:function(){return e.setActive((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{active:!e.active})}))},className:"dropdown-wrapper".concat(e.active?" active":"")},r.a.createElement("div",{style:{right:"calc(20% + ".concat(-8,"px)")},className:"dropdown"},r.a.createElement("div",{className:"header"},r.a.createElement("p",null,"Signed in as ",r.a.createElement("br",null),r.a.createElement("span",{style:{fontWeight:"bold"}},e.user))),r.a.createElement("div",{className:"dropdown-divider"}),e.items.map((function(e,t){return r.a.createElement("div",{key:t,onClick:e.onClick,className:"item"},r.a.createElement(d.a,{className:"icon",path:b.A,size:.7,color:"#303030"}),r.a.createElement("p",{className:"item-name"},e.name))}))))},x=a(47),P=a.n(x),A=a(16),D=a(20),R=a(18),z=a.n(R),B=a(48),L=(a(91),function(e){var t=e.post,a=Object(n.useState)(t.liked),c=Object(u.a)(a,2),o=c[0],i=c[1],m=Object(n.useState)(t.reactions||[]),f=Object(u.a)(m,2),p=f[0],E=f[1],g=Object(n.useState)(t.comments||[]),h=Object(u.a)(g,1)[0],O=Object(n.useState)(!0),y=Object(u.a)(O,2),j=y[0],w=y[1],N="".concat(o?p.length<2?"You liked this":2===p.length?"You and another person liked this":"You and ".concat(p.length-1," people liked this"):p.length>1?"".concat(p.length," likes"):p.length<1?"Be the first one to like this":"".concat(p.length," like")," ");return r.a.createElement(l,{className:"post".concat(j?" loading":"")},r.a.createElement("div",{className:"profile"},r.a.createElement(A.b,{to:"/user/".concat(t.user.user),className:"profile-pic"},r.a.createElement("img",{src:t.user.profilePic?"".concat("https://flyfy.herokuapp.com","/img?w=32&h=32&key=").concat(t.user.profilePic):z.a,alt:"profile-pic",onLoad:function(){return w(!1)}})),r.a.createElement("div",null,r.a.createElement(A.b,{style:{color:"#303030"},to:"/user/".concat(t.user.user)},r.a.createElement("p",{className:"post-user"},t.user.user)),r.a.createElement("p",{className:"post-date info"},Object(D.a)(t.createdAt)))),r.a.createElement("div",{className:"post-content"},t.text.length>0&&r.a.createElement("p",{className:"post-text"},t.text),t.images.length>0&&r.a.createElement("div",{className:"post-images"},r.a.createElement(B.Carousel,{showIndicators:t.images.length>1,showStatus:t.images.length>1,showThumbs:!1,emulateTouch:!0,swipeScrollTolerance:10,statusFormatter:function(e,t){return"".concat(e," / ").concat(t)}},t.images.map((function(e,t){return r.a.createElement("div",{key:t,className:"image"},r.a.createElement("img",{src:"".concat("https://flyfy.herokuapp.com","/img?w=580&key=").concat(e.image),alt:"post-".concat(t)}))}))))),r.a.createElement("div",{className:"post-status"},r.a.createElement("p",null,N),r.a.createElement("p",null,1===h.length?"".concat(h.length," comment"):"".concat(h.length," comments"))),r.a.createElement("div",{className:"grayline"}),r.a.createElement("div",{className:"post-footer"},r.a.createElement("div",{className:"action",onClick:function(){return function(e){v.a.post("/likePost",{post:e}).then((function(e){var t=e.data;E((function(e){return[].concat(Object(s.a)(e),[t])})),i(!0)})).catch((function(e){return console.error(e)}))}(t.id)}},r.a.createElement(d.a,{path:o?b.D:b.E,size:.7,color:"#303030"})),r.a.createElement("div",{className:"action"},r.a.createElement(d.a,{path:b.w,size:.7,color:"#303030"}))))}),U=function(e){var t=e.posts,a=e.status,n=e.overload;return r.a.createElement("div",{className:"posts ".concat(a," overload-").concat(n)},r.a.createElement("p",{className:"recent-posts"},"Recent posts"),t.map((function(e){return r.a.createElement(L,{key:e.id,post:e})})),r.a.createElement("img",{alt:"loader",src:P.a,className:"lil-loader"}),r.a.createElement("p",{className:"bottom-reached"},"Bottom reached"))};a(41);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var V=window.innerWidth<768,W=function(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(n.useContext)(m.c),f=Object(u.a)(l,2),p=f[0],d=f[1],b=Object(n.useState)("oxe"),E=Object(u.a)(b,2),g=E[0],h=E[1],O=Object(n.useRef)(null),y=Object(n.useRef)(!1),w=p.limit,N=p.posts;Object(n.useEffect)((function(){return C(),function(){return window.onscroll=null}}),[]);var C=function(){h("loading"),v.a.get("/feed/".concat(c)).then((function(e){var t=e.data;h("success"),y.current=t.length<w||0===t.length,t.length>0&&(o((function(e){return e+w})),d((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{posts:[].concat(Object(s.a)(N),Object(s.a)(t))})})))})).catch((function(){return h("error")}))};return window.onscroll=function(){return!y.current&&window.scrollY+window.innerHeight+50>O.current.scrollHeight&&"loading"!==g&&C()},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"feed view",ref:O},r.a.createElement("main",{className:"main"},r.a.createElement(j,null),r.a.createElement(U,{posts:N,status:g,overload:y.current}))),!V&&r.a.createElement(ce,null))},I=window.innerWidth<768,M=r.a.lazy((function(){return I?a.e(7).then(a.bind(null,124)):a.e(3).then(a.bind(null,129))})),J=function(e){return r.a.createElement(n.Suspense,null,r.a.createElement(M,e))},G=a(51),H=a.n(G),K=function(e){return r.a.createElement(o,{onClick:e.onClick,style:q.buttonContainer},r.a.createElement("img",{alt:"Google",style:q.googleLogo,src:H.a}),r.a.createElement("p",{style:q.signInWithGoogle},"Sign in with Google"))},q={buttonContainer:{backgroundColor:"#ffffff"},googleLogo:{width:"16px",margin:"0",heigth:"auto"},signInWithGoogle:{margin:"auto",fontFamily:"Roboto",fontSize:12,fontWeight:"bold",color:"#505050"}},T=window.innerWidth<768,Y=r.a.lazy((function(){return T?a.e(5).then(a.bind(null,126)):a.e(4).then(a.bind(null,125))})),X=function(e){return r.a.createElement(n.Suspense,null,r.a.createElement(Y,e))},Q=(a(42),function(e){return r.a.createElement("input",{readOnly:e.readOnly||!1,onChange:e.onChange||null,onFocus:e.onFocus||null,onBlur:e.onBlur||null,style:e.style||{},spellCheck:e.spellCheck||"false",className:"_input ".concat(e.className||""),autoComplete:e.autoComplete||"off",type:e.type||"text",name:e.name||"",defaultValue:e.defaultValue||"",placeholder:e.placeholder||"",required:e.required||!1})}),Z=function(e){return r.a.createElement("div",{style:e.style||{},className:"_search-input ".concat(e.className||"")},r.a.createElement(Q,Object.assign({},e,{className:"_search",style:{order:"left"===e.align?1:0}})),e.icon||null)},_=a(52),$=a.n(_),ee=(a(98),function(e){return r.a.createElement("div",{className:"main-loader ".concat(e.className)},r.a.createElement("img",{alt:"loader",src:$.a}))}),te=(a(99),function(e){return r.a.createElement("div",{className:"modal-wrapper ".concat(e.active," ").concat(e.className||"")},r.a.createElement("div",{className:"modal"},e.children))}),ae=window.innerWidth<768,ne=r.a.lazy((function(){return ae?a.e(8).then(a.bind(null,128)):a.e(6).then(a.bind(null,127))})),re=function(e){return r.a.createElement(n.Suspense,null,r.a.createElement(ne,e))},ce=(a(100),function(e){return r.a.createElement(c,{className:"suggestions-wrapper"},r.a.createElement("div",{className:"suggestions"},r.a.createElement(l,{className:"suggested-user"},r.a.createElement("p",null,"Opa")),r.a.createElement(l,{className:"suggested-user"},r.a.createElement("p",null,"Opa"))))});a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return h})),a.d(t,"e",(function(){return O})),a.d(t,"f",(function(){return j})),a.d(t,"g",(function(){return C})),a.d(t,"h",(function(){return S})),a.d(t,"i",(function(){return W})),a.d(t,"j",(function(){return J})),a.d(t,"p",(function(){return K})),a.d(t,"k",(function(){return X})),a.d(t,"l",(function(){return Z})),a.d(t,"m",(function(){return ee})),a.d(t,"n",(function(){return te})),a.d(t,"o",(function(){return re})),a.d(t,"q",(function(){return ce}))},function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s}));var n=a(0),r=Object(n.createContext)(),c=Object(n.createContext)(),o=Object(n.createContext)(),l=Object(n.createContext)(),s=Object(n.createContext)()},,function(e,t,a){"use strict";var n=a(45),r=a.n(n);t.a=r.a.create({baseURL:"https://flyfy.herokuapp.com",headers:{authorization:localStorage.token||sessionStorage.token||null}})},,,,,,,,,,,function(e,t){e.exports="data:image/png;base64,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"},,function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=["January","February","March","April","May","June","July","August","September","October","November","December"],r=function(e){var t=new Date,a=new Date(e),r=a.getMinutes(),c=a.getHours(),o=a.getDate(),l=a.getMonth()+1,s=(t.getTime()-a.getTime())/1e3,i=s/60,u=i/60;return"".concat(s>10?s>59.9?i>59.9?u>23.9?"".concat(n[l-1],", ").concat(o<10?"0".concat(o):o," at ").concat(c<10?"0".concat(c):c,":").concat(r<10?"0".concat(r):r):"".concat(parseInt(u)," h"):"".concat(parseInt(i)," min"):"".concat(parseInt(s)," seconds ago"):"Now")}},,,,,,,,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){e.exports=a.p+"static/media/triangle.fd01991c.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/google.3ec228d3.svg"},function(e,t,a){e.exports=a.p+"static/media/bars.7b4b0bed.svg"},,function(e,t,a){e.exports=a(119)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),l=(a(59),a(1)),s=a(16),i=a(17),u=a(7),m=a(5),f=a(4),p=a(25),d=a.n(p),b=a(53),E=a(8),g=a(19),h=a(3),O=a.n(h),v=a(2),y=a(18),j=a.n(y);a(102);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=function(e){var t=Object(n.useState)({}),a=Object(l.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({}),i=Object(l.a)(s,2),p=i[0],h=i[1],y=Object(n.useState)(null),w=Object(l.a)(y,2),C=w[0],k=w[1],S=Object(n.useState)(null),x=Object(l.a)(S,2),P=x[0],A=x[1],D=Object(n.useState)(!0),R=Object(l.a)(D,2),z=R[0],B=R[1],L=Object(n.useRef)(null),U=Object(n.useRef)(null),F=Object(n.useContext)(m.b).setCropper,V=Object(n.useContext)(m.d).setLoader;Object(n.useEffect)((function(){V("active"),B(!0),F((function(e){return N({},e,{crop:{aspect:1,unit:"%",width:50,height:50,x:25,y:25},events:{onImageLoaded:M,onComplete:J,onChange:G},onFinish:q})})),W()}),[]);var W=function(){u.a.get("/user").then((function(e){var t=e.data;h(t),V(""),B(!1)})).catch((function(){B(!0),V("")}))},I=function(e){e.persist(),o((function(t){return N({},t,Object(E.a)({},e.target.name,"user"===e.target.name?e.target.value.toLowerCase():e.target.value))}))},M=function(e){F((function(e){return N({},e,{active:!0})})),U.current=e},J=function(e){return H(e)},G=function(e){return F((function(t){return N({},t,{crop:e})}))},H=function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(U&&t.width&&t.height)){e.next=5;break}return e.next=3,K(U.current,t,"".concat(Date.now(),".jpeg"));case 3:a=e.sent,k(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(e,t,a){var n=document.createElement("canvas"),r=e.naturalWidth/e.width,c=e.naturalHeight/e.height;return n.width=t.width,n.height=t.height,n.getContext("2d").drawImage(e,t.x*r,t.y*c,t.width*r,t.height*c,0,0,t.width,t.height),new Promise((function(e,t){n.toBlob((function(n){if(!n)return t(new Error("Empty canvas"));var r;n.name=a,window.URL.revokeObjectURL(r),r=window.URL.createObjectURL(n),A(n),e(r)}),"image/jpeg")}))},q=function(){return F((function(e){return N({},e,{active:!1})}))};return r.a.createElement("div",{className:"edit view"},r.a.createElement("div",{className:"main"},r.a.createElement(f.c,{className:"edit"},r.a.createElement("h1",null,"Edit your profile"),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{className:"edit-profile-pic"},r.a.createElement("p",{className:"label"},"Profile picture"),r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("img",{style:{opacity:z?0:1},alt:"preview-profile",ref:U,className:"card profile-pic",src:C||p.profilePic||j.a}),r.a.createElement(f.b,{onClick:function(){return L.current.click()}},"Edit",r.a.createElement(O.a,{path:v.z,size:.7,color:"#ffffff"})))),r.a.createElement("div",{className:"edit-profile-info"},r.a.createElement("form",{autoComplete:"new-password",spellCheck:!1},r.a.createElement("div",{className:"edit-wrapper"},[{name:"user",type:"text",placeholder:"Username"},{name:"name",type:"text",placeholder:"Name"}].map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",{className:"label"},e.placeholder),r.a.createElement(f.l,Object.assign({align:"left",className:"edit-input",value:p[e.name],defaultValue:p[e.name]||"",onChange:I},e,{required:!0})))})),r.a.createElement("p",{className:"label"},"Bio"),r.a.createElement("div",{className:"text"},r.a.createElement(g.a,{name:"bio",onChange:I,defaultValue:p.bio||"",spellCheck:"false",draggable:"false",placeholder:"Tell us a little about you!"})))))),r.a.createElement("div",{className:"edit-footer"},r.a.createElement(f.b,{onClick:function(e){e.preventDefault(),V("active");var t=new FormData;Object.keys(c).forEach((function(e){return t.append(e,c[e])})),P&&t.append("blob",P),u.a.post("/updateProfileInfo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){return window.location.pathname="/"})).catch((function(){return V("")}))}},"Save",r.a.createElement(O.a,{path:v.k,size:.7,color:"#ffffff"})),r.a.createElement(f.b,{onClick:function(){return window.location.pathname="/"}},"Cancel",r.a.createElement(O.a,{path:v.i,size:.7,color:"#ffffff"}))))),r.a.createElement("input",{className:"input-file",ref:L,type:"file",onChange:function(e){var t=e.target.files,a=new FileReader;a.onload=function(e){return F((function(t){return N({},t,{src:e.target.result})}))},a.readAsDataURL(t[0])}}))},k=function(){var e=Object(n.useState)({posts:[],limit:10}),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement(m.c.Provider,{value:[a,c]},r.a.createElement(f.i,null))},S=a(43),x=a.n(S),P=a(20),A=function(e){var t=e.data,a=Object(n.useContext)(m.d).setLoader,c=t.relationship,o=c.followsSessionUser,l=c.followedBySessionUser,i=l?{icon:v.c,label:"Unfollow"}:o&&!l?{icon:v.e,label:"Follow back"}:{icon:v.e,label:"Follow"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:"tooltip",place:"bottom",effect:"solid"}),r.a.createElement("div",{className:"main"},r.a.createElement(f.c,{className:"profile-info"},r.a.createElement("div",{className:"profile-pic"},r.a.createElement("img",{alt:"profile-img",className:"profile-base64",src:t.profilePic||j.a}),t.isUser&&r.a.createElement(s.b,{to:"/settings"},r.a.createElement(f.b,{onClick:function(){return a("active")}},r.a.createElement(O.a,{path:v.z,size:.7,color:"#ffffff"})))),r.a.createElement("div",{className:"profile-information"},r.a.createElement("h1",{className:"name"},t.name),r.a.createElement("h1",{className:"user"},"@",t.user),r.a.createElement("div",{className:"createdAt"},r.a.createElement(O.a,{path:v.j,size:.55,color:"#303030"}),r.a.createElement("p",null,"User since ",Object(P.a)(t.createdAt))),!t.isUser&&r.a.createElement("div",{className:"actions"},r.a.createElement(f.b,{className:"follow",onClick:function(){u.a.post("/follow",{following:t.user}).then((function(){return window.location.reload()})).catch((function(e){return console.error(e)}))}},r.a.createElement(O.a,{path:i.icon,size:.65,color:"#ffffff"}),r.a.createElement("p",null,i.label)),r.a.createElement("div",{"data-tip":"Send new message"},r.a.createElement(f.b,{onClick:function(){u.a.post("/createChat",{type:1,members:[t.user]}).then((function(e){console.log(e)})).catch((function(e){return console.error(e)}))}},r.a.createElement(O.a,{path:v.x,size:.65,color:"#ffffff"})))),t.bio&&r.a.createElement("p",{className:"bio"},r.a.createElement("span",{style:{fontWeight:"bold"}},"Bio:"),r.a.createElement("br",null),t.bio))),r.a.createElement(f.c,{className:"profile-actions"},r.a.createElement("div",{className:"profile-options"},r.a.createElement("p",null,"Options"),r.a.createElement(O.a,{path:v.u,size:.7,color:"#ffffff"})),r.a.createElement("div",{className:"profile-stats"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,t.posts.length),r.a.createElement("p",null,1===t.posts.length?"post":"posts")),r.a.createElement("div",{className:"grayline"}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,t.followedBy.length),r.a.createElement("p",null,1===t.followedBy.length?"follower":"followers")),r.a.createElement("div",{className:"grayline"}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,t.follows.length),r.a.createElement("p",null,"following"))),r.a.createElement("div",{className:"profile-feed"}))))},D=(a(114),function(e){var t=Object(n.useState)({}),a=Object(l.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!0),i=Object(l.a)(s,2),f=i[0],p=i[1],d=Object(n.useContext)(m.d).setLoader,b=e.match.params.user;Object(n.useEffect)((function(){d("active"),E()}),[b]);var E=function(){u.a.get("user?username=".concat(b)).then((function(e){var t=e.data;console.log(t),o(t)})).catch((function(e){return console.error(e)})).finally((function(){d(""),p(!1)}))};return r.a.createElement("div",{className:"profile view"},!f&&r.a.createElement(A,{data:c}))}),R=(a(115),a(116),function(e){var t=Object(n.useState)({}),a=Object(l.a)(t,2),c=a[0],o=a[1],s=Object(n.useContext)(m.d).setLoader;return Object(n.useEffect)((function(){s("active"),u.a.get("/user").then((function(e){var t=e.data;return o(t)})).catch((function(){localStorage.removeItem("token"),window.location.replace("/signin")})).finally((function(){return s("")}))}),[]),r.a.createElement("div",{className:"layout dashboard"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(r.a.Fragment,null)},r.a.createElement(f.k,{data:c}),r.a.createElement("div",{className:"content"},r.a.createElement(f.o,{data:c}),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:k}),r.a.createElement(i.a,{exact:!0,path:"/settings",component:C}),r.a.createElement(i.a,{exact:!0,path:"/user/:user",component:D})),r.a.createElement(f.d,null),r.a.createElement(f.j,null))))});function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L=function(e){var t=Object(n.useState)({}),a=Object(l.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!1),i=Object(l.a)(s,2),p=i[0],d=i[1],b=Object(n.useState)(!1),g=Object(l.a)(b,2),h=g[0],y=g[1],j=Object(n.useState)(!1),w=Object(l.a)(j,2),N=w[0],C=w[1],k=Object(n.useContext)(m.d).setLoader,S=[{name:"user",type:"text",placeholder:"Username",icons:[r.a.createElement(O.a,{style:{order:0},path:v.a}),r.a.createElement(O.a,{className:"error",style:{order:2,margin:0},path:v.f,color:"red"})]},{name:"email",type:"email",placeholder:"E-mail",icons:[r.a.createElement(O.a,{style:{order:0},path:v.g}),r.a.createElement(O.a,{className:"error",style:{order:2,margin:0},path:v.f,color:"red"})]},{name:"password",type:p?"text":"password",placeholder:"Password",icons:[r.a.createElement(O.a,{style:{order:0},path:v.r}),r.a.createElement(O.a,{onMouseUp:function(){return d(!1)},onMouseDown:function(){return d(!0)},onMouseLeave:function(){return d(!1)},style:{order:2,margin:0,cursor:"pointer"},path:p?v.n:v.m})]}],x={};S.map((function(e){return x[e.name]={status:"neutral"}}));var P=Object(n.useState)(x),A=Object(l.a)(P,2),D=A[0],R=A[1];Object(n.useEffect)((function(){var e=[h];for(var t in D)e.push("success"===D[t].status);C(e.every((function(e){return e})))}),[D,h]);var z=function(e){e.persist();var t=e.target.name;e.target.value.length>0&&u.a.get("/validate/".concat(t,"=").concat(e.target.value)).then((function(e){var a=e.data;return R((function(e){return B({},e,Object(E.a)({},t,{status:a.available?"success":"error",message:a.message}))}))})).catch((function(e){return console.error(e)}))};return r.a.createElement("div",{className:"layout auth"},r.a.createElement("div",{className:"container card"},r.a.createElement("div",{style:{marginBottom:12},className:"header"},r.a.createElement("h1",{className:"logo"},"Join our community")),r.a.createElement("form",{autoComplete:"new-password",spellCheck:!1,onSubmit:function(e){e.preventDefault(),k("active"),N&&u.a.post("/createUser",B({},c)).then((function(){window.location.pathname="/signin"})).catch((function(e){return k("")}))},onChange:function(e){e.persist(),o((function(t){return B({},t,Object(E.a)({},e.target.name,e.target.value))}))}},r.a.createElement("div",{className:"credentials"},S.map((function(e,t){var a=D[e.name].status;return r.a.createElement("div",{key:t},r.a.createElement(f.l,{onBlur:z,onChange:function(){return R((function(t){return B({},t,Object(E.a)({},e.name,{status:"neutral"}))}))},align:"left",className:"auth-input ".concat(a),icon:e.icons.map((function(e,t){var n=e.props,c=n.style,o=n.className;return r.a.createElement(O.a,Object.assign({key:t},n,{style:B({},c,{opacity:"error"===o?"error"===a?1:0:1,transition:"opacity 0.25s ease"}),size:.7,color:"error"===a?"red":"neutral"===a?"#303030":"green"}))})),type:e.type,name:e.name,placeholder:e.placeholder,required:!0}),r.a.createElement("p",{className:"message ".concat(a)},D[e.name].message))}))),r.a.createElement("div",{className:"options"},r.a.createElement("div",{style:{margin:"auto"},className:"checkbox-wrapper"},r.a.createElement(f.e,{onClick:function(){return y((function(e){return!e}))},active:h}),r.a.createElement("p",{style:{margin:"0 6px",textAlign:"center"}},"I have read and agree to the"," ",r.a.createElement("span",{style:{color:"blue",fontFamily:"Circular",cursor:"pointer"}},"terms and conditions"),"."))),r.a.createElement("div",{className:"submit"},r.a.createElement(f.b,{className:"submit-button".concat(N?" active":""),type:"submit",label:"Create account"})))))};function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),i=s[0],p=s[1],d=Object(n.useContext)(m.d).setLoader;return r.a.createElement("div",{className:"layout auth"},r.a.createElement("div",{className:"container card"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"logo"},"flyfy"),r.a.createElement("p",{className:"presentation"},"Welcome back. Please login to your account.")),r.a.createElement("form",{spellCheck:!1,onSubmit:function(e){e.preventDefault(),d("active"),u.a.post("/auth",F({},a,{remember:i})).then((function(e){var t=e.data;localStorage.token=t.token,window.location.pathname="/"})).catch((function(e){d("")}))},onChange:function(e){e.persist(),c((function(t){return F({},t,Object(E.a)({},e.target.name,e.target.value))}))}},r.a.createElement("div",{className:"credentials"},r.a.createElement(f.l,{align:"left",className:"auth-input",icon:r.a.createElement(O.a,{path:v.g,size:.7,color:"#303030"}),autoComplete:"on",type:"email",name:"email",placeholder:"E-mail",required:!0}),r.a.createElement(f.l,{align:"left",className:"auth-input",icon:r.a.createElement(O.a,{path:v.r,size:.7,color:"#303030"}),autoComplete:"on",type:"password",name:"password",placeholder:"Password",required:!0})),r.a.createElement("div",{className:"options"},r.a.createElement("div",{className:"checkbox-wrapper"},r.a.createElement(f.e,{onClick:function(){return p((function(e){return!e}))},active:i}),r.a.createElement("p",{onClick:function(){return p((function(e){return!e}))},className:"remember"},"Remember me")),r.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return console.log("forgot")}},"Forgot password?")),r.a.createElement("div",{className:"submit"},r.a.createElement(f.b,{className:"submit-button active",type:"submit",label:"Sign in"}),r.a.createElement(f.p,null),r.a.createElement("div",{className:"signup"},r.a.createElement("p",null,"Not a member yet?"," ",r.a.createElement("span",{onClick:function(){return window.location.pathname="/join"},style:{cursor:"pointer",color:"blue",fontFamily:"Circular"}},"Signup")))))))},W=(a(117),a(118),function(){return r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/signin",component:V}),r.a.createElement(i.a,{exact:!0,path:"/join",component:L}),r.a.createElement(i.a,{path:"/",component:R})))});o.a.render(r.a.createElement((function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({active:!1}),s=Object(l.a)(o,2),i=s[0],u=s[1],p=Object(n.useState)({}),d=Object(l.a)(p,2),b=d[0],E=d[1],g=Object(n.useState)([]),h=Object(l.a)(g,2),O=h[0],v=h[1];return r.a.createElement(m.d.Provider,{value:{setLoader:c}},r.a.createElement(m.e.Provider,{value:{setModal:u}},r.a.createElement(m.b.Provider,{value:{setCropper:E}},r.a.createElement(m.a.Provider,{value:{openRooms:O,setOpenRooms:v}},r.a.createElement(f.g,{data:b}),r.a.createElement(f.n,{active:i.active}),r.a.createElement(f.m,{className:a}),r.a.createElement(W,null)))))}),null),document.getElementById("root"))}],[[54,1,2]]]);
//# sourceMappingURL=main.ac5a8eaf.chunk.js.map
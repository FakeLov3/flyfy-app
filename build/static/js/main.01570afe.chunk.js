(this.webpackJsonpflyfy=this.webpackJsonpflyfy||[]).push([[0],[,,,,function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(76),function(e){return r.a.createElement("div",{className:"bar ".concat(e.className||"")},e.children)}),o=(a(77),function(e){return r.a.createElement("button",{className:"btn ".concat(e.className||""),style:e.style||{},type:e.type||"button",onClick:e.onClick||null},e.label||e.children||"Button")}),l=(a(78),function(e){return r.a.createElement("div",{style:e.style||{},className:"card ".concat(e.className||"")},e.children)}),i=(a(79),function(e){return r.a.createElement("div",{onClick:e.onClick,className:"checkbox".concat(e.active?" active":"")})}),s=a(15),u=a(8),m=a(1),f=a(5),p=a(19),d=a(7),b=a(3),E=a.n(b),h=a(2);a(82);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var v=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],i=a[1],b=Object(n.useState)([]),v=Object(m.a)(b,2),O=v[0],w=v[1],y=Object(n.useState)([]),j=Object(m.a)(y,2),N=j[0],C=j[1],k=Object(n.useContext)(f.c),S=Object(m.a)(k,2),x=S[0],A=S[1],P=Object(n.useContext)(f.d).setLoader,D=Object(n.useRef)(null),z=x.posts;return r.a.createElement(l,{className:"create-post"},r.a.createElement("div",{className:"head"},r.a.createElement("p",null,"Create new post")),r.a.createElement("div",{className:"post-content".concat(!N.length>0?" has-no-files":"")},r.a.createElement("div",{style:{padding:"12px 12px 0"}},r.a.createElement("div",{className:"text"},r.a.createElement(p.a,{value:c,onChange:function(e){return i(e.target.value)},spellCheck:"false",draggable:"false",placeholder:"Share it to the world!"}))),r.a.createElement("div",{className:"preview-wrapper"},N.map((function(e,t){return r.a.createElement("img",{alt:"preview",className:"preview",key:t,src:e.file})}))),r.a.createElement("div",{className:"action"},r.a.createElement(o,{onClick:function(){return D.current.click()}},r.a.createElement(E.a,{path:h.o,size:.7,color:"#ffffff"}),r.a.createElement("p",null,"Picture")),r.a.createElement(o,{onClick:function(){P("active"),i(""),w([]),C([]);var e=new FormData;e.append("text",c),O.forEach((function(t,a){return e.append("files[".concat(a,"]"),t)})),d.a.post("/createPost",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t=e.data;A((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{posts:[].concat(Object(s.a)(t),Object(s.a)(z))})}))})).catch((function(e){return console.error(e)})).finally((function(){return P("")}))},className:"post-btn",label:"Create post"}))),r.a.createElement("input",{className:"input-file",ref:D,type:"file",multiple:!0,onChange:function(e){for(var t=e.target,a=function(e){if(!O.some((function(a){return t.files[e].name===a.name}))){w((function(a){return[].concat(Object(s.a)(a),[t.files[e]])}));var a=new FileReader;a.onload=function(e){C((function(t){return[].concat(Object(s.a)(t),[{file:e.target.result}])}))},a.readAsDataURL(t.files[e])}},n=0;n<t.files.length;n++)a(n)}}))},O=a(45),w=a.n(O),y=(a(83),a(84),function(e){var t=e.data,a=t.active,n=t.src,c=t.crop,l=t.events,i=t.onFinish,s=t.onCancel;return r.a.createElement("div",{className:"react-crop".concat(a?" active":"")},r.a.createElement(w.a,Object.assign({className:"cropper",src:n,crop:c},l)),r.a.createElement("div",{className:"actions"},r.a.createElement(o,{onClick:i},"Save",r.a.createElement(E.a,{path:h.k,size:.7,color:"#ffffff"})),r.a.createElement(o,{onClick:s},"Cancel",r.a.createElement(E.a,{path:h.i,size:.7,color:"#ffffff"}))))});a(85);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var N=function(e){return r.a.createElement("div",{onClick:function(){return e.setActive((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{active:!e.active})}))},className:"dropdown-wrapper".concat(e.active?" active":"")},r.a.createElement("div",{style:{right:"calc(20% + ".concat(-8,"px)")},className:"dropdown"},r.a.createElement("div",{className:"header"},r.a.createElement("p",null,"Signed in as ",r.a.createElement("br",null),r.a.createElement("span",{style:{fontWeight:"bold"}},e.user))),r.a.createElement("div",{className:"dropdown-divider"}),e.items.map((function(e,t){return r.a.createElement("div",{key:t,onClick:e.onClick,className:"item"},r.a.createElement(E.a,{className:"icon",path:h.A,size:.7,color:"#303030"}),r.a.createElement("p",{className:"item-name"},e.name))}))))},C=a(46),k=a.n(C),S=a(14),x=a(20),A=a(17),P=a.n(A),D=a(47),z=(a(90),function(e){var t=e.post,a=Object(n.useState)(t.liked),c=Object(m.a)(a,2),o=c[0],i=c[1],u=Object(n.useState)(t.reactions||[]),f=Object(m.a)(u,2),p=f[0],b=f[1],g=Object(n.useState)(t.comments||[]),v=Object(m.a)(g,1)[0],O=Object(n.useState)(!0),w=Object(m.a)(O,2),y=w[0],j=w[1],N="".concat(o?p.length<2?"You liked this":2===p.length?"You and another person liked this":"You and ".concat(p.length-1," people liked this"):p.length>1?"".concat(p.length," likes"):p.length<1?"Be the first one to like this":"".concat(p.length," like")," ");return r.a.createElement(l,{className:"post".concat(y?" loading":"")},r.a.createElement("div",{className:"profile"},r.a.createElement(S.b,{to:"/user/".concat(t.user.user),className:"profile-pic"},r.a.createElement("img",{src:t.user.profilePic?"".concat("https://flyfy.herokuapp.com","/img?w=32&h=32&key=").concat(t.user.profilePic):P.a,alt:"profile-pic",onLoad:function(){return j(!1)}})),r.a.createElement("div",null,r.a.createElement(S.b,{style:{color:"#303030"},to:"/user/".concat(t.user.user)},r.a.createElement("p",{className:"post-user"},t.user.user)),r.a.createElement("p",{className:"post-date info"},Object(x.a)(t.createdAt)))),r.a.createElement("div",{className:"post-content"},t.text.length>0&&r.a.createElement("p",{className:"post-text"},t.text),t.images.length>0&&r.a.createElement("div",{className:"post-images"},r.a.createElement(D.Carousel,{showIndicators:t.images.length>1,showStatus:t.images.length>1,showThumbs:!1,emulateTouch:!0,swipeScrollTolerance:10,statusFormatter:function(e,t){return"".concat(e," / ").concat(t)}},t.images.map((function(e,t){return r.a.createElement("div",{key:t,className:"image"},r.a.createElement("img",{src:"".concat("https://flyfy.herokuapp.com","/img?w=580&key=").concat(e.image),alt:"post-".concat(t)}))}))))),r.a.createElement("div",{className:"post-status"},r.a.createElement("p",null,N),r.a.createElement("p",null,1===v.length?"".concat(v.length," comment"):"".concat(v.length," comments"))),r.a.createElement("div",{className:"grayline"}),r.a.createElement("div",{className:"post-footer"},r.a.createElement("div",{className:"action",onClick:function(){return function(e){d.a.post("/likePost",{post:e}).then((function(e){var t=e.data;b((function(e){return[].concat(Object(s.a)(e),[t])})),i(!0)})).catch((function(e){return console.error(e)}))}(t.id)}},r.a.createElement(E.a,{path:o?h.D:h.E,size:.7,color:"#303030"})),r.a.createElement("div",{className:"action"},r.a.createElement(E.a,{path:h.w,size:.7,color:"#303030"}))))}),R=function(e){var t=e.posts,a=e.status,n=e.overload;return r.a.createElement("div",{className:"posts ".concat(a," overload-").concat(n)},r.a.createElement("p",{className:"recent-posts"},"Recent posts"),t.map((function(e){return r.a.createElement(z,{key:e.id,post:e})})),r.a.createElement("img",{alt:"loader",src:k.a,className:"lil-loader"}),r.a.createElement("p",{className:"bottom-reached"},"Bottom reached"))};a(40);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var M=function(e){var t=Object(n.useState)(0),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useContext)(f.c),i=Object(m.a)(l,2),p=i[0],b=i[1],E=Object(n.useState)("oxe"),h=Object(m.a)(E,2),g=h[0],O=h[1],w=Object(n.useRef)(null),y=Object(n.useRef)(!1),j=p.limit,N=p.posts;Object(n.useEffect)((function(){return C(),function(){return window.onscroll=null}}),[]);var C=function(){O("loading"),d.a.get("/feed/".concat(c)).then((function(e){var t=e.data;O("success"),y.current=t.length<j||0===t.length,t.length>0&&(o((function(e){return e+j})),b((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{posts:[].concat(Object(s.a)(N),Object(s.a)(t))})})))})).catch((function(){return O("error")}))};return window.onscroll=function(){return!y.current&&window.scrollY+window.innerHeight+50>w.current.scrollHeight&&"loading"!==g&&C()},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"feed view",ref:w},r.a.createElement("main",{className:"main"},r.a.createElement(v,null),r.a.createElement(R,{posts:N,status:g,overload:y.current}))),!window.isMobile&&r.a.createElement(Z,null))},L=r.a.lazy((function(){return window.isMobile?a.e(7).then(a.bind(null,124)):a.e(4).then(a.bind(null,127))})),F=function(e){return r.a.createElement(n.Suspense,null,r.a.createElement(L,e))},U=a(50),V=a.n(U),I=function(e){return r.a.createElement(o,{onClick:e.onClick,style:W.buttonContainer},r.a.createElement("img",{alt:"Google",style:W.googleLogo,src:V.a}),r.a.createElement("p",{style:W.signInWithGoogle},"Sign in with Google"))},W={buttonContainer:{backgroundColor:"#ffffff"},googleLogo:{width:"16px",margin:"0",heigth:"auto"},signInWithGoogle:{margin:"auto",fontFamily:"Roboto",fontSize:12,fontWeight:"bold",color:"#505050"}},G=r.a.lazy((function(){return window.isMobile?a.e(6).then(a.bind(null,126)):a.e(5).then(a.bind(null,125))})),J=function(e){return r.a.createElement(n.Suspense,null,r.a.createElement(G,e))},H=(a(41),function(e){return r.a.createElement("input",{readOnly:e.readOnly||!1,onChange:e.onChange||null,onFocus:e.onFocus||null,onBlur:e.onBlur||null,style:e.style||{},spellCheck:e.spellCheck||"false",className:"_input ".concat(e.className||""),autoComplete:e.autoComplete||"off",type:e.type||"text",name:e.name||"",defaultValue:e.defaultValue||"",placeholder:e.placeholder||"",required:e.required||!1})}),K=function(e){return r.a.createElement("div",{style:e.style||{},className:"_search-input ".concat(e.className||"")},r.a.createElement(H,Object.assign({},e,{className:"_search",style:{order:"left"===e.align?1:0}})),e.icon||null)},q=a(51),T=a.n(q),Y=(a(97),function(e){return r.a.createElement("div",{className:"main-loader ".concat(e.className)},r.a.createElement("img",{alt:"loader",src:T.a}))}),X=(a(98),function(e){return r.a.createElement("div",{className:"modal-wrapper ".concat(e.active," ").concat(e.className||"")},r.a.createElement("div",{className:"modal"},e.children))}),Q=(a(99),function(e){var t=e.data,a=Object(n.useContext)(f.f),o=a.mobileSidebar,l=a.setMobileSidebar,i=[{name:"Feed",path:"/",icon:h.y,size:.7},{name:"Trending",path:"/trending",icon:h.p,size:.9},{name:"Messages",path:"/chat",icon:h.v,size:.65},{name:"Groups",path:"/groups",icon:h.b,size:.65,sub:[{name:"Create a group",path:"/groups/create",icon:h.b,size:.65}]},{name:"Settings",path:"/settings",icon:h.C,size:.65}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{className:"sidebar ".concat(window.isMobile?o?"mobile active":"mobile":"")},r.a.createElement(S.b,{style:{margin:window.isMobile?"48px 0 0":"0"},to:"/user/".concat(t.user),className:"profile-item item"},r.a.createElement("img",{src:t.profilePic||P.a,alt:"profile",className:"profile-icon item-icon"}),r.a.createElement("p",{className:"profile-name item-name"},t.user)),r.a.createElement("div",{className:"divider"}),i.map((function(e,t){return r.a.createElement(S.b,{to:e.path,className:"item".concat(window.location.pathname===e.path?" active":""),key:t},r.a.createElement(E.a,{className:"item-icon",path:e.icon,size:e.size,color:"#ffffff"}),r.a.createElement("p",{className:"item-name"},e.name))}))),r.a.createElement("div",{onClick:function(){return l(!1)},className:"mob-sidebar-wrapper ".concat(o?"active":"hidden")}))}),Z=(a(100),function(e){return r.a.createElement(c,{className:"suggestions-wrapper"},r.a.createElement("div",{className:"suggestions"},r.a.createElement(l,{className:"suggested-user"},r.a.createElement("p",null,"Opa")),r.a.createElement(l,{className:"suggested-user"},r.a.createElement("p",null,"Opa"))))});a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return v})),a.d(t,"f",(function(){return y})),a.d(t,"g",(function(){return N})),a.d(t,"h",(function(){return M})),a.d(t,"i",(function(){return F})),a.d(t,"o",(function(){return I})),a.d(t,"j",(function(){return J})),a.d(t,"k",(function(){return K})),a.d(t,"l",(function(){return Y})),a.d(t,"m",(function(){return X})),a.d(t,"n",(function(){return Q})),a.d(t,"p",(function(){return Z}))},function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"f",(function(){return s}));var n=a(0),r=Object(n.createContext)(),c=Object(n.createContext)(),o=Object(n.createContext)(),l=Object(n.createContext)(),i=Object(n.createContext)(),s=Object(n.createContext)()},,function(e,t,a){"use strict";var n=a(44),r=a.n(n);t.a=r.a.create({baseURL:"https://flyfy.herokuapp.com",headers:{authorization:localStorage.token||sessionStorage.token||null}})},,,,,,,,,,function(e,t){e.exports="data:image/png;base64,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"},,,function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=["January","February","March","April","May","June","July","August","September","October","November","December"],r=function(e){var t=new Date,a=new Date(e),r=a.getMinutes(),c=a.getHours(),o=a.getDate(),l=a.getMonth()+1,i=(t.getTime()-a.getTime())/1e3,s=i/60,u=s/60;return"".concat(i>10?i>59.9?s>59.9?u>23.9?"".concat(n[l-1],", ").concat(o<10?"0".concat(o):o," at ").concat(c<10?"0".concat(c):c,":").concat(r<10?"0".concat(r):r):"".concat(parseInt(u)," h"):"".concat(parseInt(s)," min"):"".concat(parseInt(i)," seconds ago"):"Now")}},,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){e.exports=a.p+"static/media/triangle.fd01991c.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/google.3ec228d3.svg"},function(e,t,a){e.exports=a.p+"static/media/bars.7b4b0bed.svg"},,function(e,t,a){e.exports=a(119)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),l=(a(58),a(1)),i=a(14),s=a(18),u=a(7),m=a(5),f=a(4),p=a(25),d=a.n(p),b=a(52),E=a(8),h=a(19),g=a(3),v=a.n(g),O=a(2),w=a(17),y=a.n(w);a(102);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=function(e){var t=Object(n.useState)({}),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)({}),s=Object(l.a)(i,2),p=s[0],g=s[1],w=Object(n.useState)(null),j=Object(l.a)(w,2),C=j[0],k=j[1],S=Object(n.useState)(null),x=Object(l.a)(S,2),A=x[0],P=x[1],D=Object(n.useState)(!0),z=Object(l.a)(D,2),R=z[0],B=z[1],M=Object(n.useRef)(null),L=Object(n.useRef)(null),F=Object(n.useContext)(m.b).setCropper,U=Object(n.useContext)(m.d).setLoader;Object(n.useEffect)((function(){U("active"),B(!0),F((function(e){return N({},e,{crop:{aspect:1,unit:"%",width:50,height:50,x:25,y:25},events:{onImageLoaded:W,onComplete:G,onChange:J},onFinish:q})})),V()}),[]);var V=function(){u.a.get("/user").then((function(e){var t=e.data;g(t),U(""),B(!1)})).catch((function(){B(!0),U("")}))},I=function(e){e.persist(),o((function(t){return N({},t,Object(E.a)({},e.target.name,"user"===e.target.name?e.target.value.toLowerCase():e.target.value))}))},W=function(e){F((function(e){return N({},e,{active:!0})})),L.current=e},G=function(e){return H(e)},J=function(e){return F((function(t){return N({},t,{crop:e})}))},H=function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(L&&t.width&&t.height)){e.next=5;break}return e.next=3,K(L.current,t,"".concat(Date.now(),".jpeg"));case 3:a=e.sent,k(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(e,t,a){var n=document.createElement("canvas"),r=e.naturalWidth/e.width,c=e.naturalHeight/e.height;return n.width=t.width,n.height=t.height,n.getContext("2d").drawImage(e,t.x*r,t.y*c,t.width*r,t.height*c,0,0,t.width,t.height),new Promise((function(e,t){n.toBlob((function(n){if(!n)return t(new Error("Empty canvas"));var r;n.name=a,window.URL.revokeObjectURL(r),r=window.URL.createObjectURL(n),P(n),e(r)}),"image/jpeg")}))},q=function(){return F((function(e){return N({},e,{active:!1})}))};return r.a.createElement("div",{className:"edit view"},r.a.createElement("div",{className:"main"},r.a.createElement(f.c,{className:"edit"},r.a.createElement("h1",null,"Edit your profile"),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{className:"edit-profile-pic"},r.a.createElement("p",{className:"label"},"Profile picture"),r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("img",{style:{opacity:R?0:1},alt:"preview-profile",ref:L,className:"card profile-pic",src:C||p.profilePic||y.a}),r.a.createElement(f.b,{onClick:function(){return M.current.click()}},"Edit",r.a.createElement(v.a,{path:O.z,size:.7,color:"#ffffff"})))),r.a.createElement("div",{className:"edit-profile-info"},r.a.createElement("form",{autoComplete:"new-password",spellCheck:!1},r.a.createElement("div",{className:"edit-wrapper"},[{name:"user",type:"text",placeholder:"Username"},{name:"name",type:"text",placeholder:"Name"}].map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",{className:"label"},e.placeholder),r.a.createElement(f.k,Object.assign({align:"left",className:"edit-input",value:p[e.name],defaultValue:p[e.name]||"",onChange:I},e,{required:!0})))})),r.a.createElement("p",{className:"label"},"Bio"),r.a.createElement("div",{className:"text"},r.a.createElement(h.a,{name:"bio",onChange:I,defaultValue:p.bio||"",spellCheck:"false",draggable:"false",placeholder:"Tell us a little about you!"})))))),r.a.createElement("div",{className:"edit-footer"},r.a.createElement(f.b,{onClick:function(e){e.preventDefault(),U("active");var t=new FormData;Object.keys(c).forEach((function(e){return t.append(e,c[e])})),A&&t.append("blob",A),u.a.post("/updateProfileInfo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){return window.location.pathname="/"})).catch((function(){return U("")}))}},"Save",r.a.createElement(v.a,{path:O.k,size:.7,color:"#ffffff"})),r.a.createElement(f.b,{onClick:function(){return window.location.pathname="/"}},"Cancel",r.a.createElement(v.a,{path:O.i,size:.7,color:"#ffffff"}))))),r.a.createElement("input",{className:"input-file",ref:M,type:"file",onChange:function(e){var t=e.target.files,a=new FileReader;a.onload=function(e){return F((function(t){return N({},t,{src:e.target.result})}))},a.readAsDataURL(t[0])}}))},k=function(){var e=Object(n.useState)({posts:[],limit:10}),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement(m.c.Provider,{value:[a,c]},r.a.createElement(f.h,null))},S=a(42),x=a.n(S),A=a(20),P=function(e){var t=e.data,a=Object(n.useContext)(m.d).setLoader,c=t.relationship,o=c.followsSessionUser,l=c.followedBySessionUser,s=l?{icon:O.c,label:"Unfollow"}:o&&!l?{icon:O.e,label:"Follow back"}:{icon:O.e,label:"Follow"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:"tooltip",place:"bottom",effect:"solid"}),r.a.createElement("div",{className:"main"},r.a.createElement(f.c,{className:"profile-info"},r.a.createElement("div",{className:"profile-pic"},r.a.createElement("img",{alt:"profile-img",className:"profile-base64",src:t.profilePic||y.a}),t.isUser&&r.a.createElement(i.b,{to:"/settings"},r.a.createElement(f.b,{onClick:function(){return a("active")}},r.a.createElement(v.a,{path:O.z,size:.7,color:"#ffffff"})))),r.a.createElement("div",{className:"profile-information"},r.a.createElement("h1",{className:"name"},t.name),r.a.createElement("h1",{className:"user"},"@",t.user),r.a.createElement("div",{className:"createdAt"},r.a.createElement(v.a,{path:O.j,size:.55,color:"#303030"}),r.a.createElement("p",null,"User since ",Object(A.a)(t.createdAt))),!t.isUser&&r.a.createElement("div",{className:"actions"},r.a.createElement(f.b,{className:"follow",onClick:function(){u.a.post("/follow",{following:t.user}).then((function(){return window.location.reload()})).catch((function(e){return console.error(e)}))}},r.a.createElement(v.a,{path:s.icon,size:.65,color:"#ffffff"}),r.a.createElement("p",null,s.label)),r.a.createElement("div",{"data-tip":"Send new message"},r.a.createElement(f.b,{onClick:function(){u.a.post("/createChat",{type:1,members:[t.user]}).then((function(e){console.log(e)})).catch((function(e){return console.error(e)}))}},r.a.createElement(v.a,{path:O.x,size:.65,color:"#ffffff"})))),t.bio&&r.a.createElement("p",{className:"bio"},r.a.createElement("span",{style:{fontWeight:"bold"}},"Bio:"),r.a.createElement("br",null),t.bio))),r.a.createElement(f.c,{className:"profile-actions"},r.a.createElement("div",{className:"profile-options"},r.a.createElement("p",null,"Options"),r.a.createElement(v.a,{path:O.u,size:.7,color:"#ffffff"})),r.a.createElement("div",{className:"profile-stats"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,t.posts.length),r.a.createElement("p",null,1===t.posts.length?"post":"posts")),r.a.createElement("div",{className:"grayline"}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,t.followedBy.length),r.a.createElement("p",null,1===t.followedBy.length?"follower":"followers")),r.a.createElement("div",{className:"grayline"}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,t.follows.length),r.a.createElement("p",null,"following"))),r.a.createElement("div",{className:"profile-feed"}))))},D=(a(114),function(e){var t=Object(n.useState)({}),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!0),s=Object(l.a)(i,2),f=s[0],p=s[1],d=Object(n.useContext)(m.d).setLoader,b=e.match.params.user;Object(n.useEffect)((function(){d("active"),E()}),[b]);var E=function(){u.a.get("user?username=".concat(b)).then((function(e){var t=e.data;console.log(t),o(t)})).catch((function(e){return console.error(e)})).finally((function(){d(""),p(!1)}))};return r.a.createElement("div",{className:"profile view"},!f&&r.a.createElement(P,{data:c}))}),z=(a(115),a(116),window.isMobile?r.a.createElement(r.a.Fragment,null):r.a.lazy((function(){return a.e(3).then(a.bind(null,128))}))),R=function(e){var t=Object(n.useState)({}),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useContext)(m.d).setLoader;return Object(n.useEffect)((function(){i("active"),u.a.get("/user").then((function(e){var t=e.data;return o(t)})).catch((function(){localStorage.removeItem("token"),window.location.replace("/signin")})).finally((function(){return i("")}))}),[]),r.a.createElement("div",{className:"layout dashboard"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(r.a.Fragment,null)},r.a.createElement(f.j,{data:c}),r.a.createElement("div",{className:"content"},r.a.createElement(f.n,{data:c}),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:k}),r.a.createElement(s.a,{exact:!0,path:"/settings",component:C}),r.a.createElement(s.a,{exact:!0,path:"/user/:user",component:D})),r.a.createElement(z,null),r.a.createElement(f.i,null))))};function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L=function(e){var t=Object(n.useState)({}),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!1),s=Object(l.a)(i,2),p=s[0],d=s[1],b=Object(n.useState)(!1),h=Object(l.a)(b,2),g=h[0],w=h[1],y=Object(n.useState)(!1),j=Object(l.a)(y,2),N=j[0],C=j[1],k=Object(n.useContext)(m.d).setLoader,S=[{name:"user",type:"text",placeholder:"Username",icons:[r.a.createElement(v.a,{style:{order:0},path:O.a}),r.a.createElement(v.a,{className:"error",style:{order:2,margin:0},path:O.f,color:"red"})]},{name:"email",type:"email",placeholder:"E-mail",icons:[r.a.createElement(v.a,{style:{order:0},path:O.g}),r.a.createElement(v.a,{className:"error",style:{order:2,margin:0},path:O.f,color:"red"})]},{name:"password",type:p?"text":"password",placeholder:"Password",icons:[r.a.createElement(v.a,{style:{order:0},path:O.r}),r.a.createElement(v.a,{onMouseUp:function(){return d(!1)},onMouseDown:function(){return d(!0)},onMouseLeave:function(){return d(!1)},style:{order:2,margin:0,cursor:"pointer"},path:p?O.n:O.m})]}],x={};S.map((function(e){return x[e.name]={status:"neutral"}}));var A=Object(n.useState)(x),P=Object(l.a)(A,2),D=P[0],z=P[1];Object(n.useEffect)((function(){var e=[g];for(var t in D)e.push("success"===D[t].status);C(e.every((function(e){return e})))}),[D,g]);var R=function(e){e.persist();var t=e.target.name;e.target.value.length>0&&u.a.get("/validate/".concat(t,"=").concat(e.target.value)).then((function(e){var a=e.data;return z((function(e){return M({},e,Object(E.a)({},t,{status:a.available?"success":"error",message:a.message}))}))})).catch((function(e){return console.error(e)}))};return r.a.createElement("div",{className:"layout auth"},r.a.createElement("div",{className:"container card"},r.a.createElement("div",{style:{marginBottom:12},className:"header"},r.a.createElement("h1",{className:"logo"},"Join our community")),r.a.createElement("form",{autoComplete:"new-password",spellCheck:!1,onSubmit:function(e){e.preventDefault(),k("active"),N&&u.a.post("/createUser",M({},c)).then((function(){window.location.pathname="/signin"})).catch((function(e){return k("")}))},onChange:function(e){e.persist(),o((function(t){return M({},t,Object(E.a)({},e.target.name,e.target.value))}))}},r.a.createElement("div",{className:"credentials"},S.map((function(e,t){var a=D[e.name].status;return r.a.createElement("div",{key:t},r.a.createElement(f.k,{onBlur:R,onChange:function(){return z((function(t){return M({},t,Object(E.a)({},e.name,{status:"neutral"}))}))},align:"left",className:"auth-input ".concat(a),icon:e.icons.map((function(e,t){var n=e.props,c=n.style,o=n.className;return r.a.createElement(v.a,Object.assign({key:t},n,{style:M({},c,{opacity:"error"===o?"error"===a?1:0:1,transition:"opacity 0.25s ease"}),size:.7,color:"error"===a?"red":"neutral"===a?"#303030":"green"}))})),type:e.type,name:e.name,placeholder:e.placeholder,required:!0}),r.a.createElement("p",{className:"message ".concat(a)},D[e.name].message))}))),r.a.createElement("div",{className:"options"},r.a.createElement("div",{style:{margin:"auto"},className:"checkbox-wrapper"},r.a.createElement(f.d,{onClick:function(){return w((function(e){return!e}))},active:g}),r.a.createElement("p",{style:{margin:"0 6px",textAlign:"center"}},"I have read and agree to the"," ",r.a.createElement("span",{style:{color:"blue",fontFamily:"Circular",cursor:"pointer"}},"terms and conditions"),"."))),r.a.createElement("div",{className:"submit"},r.a.createElement(f.b,{className:"submit-button".concat(N?" active":""),type:"submit",label:"Create account"})))))};function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(l.a)(o,2),s=i[0],p=i[1],d=Object(n.useContext)(m.d).setLoader;return r.a.createElement("div",{className:"layout auth"},r.a.createElement("div",{className:"container card"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"logo"},"flyfy"),r.a.createElement("p",{className:"presentation"},"Welcome back. Please login to your account.")),r.a.createElement("form",{spellCheck:!1,onSubmit:function(e){e.preventDefault(),d("active"),u.a.post("/auth",U({},a,{remember:s})).then((function(e){var t=e.data;localStorage.token=t.token,window.location.pathname="/"})).catch((function(e){d("")}))},onChange:function(e){e.persist(),c((function(t){return U({},t,Object(E.a)({},e.target.name,e.target.value))}))}},r.a.createElement("div",{className:"credentials"},r.a.createElement(f.k,{align:"left",className:"auth-input",icon:r.a.createElement(v.a,{path:O.g,size:.7,color:"#303030"}),autoComplete:"on",type:"email",name:"email",placeholder:"E-mail",required:!0}),r.a.createElement(f.k,{align:"left",className:"auth-input",icon:r.a.createElement(v.a,{path:O.r,size:.7,color:"#303030"}),autoComplete:"on",type:"password",name:"password",placeholder:"Password",required:!0})),r.a.createElement("div",{className:"options"},r.a.createElement("div",{className:"checkbox-wrapper"},r.a.createElement(f.d,{onClick:function(){return p((function(e){return!e}))},active:s}),r.a.createElement("p",{onClick:function(){return p((function(e){return!e}))},className:"remember"},"Remember me")),r.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return console.log("forgot")}},"Forgot password?")),r.a.createElement("div",{className:"submit"},r.a.createElement(f.b,{className:"submit-button active",type:"submit",label:"Sign in"}),r.a.createElement(f.o,null),r.a.createElement("div",{className:"signup"},r.a.createElement("p",null,"Not a member yet?"," ",r.a.createElement("span",{onClick:function(){return window.location.pathname="/join"},style:{cursor:"pointer",color:"blue",fontFamily:"Circular"}},"Signup")))))))},I=(a(117),a(118),function(){return r.a.createElement(i.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/signin",component:V}),r.a.createElement(s.a,{exact:!0,path:"/join",component:L}),r.a.createElement(s.a,{path:"/",component:R})))});window.isMobile=window.innerWidth<=768;o.a.render(r.a.createElement((function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({active:!1}),i=Object(l.a)(o,2),s=i[0],u=i[1],p=Object(n.useState)({}),d=Object(l.a)(p,2),b=d[0],E=d[1],h=Object(n.useState)([]),g=Object(l.a)(h,2),v=g[0],O=g[1],w=Object(n.useState)(!1),y=Object(l.a)(w,2),j=y[0],N=y[1];return r.a.createElement(m.d.Provider,{value:{setLoader:c}},r.a.createElement(m.e.Provider,{value:{setModal:u}},r.a.createElement(m.f.Provider,{value:{mobileSidebar:j,setMobileSidebar:N}},r.a.createElement(m.b.Provider,{value:{setCropper:E}},r.a.createElement(m.a.Provider,{value:{openRooms:v,setOpenRooms:O}},r.a.createElement(f.f,{data:b}),r.a.createElement(f.m,{active:s.active}),r.a.createElement(f.l,{className:a}),r.a.createElement(I,null))))))}),null),document.getElementById("root"))}],[[53,1,2]]]);
//# sourceMappingURL=main.01570afe.chunk.js.map
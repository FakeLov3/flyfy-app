(this.webpackJsonpflyfy=this.webpackJsonpflyfy||[]).push([[3],{121:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a(8),c=a(1),o=a(0),l=a.n(o),s=a(7),i=a(4),m=a(5),f=a(17),u=a.n(f),p=function(e){var t=e.data,a=Object(o.useContext)(m.a).setOpenRooms;return l.a.createElement("div",{className:"friends-list"},t.followers.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"label"},"Followers"),l.a.createElement("div",{className:"divider"}),t.followers.map((function(e,t){return l.a.createElement("div",{key:t,onClick:function(){return function(e){console.log(e)}(e)},className:"profile-item item"},l.a.createElement("img",{src:e.profilePic?"".concat("https://flyfy.herokuapp.com","/img?w=32&h=32&key=").concat(e.profilePic):u.a,alt:"profile",className:"profile-icon item-icon"}),l.a.createElement("p",{className:"profile-name item-name"},e.user),l.a.createElement("div",{className:"user-status"}))})),l.a.createElement("div",{className:"divider"})):l.a.createElement(l.a.Fragment,null),t.rooms.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"label"},"Recent messages"),l.a.createElement("div",{className:"divider"}),t.rooms.map((function(e,t){return l.a.createElement("div",{key:t,onClick:function(){return function(e){a((function(t){return[].concat(Object(r.a)(t),[{type:"connection",room:e.chatId,name:e.chatName}])}))}(e)},className:"profile-item item"},l.a.createElement("img",{src:u.a,alt:"profile",className:"profile-icon item-icon"}),l.a.createElement("p",{className:"profile-name item-name"},e.chatName||e.chatId))}))):l.a.createElement(l.a.Fragment,null))},d=a(3),h=a.n(d),E=a(2);a(121);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(e){var t=Object(o.useState)({followers:[],rooms:[]}),a=Object(c.a)(t,2),n=a[0],m=a[1];return Object(o.useEffect)((function(){s.a.get("/friends").then((function(e){var t=e.data,a=[];t.rooms.forEach((function(e){var t=e.chatId,n=e.chatType,c=e.chatName,o=e.userId,l=e.name,s=e.user;a[t]=b({},a[t]||{},{chatId:t,chatType:n,chatName:c}),a[t].users=[].concat(Object(r.a)(a[t].users||[]),[{userId:o,name:l,user:s}])})),m(b({},t,{rooms:a}))})).catch((function(e){return console.error(e)}))}),[]),l.a.createElement(i.a,{className:"friends-wrapper"},l.a.createElement("div",{className:"friends"},l.a.createElement(p,{data:n}),l.a.createElement(i.l,{placeholder:"Find a flyer...",icon:l.a.createElement(h.a,{className:"icon search-icon",path:E.s,size:.8,color:"#303030"}),className:"search"})))}}}]);
//# sourceMappingURL=3.3d55ec4a.chunk.js.map
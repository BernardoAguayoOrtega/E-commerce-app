(this.webpackJsonpeccomerce=this.webpackJsonpeccomerce||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),m=a(7),o=a(16),u=r.a.createContext();function i(e){var t=e.children,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],m=c[1];return Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){return m(e)}))}),[]),r.a.createElement(u.Provider,{value:{photos:l}},t)}a(22);var s=a(1);var E=function(){return r.a.createElement("header",null,r.a.createElement(m.b,{to:"/"}," ",r.a.createElement("h2",null,"Pic Some")," "),r.a.createElement(m.b,{to:"/cart"}," ",r.a.createElement("i",{className:"ri-shopping-cart-line ri-fw ri-2x"})," "))};var h=function(){return r.a.createElement("main",{className:"cart-page"},r.a.createElement("h1",null,"Check out"))};var f=function(e){var t=e.className,a=e.img;return r.a.createElement("div",{className:"".concat(t," image-container")},r.a.createElement("img",{src:a.url,className:"image-grid"}))};function p(e){return e%5===0?"big":e%6===0?"wide":void 0}var b=function(){var e=Object(n.useContext)(u).photos.map((function(e,t){return r.a.createElement(f,{key:e.id,img:e,className:p(t)})}));return r.a.createElement("main",{className:"photos"},e)};var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(b,null)),r.a.createElement(s.a,{exact:!0,path:"/cart"},r.a.createElement(h,null))))};l.a.render(r.a.createElement(i,null,r.a.createElement(m.a,null,r.a.createElement(g,null))),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a5d38f9e.chunk.js.map
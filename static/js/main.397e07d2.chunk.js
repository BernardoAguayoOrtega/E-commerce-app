(this.webpackJsonpeccomerce=this.webpackJsonpeccomerce||[]).push([[0],{21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),l=a(7),o=a(20),m=a(15),u=a(14),s=r.a.createContext();function f(e){var t=e.children,a=Object(n.useState)([]),c=Object(u.a)(a,2),i=c[0],l=c[1],f=Object(n.useState)([]),E=Object(u.a)(f,2),d=E[0],v=E[1];return Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),r.a.createElement(s.Provider,{value:{photos:i,toggleFavorite:function(e){var t=i.map((function(t){return t.id===e?Object(m.a)(Object(m.a)({},t),{},{isFavorite:!t.isFavorite}):t}));l(t)},addToCart:function(e){v((function(t){return[].concat(Object(o.a)(t),[e])}))},cartItems:d,removeToCart:function(e){var t=d.filter((function(t){return t.id!==e.id}));v(t)}}},t)}a(26);var E=a(1);var d=function(){var e=Object(n.useContext)(s).cartItems;return r.a.createElement("header",null,r.a.createElement(l.b,{to:"/"}," ",r.a.createElement("h2",null,"Pic Some")," "),r.a.createElement(l.b,{to:"/cart"}," ",e.length<1||void 0==e?r.a.createElement("i",{className:"ri-shopping-cart-line ri-fw ri-2x"}):r.a.createElement("i",{className:"ri-shopping-cart-fill ri-fw ri-2x"})," "))};var v=function(e){var t=e.item,a=Object(n.useContext)(s).removeToCart;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("i",{className:"ri-delete-bin-line",onClick:function(){return a(t)}}),r.a.createElement("img",{src:t.url,width:"130px"}),r.a.createElement("p",null,"$5.99"))};var h=function(){var e=Object(n.useContext)(s).cartItems,t=e.map((function(e){return r.a.createElement(v,{key:e.id,item:e})}));return r.a.createElement("main",{className:"cart-page"},r.a.createElement("h1",null,"Check out"),e.length<1||void 0==e?r.a.createElement("h3",null,"You don't have any element in your cart, go back if you have add someone"):t,r.a.createElement("p",{className:"total-cost"},"Total: "),r.a.createElement("div",{className:"order-button"},r.a.createElement("button",null,"Place Order")))};var b=function(e){var t=e.className,a=e.img,c=Object(n.useContext)(s),i=c.toggleFavorite,l=c.addToCart,o=c.cartItems,m=c.removeToCart;return r.a.createElement("div",{className:"".concat(t," image-container")},r.a.createElement("img",{src:a.url,className:"image-grid"}),a.isFavorite?r.a.createElement("i",{className:"ri-heart-fill favorite",onClick:function(){return i(a.id)}}):r.a.createElement("i",{className:"ri-heart-line favorite",onClick:function(){return i(a.id)}}),o.some((function(e){return e.id===a.id}))?r.a.createElement("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return m(a)}}):r.a.createElement("i",{className:"ri-add-circle-line cart",onClick:function(){return l(a)}}))};function p(e){return e%5===0?"big":e%6===0?"wide":void 0}var g=function(){var e=Object(n.useContext)(s).photos.map((function(e,t){return r.a.createElement(b,{key:e.id,img:e,className:p(t)})}));return r.a.createElement("main",{className:"photos"},e)};var C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/"},r.a.createElement(g,null)),r.a.createElement(E.a,{exact:!0,path:"/cart"},r.a.createElement(h,null))))};i.a.render(r.a.createElement(f,null,r.a.createElement(l.a,{basename:"/"},r.a.createElement(C,null))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.397e07d2.chunk.js.map
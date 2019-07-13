(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{115:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n(77),l=n(0),c=n.n(l),o=n(10),i=n(7),u=n(16);function m(){var e=Object(r.a)(["\n  margin: 0 auto;\n  div {\n    height: 30px;\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid ",";\n    &:first-child {\n      padding-left: 5px;\n      width: 290px;\n    }\n    &:nth-child(2) {\n      padding-right: 5px;\n      width: 30px;\n      justify-content: flex-end;\n    }\n    &:nth-child(3) {\n      padding-right: 5px;\n      width: 70px;\n      justify-content: flex-end;\n    }\n    &:nth-child(odd) {\n      background-color: ",";\n      color: ",";\n    }\n    &:nth-child(even) {\n      background-color: ",";\n      color: ",";\n    }\n  }\n"]);return m=function(){return e},e}var d=Object(i.default)(u.Flex)(m(),function(e){return e.theme.colors.greenWhite},function(e){return e.theme.colors.orange},function(e){return e.theme.colors.green},function(e){return e.theme.colors.green},function(e){return e.theme.colors.orange}),s=function(e){var t=e.title,n=e.qty,r=e.total;return c.a.createElement(d,null,c.a.createElement("div",null,t),c.a.createElement("div",null,n),c.a.createElement("div",null,"kr ".concat(r)))},p=n(14);function x(){var e=Object(r.a)(["\n  margin-top: 30px;\n  @media (min-width: 769px) {\n    width: 1024px;\n    margin: 0 auto;\n  }\n  @media (max-width: 768px) {\n    input {\n      width: 75vw;\n    }\n    textarea {\n      width: 90vw;\n      margin-left: 7px;\n    }\n  }\n  .confirm {\n    margin: 20px auto;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 24px;\n    color: ",";\n    background-color: ",";\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"]);return x=function(){return e},e}function h(){var e=Object(r.a)(["\n  @media (min-width: 769px) {\n    height: 350px;\n  }\n  @media (max-width: 768px) {\n    height: 250px;\n  }\n\n  div {\n    height: 30px;\n  }\n"]);return h=function(){return e},e}var f=Object(i.default)(u.Card)(h()),g=Object(i.default)(function(e){var t=e.className,n=Object(l.useContext)(p.a),r=n.isLaptop,i=n.totalPrice,m=n.orderList,d=n.orderForm,x=n.setOrderForm,h=n.validateOrderForm,g=n.orderId;return console.log("orderId=  ",g),console.log("orderForm= ",d),g.length>0?c.a.createElement(o.a,{to:"/Sweet-for-happiness/checkout/goNorway".concat(g)}):c.a.createElement("div",{className:t},c.a.createElement(u.Flex,{flexDirection:["column","row"],justifyContent:["","space-around"]},c.a.createElement(f,null,c.a.createElement(u.Heading,{width:["95vw","440px"],bg:"greenWhite",my:1},c.a.createElement(u.Flex,{justifyContent:"center"},"Recipient")),c.a.createElement(u.Flex,null,c.a.createElement(u.Text,{width:"70px",ml:["5px",""]},c.a.createElement(u.Flex,{alignItems:"center"}," Name")),c.a.createElement("input",{type:"text",placeholder:"write your name",size:"45",value:d.name,onChange:function(e){return x(Object(a.a)({},d,{user:Object(a.a)({},d.user,{name:e.target.value})}))}})),c.a.createElement(u.Flex,null,c.a.createElement(u.Text,{width:"70px",ml:["5px",""]},c.a.createElement(u.Flex,{alignItems:"center"}," E-mail")),c.a.createElement("input",{type:"email",placeholder:"write your E-mail",size:"45",value:d.email,onChange:function(e){return x(Object(a.a)({},d,{user:Object(a.a)({},d.user,{email:e.target.value})}))}})),c.a.createElement(u.Flex,null,c.a.createElement(u.Text,{width:"70px",ml:["5px",""]},c.a.createElement(u.Flex,{alignItems:"center"},"Tel")),c.a.createElement("input",{type:"tel",placeholder:"write your phone number",size:"45",value:d.tel,onChange:function(e){return x(Object(a.a)({},d,{user:Object(a.a)({},d.user,{tel:e.target.value})}))}})),c.a.createElement(u.Flex,null,c.a.createElement(u.Text,{width:"70px",ml:["5px",""]},c.a.createElement(u.Flex,{alignItems:"center"},"Address")),c.a.createElement("input",{type:"text",placeholder:"write your address",size:"45",value:d.address,onChange:function(e){return x(Object(a.a)({},d,{user:Object(a.a)({},d.user,{address:e.target.value})}))}})),c.a.createElement("div",null,c.a.createElement(u.Text,{width:"70px",ml:["5px",""]},c.a.createElement(u.Flex,{alignItems:"flex-end"},"Message")),c.a.createElement("textarea",{placeholder:"Message...",rows:"4",cols:"57",value:d.message,onChange:function(e){return x(Object(a.a)({},d,{message:e.target.value}))}}))),c.a.createElement(u.Flex,{order:["-1","1"]},c.a.createElement(u.Card,{width:["95vw","390px"]},c.a.createElement(u.Heading,{bg:"greenWhite",my:1},c.a.createElement(u.Flex,{justifyContent:"center"},"Order")),m.map(function(e){return c.a.createElement(s,{key:e.id,title:e.product.title,price:e.product.price,total:e.final_total,qty:e.qty})}),c.a.createElement(u.Box,{bg:"greenWhite",width:["95vw","390px"],fontSize:"18px",my:1},c.a.createElement(u.Flex,{justifyContent:"space-between"},c.a.createElement(u.Box,null,c.a.createElement(u.Flex,null,c.a.createElement(u.Text,{mr:2},"price:"),c.a.createElement("div",null,"kr ".concat(i)))),c.a.createElement(u.Box,null,c.a.createElement(u.Flex,null,c.a.createElement(u.Text,{mr:2},"shipment:"),c.a.createElement("div",null,"kr 0"))),c.a.createElement(u.Box,null,c.a.createElement(u.Flex,null,c.a.createElement(u.Text,{mr:2},"Total:"),c.a.createElement("div",null,"kr ".concat(i)))))),r&&c.a.createElement("div",{className:"confirm",onClick:function(){return h(d)},onKeyDown:h,role:"button",tabIndex:"0"},0!==m.length&&c.a.createElement(c.a.Fragment,null,"Confirm Order")))),!r&&c.a.createElement("div",{className:"confirm",onClick:function(){return h(d)},onKeyDown:h,role:"button",tabIndex:"0"},0!==m.length&&c.a.createElement(c.a.Fragment,null,"Confirm Order"))))})(x(),function(e){return e.theme.colors.orange},function(e){return e.theme.colors.green});g.displayName="Checkout";t.default=g},76:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return r})},77:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(76);function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Object(r.a)(e,t,n[t])})}return e}}}]);
//# sourceMappingURL=9.2e7795df.chunk.js.map
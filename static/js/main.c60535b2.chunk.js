(this["webpackJsonprandom-quote"]=this["webpackJsonprandom-quote"]||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){e.exports=a(47)},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(19),r=a.n(o),l=a(3),u=a(20),i=a.n(u),m=(a(18),a(4)),s=a(7),d=a(21),E=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],b=function(e){var t=e.quotes,a=(e.bgColor,e.setBgColor),o=function(e){return Math.floor(Math.random()*e)+1},r=t[o(102)],u=Object(n.useState)([r]),i=Object(l.a)(u,2),b=(i[0],i[1]);return c.a.createElement(c.a.Fragment,null,r&&c.a.createElement("div",{id:"inner-box",className:"inner-box"},c.a.createElement("p",{id:"text",style:{fontSize:"30px"}},c.a.createElement(m.a,{icon:s.a,className:"iconspace"})," ",r.quote," ",c.a.createElement(m.a,{icon:s.b,className:"iconspace"})),c.a.createElement("p",{id:"author",style:{fontSize:"20px"}},"- ",r.author," -"),c.a.createElement("button",{id:"new-quote",onClick:function(){console.log("button clicked!"),b(t[o(102)]),a(E[o(11)])}},"Get a new quote!"),c.a.createElement("a",{href:"https://twitter.com/intent/tweet?text=".concat(r.quote," ").concat(r.author),target:"_blank",id:"tweet-quote"},c.a.createElement(m.a,{icon:d.a,size:"2x",color:"#00acee"}))))},f=function(){return c.a.createElement("div",{style:{color:"white"}},c.a.createElement("p",null,"Email me: areumjo1@gmail.com"),c.a.createElement("p",null,"\xa9 2020 Areum Jo"))};var p=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(["#16a085"]),u=Object(l.a)(r,2),m=u[0],s=u[1];return Object(n.useEffect)((function(){i.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){o(e.data.quotes)})).catch((function(e){return console.log("Error fetching json data")}))}),[]),c.a.createElement("div",{className:"App",id:"quote-box",style:{backgroundColor:m}},c.a.createElement("header",{className:"App-header"},c.a.createElement("p",null,"Random Quote Machine"),c.a.createElement("p",null,"to your ",c.a.createElement("code",null,"Twitter"))),a?c.a.createElement(b,{quotes:a,bgColor:m,setBgColor:s}):c.a.createElement("p",null,"Loading your quote..."),c.a.createElement(f,null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.c60535b2.chunk.js.map
(this["webpackJsonpst-randomizer"]=this["webpackJsonpst-randomizer"]||[]).push([[0],{17:function(e,n,t){e.exports=t(28)},22:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(15),c=t.n(o),l=t(8),i=t(1);t(22);var u=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Pick a cohort:"),r.a.createElement("ul",null,e.cohorts.map((function(e){var n="/".concat(e);return r.a.createElement("li",{key:e},r.a.createElement(l.b,{to:n},e))}))))},m=t(12);var s=function(e){var n=Object(a.useState)([""]),t=Object(m.a)(n,2),o=t[0],c=t[1],l=Object(a.useState)(e.students),i=Object(m.a)(l,2),u=i[0];return i[1],r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("button",{onClick:function(){var e=Math.round(Math.random()*(u.length-1));c([u[e]])}},"Get a random student!"),r.a.createElement("button",{onClick:function(){for(var e=u,n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*n),a=e[n];e[n]=e[t],e[t]=a}var o=e.map((function(e,n){return r.a.createElement("li",{key:n},e)}));c(o)}},"Shuffle class!")),r.a.createElement("div",{className:"randStu"},r.a.createElement("ol",null,o.map((function(e){return e})))))};var h=function(){var e=["Levin","Shane","Martin","David","Josh","Branden","Anthony","Margaret","Alice","Elaine","Sameh","Barent","Tanner","Han","Alpha","Channee","Steven","Yoel","Cristina","Nicholas","Subrata","Rohun","Lizz","Philip","Irene"],n=["Chris B","Chris S","Connie","Danny","Dylan","Erik","John","Mac","Melissa","Pete","Shawhien","Solomon","Tin"],t=["SEIR-713","SEI-29"];return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,{basename:"student-randomizer"},r.a.createElement(l.b,{to:"/",className:"headerLink"},r.a.createElement("h1",null,"Student Randomizer")),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/SEIR-713",render:function(){return r.a.createElement(s,{students:e})}}),r.a.createElement(i.a,{path:"/SEI-29",render:function(){return r.a.createElement(s,{students:n})}}),r.a.createElement(i.a,{path:"/",render:function(){return r.a.createElement(u,{cohorts:t})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.a1d0f88e.chunk.js.map
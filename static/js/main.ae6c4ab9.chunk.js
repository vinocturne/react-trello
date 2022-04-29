(this["webpackJsonpreact-trello"]=this["webpackJsonpreact-trello"]||[]).push([[0],{92:function(e,n,t){"use strict";t.r(n);var r,o=t(15),a=t(0),i=t.n(a),c=t(22),d=t.n(c),l=t(28),b=t(16),s=t(9),p=t(2),u=t(8),j=t(5),g=t(35),x=Object(l.b)({key:"toDo",default:{"To Do":[],Doing:[],Done:[]}}),h=t(3),f=b.c.div(r||(r=Object(o.a)(["\n    padding: 10px 10px;\n    background-color: ",";\n    box-shadow: ",";\n    border-radius: 5px;\n    margin-bottom: 5px;\n"])),(function(e){return e.isDragging?"#00a8ff":e.theme.cardColor}),(function(e){return e.isDragging?"0px 2px 5px rgba(0, 0, 0, 0.5)":"none"}));function O(e){var n=e.toDoId,t=e.toDoText,r=e.index;return Object(h.jsx)(g.b,{draggableId:n+"",index:r,children:function(e,n){return Object(h.jsx)(f,Object(p.a)(Object(p.a)(Object(p.a)({isDragging:n.isDragging,ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:t}))}},n)}var m,v,y,k,w=i.a.memo(O),D=t(51),I="todo-list",S=function(){var e=localStorage.getItem(I);return e?JSON.parse(e):null},q=function(e){localStorage.setItem(I,JSON.stringify(e))},C=b.c.div(m||(m=Object(o.a)(["\n    padding: 10px 0px;\n    background-color: ",";\n    border-radius: 5px;\n    min-height: 300px;\n    display: flex;\n    flex-direction: column;\n    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,\n        rgba(0, 0, 0, 0.23) 0px 6px 6px;\n"])),(function(e){return e.theme.boardColor})),T=b.c.h1(v||(v=Object(o.a)(["\n    text-align: center;\n    margin-bottom: 10px;\n    font-weight: 500;\n"]))),P=b.c.div(y||(y=Object(o.a)(["\n    height: 100%;\n    background-color: ",";\n    flex-grow: 1;\n    transition: background-color 0.2s ease-in-out;\n    padding: 20px;\n"])),(function(e){return e.isDraggingOver?"#b2bec3":e.isDraggingFromThis?"#dcdde1":"transparent"})),N=b.c.form(k||(k=Object(o.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    input {\n        height: 30px;\n        width: 100%;\n        padding: 5px;\n        margin: 5px;\n        border-radius: 15px;\n        border: none;\n    }\n"])));var z,E,H,J=function(e){var n=e.toDos,t=e.boardId,r=e.index,o=Object(D.a)(),a=o.register,i=o.setValue,c=o.handleSubmit,d=Object(l.d)(x),b=function(e){var n=e.toDo,r={id:Date.now(),text:n};d((function(e){var n=Object(p.a)(Object(p.a)({},e),{},Object(s.a)({},t,[].concat(Object(u.a)(e[t]),[r])));return q(n),n})),i("toDo","")};return Object(h.jsx)(g.b,{draggableId:t,index:r,children:function(e){return Object(h.jsxs)(C,Object(p.a)(Object(p.a)(Object(p.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:[Object(h.jsx)(T,{children:t}),Object(h.jsx)(N,{onSubmit:c(b),children:Object(h.jsx)("input",Object(p.a)(Object(p.a)({},a("toDo",{required:!0})),{},{type:"text",placeholder:"Add task on ".concat(t)}))}),Object(h.jsx)(g.c,{droppableId:t,children:function(e,t){return Object(h.jsxs)(P,Object(p.a)(Object(p.a)({isDraggingOver:t.isDraggingOver,isDraggingFromThis:Boolean(t.draggingFromThisWith),ref:e.innerRef},e.droppableProps),{},{children:[n.map((function(e,n){return Object(h.jsx)(w,{index:n,toDoId:e.id,toDoText:e.text},e.id)})),e.placeholder]}))}})]}))}},t)},R=t(120),F=t(122),M=t(69),B=t.n(M),L=t(119),V=b.c.div(z||(z=Object(o.a)(["\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    width: 60px;\n    height: 60px;\n    object-fit: cover;\n"]))),W={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},A=b.c.input(E||(E=Object(o.a)(["\n    width: 100%;\n    height: 30px;\n"]))),G=b.c.form(H||(H=Object(o.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n"])));var K,Q,U=function(){var e=Object(D.a)(),n=e.register,t=e.setValue,r=e.handleSubmit,o=Object(l.c)(x),a=Object(j.a)(o,2),c=a[0],d=a[1],b=i.a.useState(!1),u=Object(j.a)(b,2),g=u[0],f=u[1],O=function(){return f(!1)};return Object(h.jsxs)(V,{children:[Object(h.jsx)(R.a,{"aria-label":"done",color:"success",name:"create",onClick:function(){return f(!0)},children:Object(h.jsx)(B.a,{fontSize:"large",color:"action"})}),Object(h.jsx)(L.a,{open:g,onClose:O,children:Object(h.jsxs)(F.a,{sx:W,children:[Object(h.jsx)("h1",{children:"Create Task"}),Object(h.jsx)(G,{onSubmit:r((function(e){var n=e.taskName,r=Object(p.a)(Object(s.a)({},n,[]),c);d(r),t("taskName",""),q(r),O()})),children:Object(h.jsx)(A,Object(p.a)(Object(p.a)({},n("taskName",{required:!0})),{},{type:"text",placeholder:"Write a task name without number"}))})]})})]})},X=b.c.div(K||(K=Object(o.a)(["\n    display: flex;\n    max-width: 700px;\n    width: 100%;\n    margin: 0 auto;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n"]))),Y=b.c.div(Q||(Q=Object(o.a)(["\n    /* display: flex; */\n    /* flex-wrap: wrap; */\n    /* justify-content: flex-start; */\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 10px;\n    width: 100%;\n"])));var Z,$=function(){var e=Object(l.c)(x),n=Object(j.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){null!=S&&r(S)}),[]),Object(h.jsxs)(g.a,{onDragEnd:function(e){var n=e.destination,t=e.source,o=e.type,a=e.draggableId;n&&("task"===o?r((function(e){console.log(e);var r=Object.keys(e);r.splice(t.index,1),r.splice(null===n||void 0===n?void 0:n.index,0,a);var o={};return r.forEach((function(n){o[n]=e[n]})),q(o),o})):((null===n||void 0===n?void 0:n.droppableId)===t.droppableId&&r((function(e){var r=Object(u.a)(e[t.droppableId]),o=r[t.index];r.splice(t.index,1),r.splice(null===n||void 0===n?void 0:n.index,0,o);var a=Object(p.a)(Object(p.a)({},e),{},Object(s.a)({},t.droppableId,r));return q(a),a})),n.droppableId!==t.droppableId&&r((function(e){var r,o=Object(u.a)(e[t.droppableId]),a=o[t.index],i=Object(u.a)(e[n.droppableId]);o.splice(t.index,1),i.splice(null===n||void 0===n?void 0:n.index,0,a);var c=Object(p.a)(Object(p.a)({},e),{},(r={},Object(s.a)(r,t.droppableId,o),Object(s.a)(r,n.droppableId,i),r));return q(c),c}))))},children:[Object(h.jsx)(X,{children:Object(h.jsx)(g.c,{droppableId:"task",type:"task",direction:"horizontal",children:function(e){return Object(h.jsxs)(Y,Object(p.a)(Object(p.a)({},e.droppableProps),{},{ref:e.innerRef,children:[Object.keys(t).map((function(e,n){return Object(h.jsx)(J,{boardId:e,toDos:t[e],index:n},e)})),e.placeholder]}))}})}),Object(h.jsx)(U,{})]})},_=Object(b.b)(Z||(Z=Object(o.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:black;\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}));d.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(b.a,{theme:{bgColor:"#e58e26",boardColor:"#fad390",cardColor:"white"},children:[Object(h.jsx)(_,{}),Object(h.jsx)($,{})]})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.ae6c4ab9.chunk.js.map
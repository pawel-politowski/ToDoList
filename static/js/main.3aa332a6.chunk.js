(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{18:function(n,e,t){n.exports=t(32)},23:function(n,e,t){},24:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(7),o=t.n(i),l=(t(23),t(24),t(8)),u=function(n){return n.taskList},c=function(n){var e=[];return n.displayAll?e=u(n):n.displayDoneOnly?e=function(n){return n.taskList.filter((function(n){return!0===n.done}))}(n):n.displayUndoneOnly&&(e=function(n){return n.taskList.filter((function(n){return!1===n.done}))}(n)),e.filter((function(e){return e.title.toLowerCase().includes(n.inputSearchTask.toLowerCase())}))},s=function(n){return n.isLoading},d=function(n){return n.isError},f=function(n){return n.inputNewTask},p=function(n){return n.inputSearchTask},y=t(1),b=t(17),k=function(n){return Object.entries(n||{}).map((function(n){var e=Object(b.a)(n,2),t=e[0],r=e[1];return"object"===typeof r?Object(y.a)({},r,{key:t}):{key:t,value:r}}))},m="https://todolist-f1f9a.firebaseio.com/tasks/",E="SET_FETCHED_TASKS",h="SET_LOADIND_TASKS",g="SET_ERROR_TASKS",T="INPUT_NEW_TASK",O="INPUT_SEARCH_TASK",x="DISPLAY_ALL",S="DISPLAY_DONE",w="DISPLAY_UNDONE",v=function(){return function(n){return fetch(m+".json").then((function(n){return n.json()})).then((function(n){return k(n)})).then((function(e){return n(j(e))})).catch((function(e){return n(D())}))}},j=function(n){return{type:E,value:n}},D=function(){return{type:g}},L=function(n){return{type:T,value:n}},_=t(2),A=t(3);function N(){var n=Object(_.a)(["\t\n\tbackground-color: #D7DDE8;\n\tborder-radius:6px;\n\tborder:1px solid gray;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#1f1b1f;\n\tfont-family: Arial;\n\tfont-size: 1.125rem;\n\tfont-weight:bold;\n\tpadding: 0.5rem;\n\ttext-decoration:none;         \n"]);return N=function(){return n},n}function z(){var n=Object(_.a)(["\t\n\tbackground-color: #D7DDE8;\n\tborder-radius:6px;\n\tborder:1px solid gray;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#1f1b1f;\n\tfont-family:Arial;\n\tfont-size: 1.125rem;\n\tfont-weight:bold;\n\tpadding: 0.5rem;\n\ttext-decoration:none;    \n"]);return z=function(){return n},n}function C(){var n=Object(_.a)(["\n  border: none;\n  border-radius: 5px;\n  color: white;\n  padding: 10px;\n  text-align: center;\n  font-weight: bold;\n  text-decoration: none;\n  display: inline-block;\n  min-width: 50px;\n  align-self: center;\n  font-size: 1.5rem;\n  margin: 4px 2px;\n  cursor: pointer;\n  background-color: #757F9A;\n"]);return C=function(){return n},n}function I(){var n=Object(_.a)(["\n\tbox-shadow:inset 0px 1px 0px 0px #ffffff;\n\tbackground: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);\n\tbackground-color: #f9f9f9;\n\tborder-radius:6px;\n\tborder:1px solid gray;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#1f1b1f;\n\tfont-family:Arial;\n\tfont-size: 1.125rem;\n\tfont-weight:bold;\n\tpadding: 0.5rem;\n\ttext-decoration:none;\n    text-shadow:0px 1px 0px #ffffff;       \n"]);return I=function(){return n},n}function U(){var n=Object(_.a)(["\n  margin-right: 0.5rem;\n  padding: 0.5rem;\n  font-size: 1.125rem;\n  border: 1px solid gray;    \n  border-radius: 5px;\n  width: 50%;\n  \n"]);return U=function(){return n},n}function P(){var n=Object(_.a)(["\n    text-align: center;\n    max-width: 1000px;\n    display: flex;\n    flex-direction: column;\n    background-color: #eef2f3;    \n    border: 1px solid black;\n    border-radius: 10px;   \n    padding: 10px;\n    margin: 2rem auto;    \n"]);return P=function(){return n},n}var R=A.a.div(P()),K=A.a.input(U()),J=A.a.button(I()),W=A.a.button(C()),X=A.a.button(z()),F=A.a.button(N()),Y=Object(l.b)((function(n){return{taskList:u(n),filteredTasks:c(n),isLoading:s(n),isError:d(n),inputNewTask:f(n),inputSearchTask:p(n)}}),(function(n){return{getTasks:function(){return n(v())},displayAll:function(){return n({type:x})},displayDone:function(){return n({type:S})},displayUndone:function(){return n({type:w})},setInputNewTask:function(e){return n(L(e))},setInputSearchTask:function(e){return n({type:O,value:e})},sendNewTask:function(e){return n((t=e,function(n){var e={title:t,done:!1};fetch(m+".json",{method:"POST",body:JSON.stringify(e)}).then((function(){return n(L(""))})).then((function(){return n(v())}))}));var t},changeTaskStatus:function(e){return n(function(n){return function(e){var t={title:n.title,done:!n.done};fetch(m+n.key+".json",{method:"PUT",body:JSON.stringify(t)}).then((function(){return e(v())}))}}(e))},deleteTask:function(e){return n(function(n){return function(e){fetch(m+n.key+".json",{method:"DELETE"}).then((function(){return e(v())}))}}(e))}}}))((function(n){return Object(r.useEffect)((function(){n.getTasks()})),a.a.createElement(R,null,a.a.createElement("h2",null,"TO DO LIST"),a.a.createElement("form",{style:{display:"flex",justifyContent:"center"}},a.a.createElement(K,{placeholder:"wpisz zadanie",value:n.inputNewTask,onChange:function(e){return n.setInputNewTask(e.target.value)}}),a.a.createElement("br",null),a.a.createElement(J,{onClick:function(){return n.sendNewTask(n.inputNewTask)}},"Dodaj do listy!")),a.a.createElement("br",null),a.a.createElement("hr",null),a.a.createElement("div",null,a.a.createElement(K,{placeholder:"szukaj...",value:n.inputSearchTask,onChange:function(e){return n.setInputSearchTask(e.target.value)}}),a.a.createElement(J,null,"Szukaj zadania")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",null," Sortuj zadania:",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(W,{onClick:n.displayAll},"Wszystkie"),a.a.createElement(W,{onClick:n.displayDone},"Wykonane"),a.a.createElement(W,{onClick:n.displayUndone},"Do wykonania")),a.a.createElement("br",null),n.isError?"error!":n.isLoading?"loading...":n.taskList.length>0?a.a.createElement("ul",{style:{listStyleType:"none"}},n.filteredTasks.length>0?n.filteredTasks.map((function(e){return a.a.createElement("li",{key:e.key},a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement(X,{onClick:function(){return n.changeTaskStatus(e)}},"Zmie\u0144 status"),a.a.createElement("div",{style:{textDecoration:e.done?"line-through":"none",fontStyle:"bold",cursor:"pointer",padding:"5px",fontFamily:"Arial",fontSize:"1.5rem",fontWeight:"bold"},onClick:function(){return n.changeTaskStatus(e)}},e.done?" ".concat(e.title):"".concat(e.title)),a.a.createElement(F,{onClick:function(){return n.deleteTask(e)}},"Usu\u0144 z listy")),a.a.createElement("hr",null))})):a.a.createElement("p",null,"Brak wynik\xf3w do wy\u015bwietlenia, zmie\u0144 kryteria wyszukiwania!")):a.a.createElement("p",null))}));var B=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(Y,null))},H=t(6),V={taskList:[],isLoading:!0,isError:!1,displayAll:!0,displayDoneOnly:!1,displayUndoneOnly:!1,inputNewTask:"",inputSearchTask:""},M=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E:return Object(y.a)({},n,{taskList:e.value,isLoading:!1,isError:!1});case h:return Object(y.a)({},n,{taskList:[],isLoading:!0,isError:!1});case g:return Object(y.a)({},n,{taskList:[],isLoading:!1,isError:!0});case x:return Object(y.a)({},n,{displayAll:!0,displayDoneOnly:!1,displayUndoneOnly:!1});case S:return Object(y.a)({},n,{displayAll:!1,displayDoneOnly:!0,displayUndoneOnly:!1});case w:return Object(y.a)({},n,{displayAll:!1,displayDoneOnly:!1,displayUndoneOnly:!0});case T:return Object(y.a)({},n,{inputNewTask:e.value});case O:return Object(y.a)({},n,{inputSearchTask:e.value});default:return n}},Z=t(16);var q,G=Object(H.d)(M,q,Object(H.c)(Object(H.a)(Z.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:G},a.a.createElement(B,null))),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3aa332a6.chunk.js.map
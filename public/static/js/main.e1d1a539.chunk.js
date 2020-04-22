(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{35:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(32),r=a.n(o),s=(a(40),a(7)),c=a(2),i=a(11),u=a(9),m=a(12),d=a(13),p=a(16),E=a(15),v=a(14),g=a.n(v),h=Object(n.createContext)(),f=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={user:null,todos:[],isLoggedIn:!1,signupError:!1,loginError:!1,username:"",password:"",password2:"",axios:g.a.create({baseURL:"https://mern-to-do-list.herokuapp.com/",withCredentials:!0})},e.handleChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(u.a)({},n,l))},e.signup=function(t){t.preventDefault();var a=e.state,n=a.username,l=a.password;l===a.password2?e.state.axios.post("/auth/signup",{username:n,password:l}).then((function(t){var a=t.user;return e.setState({isLoggedIn:!0,user:a})})).catch((function(t){return e.setState({isLoggedIn:!1})})):e.setState({signupError:!0}),e.setState({username:"",password:"",password2:""})},e.login=function(t){t.preventDefault();var a=e.state,n=a.username,l=a.password;e.state.axios.post("/auth/login",{username:n,password:l}).then((function(t){var a=t.user;e.setState({isLoggedIn:!0,user:a})})).catch((function(t){e.setState({isLoggedIn:!1,loginError:!0})})),e.setState({username:"",password:""})},e.logout=function(){e.state.axios.post("/auth/logout",{}).then((function(e){return e.data})),e.setState({isLoggedIn:!1,user:null})},e}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement(h.Provider,{value:Object(i.a)({},this.state,{handleChange:this.handleChange,login:this.login,signup:this.signup,logout:this.logout})},this.props.children)}}]),a}(n.Component);var b=function(){return l.a.createElement(h.Consumer,null,(function(e){var t=e.isLoggedIn,a=e.logout;return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"logo-div"},l.a.createElement(c.b,{to:"/"},"TO DO")),t?l.a.createElement("div",{className:"auth-div"},l.a.createElement("div",null,l.a.createElement(c.b,{to:"/add"},l.a.createElement("button",{className:"nav-button"},"Task manager"))),l.a.createElement("div",null,l.a.createElement("button",{onClick:a,className:"nav-button"},"Logout"))):l.a.createElement("div",{className:"auth-div"},l.a.createElement("div",null,l.a.createElement(c.b,{to:"/login"},l.a.createElement("button",{className:"nav-button"},"login"))),l.a.createElement("div",null,l.a.createElement(c.b,{to:"/signup"},l.a.createElement("button",{className:"nav-button"},"Signup"))))))}))};var N=function(){return l.a.createElement("div",{className:"section-div"},l.a.createElement("h1",{className:"title"},"WELCOME"),l.a.createElement("hr",null),l.a.createElement("p",{className:"home-paragraph"},'This is a simple "TO DO" fullstack web application built using the MERN stack.',l.a.createElement("br",null),l.a.createElement("br",null),"Special attention was given to Context API.",l.a.createElement("br",null),l.a.createElement("br",null),"Enjoy!"))};var k=function(){return l.a.createElement(h.Consumer,null,(function(e){var t=e.username,a=e.password,n=e.password2,o=e.handleChange,r=e.signup,s=e.signupError;return l.a.createElement("div",{className:"section-div"},l.a.createElement("h1",{className:"title"},"SIGNUP"),l.a.createElement("hr",null),l.a.createElement("form",{onSubmit:r},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",name:"username",value:t,onChange:o})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:a,onChange:o})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Confirm password:"),l.a.createElement("input",{type:"password",name:"password2",value:n,onChange:o})),l.a.createElement("button",{className:"submit-button",type:"submit"},"Signup")),s?l.a.createElement("div",{className:"form-validation"},l.a.createElement("span",null,"The passwords you entered do not match."),l.a.createElement("br",null),l.a.createElement("br",null),"Try again!"):null)}))};var T=function(){return l.a.createElement(h.Consumer,null,(function(e){var t=e.username,a=e.password,n=e.handleChange,o=e.login,r=e.loginError;return l.a.createElement("div",{className:"section-div"},l.a.createElement("h1",{className:"title"},"LOGIN"),l.a.createElement("hr",null),l.a.createElement("form",{onSubmit:o},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",name:"username",value:t,onChange:n})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:a,onChange:n})),l.a.createElement("button",{className:"submit-button",type:"submit"},"Login")),r?l.a.createElement("div",{className:"form-validation"},l.a.createElement("span",null,"The credentials you entered are incorrect."),l.a.createElement("br",null),l.a.createElement("br",null),"Try again!"):null)}))},C=a(18),w=Object(n.createContext)(),S=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={user:null,todos:[],name:"",description:"",pendingToggle:!0,solvedToggle:!1,updateToggle:!1,axios:g.a.create({baseURL:"https://mern-to-do-list.herokuapp.com/",withCredentials:!0})},e.componentDidMount=function(){e.state.axios.get("/auth").then((function(t){var a=t.data;e.setState({user:a.username,todos:a.todo})}))},e.handleChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(u.a)({},n,l))},e.togglePendingFunc=function(){e.setState({pendingToggle:!e.state.pendingToggle,solvedToggle:!1})},e.toggleSolvedFunc=function(){e.setState({solvedToggle:!e.state.solvedToggle,pendingToggle:!1})},e.addTodo=function(t){t.preventDefault();var a=e.state,n=a.name,l=a.description,o=(new Date).toDateString();e.state.axios.post("/todos",{name:n,description:l,createdTimestamp:o}).then((function(t){var a=t.data,n=[].concat(Object(C.a)(e.state.todos),[a]);e.setState({name:"",description:"",todos:n})})).catch((function(e){return console.log(e)}))},e.updateTodo=function(t){var a=e.state,n=a.name,l=a.description;e.state.axios.put("/todos/".concat(t),{name:n,description:l}).then((function(a){a.data;var o=e.state.todos.filter((function(e){return t===e._id}));o[0].name=n,o[0].description=l,e.setState({name:"",description:"",todos:[].concat(Object(C.a)(e.state.todos),[o])})})).catch((function(e){return console.log(e)}))},e.setTask=function(t){e.state.todos.filter((function(a){return t===a._id&&e.setState({name:a.name,description:a.description}),a}))},e.solveOneTodo=function(t){var a=t._id,n=t.name,l=t.description,o=(new Date).toDateString();e.state.axios.put("/todos/".concat(a),{name:n,description:l,solvedTimestamp:o,solved:!0}).then((function(t){t.data;var n=e.state.todos.filter((function(e){return a===e._id}));n[0].solved=!0,n[0].solvedTimestamp=o,e.setState({todos:[].concat(Object(C.a)(e.state.todos),[n])})})).catch((function(e){return console.log(e)}))},e.deleteTodo=function(t){e.state.axios.delete("/todos/".concat(t),{}).then((function(a){a.data;var n=e.state.todos.filter((function(e){return e._id!==t}));e.setState({name:"",description:"",todos:n})})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement(w.Provider,{value:Object(i.a)({},this.state,{handleChange:this.handleChange,addTodo:this.addTodo,updateTodo:this.updateTodo,deleteTodo:this.deleteTodo,togglePendingFunc:this.togglePendingFunc,toggleSolvedFunc:this.toggleSolvedFunc,solveOneTodo:this.solveOneTodo,setTask:this.setTask})},this.props.children)}}]),a}(n.Component);var O=function(){return l.a.createElement(w.Consumer,null,(function(e){var t=e.todos,a=e.solveOneTodo,n=e.setTask;return l.a.createElement("div",null,l.a.createElement("p",null,"Your pending tasks"),t.map((function(e){return!1===e.solved?l.a.createElement("div",{className:"task-card",key:e._id},l.a.createElement("div",{className:"task-content"},l.a.createElement("div",{className:"task-item-title"},e.name),l.a.createElement("div",{className:"task-item"},e.description),l.a.createElement("div",{className:"task-item-date"},l.a.createElement("span",null,"Created on"),": ",e.createdTimestamp)),l.a.createElement("div",null,l.a.createElement(c.b,{to:"/update/".concat(e._id)},l.a.createElement("button",{className:"task-button",onClick:function(){n(e._id)}},"Update task")),l.a.createElement("button",{className:"task-button",onClick:function(){a(e)}},"Solve task"))):null})))}))};var y=function(){return l.a.createElement(w.Consumer,null,(function(e){var t=e.todos,a=e.setTask;return l.a.createElement("div",null,l.a.createElement("p",null,"Your solved tasks"),t.map((function(e){return!0===e.solved?l.a.createElement("div",{className:"task-card",key:e._id},l.a.createElement("div",{className:"task-content"},l.a.createElement("div",{className:"task-item-title"},e.name),l.a.createElement("div",{className:"task-item"},e.description),l.a.createElement("div",{className:"task-item-date"},l.a.createElement("span",null,"Created on"),": ",e.createdTimestamp),l.a.createElement("div",{className:"task-item-date"},l.a.createElement("span",null,"Solved on"),": ",e.solvedTimestamp)),l.a.createElement(c.b,{to:"/update/".concat(e._id)},l.a.createElement("button",{className:"task-button",onClick:function(){a(e._id)}},"Update task"))):null})))}))};var x=function(){return l.a.createElement(w.Consumer,null,(function(e){var t=e.togglePendingFunc,a=e.toggleSolvedFunc,n=e.pendingToggle,o=e.solvedToggle;return l.a.createElement("div",null,l.a.createElement("div",{className:"toggle-div"},l.a.createElement("button",{className:"toggle-button",onClick:t}," ",n?l.a.createElement("div",null,"Hide pending tasks"):l.a.createElement("div",null,"Show pending tasks")),l.a.createElement("button",{className:"toggle-button",onClick:a},o?l.a.createElement("div",null,"Hide solved tasks"):l.a.createElement("div",null,"Show solved tasks"))),n?l.a.createElement(O,null):null,o?l.a.createElement(y,null):null)}))};var j=function(){return l.a.createElement(w.Consumer,null,(function(e){var t=e.name,a=e.description,n=e.handleChange,o=e.addTodo;return l.a.createElement("div",{className:"section-div"},l.a.createElement("h1",{className:"title"},"TASK MANAGER"),l.a.createElement("hr",null),l.a.createElement("form",{onSubmit:o},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title:"),l.a.createElement("input",{type:"text",name:"name",value:t,onChange:n})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description:"),l.a.createElement("textarea",{name:"description",value:a,onChange:n})),l.a.createElement("button",{className:"add-button",type:"submit"},"Add Task")),l.a.createElement("hr",null),l.a.createElement(x,null))}))};var L=function(e){return l.a.createElement(w.Consumer,null,(function(t){var a=e.match.params.id,n=t.name,o=t.description,r=t.deleteTodo,s=t.updateTodo,i=t.handleChange;return l.a.createElement("div",{className:"section-div"},l.a.createElement("h1",{className:"title"},"Update task"),l.a.createElement("hr",null),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title:"),l.a.createElement("input",{type:"text",name:"name",value:n,onChange:i})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description:"),l.a.createElement("textarea",{name:"description",value:o,onChange:i})),l.a.createElement("div",{className:"account-toggles"},l.a.createElement(c.b,{to:"/add"},l.a.createElement("button",{className:"delete-button",onClick:function(){r(a)}},"Delete")),l.a.createElement(c.b,{to:"/add"},l.a.createElement("button",{className:"task-button",onClick:function(){s(a)},type:"submit"},"Save")))))}))};var D=function(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer-div"},l.a.createElement("p",{className:"credits"}," \xa9 Created by JP Hrubant"),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/jphrubant"},l.a.createElement("button",{className:"nav-button"},"Github"))))},I=a(17);var _=function(e){var t=e.component,a=Object(I.a)(e,["component"]);return l.a.createElement(h.Consumer,null,(function(e){var n=e.isLoggedIn;return l.a.createElement(s.b,Object.assign({},a,{render:function(e){return n?l.a.createElement(s.a,{to:"/add"}):n?void 0:l.a.createElement(t,e)}}))}))};var P=function(e){var t=e.component,a=Object(I.a)(e,["component"]);return l.a.createElement(h.Consumer,null,(function(e){var n=e.isLoggedIn;return l.a.createElement(s.b,Object.assign({},a,{render:function(e){return n?l.a.createElement(t,e):n?void 0:l.a.createElement(s.a,{to:"/login"})}}))}))};var A=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null,l.a.createElement(S,null,l.a.createElement(b,null),l.a.createElement(s.d,null,l.a.createElement(s.b,{exact:!0,path:"/",component:N}),l.a.createElement(_,{exact:!0,path:"/signup",component:k}),l.a.createElement(_,{exact:!0,path:"/login",component:T}),l.a.createElement(P,{exact:!0,path:"/add",component:j}),l.a.createElement(P,{exact:!0,path:"/update/:id",component:L})))),l.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(c.a,null,l.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.e1d1a539.chunk.js.map
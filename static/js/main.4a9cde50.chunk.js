(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(22)},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),c=n.n(r),i=n(7),l=n(1),d=n(2),s=n(4),u=n(3),p=n(5),m=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todo,n=t.completed,a=t.id,r=t.title;return o.a.createElement("li",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.props.handleChange(a)}}),o.a.createElement("button",{className:"btn-style",onClick:function(){return e.props.deleteTodo(a)}},"X"),o.a.createElement("span",{style:n?{fontStyle:"italic",color:"#c5e2d2",textDecoration:"line-through"}:null},r))}}]),t}(o.a.Component),h=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.todos.map(function(t){return o.a.createElement(m,{key:t.id,todo:t,handleChange:e.props.handleChange,deleteTodo:e.props.deleteTodo})}))}}]),t}(o.a.Component),f=function(){return o.a.createElement("header",{style:{backgroundColor:"#678c89",color:"#fff",padding:"10px 15px"}},o.a.createElement("h1",{style:{fontSize:"25px",lineHeight:"1.447em",margin:"0px"}},"Simple Todo App"))},b=n(12),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},n.onChange=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"form-container",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",placeholder:"Add Todo...",className:"input-text",name:"title",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"input-submit"}))}}]),t}(a.Component),j=n(6),O=n.n(j),y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[{id:O.a.v4(),title:"Setup development environment",completed:!0},{id:O.a.v4(),title:"Develop website and add content",completed:!1},{id:O.a.v4(),title:"Deploy to live server",completed:!1}]},n.handleChange=function(e){n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},n.deleteTodo=function(e){n.setState({todos:Object(i.a)(n.state.todos.filter(function(t){return t.id!==e}))})},n.addTodo=function(e){var t={id:O.a.v4(),title:e,completed:!1};n.setState({todos:[].concat(Object(i.a)(n.state.todos),[t])})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(f,null),o.a.createElement(v,{addTodo:this.addTodo}),o.a.createElement(h,{todos:this.state.todos,handleChange:this.handleChange,deleteTodo:this.deleteTodo}))}}]),t}(o.a.Component);n(21);c.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.4a9cde50.chunk.js.map
(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{26:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),s=n(11),u=n(3),o=n(4),b=n(6),l=n(5),d=n(10),h=n(7),m=n.n(h),j=n(0),p=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.nameInputId=m.a.generate(),e.numberInputId=m.a.generate(),e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(d.a)({id:m.a.generate()},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(j.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=function(e){var t=e.name,n=e.number;return Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:[t,": ",n]})})},O=function(e){var t=e.contacts;return Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)(f,{number:e.number,name:e.name},e.id)}))})},g=function(e){var t=e.value,n=e.onChange;return Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})},v=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmitHandler=function(t){var n=t.id,a=t.name,r=t.number;e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[{id:n,name:a,number:r}])}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContacts=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.getVisibleContacts();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{contacts:t,onSubmit:this.formSubmitHandler}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(g,{value:n,onChange:this.changeFilter}),Object(j.jsx)(O,{contacts:a,onChange:this.changeFilter})]})}}]),n}(a.Component);n(25);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.eef2c60d.chunk.js.map
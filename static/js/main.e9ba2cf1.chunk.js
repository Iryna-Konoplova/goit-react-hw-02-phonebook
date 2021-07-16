(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filterLabel:"filter_filterLabel__CfUvj",filterInput:"filter_filterInput__3cRgO"}},15:function(t,e,n){t.exports={contactList:"contactList_contactList__V96l9"}},2:function(t,e,n){t.exports={form:"ContactForm_form__32BnP",formLabel:"ContactForm_formLabel__4Bzbc",formInput:"ContactForm_formInput__3euKp",buttonSubmit:"ContactForm_buttonSubmit__2zkFY"}},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=n(16),s=n(4),l=n(5),u=n(7),m=n(6),b=n(13),f=n(14),d=n.n(f),h=n(2),j=n.n(h),p=n(0),_=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(b.a)({id:d.a.generate()},a,c))},t.findByName=function(e){return t.props.contacts.some((function(t){return t.name===e}))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;t.findByName(n)?alert("".concat(n," is already in contacts!")):(t.props.onSubmit(t.state),t.reset())},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.form,children:[Object(p.jsxs)("label",{className:j.a.formLabel,children:["Name",Object(p.jsx)("input",{className:j.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(p.jsxs)("label",{className:j.a.formLabel,children:["Number",Object(p.jsx)("input",{className:j.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(p.jsx)("button",{type:"submit",className:j.a.buttonSubmit,children:"Add contact"})]})}}]),n}(a.Component),C=n(8),O=n.n(C),x=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDeletContact;return Object(p.jsxs)("li",{className:O.a.contactListItem,children:[Object(p.jsxs)("p",{className:O.a.contact,children:[" ",e,": ",n]}),Object(p.jsx)("button",{className:O.a.buttonDelete,type:"button",onClick:function(){return c(a)},children:"Delete"})]})},v=n(15),g=n.n(v),N=function(t){var e=t.contacts,n=t.onDeletContact;return Object(p.jsx)("ul",{className:g.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsx)(x,{id:e,name:a,number:c,onDeletContact:n},e)}))})},L=n(11),S=n.n(L),y=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:S.a.filterLabel,children:["Find contacts by name",Object(p.jsx)("input",{className:S.a.filterInput,type:"text",name:"filter",value:e,onChange:n})]})},I=n(9),A=n.n(I),k=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.formSubmitHandler=function(e){var n=e.id,a=e.name,c=e.number;t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{id:n,name:a,number:c}])}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return Object(p.jsxs)("div",{className:A.a.container,children:[Object(p.jsx)("h1",{className:A.a.title,children:"Phonebook"}),Object(p.jsx)(_,{contacts:e,onSubmit:this.formSubmitHandler}),Object(p.jsx)("h2",{className:A.a.subtitle,children:"Contacts"}),Object(p.jsx)(y,{value:n,onChange:this.changeFilter}),Object(p.jsx)(N,{contacts:a,onChange:this.changeFilter,onDeletContact:this.deleteContact})]})}}]),n}(a.Component);n(30);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={contactListItem:"contactListItem_contactListItem__3oE_k",contact:"contactListItem_contact__1-pnI",buttonDelete:"contactListItem_buttonDelete__1x3ag"}},9:function(t,e,n){t.exports={container:"App_container__3_1A1",title:"App_title__XJXMq",subtitle:"App_subtitle__NnugU"}}},[[31,1,2]]]);
//# sourceMappingURL=main.e9ba2cf1.chunk.js.map
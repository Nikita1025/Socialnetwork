"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[841],{6589:function(a,s,e){e.d(s,{II:function(){return m},gx:function(){return g}});var n=e(1413),i=e(5987),r=(e(2791),"FormsControls_formControl__5Q0CF"),t="FormsControls_error__oBpjX",l=e(7391),d=e(184),c=["input","meta","child"],o=["input","meta","child"],u=function(a){var s=a.meta.touched&&a.meta.error;return(0,d.jsxs)("div",{className:r+" "+(s?t:""),children:[(0,d.jsx)("div",{children:a.children}),s&&(0,d.jsx)("span",{children:a.meta.error})]})},m=function(a){var s=a.input,e=(a.meta,a.child,(0,i.Z)(a,c));return(0,d.jsx)(u,(0,n.Z)((0,n.Z)({},a),{},{children:(0,d.jsx)(l.Z,(0,n.Z)((0,n.Z)({style:{minWidth:"550px"},id:"standard-basic",label:"New post",variant:"outlined"},s),e))}))},g=function(a){var s=a.input,e=(a.meta,a.child,(0,i.Z)(a,o));return(0,d.jsx)(u,(0,n.Z)((0,n.Z)({},a),{},{children:(0,d.jsx)(l.Z,(0,n.Z)((0,n.Z)({style:{minWidth:"550px"},id:"standard-basic",label:"New message",variant:"outlined"},s),e))}))}},841:function(a,s,e){e.r(s),e.d(s,{default:function(){return j}});e(2791);var n={dialogs:"Dialogs_dialogs__f1MMU",dialogsItems:"Dialogs_dialogsItems__ZnfV0",active:"Dialogs_active__2c96L",dialog:"Dialogs_dialog__gRIjm",addContent:"Dialogs_addContent__n3kkz",messageContainer:"Dialogs_messageContainer__+vwKN",messageBox:"Dialogs_messageBox__4AVRz",NavLink:"Dialogs_NavLink__lSj0Q",avatar:"Dialogs_avatar__+rOlY"},i=e(2426),r=e(184),t=function(a){return(0,r.jsx)("div",{className:n.dialog+" "+n.active,children:(0,r.jsxs)(i.OL,{className:n.NavLink,to:"/dialogs/6"+a.id,children:[(0,r.jsx)("img",{className:n.avatar,src:a.avatar,alt:"avatar"}),a.name]})})},l=function(a){return(0,r.jsxs)("div",{className:n.messageContainer,children:[(0,r.jsx)("img",{className:n.avatar,src:a.avatar,alt:"avatar"}),(0,r.jsx)("div",{className:n.messageBox,children:(0,r.jsx)("span",{children:a.message})})]})},d=e(2558),c=e(6139),o=e(704),u=e(6589),m=e(3079),g=e(9373),h=(0,m.D)(50),v=(0,o.Z)({form:"dialogAddMessageForm"})((function(a){return(0,r.jsxs)("form",{className:n.addContent,onSubmit:a.handleSubmit,children:[(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{component:u.gx,validate:[m.C,h],name:"newMessageBody",placeholder:"Enter your message"})}),(0,r.jsx)("div",{children:(0,r.jsx)(g.Z,{variant:"contained",type:"submit",style:{marginLeft:"15px"},children:"Send"})})]})})),_=e(7964),x=e(364),f=e(9473),j=(0,e(7781).qC)((0,x.$j)((function(a){return{MessagesPage:a.messagesPage,isAuth:a.auth.isAuth}}),(function(a){return{SandMessage:function(s){a((0,f.fi)(s))}}})))((function(a){var s=a.MessagesPage,e=a.SandMessage,i=s.dialogs.map((function(a){return(0,r.jsx)(t,{name:a.name,id:a.id,avatar:a.avatar},a.id)})),c=s.messages.map((function(a){return(0,r.jsx)(l,{message:a.message,id:a.id,avatar:a.avatar},a.id)}));return a.isAuth?(0,r.jsxs)("div",{children:[(0,r.jsx)(_.Z,{}),(0,r.jsxs)("div",{className:n.dialogs,children:[(0,r.jsx)("div",{className:n.dialogsItems,children:i}),(0,r.jsxs)("div",{className:n.messages,children:[(0,r.jsx)("div",{style:{color:"white"},children:c}),(0,r.jsx)(v,{onSubmit:function(a){e(a.newMessageBody)}})]})]})]}):(0,r.jsx)(d.l_,{to:"/Login"})}))},7964:function(a,s,e){e.d(s,{Z:function(){return d}});e(2791);var n="Nav_container__ngNCO",i="Nav_ul__W+OFc",r="Nav_li__IEPlJ",t="Nav_a__cntv9",l=e(184),d=function(){return(0,l.jsx)("div",{className:n,children:(0,l.jsxs)("ul",{className:i,children:[(0,l.jsx)("li",{className:r,children:(0,l.jsx)("a",{href:"/profile",className:t,children:"Profile"})}),(0,l.jsx)("li",{className:r,children:(0,l.jsx)("a",{href:"/dialogs",className:t,children:"Messages"})}),(0,l.jsx)("li",{className:r,children:(0,l.jsx)("a",{href:"/users",className:t,children:"Users"})})]})})}},3079:function(a,s,e){e.d(s,{C:function(){return n},D:function(){return i}});var n=function(a){if(!a)return"Field is required"},i=function(a){return function(s){if(s.length>a)return"Max length is ".concat(a," symbols")}}}}]);
//# sourceMappingURL=841.b36231c9.chunk.js.map
import{r as e,j as s,Q as t}from"./vendor-dc3232a5.js";import{a as r,j as a}from"./HomeDark-3a7b5e62.js";import"./index-43814410.js";const o={_origin:"https://api.emailjs.com"},i=(e,s,t)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class n{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const c=(e,s,t={})=>new Promise(((r,a)=>{const i=new XMLHttpRequest;i.addEventListener("load",(({target:e})=>{const s=new n(e);200===s.status||"OK"===s.text?r(s):a(s)})),i.addEventListener("error",(({target:e})=>{a(new n(e))})),i.open("POST",o._origin+e,!0),Object.keys(t).forEach((e=>{i.setRequestHeader(e,t[e])})),i.send(s)})),d=(e,s,t,r)=>{const a=r||o._userID,n=(e=>{let s;if(s="string"==typeof e?document.querySelector(e):e,!s||"FORM"!==s.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s})(t);i(a,e,s);const d=new FormData(n);return d.append("lib_version","3.10.0"),d.append("service_id",e),d.append("template_id",s),d.append("user_id",a),c("/api/v1.0/email/send-form",d)},l=()=>{const o=e.useRef();return s.jsx(s.Fragment,{children:s.jsx("form",{id:"myForm",className:"contactform",ref:o,onSubmit:e=>{e.preventDefault(),d("gmail","template_a3i5zdh",o.current,"qJrW1552V7WB1u1Px").then((()=>{t.success("Message envoyé",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),document.getElementById("myForm").reset()}))},children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-12 col-md-6",children:s.jsx("div",{className:"form-group",children:s.jsx("input",{type:"text",name:"name",placeholder:"VOTRE NOM",required:!0})})}),s.jsx("div",{className:"col-12 col-md-6",children:s.jsx("div",{className:"form-group",children:s.jsx("input",{type:"email",name:"user_email",placeholder:"VOTRE E-MAIL",required:!0})})}),s.jsx("div",{className:"col-12 col-md-12",children:s.jsx("div",{className:"form-group",children:s.jsx("input",{type:"text",name:"subject",placeholder:"VOTRE SUJET",required:!0})})}),s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"form-group",children:s.jsx("textarea",{name:"message",placeholder:"VOTRE MESSAGE",required:!0})})}),s.jsx("div",{className:"col-12",children:s.jsxs("button",{type:"submit",className:"button",children:[s.jsx("span",{className:"button-text",children:"ENVOYER"}),s.jsx(r,{icon:a,className:"button-icon"})]})})]})})})};export{l as default};

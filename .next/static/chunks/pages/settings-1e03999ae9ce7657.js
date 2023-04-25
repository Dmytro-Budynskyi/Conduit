(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{9471:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n(166)}])},9608:function(e,r,n){"use strict";var t=n(5893);n(7294);r.Z=function(e){var r=e.errors;return(0,t.jsx)("ul",{className:"error-messages",children:Object.keys(r).map((function(e){return(0,t.jsxs)("li",{children:[e,":",(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:r[e]})})]},e)}))})}},166:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return k}});var t=n(5666),o=n.n(t),s=n(5893),a=n(1163),i=n(7294),u=n(9505),c=n(9856),l=n(9669),f=n.n(l),d=n(842),m=n(9608),p=n(5014),h=n(1682);function v(e,r,n,t,o,s,a){try{var i=e[s](a),u=i.value}catch(c){return void n(c)}i.done?r(u):Promise.resolve(u).then(t,o)}function x(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){x(e,r,n[r])}))}return e}function j(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,o=!1,s=void 0;try{for(var a,i=e[Symbol.iterator]();!(t=(a=i.next()).done)&&(n.push(a.value),!r||n.length!==r);t=!0);}catch(u){o=!0,s=u}finally{try{t||null==i.return||i.return()}finally{if(o)throw s}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(){var e=j(i.useState(!1),2),r=e[0],n=e[1],t=j(i.useState([]),2),u=t[0],l=t[1],w=j(i.useState({image:"",username:"",bio:"",email:"",password:""}),2),b=w[0],y=w[1],N=(0,p.Z)();i.useEffect((function(){N&&y((function(e){return Object.assign(e,N)}))}),[N]);var k,O=function(e){return function(r){y(g({},b,x({},e,r.target.value)))}},P=(k=o().mark((function e(r){var t,s,i,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),n(!0),(t=g({},b)).password||delete t.password,e.next=6,f().put("".concat(d.apiPath,"/user"),JSON.stringify({user:t}),{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(null===N||void 0===N?void 0:N.token)}});case 6:if(s=e.sent,i=s.data,u=s.status,n(!1),200!==u&&l(i.errors.body),!(null===i||void 0===i?void 0:i.user)){e.next=15;break}return e.next=14,(0,c.uh)(i,l);case 14:a.default.push("/profile/".concat(t.username));case 15:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(n,t){var o=k.apply(e,r);function s(e){v(o,n,t,s,a,"next",e)}function a(e){v(o,n,t,s,a,"throw",e)}s(void 0)}))});return(0,h.hy)(P),(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(m.Z,{errors:u}),(0,s.jsx)("form",{onSubmit:P,children:(0,s.jsxs)("fieldset",{children:[(0,s.jsx)("fieldset",{className:"form-group",children:(0,s.jsx)("input",{className:"form-control",type:"text",placeholder:"URL of profile picture",value:b.image?b.image:"",onChange:O("image")})}),(0,s.jsx)("fieldset",{className:"form-group",children:(0,s.jsx)("input",{className:"form-control form-control-lg",type:"text",placeholder:"Username",value:b.username,onChange:O("username")})}),(0,s.jsx)("fieldset",{className:"form-group",children:(0,s.jsx)("textarea",{className:"form-control form-control-lg",rows:8,placeholder:"Short bio about you",value:b.bio,onChange:O("bio")})}),(0,s.jsx)("fieldset",{className:"form-group",children:(0,s.jsx)("input",{className:"form-control form-control-lg",type:"email",placeholder:"Email",value:b.email,onChange:O("email")})}),(0,s.jsx)("fieldset",{className:"form-group",children:(0,s.jsx)("input",{className:"form-control form-control-lg",type:"password",placeholder:"New Password",value:b.password,onChange:O("password"),autoComplete:"new-password"})}),(0,s.jsx)("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:r,children:"Update Settings"})]})})]})},b=n(4041),y=n(9267);function N(e,r,n,t,o,s,a){try{var i=e[s](a),u=i.value}catch(c){return void n(c)}i.done?r(u):Promise.resolve(u).then(t,o)}var k=function(){i.useEffect((function(){var e=(0,y.Z)(c.wz);(0,b.Z)(e)||a.default.push("/")}));var e,r=(e=o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),window.localStorage.removeItem("user"),(0,c.kT)("auth"),(0,u.JG)("user",null),a.default.push("/").then((function(){return(0,u.X$)("user")}));case 5:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,o){var s=e.apply(r,n);function a(e){N(s,t,o,a,i,"next",e)}function i(e){N(s,t,o,a,i,"throw",e)}a(void 0)}))}),n="Your Settings",t=i.useContext(h.Il).setTitle;return i.useEffect((function(){t(n)}),[t,n]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"settings-page",children:(0,s.jsx)("div",{className:"container page",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[(0,s.jsx)("h1",{className:"text-xs-center",children:n}),(0,s.jsx)(w,{}),(0,s.jsx)("hr",{}),(0,s.jsx)("button",{className:"btn btn-outline-danger",onClick:r,children:"Or click here to logout."})]})})})})})}}},function(e){e.O(0,[774,888,179],(function(){return r=9471,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
(this["webpackJsonpyogasundaram-site"]=this["webpackJsonpyogasundaram-site"]||[]).push([[0],{21:function(e,n,t){"use strict";var a=t(0),c=t(1),i=t(16),s=t(3),l=t(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&l.a.initialize(j);var b=function(){var e=Object(s.f)().pathname;return Object(c.useEffect)((function(){"production"===o&&(l.a.set({page:e}),l.a.pageview(e))}),[e]),null},d=t(5),u=t(35),h=[{index:!0,label:"Yogasundaram",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Contact",path:"/contact"}],m=Object(c.lazy)((function(){return t.e(4).then(t.t.bind(null,168,7))})),O=function(){var e=Object(c.useState)(!1),n=Object(u.a)(e,2),t=n[0],i=n[1];return Object(a.jsxs)("div",{className:"hamburger-container",children:[Object(a.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(a.jsx)("ul",{children:t?Object(a.jsx)("li",{className:"menu close-menu",children:Object(a.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2715"})}):Object(a.jsx)("li",{className:"menu open-menu",children:Object(a.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(a.Fragment,{}),children:Object(a.jsx)(m,{right:!0,isOpen:t,children:Object(a.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:e.path,onClick:function(){return i(!t)},children:Object(a.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(a.jsxs)("header",{id:"header",children:[Object(a.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(a.jsx)(d.b,{to:e.path,children:e.label},e.label)}))}),Object(a.jsx)("nav",{className:"links",children:Object(a.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:e.path,children:e.label})},e.label)}))})}),Object(a.jsx)(O,{})]})},p=t(24),f=function(){return Object(a.jsxs)("section",{id:"sidebar",children:[Object(a.jsxs)("section",{id:"intro",children:[Object(a.jsx)(d.b,{to:"/",className:"logo",children:Object(a.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(a.jsxs)("header",{children:[Object(a.jsx)("h2",{children:"Yogasundaram.S.B."}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:"mailto:yogasundaram.asd30@gmail.com",children:"yogasundaram.asd30@gmail.com"})})]})]}),Object(a.jsxs)("section",{className:"blurb",children:[Object(a.jsx)("h2",{children:"About"}),Object(a.jsxs)("p",{children:["Hi, I'm Yogasundaram. I like building things. I am a ",Object(a.jsx)("a",{href:"https://www.annauniv.edu/",children:"Anna University"})," graduate, Sowdambikaa Alumni, and the UI Developer of ",Object(a.jsx)("a",{href:"https://www.randstad.in/",children:"Randstad India"}),". Before Randstad I was at ",Object(a.jsx)("a",{href:"https://digital.netaccess-india.com",children:"Netaccess India Limited a part of Murugappa Group"}),"."]}),Object(a.jsx)("ul",{className:"actions",children:Object(a.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(a.jsx)(d.b,{to:"/about",className:"button",children:"About Me"}):Object(a.jsx)(d.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(a.jsxs)("section",{id:"footer",children:[Object(a.jsx)(p.a,{}),Object(a.jsxs)("p",{className:"copyright",children:["\xa9Yogasundaram ",Object(a.jsx)(d.b,{to:"/",children:"yogasundaram.com"}),"."]})]})]})},g=function(){var e=Object(s.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},w=function(e){return Object(a.jsxs)(i.b,{children:[Object(a.jsx)(b,{}),Object(a.jsx)(g,{}),Object(a.jsxs)(i.a,{titleTemplate:"Yogasundaram",defaultTitle:"Yogasundaram",children:[e.title&&Object(a.jsx)("title",{children:e.title}),Object(a.jsx)("meta",{name:"description",content:e.description})]}),Object(a.jsxs)("div",{id:"wrapper",children:[Object(a.jsx)(x,{}),Object(a.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(a.jsx)(f,{})]})]})};w.defaultProps={children:null,fullPage:!1,title:null,description:"Yogasundaram personal website."};n.a=w},24:function(e,n,t){"use strict";var a=t(0),c=(t(1),t(28)),i=t(29),s=t(30),l=t(31),r=t(32),o=t(33),j=t(34),b=[{link:"https://github.com/yogasundaram",label:"Github",icon:i.faGithub},{link:"https://www.facebook.com/yogasundaram30/",label:"Facebook",icon:s.faFacebookF},{link:"https://www.instagram.com/yoga_sundaram30/",label:"Instagram",icon:l.faInstagram},{link:"https://www.linkedin.com/in/yogasundaram-balasubramanian-7997b4120/",label:"LinkedIn",icon:r.faLinkedinIn},{link:"https://twitter.com/Yogasundaram30",label:"Twitter",icon:o.faTwitter},{link:"mailto:yogasundaram.asd30@gmail.com",label:"Email",icon:j.faEnvelope}];n.a=function(){return Object(a.jsx)("ul",{className:"icons",children:b.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.link,children:Object(a.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},48:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t(1),i=t.n(c),s=t(15),l=t(5),r=t(3),o=t(21),j=(t(48),Object(c.lazy)((function(){return Promise.all([t.e(2),t.e(6)]).then(t.bind(null,164))}))),b=Object(c.lazy)((function(){return t.e(7).then(t.bind(null,165))})),d=Object(c.lazy)((function(){return t.e(8).then(t.bind(null,166))})),u=Object(c.lazy)((function(){return t.e(9).then(t.bind(null,167))})),h=Object(c.lazy)((function(){return t.e(5).then(t.bind(null,169))})),m=function(){return Object(a.jsx)(l.a,{basename:"",children:Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(o.a,{}),children:Object(a.jsxs)(r.c,{children:[Object(a.jsx)(r.a,{exact:!0,path:"/",component:d}),Object(a.jsx)(r.a,{path:"/about",component:j}),Object(a.jsx)(r.a,{path:"/contact",component:b}),Object(a.jsx)(r.a,{path:"/resume",component:h}),Object(a.jsx)(r.a,{component:u,status:404})]})})})},O=function(){return Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(m,{})})},x=document.getElementById("root");x.hasChildNodes()?Object(s.hydrate)(Object(a.jsx)(O,{}),x):Object(s.render)(Object(a.jsx)(O,{}),x)}},[[49,1,3]]]);
//# sourceMappingURL=main.6a89ed98.chunk.js.map
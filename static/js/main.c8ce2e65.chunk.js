(this.webpackJsonpme=this.webpackJsonpme||[]).push([[0],{27:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);n(53);var a,i,c=n(1),r=n.n(c),o=n(9),s=n.n(o),l=n(11),d=n(22),m=(n(58),n(2)),p=function(e){var t=e.title,n=e.icon,a=e.xVal,i=e.yVal;return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("h1",{children:t}),Object(m.jsxs)("div",{style:{transform:"translate(".concat(a,"px, -").concat(i,"px)")},children:[" ",n]})]})},h=n.p+"static/media/personal.0fde7782.svg",u=(n(60),function(){return Object(m.jsxs)("div",{className:"about",children:[Object(m.jsx)(p,{title:"About me",icon:Object(m.jsx)("img",{src:h,alt:"",height:"54em",width:"auto"}),yVal:12}),Object(m.jsx)("p",{children:"I am a final year Computer Science undergraduate at the National University of Singapore. I enjoy learning and exploring new things in the field of Computer Science and Software Engineering. More recently, I have been learning fullstack development."})]})}),g=(n(61),n(86)),f=(n(62),function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return window.addEventListener("scroll",(function(){!n&&window.pageYOffset>200?a(!0):n&&window.pageYOffset<=200&&a(!1)})),Object(m.jsx)(g.a,{size:"60px",className:"arrow-up",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:n?"flex":"none"}})}),b=n.p+"static/media/rocket.486af327.svg",j=n(45),x=n.n(j),v=n(52),O=n(90),w=(n(38),function(){return Object(m.jsx)(v.a,{initialValues:{name:"",email:"",message:""},onSubmit:function(e,t){var n;n=e,x.a.send("service_6n1ailc","template_42ptdtm",n,"user_iOqMGCDCCLYk0ynGnzqoX").then((function(e){})),t.resetForm()},children:function(e){return Object(m.jsxs)(O.a,{onSubmit:e.handleSubmit,className:"form-container",children:[Object(m.jsx)(O.a.Group,{controlId:"validationCustom01",children:Object(m.jsx)("input",{required:!0,type:"text",name:"name",placeholder:"Name",onChange:e.handleChange,value:e.values.name,className:"input-box"})}),Object(m.jsx)(O.a.Group,{controlId:"formBasicEmail",children:Object(m.jsx)("input",{required:!0,type:"email",name:"email",placeholder:"Email",onChange:e.handleChange,value:e.values.email,className:"input-box"})}),Object(m.jsx)(O.a.Group,{controlId:"formBasicMessage",children:Object(m.jsx)("textarea",{required:!0,name:"message",placeholder:"Message",onChange:e.handleChange,value:e.values.message,className:"message-box"})}),Object(m.jsx)("button",{type:"submit",className:"submit-button",children:"Send message"})]})}})}),y=n(87),k=function(e){var t=e.props,n=t.icon,a=t.link,i=t.name;return Object(m.jsx)("a",{href:a,title:i,target:"_blank",rel:"noopener noreferrer",children:n})},A=(n(71),function(){var e=Object(c.useContext)(Dt).isLight?["#0e76a8","#211F1F","#ababab"]:["#4fb1e0","#8993d9","#d4d4d4"],t=[{icon:Object(m.jsx)(y.c,{color:e[0],size:"2em"}),link:"https://www.linkedin.com/in/keanecjy/",name:"LinkedIn"},{icon:Object(m.jsx)(y.b,{color:e[1],size:"2em"}),link:"https://github.com/keanecjy",name:"GitHub"},{icon:Object(m.jsx)(y.a,{color:e[2],size:"2em"}),link:"mailto:keanec9@outlook.com",name:"email"}];return Object(m.jsx)("div",{className:"social-grid",children:t.map((function(e){return Object(m.jsx)(k,{props:e},e.link)}))})}),S=function(){return Object(m.jsxs)("div",{className:"end-content",children:[Object(m.jsx)("p",{children:"Thanks for visiting! \ud83d\ude0a"}),Object(m.jsx)(A,{})]})},N=function(){return Object(m.jsxs)("div",{className:"contact",children:[Object(m.jsx)(p,{title:"Contact me",icon:Object(m.jsx)("img",{src:b,alt:"",height:"54em",width:"auto"}),yVal:8}),Object(m.jsx)("h3",{className:"contact-desc",children:"Interested in what you see? Fill in this form and I will get back to you asap! \u270c"}),Object(m.jsx)(w,{}),Object(m.jsx)(S,{})]})},E=n.p+"static/media/briefcase.6d829322.svg",G=n.p+"static/media/carousell.9db50edc.svg",C=n.p+"static/media/meta.0427a250.gif",I=n.p+"static/media/SE-EDU.7920b25d.png",M=n.p+"static/media/wise.20388ef4.svg",T=function(){return Object(m.jsx)("a",{href:"https://www.metacareers.com/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{src:C,alt:"loading...",height:"28em",width:"auto"})})},L=function(){return Object(m.jsx)("a",{href:"https://careers.carousell.com/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{src:G,alt:"loading...",height:"32em",width:"auto"})})},R=function(){return Object(m.jsx)("a",{href:"https://wise.com/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{src:M,alt:"loading...",height:"28em",width:"auto"})})},D=function(){return Object(m.jsx)("a",{href:"https://se-education.org/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{src:I,alt:"loading...",height:"36em",width:"auto"})})},H=n.p+"static/media/adobexd.b050aaa1.svg",P=n.p+"static/media/css.5f1520f7.svg",z=n.p+"static/media/docker.c24afd5f.svg",B=n.p+"static/media/express.632d3c32.svg",F=n.p+"static/media/figma.bc9b8286.svg",J=n.p+"static/media/firebase.b0bc54f6.svg",V=n.p+"static/media/flow.2523db0d.png",Q=n.p+"static/media/git.e7b9529e.svg",Y=(n.p,n.p+"static/media/go.d564087e.svg"),q=n.p+"static/media/gradle.7e7e4e2b.svg",Z=n.p+"static/media/graphql.c88bf378.svg",U=n.p+"static/media/groovy.272d2c93.svg",X=n.p+"static/media/grpc.7496365b.svg",_=n.p+"static/media/hack.56faf099.svg",K=n.p+"static/media/html.3efc40a5.svg",W=n.p+"static/media/java.596b2498.svg",$=n.p+"static/media/javafx.8511f59b.png",ee=n.p+"static/media/javascript.e8eeb8bc.svg",te=(n.p,n.p+"static/media/mongodb.0368dd10.svg"),ne=n.p+"static/media/mysql.43de11b6.svg",ae=n.p+"static/media/nestjs.9c70b41c.svg",ie=n.p+"static/media/nodejs.615ffbea.svg",ce=n.p+"static/media/postgresql.b215fdee.svg",re=n.p+"static/media/python.655d0f9c.svg",oe=n.p+"static/media/react.ce387f27.svg",se=n.p+"static/media/redis-icon.756a0f80.svg",le=n.p+"static/media/redux.8f75419a.svg",de=n.p+"static/media/relay.cf674584.svg",me=n.p+"static/media/socketio.c2e7106f.svg",pe=n.p+"static/media/spring.b701f1fc.svg",he=n.p+"static/media/typescript.75f182f4.svg",ue={icon:W,name:"Java"},ge={icon:pe,name:"Spring Boot"},fe={icon:X,name:"gRPC",height:"1.5em"},be={icon:ce,name:"PostgreSQL"},je={icon:oe,name:"React"},xe={icon:ee,name:"JavaScript"},ve={icon:ie,name:"Node.js"},Oe={icon:B,name:"Express.js"},we={icon:z,name:"Docker",height:"1.7em"},ye={icon:J,name:"Firebase"},ke={icon:re,name:"Python"},Ae={icon:P,name:"CSS"},Se={icon:K,name:"HTML"},Ne={icon:H,name:"Adobe XD"},Ee={icon:$,name:"JavaFX"},Ge={icon:F,name:"Figma"},Ce={icon:te,name:"MongoDB"},Ie={icon:me,name:"socket.io"},Me={icon:Q,name:"Git"},Te={icon:q,name:"Gradle"},Le={icon:U,name:"Groovy"},Re={icon:Y,name:"Go",height:"1.1em"},De={icon:he,name:"TypeScript"},He={icon:ae,name:"NestJS"},Pe={icon:ne,name:"MySQL",height:"1.8em"},ze={icon:le,name:"Redux"},Be={icon:se,name:"Redis"},Fe={icon:V,name:"Flow"},Je={icon:_,name:"Hack",height:"2em"},Ve={icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEkElEQVRoge2Za2xTZRjHf6ftGWvXbu3KLuJmhmNAFuK8IVNuYsj2AYjTmDgWEyWGTEOAeJsDMgNqBGMgwbkRs0TggxrGpomixHDROJUMElQUFhUcARxuc93atVtdL8cPG7ixvu05p8X5ob9PbZ/3eZ7/P32f857TQpIkSZJMJVK0oLsyfUEgILcG/PIMRZGirh2P1eHFljkYr7ZB4BgGaqXd/CJaJBTlrkxfMOw1nwiHDaqFjydBJgD6CVEiNXI5UtAgygoE5Fa94gG8/VYGXTa96eNxYGKnKCg24JdnxNs5YSYUykUhoQEtez4a3n4rnr70eMsICwgNJBLfQBpDBVVgtie89n9iAGDw1I+Eqr+E3OKE1o3LgPGWApDUlQh7XAydOIay8VsoXBJP2wloNiAXlSCZZABCPVewlFUipUxTlTv02T5IscCzh2HmA1pbR0SzgeDFDmxrtmDIzIFQkOFvDpFe/RoGW+z9HXb3MfJD26iJ6kOQNUuX6PFoNqAERvC17iGz7j3kufeg+Dx4Wxpx1O3DlFcYM99/6ujoC4sD1jSDSd23J0LXDIRc3bgbNpH56vtYyqsIXb3I4N7Xcb75MamLVkbNDXae+/dN3l2w7Hk9Eq6je4gD58/grq8hY/1b2GsaCVz6FXdDLY6X95C+dhuMzcmNBLs6J35QthksmXplxHcV8rd9gvfDXZiXVpBVf4TwQC+epq2kVazFub0FozN3clIoNPH9NCvc/7RuDXGfA4Mf7GL46AGMOfk4d7RicObiPfgOKcXzmd5wjNSFKyasl+SUyUXmrdLdP/6DTFEYePsl/O1HwGjC+tg6zEsrCJw/g8HmwLG5iYyNO5HMacDY2XEjBaWQqu92Q2gg3elRXyUUZGBHNSNn2wEwZuchz7rjethStpqshuOkFM8nZV7p5HyjDFlF6vuNQ2ggze7D5lR/P6+M+Onf9iTBix0R48acfJzbW7CsfErQUN8gR91CVrtXk4mwz4OrrmryleYaJhljZk7kmKKo7jOemDNgtXs1baeQq5u+mkcIdEb+JoQM/KFt/RiqhjjN7sPx8CpM+er2abi/B1fto/x9+it1Knx90CN87I2K6qtQ6oUDOLc0Yn+xHnn2nTHXh71uXK88gf+7z2MXV8Jgy1YrZQLCpy5lPZM3pXMmyoY2JMethLovMdz2KSM/txPq+p1g92UkowlpmhlTXiHy3HsxL16lyiwA3zfD3sfFQusja9Vm4JqJdceRpke4nsfL7iVwoS1iSGRA+0HW14m06z44d1hzakwWPqM5Rd9J7O2Fd1dAywbw/qWrBAC9v0HXTxAeuz8qelBzCZPu5ooCX9fDyf2w7DlYvA6sWbHzwkE43QxH3oCrZ0c/c9wGq5vg9kWaZWifARFGGWY/BHOWQ97dkD0HzBkgm2G4H/7sGN12J/eDu2tyvsEI5XVweGtkoQkb4ikicUP8PyNpYKqJZiAhv40nCLcoIDagcPSmSNHHF6KA2ICRTYDrZqjRiAt4QRQUGhj7W6cEiYOAhufLhOEBPkKiVKrnyhT0T5IkSRIV/AMuUFrKM2FzZwAAAABJRU5ErkJggg==",name:"Swift",height:"2.5em"},Qe={icon:de,name:"Relay",height:"2.5em"},Ye={icon:Z,name:"GraphQL"},qe={icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAA0CAYAAACtp1uWAAAACXBIWXMAAAsSAAALEgHS3X78AAAFDElEQVR4Ae1d7XETMRDdzeR/0gHuIKGCuANMBQkVcB1gKsBUgKkAUwFOB0cFmAqwKxCz4QnsQ7pb6XRfjt6MhhlIVtLqaW+12hVsjKGM7sHM10R0W+loRkR7Y8xmyCXIJOgBIMCWiG48vb0ekgiZBD2AmcsaAggOxpjrwcaXSdA9mLlRycYYHmp8F0N1nDEeZBJkZBJkZBI8e1AmQQZlEmRQJkEGZRJkCC5jfglh0DnaLdpV5cceiWiHcOnWGLNLM+SM5JCIobZh0SXGbSKakGER0l+qRkRC2gURrTAO1/j3+LdV7DjRxz5SP9omm2mWVD/Kyc1qlBfaRM5t9ICJHir9lT6lwEKtIxdGfmcpBAoYWyodNbVlryQgomIsE3EQ4C8RHKSNtVguMqgsw1mSALuoy8msA0lQp+TZEWm7MMmNip8qCbyOITMLAe479sLumVkG8pBAVsHMYgFeJZDlwjuMddmR/OEwkAWIYnaPO62ueT8NZ2MJmLmIsACPcND28MTnDUkUVcguk2PkduR7RrAWi2OM2Tv+zfV344fDodJ+T/dw1JzeM2StAti9m4gl8O5EnEa6PiKWIScWTTvJLGLmjfKb+lUI4NkNJ2BmG1uoBpNceGOMWdfIEhLctdhZP0Gk48CVjSG8CJBzgCOq2vljzyw6ZvFcycQgjz5wh5QNcmItwbopNoH57wJkPgTMv1Feyp0dvD5HA9U4g7WL1KAI3xm/2ryLFUGCMiQwBatQKmVvzooEmHyrBVIqQ7OIXs83kATBFssE+kXnQgJ7i7hQfDm+GmPKll8f7/f+CPOWfQg+x8YecNG10vwsM1eLSSYJSwKN4lMUR2hktFXsY4Lgk4aslGCso4CNE2hIcA1Pv2toThF1aB1rEGvAzD8VJ4ZZ18roA5YEmuPRh2lPNRi7wGPjZHHR0+4OAu4AhobGopyVTzAqTCgLabD6wZTIOYYZoyTB5xGM4VlBm2h6QCSta0hEsnjui9I3LpXXn7I4o3MgM9LgQhkFPAsvOMMN6xN8b9DP1RiPkhlpYEmgsQYp8gAzeoYUCskGRnPGXywJNIGR+2wNpgNmXuCtpF9E9A3tBzNLSPxkQ1sSbHACaMIaJWgZIwYyxb948jwlFP5JsrTsWj6RAGlSmhs+EbBtQwSYpxUGkR1OIJWVFd0qE4Xv7JofB4u0+fQ3IELwAiKTWULCbzGIbFn+wXtfgo1TYON4fTN8898G9Hn3JK+SARNab7BsKo7E5Iqa/D11BlDbzKTADKOloq9tqswiV6Epkn1ctZS+2suQ7G7byqqQ68iU6S2UViA3YYkBafP1VEmbEyZBSFpcqdCbL+Vdq+/T5hC0iBLUru015dYTJkGq4ljbnDUasfL+u0DCG7sfA74rKXB15nGI1JVVL+p8g1A4bxFxidP3bV4fF1RDoYvHq13JwY8Rcg7eq2Qka/ZhEQ6oPBr0ufcugSSZmAWqg6tSLEaHm9p8AliE18pAUgxEMfO60rMzQpFYj+8df7dGqV0Ilo1JJdihs8RW4Tve+J8nqGWYBDDPFLkS8pl+6XonAUG/RQDZ3jxZqUCPeQavOaRm769Hq6kJbOhfU9NYJDodND3Ts4+ZC+YQcmS00VxvBbinj7o1OnmCJ/r/O0DE8Li5YCuAy1Q7Hv36KoR2IEHrdwIQyZR+fJE86Sd6TpiH7Fr5sxo1FblPz/+17EOII31Y+faFNgnQ/dEREf0Gz+/9TiRjOGMAAAAASUVORK5CYII=",name:"Ent",height:"1.1em"},Ze=n(89),Ue=(n(72),function(e){var t=e.icon,n=e.name,a=e.height,i=Object(c.useContext)(Dt).isLight;return Object(m.jsx)(Ze.a,{placement:"bottom",overlay:Object(m.jsx)("p",{style:{color:i?"#8d8d8d":"rgba(239, 239, 239, 0.9)"},children:n}),children:Object(m.jsx)("img",{alt:n,src:t,style:{height:a||"1.9em",width:"auto"},className:"icon"})},"bottom")}),Xe=(n(73),function(e){var t=e.icons;return Object(m.jsx)("div",{className:"icon-list",children:t.map((function(e){return Object(m.jsx)(Ue,{icon:e.icon,name:e.name,height:e.height},e.name)}))})}),_e=(n(27),n(44),function(e){var t=e.props,n=t.position,a=t.company,i=t.period,r=t.desc,o=t.techStack,s=t.marginTop,l={color:Object(c.useContext)(Dt).isLight?"#707070":"rgba(250,250,250,0.9)",fontWeight:600};return Object(m.jsxs)("div",{style:{marginTop:s},children:[Object(m.jsxs)("div",{className:"job-title",children:[n,"\xa0@\xa0\xa0",a]}),Object(m.jsx)("p",{style:l,children:i}),r.map((function(e){return Object(m.jsxs)("div",{className:"single-desc",children:[Object(m.jsx)("p",{className:"dot",children:"\u2022"}),Object(m.jsx)("p",{children:e})]})})),Object(m.jsxs)("div",{style:{marginTop:"1em"},children:[Object(m.jsx)("p",{style:l,children:"Tech Stack"}),Object(m.jsx)(Xe,{icons:o})]})]})}),Ke=function(){var e=[{position:"Enterprise Software Engineer Intern",company:Object(m.jsx)(T,{}),period:"May 2022 - Aug 2022",desc:["Designed and developed backend data models and APIs for a collaborator access tool using Hack, Ent and GraphQL","Developed reusable frontend interfaces with React and Relay, while allowing extensibility and reuse by the larger Shop team","Developed email and chat notifications to provide real-time push notifications for collaboration access requests and outcome","Spearheaded and developed a permission delegation tool to support access role and permission delegations as part of my stretch goals","Utilized React Hooks and implemented lazy loading of modals to optimize frontend load times and improved on existing user flow"],techStack:[je,Fe,Ye,Qe,Je,qe],marginTop:40},{position:"Software Engineer Intern",company:Object(m.jsx)(L,{}),period:"Aug 2021 - Dec 2021",desc:["Ported existing services onto isolated On Demand environments to increase testability and ensure safe and independent deployments","Migrated REST clients to gRPC clients to enhance performance and scalability of internal backend API endpoints","Developed and optimized APIs and services using Golang and gRPC across a distributed microservice architecture"],techStack:[Re,fe,Pe,we],marginTop:90},{position:"Software Engineer Intern",company:Object(m.jsx)(R,{}),period:"May 2021 - Aug 2021",desc:["Spearheaded the launch of a new smart replacement feature that allows users to replace their debit cards for free","Built and optimize new versions of custom REST API endpoints to improve scalability by implementing in-memory cache and reducing size of JSON payload","Redesigned and developed gRPC APIs across several microservices to remove dependency on middle service layer and decrease latency of API calls"],techStack:[ue,ge,fe,be,Le,we],marginTop:90},{position:"Software Engineer",company:Object(m.jsx)(D,{}),period:"Jan 2021 - May 2021",desc:["Collaborated with a team of 6 developers to maintain and improve multiple open-source software used by 800 students / day","Conducted and coordinated code and design documentation reviews for features developed and bugs fixed"],techStack:[ue,Ee,Te,Ae,Me],marginTop:90}];return Object(m.jsxs)("div",{className:"experience",children:[Object(m.jsx)(p,{title:"Experience",icon:Object(m.jsx)("img",{src:E,alt:"",height:"56em",width:"auto"}),xVal:6,yVal:8}),e.map((function(e){return Object(m.jsx)(_e,{props:e},e.company)}))]})},We=n(32),$e=Object(d.b)(a||(a=Object(We.a)(["\n\n  * {\n    margin: 0;\n    padding: 0;\n  }\n\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n  \n","\n  body {\n    background: ",";\n    color: ",";\n    font-family: 'Helvetica Neue', sans-serif;\n    font-size: 20px;\n    font-weight: 500;\n    width: 100vw;\n    transition: all 0.4s ease-in-out\n  }\n  \n  .app h1 {\n    font-size: 1.8em;\n    font-weight: bolder;\n  }\n\n  .app h2 {\n    font-size: 1.3em;\n    font-weight: bold;\n    margin: 1.4em 0 0.8em 0;\n    text-decoration: underline;\n  }\n  \n  .app h3 {\n    color: ",";\n    font-size: 0.9em;\n    font-weight: 600;\n  }\n  \n  .app a {\n    color: inherit !important;\n    display: inline-block;\n    text-decoration: none;\n    width: fit-content;\n  }\n\n  .app a:hover {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .app a::after {\n    background: ",";\n    content: '';\n    display: block;\n    height: 2px;\n    transition: 300ms;\n    width: 0;\n  }\n  \n  .app button:focus {\n    outline: none;\n  }\n  \n  .main-app {\n    align-items: center;\n    justify-content: center;\n    padding: 0 5vw;\n  }\n\n  .intro-and-about {\n    width: 90%;\n  }\n  \n  input,\n  textarea {\n    font-weight: 600;\n    background: ",";\n    color: ",";\n  }\n  \n  ::placeholder {\n    color: ",";\n  }\n  \n  /* Medium devices (landscape tablets, 768px and up) */\n  @media screen and (min-width: 760px) {\n    .app {\n      font-size: 21px;\n    }\n  \n    .intro-and-about {\n      width: 80%;\n    }\n  \n    .main-app {\n      padding: 0 7vw;\n    }\n  }\n  \n  @media screen and (min-width: 992px) {\n    .empty-space {\n      height: 60px;\n      margin-top: 240px;\n    }\n  }\n  \n  /* Desktop monitors */\n  @media only screen and (min-width: 1600px) {\n    .intro-and-about {\n      width: 70%;\n    }\n  \n    .main-app {\n      padding: 0 10vw;\n    }\n  \n    .app h1 {\n      font-size: 2em;\n    }\n  \n    .app h2 {\n      font-size: 1.4em;\n    }\n  }\n"])),"",(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.header3}),(function(e){return e.theme.text}),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.placeholder})),et=(n(76),function(){return Object(m.jsxs)("div",{className:"top",children:[Object(m.jsx)("p",{className:"wave-icon",children:"\ud83d\udc4b"}),Object(m.jsx)("p",{className:"intro",children:"Hi there! I'm Keane, and I enjoy building software that is both beautiful and impactful."}),Object(m.jsxs)("p",{className:"job",children:["Currently interning","\xa0@\xa0\xa0",Object(m.jsx)(T,{})]}),Object(m.jsx)(A,{})]})}),tt=n(92),nt=n(91),at=n(88),it=["title","titleId"];function ct(){return ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ct.apply(this,arguments)}function rt(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ot(e,t){var n=e.title,a=e.titleId,r=rt(e,it);return c.createElement("svg",ct({xmlnsXlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:512,height:512,ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,i||(i=c.createElement("defs",null,c.createElement("linearGradient",{id:"New_Gradient_Swatch_5",x1:2,y1:32,x2:62.133,y2:32,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{offset:0,stopColor:"#4761ac"}),c.createElement("stop",{offset:1,stopColor:"#54c2ef"})),c.createElement("linearGradient",{id:"New_Gradient_Swatch_5-2",x1:2,y1:42.5,x2:62.133,y2:42.5,xlinkHref:"#New_Gradient_Swatch_5"}),c.createElement("linearGradient",{id:"New_Gradient_Swatch_5-3",x1:2,y1:38.5,x2:62.133,y2:38.5,xlinkHref:"#New_Gradient_Swatch_5"}),c.createElement("linearGradient",{id:"New_Gradient_Swatch_5-4",x1:2,y1:28,x2:62.133,y2:28,xlinkHref:"#New_Gradient_Swatch_5"}),c.createElement("linearGradient",{id:"New_Gradient_Swatch_5-5",x1:2,y1:17,x2:62.133,y2:17,xlinkHref:"#New_Gradient_Swatch_5"}))),c.createElement("g",{id:"Gradient_outline","data-name":"Gradient outline"},c.createElement("path",{d:"M61,27H59.841C57.386,13.505,44.18,2.607,29.412,2.025,29.279,2.012,29.133,2,29,2a4,4,0,1,0,3.955,4.442C38.712,10.752,42.09,17.878,42.09,26c0,.339-.011.676-.027,1H41a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h1.689A24.108,24.108,0,0,1,38.5,41H29a1,1,0,0,0-.895,1.447l2.559,5.116A24.713,24.713,0,0,1,20,50,22.674,22.674,0,0,1,3.7,43.284a1,1,0,0,0-1.61,1.127A29.293,29.293,0,0,0,29,62,30.031,30.031,0,0,0,58.975,33H61a1,1,0,0,0,1-1V28A1,1,0,0,0,61,27ZM29,8a2,2,0,1,1,2-2A2,2,0,0,1,29,8Zm24.66,9.339a26.887,26.887,0,0,1,2.824,5.249A2.946,2.946,0,0,1,55,23a2.986,2.986,0,0,1-1.34-5.661ZM33.753,4.532a31.768,31.768,0,0,1,18.7,11.2,4.97,4.97,0,0,0,4.7,8.753A23.975,23.975,0,0,1,57.813,27H44.065c.015-.322.025-.659.025-1a30.353,30.353,0,0,0-.319-4.343A4.989,4.989,0,0,0,42,12a4.789,4.789,0,0,0-1.391.216A23.715,23.715,0,0,0,33.753,4.532Zm7.791,9.526A2.845,2.845,0,0,1,42,14a3,3,0,0,1,3,3,2.967,2.967,0,0,1-1.589,2.631A26.983,26.983,0,0,0,41.544,14.058ZM29,60A27.134,27.134,0,0,1,6.384,48.011,24.347,24.347,0,0,0,20,52a26.852,26.852,0,0,0,7.345-1.052,7.594,7.594,0,0,0,7.069,3.889,15.558,15.558,0,0,0,4.9-.888l-.632-1.9c-6.206,2.067-8.624-.46-9.41-1.731a24.949,24.949,0,0,0,3.2-1.441,1,1,0,0,0,.418-1.326L30.618,43h8.364a1,1,0,0,0,.774-.366A26.123,26.123,0,0,0,44.771,33H56.982A28.034,28.034,0,0,1,29,60ZM60,31H42V29H60Z",style:{fill:"url(#New_Gradient_Swatch_5)"}}),c.createElement("path",{d:"M49,45a5.006,5.006,0,0,0,5-5H52a3,3,0,0,1-6,0H44A5.006,5.006,0,0,0,49,45Z",style:{fill:"url(#New_Gradient_Swatch_5-2)"}}),c.createElement("path",{d:"M14.076,41.383A1,1,0,0,0,15,42h5a1,1,0,0,0,0-2H17.414l3.293-3.293A1,1,0,0,0,20,35H15a1,1,0,0,0,0,2h2.586l-3.293,3.293A1,1,0,0,0,14.076,41.383Z",style:{fill:"url(#New_Gradient_Swatch_5-3)"}}),c.createElement("path",{d:"M33.924,24.617A1,1,0,0,0,33,24H27a1,1,0,0,0,0,2h3.586l-4.293,4.293A1,1,0,0,0,27,32h6a1,1,0,0,0,0-2H29.414l4.293-4.293A1,1,0,0,0,33.924,24.617Z",style:{fill:"url(#New_Gradient_Swatch_5-4)"}}),c.createElement("path",{d:"M14,14h5.586l-6.293,6.293A1,1,0,0,0,14,22h8a1,1,0,0,0,0-2H16.414l6.293-6.293A1,1,0,0,0,22,12H14a1,1,0,0,0,0,2Z",style:{fill:"url(#New_Gradient_Swatch_5-5)"}})))}var st,lt,dt,mt,pt=c.forwardRef(ot),ht=(n.p,["title","titleId"]);function ut(){return ut=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ut.apply(this,arguments)}function gt(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ft(e,t){var n=e.title,a=e.titleId,i=gt(e,ht);return c.createElement("svg",ut({height:"511.99986pt",viewBox:"0 0 511.99986 511.99986",width:"511.99986pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),n?c.createElement("title",{id:a},n):null,st||(st=c.createElement("path",{d:"m477.449219 256c0-21.75 39.410156-48.386719 34.050781-68.449219-5.550781-20.757812-53.15625-24.101562-63.671875-42.277343-10.667969-18.433594 10.125-61.304688-4.835937-76.265626-14.960938-14.960937-57.832032 5.828126-76.269532-4.835937-18.171875-10.515625-21.515625-58.121094-42.273437-63.671875-20.0625-5.359375-46.699219 34.050781-68.449219 34.050781s-48.386719-39.410156-68.449219-34.050781c-20.757812 5.550781-24.101562 53.15625-42.277343 63.671875-18.433594 10.667969-61.304688-10.125-76.265626 4.835937-14.960937 14.960938 5.828126 57.832032-4.835937 76.269532-10.515625 18.171875-58.121094 21.515625-63.671875 42.273437-5.359375 20.0625 34.050781 46.699219 34.050781 68.449219s-39.410156 48.386719-34.050781 68.449219c5.550781 20.757812 53.15625 24.101562 63.671875 42.277343 10.667969 18.433594-10.125 61.304688 4.835937 76.265626 14.960938 14.960937 57.832032-5.828126 76.269532 4.835937 18.171875 10.515625 21.515625 58.121094 42.273437 63.671875 20.0625 5.359375 46.699219-34.050781 68.449219-34.050781s48.386719 39.410156 68.449219 34.050781c20.757812-5.550781 24.101562-53.15625 42.277343-63.671875 18.433594-10.667969 61.304688 10.125 76.265626-4.835937 14.960937-14.960938-5.828126-57.832032 4.835937-76.269532 10.515625-18.171875 58.121094-21.515625 63.671875-42.273437 5.359375-20.0625-34.050781-46.699219-34.050781-68.449219zm0 0",fill:"#ffee8c"})),lt||(lt=c.createElement("path",{d:"m426.957031 256c0 86.347656-64.019531 157.746094-147.191406 169.3125-7.765625 1.089844-15.695313 1.640625-23.761719 1.640625-94.417968 0-170.96875-76.539063-170.96875-170.953125 0-94.417969 76.550782-170.957031 170.96875-170.957031 8.066406 0 15.996094.554687 23.761719 1.640625 83.171875 11.566406 147.191406 82.964844 147.191406 169.316406zm0 0",fill:"#f28f44"})),dt||(dt=c.createElement("path",{d:"m426.957031 256c0 86.347656-64.019531 157.746094-147.191406 169.3125-83.175781-11.566406-147.195313-82.964844-147.195313-169.3125 0-86.351562 64.019532-157.75 147.195313-169.316406 83.171875 11.566406 147.191406 82.964844 147.191406 169.316406zm0 0",fill:"#ffd073"})),mt||(mt=c.createElement("g",{fill:"#cc9236"},c.createElement("path",{d:"m155.875 229.488281c-2.003906 0-4.011719-.765625-5.539062-2.296875-3.0625-3.0625-3.0625-8.023437 0-11.082031 17.53125-17.53125 46.054687-17.53125 63.582031 0 3.0625 3.058594 3.0625 8.019531 0 11.082031-3.058594 3.058594-8.019531 3.058594-11.082031 0-11.417969-11.421875-29.996094-11.421875-41.417969 0-1.53125 1.53125-3.535157 2.296875-5.542969 2.296875zm0 0"}),c.createElement("path",{d:"m356.125 229.488281c-2.007812 0-4.011719-.765625-5.542969-2.296875-11.417969-11.421875-30-11.417968-41.417969 0-3.0625 3.058594-8.023437 3.058594-11.082031 0-3.0625-3.0625-3.0625-8.023437 0-11.082031 17.527344-17.53125 46.054688-17.53125 63.585938 0 3.058593 3.058594 3.058593 8.023437 0 11.082031-1.53125 1.53125-3.539063 2.296875-5.542969 2.296875zm0 0"}),c.createElement("path",{d:"m256 310.582031c-17.015625 0-33.015625-6.628906-45.046875-18.660156-3.058594-3.0625-3.058594-8.023437 0-11.082031 3.0625-3.0625 8.023437-3.0625 11.082031 0 9.074219 9.070312 21.132813 14.066406 33.964844 14.066406s24.890625-4.996094 33.964844-14.066406c3.058594-3.0625 8.023437-3.0625 11.082031 0 3.058594 3.058594 3.058594 8.019531 0 11.082031-12.03125 12.03125-28.03125 18.660156-45.046875 18.660156zm0 0"}))))}var bt,jt=c.forwardRef(ft),xt=(n.p,n(77),d.c.button(bt||(bt=Object(We.a)(["\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 30px;\n  cursor: pointer;\n  display: flex;\n  font-size: 0.5rem;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 0.5rem;\n  position: relative;\n\n  svg {\n    height: auto;\n    transition: all 0.3s linear;\n\n    // sun icon\n    &:first-child {\n      transform: ",";\n    }\n\n    // moon icon\n    &:nth-child(2) {\n      transform: ",";\n    }\n  }\n"])),(function(e){return e.lightTheme?"linear-gradient(#39598A, #79D7ED)":"linear-gradient(#091236, #1E215D)"}),(function(e){return e.lightTheme?"#428596":"#6B8096"}),(function(e){return e.lightTheme?"translateY(0)":"translateY(100px)"}),(function(e){return e.lightTheme?"translateY(-100px)":"translateY(0)"}))),vt=function(e){var t=e.theme,n=e.toggleTheme,a="light"===t;return Object(m.jsxs)(xt,{className:"toggle-button",lightTheme:a,theme:t,onClick:n,children:[Object(m.jsx)(jt,{}),Object(m.jsx)(pt,{})]})},Ot=(n(78),function(e){var t=e.theme,n=e.toggleTheme,a=Object(c.useState)(!1),i=Object(l.a)(a,2),r=i[0],o=i[1],s="light"===t,d=function(){return o(!1)};return Object(m.jsxs)(tt.a,{expanded:r,sticky:"top",bg:s?"light":"dark",expand:"lg",className:"nav-bar-menu",children:[Object(m.jsx)(tt.a.Brand,{onClick:function(){return d()},href:"#",children:"Keane"}),Object(m.jsx)(at.a,{className:"hamburger",onClick:function(){return o(!r)},"aria-controls":"responsive-navbar-nav"}),Object(m.jsxs)(tt.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsxs)(nt.a,{className:"nav-bar",children:[Object(m.jsx)(nt.a.Link,{onSelect:function(){return d()},href:"#about",children:"About"}),Object(m.jsx)(nt.a.Link,{onSelect:function(){return d()},href:"#skills",children:"Skills"}),Object(m.jsx)(nt.a.Link,{onSelect:function(){return d()},href:"#experience",children:"Experience"}),Object(m.jsx)(nt.a.Link,{onSelect:function(){return d()},href:"#projects",children:"Projects"}),Object(m.jsx)(nt.a.Link,{onSelect:function(){return d()},href:"#contact",children:"Contact me"})]}),Object(m.jsx)(vt,{theme:t,toggleTheme:n})]})]})}),wt=n.p+"static/media/code.83fafd4f.svg",yt=n.p+"static/media/helloworld.04d47d21.gif",kt=n.p+"static/media/internhunter.bb813481.gif",At=n.p+"static/media/modulefuture.efa16c9c.gif",St=n.p+"static/media/nusforums.eba3ee4d.gif",Nt=n.p+"static/media/peerprep.832c072b.gif",Et=n.p+"static/media/sort-algo.0a0f39b2.gif",Gt=n.p+"static/media/tourmate2.ccf37bb4.png",Ct=function(e){var t=e.props,n=t.name,a=t.description,i=t.appLink,r=t.gif,o=t.codeLink,s=t.techStack,l=t.marginTop,d=Object(c.useContext)(Dt).isLight;return Object(m.jsxs)("div",{className:"single-project",style:{marginTop:l},children:[Object(m.jsx)("div",{className:"project-image",children:Object(m.jsx)("img",{src:r,alt:n,className:"image-style",width:"100%",height:"auto"})}),Object(m.jsxs)("div",{className:"width-100",children:[Object(m.jsx)("h2",{children:n}),Object(m.jsx)("p",{style:{color:d?"#707070":"rgba(250,250,250,0.9)"},children:a}),Object(m.jsxs)("div",{className:"links",children:[Object(m.jsx)("a",{href:i,className:"app-link",style:{marginBottom:6},target:"_blank",rel:"noopener noreferrer",children:"View the application here"}),Object(m.jsxs)("a",{href:o,className:"app-link",style:{marginBottom:26},target:"_blank",rel:"noopener noreferrer",children:["View the code for ",n]})]}),Object(m.jsx)(Xe,{icons:s})]})]})},It=function(){var e=[{gif:Gt,name:"TourMate",description:"\n      TourMate is an all-in-one collaborative trip management application that aims to make\n      planning group trips fun and effortless. It provides a collaborative planner which supports\n      versioning of plans, voting, comments, recommendations, and more!\n      ",appLink:"https://github.com/keanecjy/TourMate",codeLink:"https://github.com/keanecjy/TourMate",techStack:[Ve,ye,Ge],marginTop:40},{gif:Nt,name:"PeerPrep",description:"\n        PeerPrep is a live collaborative coding interview platform built for students to\n        practise solving coding problems together with their peers. This project aims to break\n        the monotony of revising for coding interviews alone and allows students to prepare and learn\n        alongside their peers.\n      ",appLink:"https://github.com/keanecjy/PeerPrep",codeLink:"https://github.com/keanecjy/PeerPrep",techStack:[je,ze,De,He,Be,be,Ie],marginTop:90},{gif:St,name:"NUSForums",description:"\n      NUSForums is a NUS-community web-based forum. It organises NUS modules into forums whereby\n      students and teaching staff can post and answer questions anonymously. The project was inspired\n      from the lack of an intuitive, standardised platform for NUS students to freely ask module-specific\n      questions. \n      ",appLink:"https://nusforums-2a1c8.web.app/",codeLink:"https://github.com/keanecjy/nusforums",techStack:[je,ze,De,ye,ve],marginTop:90},{gif:yt,name:"HelloWorld",description:"\n        HelloWorld is a real-time chat based application built for connecting users around the \n        globe. This project was inspired from the ongoing frustration and boredom people \n        face during the COVID-19 pandemic. The application comes with an interactive map \n        display for users to view and connect with users via an intuitive chat interface.\n      ",appLink:"https://helloworld-hnr.netlify.app/",codeLink:"https://github.com/keanecjy/HelloWorld",techStack:[je,xe,ve,Oe,Ce,Ie],marginTop:90},{gif:Et,name:"SortAlgo",description:"\n        SortAlgo is an interactive sorting visualizer web application created for students \n        to learn and understand sorting algorithms better. This project was inspired from the \n        lack of visual representation when students learn sorting algorithms. The application\n        provides 10 sorting algorithms, each with its own unique animation and\n        step-by-step explanation.\n      ",appLink:"https://algosort.netlify.app/",codeLink:"https://github.com/keanecjy/sort-algo",techStack:[je,xe,ve,Ae,Se,Ne],marginTop:90},{gif:At,name:"ModuleFuture",description:"\n        ModuleFuture is a module planning mobile application designed for NUS students to plan \n        and track their modules. It helps students manage and plan their modules in advance, \n        and provides recommendations for specialization paths based on in-depth statistics \n        from the modules taken by users.\n        ",appLink:"https://github.com/keanecjy/ModuleFuture#features-preview",codeLink:"https://github.com/keanecjy/ModuleFuture",techStack:[je,xe,ve,ye,Ae,Se,Ne],marginTop:90},{gif:kt,name:"InternHunter",description:"\n        InternHunter is an internship management application built for students to get their \n        dream internship! It is built and optimized for fast typists to record and \n        track their internship applications and resume details.\n      ",appLink:"https://github.com/keanecjy/tp#internhunter",codeLink:"https://github.com/keanecjy/tp",techStack:[ue,Ee,Te,Ae,Ne],marginTop:90}];return Object(m.jsxs)("div",{className:"projects",children:[Object(m.jsx)(p,{title:"Projects",icon:Object(m.jsx)("img",{src:wt,alt:"",height:"54em",width:"auto"})}),e.map((function(e){return Object(m.jsx)(Ct,{props:e},e.name)}))]})},Mt=n.p+"static/media/skills.139dda71.svg",Tt=(n(79),function(){var e=[je,xe,ue,fe,Je,be,Ve,ye],t=[Fe,De,Ye,ze,qe,Re,ge,ke,Be];return Object(m.jsxs)("div",{className:"skills",children:[Object(m.jsx)(p,{title:"Skills",icon:Object(m.jsx)("img",{src:Mt,alt:"",height:"54em",width:"auto"})}),Object(m.jsx)("p",{children:"I am decent in"}),Object(m.jsx)(Xe,{icons:e}),Object(m.jsx)("p",{children:"I have dabbled with"}),Object(m.jsx)(Xe,{icons:t})]})}),Lt={body:"#fff",header3:"#8b7f7f",placeholder:"rgba(28, 28, 28, 0.45)",text:"#1c1c1c"},Rt={body:"#34373c",header3:"rgba(240, 240, 240, 0.8)",placeholder:"rgba(250, 250, 250, 0.75)",text:"#FAFAFA"},Dt=r.a.createContext({});var Ht=function(){var e=function(){var e=Object(c.useState)("dark"),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),r=Object(l.a)(i,2),o=r[0],s=r[1],d=function(e){window.localStorage.setItem("theme",e),a(e)};return Object(c.useEffect)((function(){var e=window.localStorage.getItem("theme");e?a(e):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!e?a("dark"):d("light"),s(!0)}),[]),[n,function(){d("light"===n?"dark":"light")},o]}(),t=Object(l.a)(e,3),n=t[0],a=t[1],i=t[2],r="light"===n,o=r?Lt:Rt;if(!i)return Object(m.jsx)("div",{});var s={isLight:r};return Object(m.jsx)(d.a,{theme:o,children:Object(m.jsxs)(Dt.Provider,{value:s,children:[Object(m.jsx)($e,{}),Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(Ot,{theme:n,toggleTheme:function(){return a()}}),Object(m.jsxs)("div",{className:"main-app",children:[Object(m.jsxs)("div",{className:"intro-and-about",children:[Object(m.jsx)(et,{}),Object(m.jsx)("div",{className:"empty-space",id:"about"}),Object(m.jsx)(u,{})]}),Object(m.jsx)("div",{className:"empty-space",id:"skills"}),Object(m.jsx)(Tt,{}),Object(m.jsx)("div",{className:"empty-space",id:"experience"}),Object(m.jsx)(Ke,{}),Object(m.jsx)("div",{className:"empty-space",id:"projects"}),Object(m.jsx)(It,{}),Object(m.jsx)("div",{className:"empty-space",id:"contact"}),Object(m.jsx)(N,{})]}),Object(m.jsx)(f,{})]})]})})},Pt=(n(80),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))});s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(Ht,{})}),document.getElementById("root")),Pt()}},[[81,1,2]]]);
//# sourceMappingURL=main.c8ce2e65.chunk.js.map
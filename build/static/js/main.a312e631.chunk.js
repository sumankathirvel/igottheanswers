(this.webpackJsonpIgottheanswer=this.webpackJsonpIgottheanswer||[]).push([[0],{58:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var s=n(3),c=n(2),i=n.n(c),a=n(22),o=n.n(a),l=(n(58),n(17)),r=(n(62),n(14)),d=(n(63),n(23)),u=(n(66),d.a.initializeApp({apiKey:"AIzaSyA8sZrP0n23kvysTM9aHux1vtwL4UN_LW8",authDomain:"i-got-the-answer.firebaseapp.com",databaseURL:"https://i-got-the-answer-default-rtdb.firebaseio.com",projectId:"i-got-the-answer",storageBucket:"i-got-the-answer.appspot.com",messagingSenderId:"485172474700",appId:"1:485172474700:web:ae053d0e470239bc0e15e9"})),j=d.a.auth(),b=new d.a.auth.GoogleAuthProvider,h=u.firestore();var m=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),o=Object(r.a)(a,2),l=o[0],d=o[1];return Object(s.jsx)("div",{className:"login",children:Object(s.jsxs)("div",{className:"login__container",children:[Object(s.jsx)("div",{className:"login__logo"}),Object(s.jsx)("div",{className:"login__desc",children:Object(s.jsx)("h1",{children:"I Got the Answer"})}),Object(s.jsxs)("div",{className:"login__auth",children:[Object(s.jsxs)("div",{className:"login__authOptions",children:[Object(s.jsxs)("div",{className:"login__authOption",children:[Object(s.jsx)("img",{className:"login__googleAuth",src:"https://media-public.canva.com/MADnBiAubGA/3/screen.svg",alt:""}),Object(s.jsx)("p",{onClick:function(){j.signInWithPopup(b).catch((function(e){alert(e.message)}))},children:"Continue With Google"})]}),Object(s.jsx)("div",{className:"login__authOption",children:Object(s.jsx)("span",{children:"Welcome..... share your answer and questions accross globle and gain your knowlege and live better.............."})}),Object(s.jsx)("div",{className:"login__authDesc"})]}),Object(s.jsxs)("div",{className:"login__emailPass",children:[Object(s.jsx)("div",{className:"login__label",children:Object(s.jsx)("h4",{children:"Login"})}),Object(s.jsxs)("div",{className:"login__inputFields",children:[Object(s.jsx)("div",{className:"login__inputField",children:Object(s.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Email"})}),Object(s.jsx)("div",{className:"login__inputField",children:Object(s.jsx)("input",{value:l,onChange:function(e){return d(e.target.value)},type:"password",placeholder:"Password"})})]}),Object(s.jsxs)("div",{className:"login__forgButt",children:[Object(s.jsx)("small",{children:"REGISTER YOU ACCOUNT........"}),Object(s.jsx)("button",{onClick:function(e){e.preventDefault(),j.signInWithEmailAndPassword(n,l).then((function(e){console.log(e)})).catch((function(e){return alert(e.message)}))},children:"Login"})]}),Object(s.jsx)("button",{onClick:function(e){e.preventDefault(),j.createUserWithEmailAndPassword(n,l).then((function(e){e&&console.log(e)})).catch((function(e){return alert(e.message)}))},children:"Register"})]})]})]})})},O=n(102),x=n(25),p=Object(x.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),f=p.actions,g=f.login,v=f.logout,N=function(e){return e.user.user},_=p.reducer;n(67);function C(){var e=Object(l.c)(N);return Object(s.jsxs)("div",{className:"quoraBox",children:[Object(s.jsxs)("div",{className:"quoraBox__info",children:[Object(s.jsx)(O.a,{src:e.photo?e.photo:"https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573",className:"quoraBox__infoAvatar"}),Object(s.jsx)("h5",{children:e.displayName?e.displayName:e.email})]}),Object(s.jsx)("div",{className:"quoraBox__quora",children:Object(s.jsx)("p",{children:"click on the questions to see the reply by the other user......"})})]})}n(68),n(69);var k=n(32),y=n.n(k),w=Object(x.b)({name:"question",initialState:{questionId:null,questionName:null},reducers:{setQuestionInfo:function(e,t){e.questionId=t.payload.questionId,e.questionName=t.payload.questionName}}}),q=w.actions.setQuestionInfo,A=function(e){return e.question.questionId},I=w.reducer;var S=function(e){var t=e.Id,n=e.question,i=e.imageUrl,a=e.timestamp,o=e.users,u=Object(l.c)(N),j=Object(l.b)(),b=Object(c.useState)(!1),m=Object(r.a)(b,2),x=m[0],p=m[1],f=Object(l.c)(A),g=Object(c.useState)(""),v=Object(r.a)(g,2),_=v[0],C=v[1],k=Object(c.useState)([]),w=Object(r.a)(k,2),I=w[0],S=w[1];return Object(c.useEffect)((function(){f&&h.collection("questions").doc(f).collection("answer").orderBy("timestamp","desc").onSnapshot((function(e){return S(e.docs.map((function(e){return{id:e.id,answers:e.data()}})))}))}),[f]),Object(s.jsxs)("div",{className:"post",onClick:function(){return j(q({questionId:t,questionName:n}))},children:[Object(s.jsxs)("div",{className:"post__info",children:[Object(s.jsx)(O.a,{src:o.photo?o.photo:"https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"}),Object(s.jsx)("h4",{children:o.displayName?o.displayName:o.email}),Object(s.jsx)("small",{children:new Date(null===a||void 0===a?void 0:a.toDate()).toLocaleString()})]}),Object(s.jsxs)("div",{className:"post__body",children:[Object(s.jsxs)("div",{className:"post__question",children:[Object(s.jsx)("p",{children:n}),Object(s.jsx)("button",{onClick:function(){return p(!0)},className:"post__btnAnswer",children:"Answer"}),Object(s.jsxs)(y.a,{isOpen:x,onRequestClose:function(){return p(!1)},shouldCloseOnOverlayClick:!1,style:{overlay:{width:680,height:550,backgroundColor:"rgba(0,0,0,0.8)",zIndex:"1000",top:"50%",left:"50%",marginTop:"-250px",marginLeft:"-350px"}},children:[Object(s.jsxs)("div",{className:"modal__question",children:[Object(s.jsx)("h1",{children:n}),Object(s.jsxs)("p",{children:["asked by"," ",Object(s.jsx)("span",{className:"name",children:o.displayName?o.displayName:o.email})," ","","on"," ",Object(s.jsx)("span",{className:"name",children:new Date(null===a||void 0===a?void 0:a.toDate()).toLocaleString()})]})]}),Object(s.jsx)("div",{className:"modal__answer",children:Object(s.jsx)("textarea",{value:_,onChange:function(e){return C(e.target.value)},placeholder:"Enter Your Answer",type:"text"})}),Object(s.jsxs)("div",{className:"modal__button",children:[Object(s.jsx)("button",{className:"cancle",onClick:function(){return p(!1)},children:"Cancel"}),Object(s.jsx)("button",{type:"sumbit",onClick:function(e){e.preventDefault(),f&&h.collection("questions").doc(f).collection("answer").add({user:u,answer:_,questionId:f,timestamp:d.a.firestore.FieldValue.serverTimestamp()}),console.log(f),C(""),p(!1)},className:"add",children:"Add Answer"})]})]})]}),Object(s.jsx)("div",{className:"post__answer",children:I.map((function(e){var n,c=e.id,i=e.answers;return Object(s.jsx)("p",{style:{position:"relative",paddingBottom:"5px"},children:t===i.questionId?Object(s.jsxs)("span",{children:[i.answer,Object(s.jsx)("br",{}),Object(s.jsx)("span",{style:{position:"absolute",color:"gray",fontSize:"small",display:"flex",right:"0px"},children:Object(s.jsxs)("span",{style:{color:"#b92b27"},children:[i.user.displayName?i.user.displayName:i.user.email," ","on"," ",new Date(null===(n=i.timestamp)||void 0===n?void 0:n.toDate()).toLocaleString()]})})]}):""},c)}))}),Object(s.jsx)("img",{src:i,alt:""})]})]})};var E=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)("questions"),o=Object(r.a)(a,2),l=o[0],d=o[1];return Object(c.useEffect)((function(){h.collection(l).orderBy("timestamp","desc").onSnapshot((function(e){return i(e.docs.map((function(e){return{id:e.id,questions:e.data()}})))}))}),[l]),Object(s.jsxs)("div",{className:"feed",children:[Object(s.jsxs)("div",{className:"chngesub",children:[Object(s.jsx)("button",{className:"btndis",onClick:function(){d("questions")},children:"General"}),Object(s.jsx)("button",{className:"btndis",onClick:function(){d("cse")},children:"CSE"}),Object(s.jsx)("button",{className:"btndis",onClick:function(){d("ece")},children:"ECE"}),Object(s.jsx)("button",{className:"btndis",onClick:function(){d("eee")},children:"EEE"}),Object(s.jsx)("button",{className:"btndis",onClick:function(){d("mech")},children:"Mech"}),Object(s.jsx)("button",{className:"btndis",onClick:function(){d("aero")},children:"Aero"}),Object(s.jsx)("button",{className:"btndis",onClick:function(){d("auto")},children:"Auto"}),Object(s.jsx)("button",{className:"btndis",onClick:function(){d("it")},children:"It"}),Object(s.jsx)("button",{className:"btndis",onClick:function(){d("isc")},children:"Isc"}),Object(s.jsx)("button",{className:"btndis",onClick:function(){d("tex")},children:"Tex"}),Object(s.jsx)("button",{className:"btndis",onClick:function(){d("ft")},children:"FT"})]}),Object(s.jsx)(C,{}),n.map((function(e){var t=e.id,n=e.questions;return Object(s.jsx)(S,{Id:t,question:n.question,imageUrl:n.imageUrl,timestamp:n.timestamp,users:n.user},t)}))]})},L=(n(79),n(100)),Q=n(101),U=n(99);y.a.setAppElement("#root");var V=function(){var e=Object(l.c)(N),t=Object(c.useState)(!1),n=Object(r.a)(t,2),i=n[0],a=n[1],o=Object(c.useState)(""),u=Object(r.a)(o,2),b=u[0],m=u[1],x=Object(c.useState)(""),p=Object(r.a)(x,2),f=p[0],g=p[1],v=b,_=Object(c.useState)("questions"),C=Object(r.a)(_,2),k=C[0],w=C[1];return Object(s.jsxs)("div",{className:"qHeader",children:[Object(s.jsx)("h1",{children:"Welcome To I Got The Answer..........."}),Object(s.jsxs)("div",{className:"qHeader__Rem",children:[Object(s.jsxs)("div",{className:"qHeader__avatar",children:[Object(s.jsx)("h7",{children:"Logout"}),Object(s.jsx)(O.a,{onClick:function(){return j.signOut()},className:"Avatar",src:e.photo?e.photo:"https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"})]}),Object(s.jsx)(L.a,{onClick:function(){return a(!0)},children:"Add Question"}),Object(s.jsx)("div",{id:"but",children:Object(s.jsx)("a",{href:"https://chatglobal19236192.000webhostapp.com/",children:Object(s.jsx)("button",{className:"btnchat",onClick:"dosomething",children:"Chat Global"})})}),Object(s.jsx)("div",{id:"butn",children:Object(s.jsx)("a",{href:"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin",children:Object(s.jsx)("button",{className:"btnmessage",children:"Message"})})}),Object(s.jsxs)(y.a,{isOpen:i,onRequestClose:function(){return a(!1)},shouldCloseOnOverlayClick:!1,style:{overlay:{width:700,height:600,backgroundColor:"rgba(0,0,0,0.8)",zIndex:"1000",top:"50%",left:"50%",marginTop:"-300px",marginLeft:"-350px"}},children:[Object(s.jsxs)("div",{className:"modal__title",children:[Object(s.jsx)("h5",{children:"Add Question"}),Object(s.jsx)("h5",{children:"Share Link"})]}),Object(s.jsxs)("div",{className:"modal__info",children:[Object(s.jsx)(O.a,{className:"avatar",src:e.photo?e.photo:"https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"}),Object(s.jsxs)("p",{children:[e.disPlayName?e.disPlayName:e.email," asked"]})]}),Object(s.jsxs)("div",{className:"modal__Field",children:[Object(s.jsx)(Q.a,{value:b,onChange:function(e){return m(e.target.value)},type:"text",placeholder:"Ask Your Question Here.............. "}),Object(s.jsxs)("div",{className:"modal__fieldLink",children:[Object(s.jsx)(U.a,{}),Object(s.jsx)("input",{value:f,onChange:function(e){return g(e.target.value)},type:"text",placeholder:" click to give the image url here......"})]}),Object(s.jsx)("h4",{children:"click the departments to upload the question in specific fields.........."}),Object(s.jsxs)("div",{id:"divup",children:[Object(s.jsx)("button",{onClick:function(){w("questions")},children:"general"}),Object(s.jsx)("button",{onClick:function(){w("cse")},children:"cse"}),Object(s.jsx)("button",{onClick:function(){w("ece")},children:"ece"}),Object(s.jsx)("button",{onClick:function(){w("eee")},children:"eee"}),Object(s.jsx)("button",{onClick:function(){w("mech")},children:"mech"}),Object(s.jsx)("button",{onClick:function(){w("auto")},children:"auto"}),Object(s.jsx)("button",{onClick:function(){w("aero")},children:"aero"}),Object(s.jsx)("button",{onClick:function(){w("it")},children:"It"}),Object(s.jsx)("button",{onClick:function(){w("tex")},children:"Textile"}),Object(s.jsx)("button",{onClick:function(){w("isc")},children:"Isc"}),Object(s.jsx)("button",{onClick:function(){w("ft")},children:"FT"})]})]}),Object(s.jsx)("div",{className:"upid",children:Object(s.jsx)("a",{href:"https://uplimggeurl.000webhostapp.com/",children:Object(s.jsx)("button",{children:"upload from device"})})}),Object(s.jsxs)("div",{className:"modal__buttons",children:[Object(s.jsx)("button",{className:"cancle",onClick:function(){return a(!1)},children:"Cancel"}),Object(s.jsx)("button",{type:"sumbit",onClick:function(t){t.preventDefault(),a(!1),v&&h.collection(k).add({user:e,question:b,imageUrl:f,timestamp:d.a.firestore.FieldValue.serverTimestamp()}),m(""),g("")},className:"add",children:"Add Question"})]})]})]})]})};n(80);var W=function(){return Object(s.jsxs)("div",{className:"quora",children:[Object(s.jsx)(V,{}),Object(s.jsx)("div",{className:"quora__content",children:Object(s.jsx)(E,{})})]})};var D=function(){var e=Object(l.c)(N),t=Object(l.b)();return Object(c.useEffect)((function(){j.onAuthStateChanged((function(e){t(e?g({uid:e.uid,email:e.email,displayName:e.displayName,photo:e.photoURL}):v()),console.log(e)}))}),[t]),Object(s.jsx)("div",{className:"App",children:e?Object(s.jsx)(W,{}):Object(s.jsx)(m,{})})},G=Object(x.a)({reducer:{user:_,question:I}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(l.a,{store:G,children:Object(s.jsx)(D,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[81,1,2]]]);
//# sourceMappingURL=main.a312e631.chunk.js.map
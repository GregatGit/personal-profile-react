(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),i=a.n(r),l=a(43),c=a(24),s=a(54),u=a(44),m=a(55),p=a(53),d=a(115),h=a(147),g=a(148),f=a(156),b=a(149),w=a(39),E=a(70),y=a(136),v=a(155),k=a(139),x=a(140),j=a(141),I=a(142),C=a(143),T=a(144),G=a(145),A=a(146),S=a(4),O=a(72),F=a.n(O),N=a(37),B=a.n(N),D=a(16),P=a.n(D),W=a(15),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,number:"0422 347 204"},a.handleToggle=function(){a.props.openDialogFunc(),a.setState({open:!a.state.open})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"UNSAFE_componentWillUpdate",value:function(e){this.state.open!==this.props.openDialog&&(this.props.openDialogFunc(),this.setState({open:this.props.openDialog}))}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(n.Fragment,null,o.a.createElement(y.a,{onClick:this.handleToggle,"aria-label":"Add",size:"small"},o.a.createElement(B.a,{color:"primary"})),o.a.createElement(v.a,{open:this.state.open,onClose:this.handleToggle},o.a.createElement(k.a,{id:"form-dialog-title"},"Contact Details"),o.a.createElement(x.a,null,o.a.createElement(j.a,null,o.a.createElement(I.a,null,o.a.createElement(C.a,{className:e.avatar},o.a.createElement(F.a,null))),o.a.createElement(T.a,null,o.a.createElement("a",{href:"mailto:gregdd@outlook.com?subject=contact_from_website&body=Hello"},o.a.createElement(G.a,null,"gregdd@outlook.com")))),o.a.createElement(j.a,null,o.a.createElement(I.a,null,o.a.createElement(C.a,{className:e.avatar},o.a.createElement(B.a,null))),o.a.createElement(T.a,null,o.a.createElement(E.CopyToClipboard,{text:"0422 347 204"},o.a.createElement(G.a,null,"0422 347 204 (Click to copy)")))),o.a.createElement(j.a,null,o.a.createElement(I.a,null,o.a.createElement(C.a,null,o.a.createElement(P.a,{path:W.f,size:1.3,color:"#FAFAFA"}))),o.a.createElement(T.a,null,o.a.createElement(G.a,{onClick:function(){return window.open("https://www.linkedin.com/in/greg-duncan-458199108/","_blank")}},"https://www.linkedin.com/in/greg-duncan-458199108/"))),o.a.createElement(j.a,null,o.a.createElement(I.a,null,o.a.createElement(C.a,null,o.a.createElement(P.a,{path:W.b,size:1.65,color:"#FAFAFA"}))),o.a.createElement(T.a,null,o.a.createElement(G.a,{onClick:function(){return window.open("https://github.com/GregatGit?tab=repositories","_blank")}},"https://github.com/GregatGit/")))),o.a.createElement(A.a,null,o.a.createElement(G.a,{onClick:function(){return console.log("you clicked")},varient:"outlined",color:"primary"},"Links will open a new tab"))))}}]),t}(n.Component),z=Object(S.a)(function(e){return{FormControl:{width:300}}})(R),J=Object(d.a)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}});var Q=function(e){var t=e.pages,a=e.showPage,r=e.openDialog,i=e.openDialogFunc,l=J(),c=Object(n.useState)(0),s=Object(p.a)(c,2),u=s[0],m=s[1];return o.a.createElement("div",{className:l.root},o.a.createElement(h.a,{position:"fixed"},o.a.createElement(g.a,null,o.a.createElement(f.a,{style:{flex:1},value:u,onChange:function(e,t){m(t),a(t)}},t.map(function(e){return o.a.createElement(b.a,{key:e,label:e})})),o.a.createElement(z,{openDialog:r,openDialogFunc:i}),o.a.createElement(w.a,{style:{marginLeft:10},variant:"h4"},"GREG DUNCAN"))))},H=a(150),U=a(151),_=a(152),q=a(74),M=a.n(q),L=a(75),V=a.n(L),Y=a(76),X=a.n(Y),Z=a(77),K=a.n(Z),$=a(78),ee=a.n($),te=a(79),ae=a.n(te),ne=a(80),oe=a.n(ne),re=a(62),ie=a.n(re),le=a(81),ce=a.n(le),se=a(82),ue=a.n(se),me=a(83),pe=a.n(me),de=a(84),he=a.n(de),ge=a(85),fe=a.n(ge),be={gregProfile:ae.a,sunny:oe.a},we=["This project is still being worked on. It is not up and running.","This project is up and running. It is no longer being updated but left to show eariler coding.","This project is up and running. It is complete but will continue be updated.","This project is still being worked on. It is up running to demonstrate how the code is working so far."],Ee=(ie.a,[{title:"Projects Page",status:we[2],background:"Welcome to the projects page. These are some the earlier and later projects I\u2019ve been working or worked on. Earlier I depended on jQuery and Bootstrap. I now prefer to use vanilla js and react.\n    I haven\u2019t included any of the tutorials that I\u2019ve coded as I followed along as they\u2019re not really mine. Some of them I put on GitHub but make it very clear that it\u2019s someone else\u2019s work.\n    The buttons below will open the projects or their code repositories. This time the \u201copen project\u201d button will take you to this personal-profile\u2019s code and the \u201ccode button\u201d will open my GitHub repository.\n    ",img:fe.a,url:"https://github.com/GregatGit/personal-profile-react",code:"https://github.com/GregatGit?tab=repositories"},{title:"The Iron Throne",status:we[3],subtitle:"You choose who sits",blurb:"Finally your voice is heard - who should sit on the iron throne!",about:"A simple voting app that allows you to choose who you want to sit on the iron throne.",code:"https://github.com/GregatGit/how-to-vote",img:M.a,url:"https://gregatgit.github.io/how-to-vote/",background:"We were all pretty upset by the Game of Thrones ending. To take a little of the sting out of it, an app that gives you a vote on who should sit on the Iron Throne. It\u2019s built with React, Redux, Create-React-App, Redux, Semantic-UI. It was fun to build due to the subject matter. The hardest challenge is making the cards suit the style of Game of Thrones. For that reason, it is not currently finished. It gave me plenty of practice grabbing Semantic Html then converting it into JSX."},{title:"Recipe Box",status:we[1],subtitle:"Check out the recipes!",blurb:"You can make and edit simple recipes",about:"A freeCodeCamp challenge using React",code:"https://github.com/GregatGit/recipe-box-redux",url:"https://gregatgit.github.io/recipe-box-redux/",img:K.a,background:"This is a freeCodeCamp challenge where you must use React and localStorage. This was my first time implementing Redux. The project could have been done without it, but I wanted to start using Redux in a project that was simple. I used react-sanfona for the accordion. The biggest hurdle was trying to make sure localStorage was always in sync with the app. I did find out that it was an easy fix, just by replacing the localStorage with the new state."},{title:"Tic-Tac-Toe",status:we[1],subtile:"The Classic Game",blurb:"How bored are you?",about:"Another freeCodeCamp challenge. While it sounds simple putting it together threw up plenty of challenges.",code:"https://github.com/GregatGit/ticTacToe",url:"https://gregatgit.github.io/ticTacToe/",img:X.a,background:"The Tic-Tac-Toe is simple enough but when you build it from scratch you find that it\u2019s not as simple as first thought. The biggest challenge was creating logic that it can implement on the fly. I used JS, Html, Css, jQuery and Bootstrap to build it. I built a separated ai file to host the logic."},{title:"Pomodoro Clock",status:we[1],subtitle:"A clock to work by",blurb:"fsdgdg",about:"There is a time for work a and a time to rest - and you can choose how long.",background:"One of the early freeCodeCamp challenges that felt impossible at first. The biggest hurdle was understanding how to properly use setInterval(). The other resource that proved invaluble was freeCodeCamps Gitter forums. Ir was a great place to learn how to ask questions. The Pomodoro Clock was built with javaScript, bootstrap, jQuery at codepen.io. Codepen is a great place to start projects for beginners.",url:"https://codepen.io/gregoverhere/full/VvgEQw",img:ee.a,code:"https://codepen.io/gregoverhere/pen/VvgEQw"},{title:"Wiki Search",status:we[1],subtitle:"Seach Wikipedia now!",blurb:"A simple interface for seaching Wikipedia",about:"A freeCodeCamp challenge using wikipedia and your own search term",code:"https://github.com/GregatGit/wikipedia-search",url:"https://gregatgit.github.io/wikipedia-search/",img:V.a,background:"Using Wikipedia\u2019s API get a search term from the user and display the results. It is a simple app using js, css, jQuery and Wikipedia\u2019s API. The most challenging aspect was getting a search string from Wikipedia. I leaned not to get bogged down in one little area. I ended up getting search string from someone else that worked just fine. It was a good introduction on how to use data passed down from a GET request."},{title:"Online Calculator",status:we[1],background:"A project that was very challenging with what seemed very basic idea. But maths gets hard with all its little rules that are key to making it work. I build it with jQuery and bootstrap.",img:he.a,url:"https://codepen.io/gregoverhere/full/YyRyej",code:"https://codepen.io/gregoverhere/pen/YyRyej"},{title:"Simon Game",status:we[1],background:"Built with jQuery, Bootstrap and font-awesome. The fun memory game that speeds up the longer you play. Speeding up the game was difficult to implement as you don\u2019t want all the sounds playing over the top of each other. The css was challenging as I didn\u2019t want to do a straight copy of the original game.",img:pe.a,url:"https://codepen.io/gregoverhere/full/WxxZxy",code:"https://codepen.io/gregoverhere/pen/WxxZxy"},{title:"Game of Life",status:we[1],background:"The challenge was to build Conway\u2019s Game of Life. Once you figured out the maths and structure to make it work it turns out to be a lot simpler than first thought. The biggest thing I leant from this was to use create-react-app instead of building my own environment with webpack. Most of the hurdles I hit were with my set up. Since switching it\u2019s made leaning and working with react so much easier.",img:ue.a,url:"https://gregatgit.github.io/game-of-life/",code:"https://github.com/GregatGit/game-of-life"},{title:"Quote of the Day",status:we[1],background:"An inspirational quote app that lets you randomly shuffle through its large array of quotes. If you like a quote the \u2018tweet\u2019 button lets you tweet it out. Once you have chosen a quote it will have to work its way through the rest of the quotes as the app avoids repeats. The most challenging aspect was implementing the tweeting of the quote right. It was built with jQuery, bootstrap and font-awesome.",img:ce.a,url:"https://codepen.io/gregoverhere/full/xwWevp",code:"https://codepen.io/gregoverhere/pen/xwWevp"},{title:"Markdown Previewer",status:we[1],background:"This is the first project I ever built in react. It wasn't too hard, but I did get stuck due to using a text field instead of a text area.",img:ie.a,url:"https://gregatgit.github.io/gregs-markdown-app/",code:"https://github.com/GregatGit/gregs-markdown-app"}]),ye=["React","Create-React-App","Redux","React-Router","Vanilla.js","Css","Html","JSX","Material-UI","Semantic-UI","Chrome Dev Tools","Google","React & Redux Dev Tools","Git","GitHub","Mozilla MDN","Stack Overflow","VS Code"],ve=["I am Greg from Brisbane looking to get full-time work in\nFront-End development.","I started learning to program in C then C# but\neventually found myself in the world of javascript. I have worked on\nprojects using Devexpress, built on the Apache Cordova platform.","Now I build projects using React and Vanilla.js bootstrapped with\ncreate-react-app.","I have studied networking configuring Cisco routers and\nWindows Active Directory. I completed the Front-End Development\nCertificate at FreeCodeCamp and continue to study web development through\nUdemy and Lynda. I have utilized bootstrap, mongoDB, jQuery, Wikipedia Api\nand other tools and libraries.","Please feel free to look around, check out\nmy code and see how my projects have turned out."],ke=["I am an Australian who having travelled to many countries (but not enough) feel very at home in South East Qld. We have great weather all year round perfect for camping and going to the beach. I am hoping to do a lot more travel with Vietnam and Cambodia up next.","I am married and have three wonderful children. Our house is protected by the awesome Sunny, a cattle dog that loves life more than any other creature on Earth. I enjoy performing, mainly improv comedy, and play acoustic guitar. I am a big cinema fan with Harry Potter, James Bond and Star Wars at the top of my list.","I love the javaScript world. Despite a few run ins where I vowed never to type a jot of code again, I always come back and get amazed at what you can do with it."],xe=["I do my coding in the VS Code editor using Prettier, Colour Brackets and\nother helpful extensions as well as utilizing libraries such as lodash.","Previously I configured webpack to work with React but now I work in the\nCreate-React-App environment with a redux store.","I was using the\nSemantic-UI library in projects but I have switched to Material-UI due to its\nease of installing and integration in create-react-app.","These are the tools and technologies I use on a regular coding basis:"],je=["Other technologies I use when I needed are MongoDB, Bootstrap, jQuery\nand Postman to name a few. I have coded in C and C# and used other\njavascript frameworks and libraries such as Angular, Knockout and\nDevexpress.","I have a Diploma in Networking (completed 2014) that grounded me in the network fundamentals and taught me how to\nconfigure Cisco routers and manage Windows Server and Window Active Directory.","I host Murder Mysteries and Trivia nights which has made me a confident public speaker."],Ie=Object(d.a)(function(e){return{avatar:{margin:3}}}),Ce=function(){var e=Ie();return o.a.createElement(n.Fragment,null,o.a.createElement(H.a,null),o.a.createElement(U.a,{maxWidth:"md",style:{paddingTop:50}},o.a.createElement(w.a,{component:"div",style:{backgroundColor:"#cfe8fc"}},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("h1",null,"Hello!"),ve.map(function(e,t){return o.a.createElement(w.a,{key:t,paragraph:!0},e)}),o.a.createElement(x.a,null,o.a.createElement(j.a,{style:{textAlign:"center"}},o.a.createElement(I.a,null,o.a.createElement(C.a,{className:e.avatar},o.a.createElement(B.a,null))),o.a.createElement(T.a,null,"Click on the phone icon on the top right nav-bar if you need my contact details"))),o.a.createElement(_.a,{variant:"middle"})))))},Te=a(153),Ge=a(113),Ae=Object(d.a)(function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}}});var Se=function(){var e=Ae();function t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"z";return o.a.createElement(Te.a,{container:!0,item:!0,xs:12,spacing:3},o.a.createElement(Te.a,{item:!0,xs:4},o.a.createElement(Ge.a,{className:e.paper},t)),o.a.createElement(Te.a,{item:!0,xs:4},o.a.createElement(Ge.a,{className:e.paper},a)),o.a.createElement(Te.a,{item:!0,xs:4},o.a.createElement(Ge.a,{className:e.paper},n)))}return o.a.createElement("div",{className:e.root},o.a.createElement(function(){return o.a.createElement(Te.a,{container:!0,spacing:1},t(ye[0],ye[1],ye[2]),t(ye[3],ye[4],ye[5]),t(ye[6],ye[7],ye[8]),t(ye[9],ye[10],ye[11]),t(ye[12],ye[13],ye[14]),t(ye[15],ye[16],ye[17]))},null))},Oe=function(){var e=function(e){return e.map(function(e,t){return o.a.createElement(w.a,{key:t,paragraph:!0},e)})};return o.a.createElement(n.Fragment,null,o.a.createElement("h2",{style:{textAlign:"center"}},"My Technology Stack"),e(xe),o.a.createElement(Se,null),e(je))},Fe=function(){return o.a.createElement(n.Fragment,null,o.a.createElement(H.a,null),o.a.createElement(U.a,{maxWidth:"md",style:{paddingTop:50,paddingBottom:35}},o.a.createElement(w.a,{component:"div",style:{backgroundColor:"#fefefe",marginBottom:10}},o.a.createElement(Oe,null),o.a.createElement(_.a,{variant:"middle"}))))},Ne=Object(d.a)(function(e){return{root:{padding:e.spacing(3,2),margin:e.spacing(10)},img:{height:200,maxWidth:400,overflow:"hidden",display:"block",border:"1px solid #021a40"}}});function Be(){var e=Ne();return o.a.createElement("div",null,o.a.createElement(Ge.a,{className:e.root},o.a.createElement(w.a,{style:{textAlign:"center"},variant:"h5",component:"h3"},"A little about me..."),o.a.createElement(Te.a,{container:!0,spacing:3},o.a.createElement(Te.a,{item:!0,xs:!0},o.a.createElement("img",{className:e.img,src:be.gregProfile,alt:"profile gregDuncan"})),o.a.createElement(Te.a,{item:!0,xs:8},ke.map(function(e,t){return o.a.createElement(w.a,{key:t,component:"p"},e)})),o.a.createElement(Te.a,{item:!0,xs:!0},o.a.createElement("img",{className:e.img,src:be.sunny,alt:"sunny at beach"})))))}var De=a(157),Pe=Object(d.a)(function(e){return{text:{padding:e.spacing(2,2,0)},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},avatar:{margin:3}}});function We(e){var t=Pe();return o.a.createElement(n.Fragment,null,o.a.createElement(H.a,null),o.a.createElement(h.a,{position:"fixed",color:"primary",className:t.appBar},o.a.createElement(g.a,null,o.a.createElement(De.a,{title:"Will open linkedin in new tab",placement:"top"},o.a.createElement(C.a,{onClick:function(){return window.open("https://www.linkedin.com/in/greg-duncan-458199108/","_blank")},className:t.avatar},o.a.createElement(P.a,{path:W.f,size:1.3,color:"#3F51B5"}))),o.a.createElement(De.a,{title:"Will open gitHub in new tab",placement:"top"},o.a.createElement(C.a,{onClick:function(){return window.open("https://github.com/GregatGit?tab=repositories","_blank")},className:t.avatar},o.a.createElement(P.a,{path:W.b,size:1.65,color:"#3F51B5"}))),o.a.createElement(C.a,{className:t.avatar},o.a.createElement(P.a,{path:W.i,size:1.3,color:"#3F51B5"})),o.a.createElement(C.a,{className:t.avatar},o.a.createElement(P.a,{path:W.c,size:1.3,color:"#3F51B5"})),o.a.createElement(C.a,{className:t.avatar},o.a.createElement(P.a,{path:W.j,size:1.3,color:"#3F51B5"})),o.a.createElement("div",{className:t.grow}),o.a.createElement(C.a,{className:t.avatar},o.a.createElement(P.a,{path:W.g,size:1.3,color:"#3F51B5"})),o.a.createElement(C.a,{className:t.avatar},o.a.createElement(P.a,{path:W.d,size:1.3,color:"#3F51B5"})),o.a.createElement(C.a,{className:t.avatar},o.a.createElement(P.a,{path:W.e,size:1.3,color:"#3F51B5"})),o.a.createElement(De.a,{title:"Send me an email",placement:"top"},o.a.createElement("a",{href:"mailto:gregdd@outlook.com?subject=contact_from_website&body=Hello"},o.a.createElement(C.a,{className:t.avatar},o.a.createElement(P.a,{color:"#3F51B5",path:W.a,size:1.3})))),o.a.createElement(De.a,{title:"0422 347 204",placement:"top"},o.a.createElement(C.a,{className:t.avatar},o.a.createElement(P.a,{path:W.h,size:1.3,color:"#3F51B5"}))))))}var Re=a(154),ze=a(158),Je=a(63),Qe=a.n(Je),He=a(64),Ue=a.n(He),_e=Object(d.a)(function(e){return{root:{maxWidth:400,flexGrow:1,marginLeft:10},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:255,maxWidth:400,overflow:"hidden",display:"block",width:"100%",border:"1px solid #021a40"},paper:{width:"auto",padding:15,marginRight:20}}});function qe(){var e=_e(),t=Object(Re.a)(),a=Object(n.useState)(0),r=Object(p.a)(a,2),i=r[0],l=r[1],c=Ee.length;return o.a.createElement(Te.a,{style:{marginTop:55},container:!0,spacing:3},o.a.createElement(Te.a,{item:!0,xs:4},o.a.createElement("div",{className:e.root},o.a.createElement(Ge.a,{square:!0,elevation:0,className:e.header},o.a.createElement(w.a,{align:"center"},Ee[i].title)),o.a.createElement("img",{className:e.img,src:Ee[i].img,alt:Ee[i].title}),o.a.createElement(ze.a,{steps:c,position:"static",variant:"text",activeStep:i,nextButton:o.a.createElement(G.a,{size:"small",onClick:function(){l(function(e){return e+1})},disabled:i===c-1},"Next","rtl"===t.direction?o.a.createElement(Qe.a,null):o.a.createElement(Ue.a,null)),backButton:o.a.createElement(G.a,{size:"small",onClick:function(){l(function(e){return e-1})},disabled:0===i},"rtl"===t.direction?o.a.createElement(Ue.a,null):o.a.createElement(Qe.a,null),"Back")}))),o.a.createElement(Te.a,{item:!0,xs:8},o.a.createElement(Ge.a,{className:e.paper},o.a.createElement(w.a,{align:"center",variant:"h3"},Ee[i].title),o.a.createElement(w.a,{variant:"h6",elevation:3},Ee[i].background),o.a.createElement(_.a,{variant:"middle",style:{marginBottom:5}}),o.a.createElement(w.a,{component:"h5"},"STATUS: ",Ee[i].status),o.a.createElement(_.a,{variant:"middle",style:{marginBottom:5}}),o.a.createElement(De.a,{title:"Will open project in new tab",placement:"top"},o.a.createElement(G.a,{color:"primary",variant:"outlined",onClick:function(){return window.open(Ee[i].url,"_blank")}},"Open Project")),o.a.createElement(De.a,{title:"Will open code in new tab",placement:"top"},o.a.createElement(G.a,{color:"primary",variant:"outlined",style:{float:"right"},onClick:function(){return window.open(Ee[i].code,"_blank")}},"Open Code")))))}var Me=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={pages:["welcome","skills","projects","About"],page:"welcome",dialogOpen:!1},a.changePage=function(e){a.setState({page:a.state.pages[e]})},a.openDialog=function(){a.setState({dialogOpen:!a.state.dialogOpen})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.pages,a=e.page,r=e.dialogOpen;return o.a.createElement(n.Fragment,null,o.a.createElement(Q,{page:a,pages:t,showPage:this.changePage,openDialog:r,openDialogFunc:this.openDialog}),"welcome"===this.state.page?o.a.createElement(Ce,null):"","skills"===this.state.page?o.a.createElement(Fe,null):"","projects"===this.state.page?o.a.createElement(qe,null):"","About"===this.state.page?o.a.createElement(Be,null):"",o.a.createElement(We,{openDialogFunc:this.openDialog}))}}]),t}(n.Component);i.a.render(o.a.createElement(Me,null),document.getElementById("root"))},62:function(e,t,a){e.exports=a.p+"static/media/markdown-previewer.c937b25c.JPG"},74:function(e,t,a){e.exports=a.p+"static/media/iron-throne.4769959f.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/wiki.e410d5bf.JPG"},76:function(e,t,a){e.exports=a.p+"static/media/tictactoe.c4206fb7.JPG"},77:function(e,t,a){e.exports=a.p+"static/media/recipebox.0705e9db.JPG"},78:function(e,t,a){e.exports=a.p+"static/media/pomodoro.3b61f4cd.JPG"},79:function(e,t,a){e.exports=a.p+"static/media/greg.bdadccaf.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/Sunny1.feace2c8.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/quote.2434a9c4.JPG"},82:function(e,t,a){e.exports=a.p+"static/media/GameOfLife.3b300187.JPG"},83:function(e,t,a){e.exports=a.p+"static/media/simon-game.af9c12c3.JPG"},84:function(e,t,a){e.exports=a.p+"static/media/calculator.e83164e6.JPG"},85:function(e,t,a){e.exports=a.p+"static/media/projects.70a48e40.JPG"},91:function(e,t,a){e.exports=a(112)}},[[91,1,2]]]);
//# sourceMappingURL=main.af78134c.chunk.js.map
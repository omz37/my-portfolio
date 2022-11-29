(function(t){function e(e){for(var o,n,s=e[0],i=e[1],l=e[2],m=0,v=[];m<s.length;m++)n=s[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&v.push(r[n][0]),r[n]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(v.length)v.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],o=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(o=!1)}o&&(c.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},r={app:0},c=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=i;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0874":function(t,e,a){"use strict";a("f427")},1182:function(t,e,a){},"2cdd":function(t,e,a){},"34ba":function(t,e,a){"use strict";a("1182")},"42da":function(t,e,a){"use strict";a("5eb2")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"background-color":"#9ccbcb",width:"100%",height:"100%"},attrs:{id:"app"}},[a("v-app",[a("v-main",[a("router-view")],1)],1)],1)},c=[],n={name:"App",data:function(){return{}}},s=n,i=(a("034f"),a("2877")),l=a("6544"),u=a.n(l),m=a("7496"),v=a("f6c4"),d=Object(i["a"])(s,r,c,!1,null,null,null),p=d.exports;u()(d,{VApp:m["a"],VMain:v["a"]});var g=a("8c4f"),f=a("2f62");o["a"].use(f["a"]);var h=new f["a"].Store({state:{},mutations:{},actions:{},modules:{}}),b=(a("15f5"),a("d1e78"),a("f309"));o["a"].use(b["a"]);var w=new b["a"]({icons:{iconfont:"fa"},theme:{themes:{dark:{background:"#111111"}}}}),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{"background-color":"#9ccbcb"},attrs:{id:"home"}},[a("nav-bar"),a("div",{staticClass:"mb-10 mx-16"},[a("v-row",{staticClass:"mt-16"},[a("v-col",{attrs:{cols:"12",xl:"11",lg:"10",md:"10",sm:"12"}},[a("div",{staticStyle:{"font-size":"38px"}},[t._v("Hello, I'm Omz Marlin - a Web Developer based in France")])]),a("v-col",{staticClass:"mt-6",attrs:{cols:"3",xl:"1",lg:"2",md:"2",sm:"3"}},[t.$vuetify.breakpoint.smAndDown?a("v-row",{staticClass:"ml-1 text-center"},[a("v-btn",{staticStyle:{"font-size":"large"},attrs:{tile:"",dark:"",large:""},on:{click:function(e){return t.goToPage("about")}}},[t._v("About me")])],1):a("v-row",{staticClass:"justify-end mr-1"},[a("v-btn",{staticStyle:{"font-size":"large"},attrs:{tile:"",dark:"",large:""},on:{click:function(e){return t.goToPage("about")}}},[t._v("About me")])],1)],1)],1),a("v-row",{staticClass:"mt-16 mb-16"},t._l(t.projects,(function(e){return a("v-col",{key:e.id,staticClass:"mb-5 clickable-text",attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"},on:{mouseover:function(t){e.isHovered=!0},mouseleave:function(t){e.isHovered=!1},click:function(a){t.goToProject(e.id.toString())}}},[a("v-card",{staticStyle:{"background-color":"black"},attrs:{elevation:"8"}},[a("v-img",{class:{active:e.isHovered},attrs:{src:e.src}})],1),e.isHovered?a("h1",{staticClass:"white--text",staticStyle:{left:"50px",bottom:"150px",position:"relative","margin-bottom":"-48px"}},[t._v(t._s(e.title))]):t._e()],1)})),1),a("v-row",{staticClass:"mb-5"},[a("v-col",{staticClass:"mt-12",attrs:{cols:"12",sm:"12",md:"7",lg:"7",xl:"7"}},[a("h1",[t._v(" Let's work together on your next project ")])]),a("v-col",{staticClass:"mr-16",attrs:{cols:"5",sm:"5",md:"2",lg:"1",xl:"1"}},[a("v-btn",{staticClass:"mt-13",staticStyle:{"font-size":"large"},attrs:{tile:"",dark:"",large:""},on:{click:function(e){return t.goToPage("contact")}}},[t._v(" Contact ")])],1),a("v-col",{staticClass:"moving-arrow mt-15 text-left",attrs:{cols:"3",sm:"3",md:"2",lg:"1",xl:"1"}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-arrow-left")])],1)],1)],1),a("Footer")],1)},k=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticStyle:{"border-bottom":"1px solid #00c2cb"},attrs:{id:"nav",app:"",color:"#111111",dark:""}},[t.$vuetify.breakpoint.smAndDown?a("v-row",[a("v-col",[a("div",[a("v-row",[a("v-col",{staticClass:"mt-2",attrs:{cols:"3"}},[a("v-img",{staticClass:"clickable-text",attrs:{src:"logo.png",contain:"","max-height":"35"},on:{click:function(e){return t.goToPage("home")}}})],1),a("v-col",{attrs:{cols:"4"}},[a("h1",{staticClass:"clickable-text",on:{click:function(e){return t.goToPage("home")}}},[t._v("OMZ")])]),a("v-spacer"),a("v-col",{attrs:{cols:"2"}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)],1),a("v-navigation-drawer",{staticStyle:{"background-color":"black"},attrs:{absolute:"",app:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[a("v-list-item",{staticClass:"text-center",style:"home"===t.currentPath?"color: black; background-color: #9ccbcb":"color: white",on:{click:function(e){t.goToPage("home"),t.drawer=!1}}},[a("v-list-item-title",{staticStyle:{"font-size":"large"}},[t._v(" Home ")])],1),a("v-divider"),a("v-list-item",{staticClass:"text-center",style:"projects"===t.currentPath?"color: black; background-color: #9ccbcb":"color:  white",on:{click:function(e){t.goToPage("projects"),t.drawer=!1}}},[a("v-list-item-title",{staticStyle:{"font-size":"large"}},[t._v(" Projects ")])],1),a("v-divider"),a("v-list-item",{staticClass:"text-center",style:"about"===t.currentPath?"color: black; background-color: #9ccbcb":"color:  white",on:{click:function(e){t.goToPage("about"),t.drawer=!1}}},[a("v-list-item-title",{staticStyle:{"font-size":"large"}},[t._v(" About ")])],1),a("v-divider"),a("v-list-item",{staticClass:"text-center",style:"contact"===t.currentPath?"color: black; background-color: #9ccbcb":"color: white",on:{click:function(e){t.goToPage("contact"),t.drawer=!1}}},[a("v-list-item-title",{staticStyle:{"font-size":"large"}},[t._v(" Contact ")])],1)],1)],1)],1)],1)])],1):a("v-row",[a("v-img",{staticClass:"clickable-text",attrs:{src:"logo.png",contain:"","max-width":"80"},on:{click:function(e){return t.goToPage("home")}}}),a("h1",{staticClass:"ml-3 clickable-text",on:{click:function(e){return t.goToPage("home")}}},[t._v("OMZ")]),a("v-spacer"),a("v-btn",{style:"home"===t.currentPath?"color: #00c2cb":"color: #B5DACC",attrs:{text:""},on:{click:function(e){return t.goToPage("home")}}},[t._v("Home")]),a("v-btn",{style:"projects"===t.currentPath?"color: #00c2cb":"color: #B5DACC",attrs:{text:""},on:{click:function(e){return t.goToPage("projects")}}},[t._v("Projects")]),a("v-btn",{style:"about"===t.currentPath?"color: #00c2cb":"color: #B5DACC",attrs:{text:""},on:{click:function(e){return t.goToPage("about")}}},[t._v("About")]),a("v-btn",{style:"contact"===t.currentPath?"color: #00c2cb":"color: #B5DACC",attrs:{text:""},on:{click:function(e){return t.goToPage("contact")}}},[t._v("Contact")])],1)],1)},_=[],x={data:function(){return{currentPath:"home",drawer:!1,group:null}},watch:{group:function(){this.drawer=!1}},methods:{goToPage:function(t){localStorage.setItem("currentPath",t),this.$router.push(t)}},mounted:function(){this.currentPath=localStorage.getItem("currentPath")}},j=x,S=(a("34ba"),a("40dc")),P=a("5bc1"),V=a("8336"),I=a("62ad"),T=a("ce7e"),A=a("adda"),B=a("8860"),O=a("da13"),z=a("1baa"),$=a("5d23"),D=a("f774"),E=a("0fd9"),F=a("2fa4"),H=Object(i["a"])(j,C,_,!1,null,null,null),N=H.exports;u()(H,{VAppBar:S["a"],VAppBarNavIcon:P["a"],VBtn:V["a"],VCol:I["a"],VDivider:T["a"],VImg:A["a"],VList:B["a"],VListItem:O["a"],VListItemGroup:z["a"],VListItemTitle:$["a"],VNavigationDrawer:D["a"],VRow:E["a"],VSpacer:F["a"]});var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",absolute:"",height:"60px"}},[a("v-row",{staticClass:"justify-end"},[a("h3",{staticClass:"mr-3"},[t._v(" Created by OMZ ")])])],1)},L=[],J={},U=J,R=a("553a"),G=Object(i["a"])(U,M,L,!1,null,null,null),W=G.exports;u()(G,{VFooter:R["a"],VRow:E["a"]});var K={name:"Home",data:function(){return{projects:[{title:"Area",src:"project_area.png",isHovered:!1,id:0},{title:"Pyp",src:"project_pyp.png",isHovered:!1,id:1},{title:"ChambreNoire",src:"project_cn.png",isHovered:!1,id:2},{title:"Swity",src:"project_swity.png",isHovered:!1,id:3}],projectCardStyle:""}},components:{NavBar:N,Footer:W},methods:{goToPage:function(t){localStorage.setItem("currentPath",t),this.$router.push(t)},goToProject:function(t){localStorage.setItem("currentPath","projects"),this.$router.push({name:"projects",params:{number:t}})}},created:function(){localStorage.getItem("currentPath")||localStorage.setItem("currentPath","home")}},Z=K,q=(a("42da"),a("b0af")),Q=a("132d"),X=Object(i["a"])(Z,y,k,!1,null,"3e498b6f",null),Y=X.exports;u()(X,{VApp:m["a"],VBtn:V["a"],VCard:q["a"],VCol:I["a"],VIcon:Q["a"],VImg:A["a"],VRow:E["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"about"}},[a("NavBar"),a("v-row",{staticClass:"justify-center mt-16"},[a("v-col",{attrs:{cols:"12",sm:"12",md:"5",lg:"5",xl:"5"}},[a("v-row",{staticClass:"justify-center"},[a("v-col",{staticStyle:{"background-color":"#9ccbcb"},attrs:{cols:"8"}},[a("v-card",{staticClass:"rounded-circle",attrs:{elevation:"5"}},[a("v-img",{staticClass:"rounded-circle",staticStyle:{border:"1px solid black"},attrs:{src:"omz_pp.jpeg"}})],1)],1)],1)],1),a("v-col",{attrs:{cols:"11",sm:"11",md:"7",lg:"7",xl:"7"}},[a("h1",[t._v(" Hello ! ")]),a("div",{staticClass:"mt-5",staticStyle:{"font-size":"large"}},[a("div",{staticClass:"mb-4"},[t._v(" I’m Jules Omar, a web developer/creator on a mission to translate complex projects into beautiful, practical and responsive websites. "),a("br")]),a("div",{staticClass:"mb-4"},[t._v(" I’ve been fortunate enough to be exposed to a wide range of projects in the past. From independent websites to apps and more complex features for enterprise software solutions. "),a("br")]),a("div",{staticClass:"mb-4"},[t._v(" Though I have worked in-person for most of my projects, I am choosing to work remotely temporarily as I'm currently on a mobility programme in Kuala Lumpur under University of Kuala Lumpur (UniKL) for my postgraduate studies in Software Engineering. "),a("br")]),a("div",{staticClass:"mb-4"},[t._v(" I believe that website creation is the perfect intersection of logical analysis and creativity. While through analysis is where there's room for innovating and providing solutions, the creative aspect of website development is where we can work together to accurately execute the vision of the project."),a("br")]),a("div",{staticClass:"mb-4"},[t._v(" I am constantly looking to upskill myself outside of class hours. Hence, I am taking a Coursera course in project management that's certified by Google. This course complements my degree in Software Engineering by equipping me with relevant skills such as team management, communication and planning. "),a("br")]),a("div",[t._v(" Let's get in touch ! "),a("br")])])])],1),t.$vuetify.breakpoint.smAndDown?t._e():a("v-row",{staticClass:"mt-3 mb-16"},[a("v-col",{attrs:{cols:"5"}}),a("v-col",{attrs:{cols:"6",sm:"4",md:"3",lg:"2",xl:"2"}},[a("v-btn",{staticStyle:{"font-size":"large"},attrs:{tile:"",dark:"",large:""}},[a("a",{staticStyle:{"font-size":"large","text-decoration":"none",color:"white"},attrs:{href:"cv-marlin-english.pdf",target:"_blank"}},[t._v("My C.V")])])],1),a("v-col",{attrs:{cols:"6",sm:"4",md:"3",lg:"2",xl:"2"}},[a("v-btn",{staticStyle:{"font-size":"large"},attrs:{tile:"",dark:"",large:""},on:{click:t.goToContact}},[t._v(" Let's chat ")])],1),a("v-col",{staticClass:"moving-arrow mt-2",attrs:{cols:"1"}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-arrow-left")])],1)],1),t.$vuetify.breakpoint.smAndDown?a("v-row",{staticClass:"mb-16 ml-3"},[a("v-col",{attrs:{cols:"7",sm:"4",md:"7",lg:"2",xl:"2"}},[a("v-btn",{staticClass:"mt-13",staticStyle:{"font-size":"large"},attrs:{tile:"",dark:"",large:""}},[a("a",{staticStyle:{"font-size":"large","text-decoration":"none",color:"white"},attrs:{href:"cv-marlin-english.pdf",target:"_blank"}},[t._v("My C.V")]),a("v-icon",{staticClass:"ml-3"},[t._v(" mdi-download ")])],1)],1),a("v-col",{attrs:{cols:"6",sm:"4",md:"7",lg:"2",xl:"2"}},[a("v-btn",{staticClass:"mt-13",staticStyle:{"font-size":"large"},attrs:{tile:"",dark:"",large:""},on:{click:t.goToContact}},[t._v(" Let's chat ")])],1),a("v-col",{staticClass:"moving-arrow mt-15",attrs:{cols:"1"}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-arrow-left")])],1)],1):t._e(),a("Footer")],1)},et=[],at={name:"About",data:function(){return{isUserIn:!1}},components:{NavBar:N,Footer:W},methods:{goToContact:function(){localStorage.setItem("currentPath","contact"),this.$router.push("contact")}}},ot=at,rt=(a("f58f"),a("a523")),ct=Object(i["a"])(ot,tt,et,!1,null,"06bcda83",null),nt=ct.exports;u()(ct,{VBtn:V["a"],VCard:q["a"],VCol:I["a"],VContainer:rt["a"],VIcon:Q["a"],VImg:A["a"],VRow:E["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"background-color":"black",width:"100%",height:"100%"},attrs:{id:"contact"}},[a("NavBar"),a("v-row",{staticClass:"justify-center mt-10 mb-16"},[a("v-col",{attrs:{cols:"8"}},[a("v-card",{staticStyle:{"background-color":"black"}},[a("v-row",{staticClass:"justify-start"},[a("h1",{staticClass:"mt-7",staticStyle:{color:"#00c2cb"}},[t._v(" Contact ")])]),a("v-row",{staticClass:"mt-16 justify-start"},[a("div",{staticClass:"white--text",staticStyle:{"font-size":"20px"}},[t._v("I am open to discussing any projects you have in mind. Feel free to reach out to me either via email at "),a("a",{staticClass:"white--text",attrs:{href:"mailto:omarmarlin@gmail.com"}},[t._v("omarmarlin@gmail.com ")]),t._v("or connect with me on LinkedIn! "),a("br")]),a("div",{staticClass:"white--text mt-3",staticStyle:{"font-size":"20px"}},[t._v(" Alternatively, if you have a project in mind, you may propose it on my Malt account. ")])]),t.$vuetify.breakpoint.smAndDown?t._e():a("v-row",{staticClass:"mt-16 mb-4"},[a("v-col",{staticClass:"mr-2",attrs:{cols:"1"}},[a("v-btn",{staticStyle:{"background-color":"#00c2cb"},attrs:{href:"https://www.linkedin.com/in/jules-omar-marlin/",target:"_blank"}},[a("v-icon",[t._v(" mdi-linkedin ")])],1)],1),a("v-col",{staticClass:"mx-2",attrs:{cols:"1"}},[a("v-btn",{staticStyle:{"background-color":"#00c2cb"},attrs:{href:"mailto:omarmarlin@gmail.com"}},[a("v-icon",[t._v(" mdi-gmail ")])],1)],1),a("v-col",{staticClass:"mx-2",attrs:{cols:"1"}},[a("v-btn",{staticStyle:{"background-color":"#00c2cb"},attrs:{href:"https://www.malt.fr/profile/julesomarmarlin1",target:"_blank"}},[a("v-icon",[t._v(" mdi-alpha-m-box ")])],1)],1)],1),t.$vuetify.breakpoint.smAndDown?a("v-row",{staticClass:"mt-16 mb-4"},[a("v-col",{staticClass:"mr-3",attrs:{cols:"2"}},[a("v-btn",{staticStyle:{"background-color":"#00c2cb"},attrs:{href:"https://www.linkedin.com/in/jules-omar-marlin/",target:"_blank"}},[a("v-icon",[t._v(" mdi-linkedin ")])],1)],1),a("v-col",{staticClass:"mx-3",attrs:{cols:"2"}},[a("v-btn",{staticStyle:{"background-color":"#00c2cb"},attrs:{href:"mailto:omarmarlin@gmail.com"}},[a("v-icon",[t._v(" mdi-gmail ")])],1)],1),a("v-col",{staticClass:"mx-3",attrs:{cols:"2"}},[a("v-btn",{staticStyle:{"background-color":"#00c2cb"},attrs:{href:"https://www.malt.fr/profile/julesomarmarlin1",target:"_blank"}},[a("v-icon",[t._v(" mdi-alpha-m-box ")])],1)],1)],1):t._e(),a("v-row",{staticClass:"mt-13"},[a("v-img",{attrs:{src:"contact.jpg"}})],1)],1)],1)],1),a("Footer")],1)},it=[],lt={name:"Contact",data:function(){return{isUserIn:!1}},components:{NavBar:N,Footer:W}},ut=lt,mt=(a("b549"),Object(i["a"])(ut,st,it,!1,null,"ead8281c",null)),vt=mt.exports;u()(mt,{VBtn:V["a"],VCard:q["a"],VCol:I["a"],VContainer:rt["a"],VIcon:Q["a"],VImg:A["a"],VRow:E["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"project"}},[a("NavBar"),t._l(t.projects,(function(e){return a("div",{key:e.id,staticClass:"mt-6 mb-12 justify-center"},[a("div",{attrs:{id:e.id}},[a("v-row",{staticClass:"ml-1",staticStyle:{"font-size":"xxx-large"}},[t._v(" "+t._s(e.title)+" ")]),a("v-row",{staticClass:" mt-6"},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticStyle:{"background-color":"black"}},[a("v-row",[a("v-col",{attrs:{cols:"12",xl:"1",lg:"1",md:"2",sm:"12","align-self":"center"}},[a("v-btn",{attrs:{dark:""},on:{click:function(t){e.counter>0?e.counter-=1:e.counter=e.photos.length-1}}},[a("v-icon",[t._v("mdi-arrow-left")])],1)],1),a("v-col",{attrs:{cols:"12",xl:"10",lg:"10",md:"8",sm:"12"}},[a("v-img",{attrs:{src:e.photos[e.counter]}})],1),a("v-col",{attrs:{cols:"12",xl:"1",lg:"1",md:"2",sm:"12","align-self":"center"}},[a("v-btn",{attrs:{dark:""},on:{click:function(t){e.counter<e.photos.length-1?e.counter+=1:e.counter=0}}},[a("v-icon",[t._v("mdi-arrow-right")])],1)],1)],1)],1)],1)],1),a("v-row",{staticClass:"mt-16"},[a("v-col",[a("h2",[t._v("What was the project goal ?")])])],1),a("v-row",{staticClass:"mt-6 text-justify",staticStyle:{"font-size":"large"}},[a("v-col",[t._v(" "+t._s(e.goal)+" ")])],1),a("v-row",{staticClass:"mt-11"},[a("v-col",[a("h2",[t._v("Technologies used")])])],1),a("v-row",{staticClass:"mt-6 text-justify",staticStyle:{"font-size":"large"}},[a("v-col",[t._v(" "+t._s(e.techno)+" ")])],1),a("v-row",[a("v-divider",{staticClass:"mt-9"})],1)],1)])})),a("Footer")],2)},pt=[],gt={name:"Projects",props:["number"],data:function(){return{randProject:0,projects:[{title:"Area",id:0,goal:"Area is a web app made for a university project. The objective of the project was to create an interface that allows a logged user to activate a reaction for a certain action.  These examples can include being notified by email when you receive a message on Discord or creating a Discord channel on a certain date or even create a Notion page depending on the weather. I was responsible for the whole Front-End and the graphical chart of the Web Application.",techno:"VueJs/Vuetify for the Front-End and NestJs for the Back-End. I also had to link multiple APIs to retrieve information and link the actions: Gmail, AccuWeather, Discord, Notion and Google Calendar",photos:["project_area.png","project_area2.png"],counter:0},{title:"Pyp",id:1,goal:"(Project containing confidential data, which explains the lack of photos), Pyp is one of the many projects I worked on during my Internship and my freelance job  as a Front-End developer for the Biting Bit GMBH company, the projects included a web app for Deutsch Telekom and for multiplelawyers, my goal on these projects was mainly translating complex tasks given by my Project Manager and graphical sketches made by the UI/UX designer into functional and user friendly Front-End.",techno:"VueJs, TypeScript and Quasar framework.",photos:["project_pyp.png"],counter:0},{title:"Chambre Noire",id:2,goal:"Chambre Noire is a cinema content website, my client wanted an application where he could publish multiple articles and critics about various movies while keeping a classic cinema theme and an easy to use interface.",techno:"VueJs and Vuetify",photos:["project_cn.png","project_cn2.png","project_cn3.png"],counter:0},{title:"Swity",id:3,goal:"Swity is a work-in-progress mobile application I am currently working on with colleagues from University, its part of the Epitech Innovative Projects. The goal of this app is to help young people suffering from Diabetes to manage and handle easily their disease and live a normal life. The launch is expected for 2023.",techno:"Android Studio with Java Kotlin",photos:["project_swity.png"],counter:0}]}},components:{NavBar:N,Footer:W},created:function(){},mounted:function(){if(this.$props.number){var t=document.getElementById(this.$props.number);t&&t.scrollIntoView({behavior:"auto",block:"center"})}},methods:{}},ft=gt,ht=(a("0874"),Object(i["a"])(ft,dt,pt,!1,null,"05600bc7",null)),bt=ht.exports;u()(ht,{VBtn:V["a"],VCard:q["a"],VCol:I["a"],VContainer:rt["a"],VDivider:T["a"],VIcon:Q["a"],VImg:A["a"],VRow:E["a"]});var wt=a("00e4"),yt=a("f13c"),kt=a.n(yt);o["a"].use(wt["a"]),o["a"].use(g["a"]),o["a"].use(kt.a);var Ct=new g["a"]({base:"/",routes:[{path:"/",component:Y},{path:"/home",component:Y,name:"home"},{path:"/about",component:nt,name:"about"},{path:"/contact",component:vt,name:"contact"},{path:"/projects",component:bt,name:"projects",props:!0}],mode:"history"});o["a"].config.productionTip=!1,new o["a"]({router:Ct,store:h,vuetify:w,render:function(t){return t(p)}}).$mount("#app")},"5eb2":function(t,e,a){},"85ec":function(t,e,a){},ae6c:function(t,e,a){},b549:function(t,e,a){"use strict";a("ae6c")},f427:function(t,e,a){},f58f:function(t,e,a){"use strict";a("2cdd")}});
//# sourceMappingURL=app.e1dca316.js.map
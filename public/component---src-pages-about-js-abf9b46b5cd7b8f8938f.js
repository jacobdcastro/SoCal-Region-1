(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{134:function(e,n,t){"use strict";t.r(n);t(158);var a=t(6),r=t.n(a),i=t(47),l=t.n(i),o=t(139),c=t.n(o),s=t(0),u=t.n(s),p=t(140),m=t(143),h=t(144),f=t(145),d=t(153);function g(){var e=c()(["\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   width: 100%;\n   margin: 5px;\n   p {\n      font-family: 'neuzeit-grotesk', 'sans-serif';\n   }\n   @media (min-width: 724px) {\n      justify-content: space-around;\n      flex-direction: row;\n   }\n"]);return g=function(){return e},e}function x(){var e=c()(["\n   margin: 0;\n   p {\n      font-family: 'neuzeit-grotesk', 'sans-serif';\n      margin-top: 25px;\n      font-size: 1.15em;\n      letter-spacing: .5px;\n   }\n   @media (max-width: 480px) {\n      p {\n         font-size: 1.1em;\n      }\n   }\n   @media (min-width: 724px) {\n      align-self: flex-end;\n   }\n"]);return x=function(){return e},e}function v(){var e=c()(["\n   h1, h3 {\n      font-family: 'neuzeit-grotesk', 'sans-serif';\n      text-align: center;\n      text-transform: uppercase;\n      letter-spacing: 3px;\n      margin: 8px auto;\n   }\n   @media (min-width: 724px) {\n      padding-left: 40px;\n      text-align: right;\n      justify-content: flex-start;\n      align-items: flex-start;\n      align-content: flex-start;\n      h1, h3 {\n         text-align: left;\n      }\n   }\n"]);return v=function(){return e},e}function E(){var e=c()(["\n  display: flex;\n  justify-content: center;\n   img {\n      height: 175px;\n      width: auto;\n      margin: 8px auto 5px;\n      border-radius: 100px;\n   }\n"]);return E=function(){return e},e}function b(){var e=c()(["\n   display: flex;\n   justify-content: flex-start;\n   flex-direction: column;\n   width: 100%;\n   margin: 40px 15px;\n   padding: 18px 35px;\n   background-color: #bbb;\n   @media (min-width: 724px) {\n      justify-content: flex-start;\n      flex-direction: row;\n      align-items: center;\n      flex-flow: row wrap;\n   }\n"]);return b=function(){return e},e}var y=p.a.div(b()),w=p.a.div(E()),N=p.a.div(v()),I=p.a.div(x()),M=p.a.div(g()),k=function(e){var n=e.churchName,t=e.address,a=e.city;return u.a.createElement("p",null,u.a.createElement("strong",null,n),u.a.createElement("br",null),t,u.a.createElement("br",null),a,u.a.createElement("br",null))},O=function(e){var n=e.text;return u.a.createElement("i",null,n)},R=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){return u.a.createElement(y,null,u.a.createElement(w,null,u.a.createElement("img",{alt:"",src:this.props.photoURL})),u.a.createElement(N,null,u.a.createElement("h1",null,this.props.name),u.a.createElement("h3",null,this.props.title)),u.a.createElement(I,null,u.a.createElement("p",null,this.props.bio)),u.a.createElement(M,null,u.a.createElement("div",{className:"contact-left"},this.props.church?u.a.createElement(k,{churchName:this.props.church.churchName,address:this.props.church.streetAddress,city:this.props.church.city}):u.a.createElement("div",null)),u.a.createElement("div",{className:"contact-right"},u.a.createElement("p",null,u.a.createElement("b",null,"Phone:")," ",this.props.phone,u.a.createElement("br",null),u.a.createElement("b",null,"Email:")," ",this.props.email,u.a.createElement("br",null),this.props.miscInfo?u.a.createElement(O,{text:this.props.miscInfo}):u.a.createElement("div",null)))))},n}(u.a.Component),j=t(151);function z(){var e=c()(["\n   display: flex;\n   justify-content: flex-start;\n   flex-wrap: wrap;\n"]);return z=function(){return e},e}function L(){var e=c()(["\n   height: 4.5px;\n   width: 38%;\n   background-color: #181818;\n   margin: 0 auto;\n   margin-bottom: 25px;\n"]);return L=function(){return e},e}function S(){var e=c()(["\n   font-family: 'neuzeit-grotesk', 'sans-serif';\n   padding-bottom: 35px;\n   margin-top: 25px;\n   font-size: 1.15em;\n   letter-spacing: .5px;\n"]);return S=function(){return e},e}function A(){var e=c()(["\n   width: 80%;\n   max-width: 1050px;\n   @media (max-width: 480px) {\n      width: 90%;\n   }\n"]);return A=function(){return e},e}function W(){var e=c()(["\n   display: flex;\n   justify-content: center;\n   background-color: #D1D3D4;\n   margin: 0;\n   padding-top: 30px;\n   padding-bottom: 30px;\n   h1 {\n      font-family: 'neuzeit-grotesk', 'sans-serif';\n      letter-spacing: 3px;\n   }\n"]);return W=function(){return e},e}function C(){var e=c()(["\n   margin: 0;\n"]);return C=function(){return e},e}t.d(n,"aboutQuery",function(){return G});var T=p.a.div(C()),U=p.a.main(W()),D=p.a.div(A()),J=p.a.div(S()),H=p.a.div(L()),P=p.a.div(z()),B=function(e){function n(n){var t;return(t=e.call(this,n)||this).openMobileNav=t.openMobileNav.bind(l()(l()(t))),t.closeMobileNav=t.closeMobileNav.bind(l()(l()(t))),t.state={mobileNavIsOpen:!1},t}r()(n,e);var t=n.prototype;return t.openMobileNav=function(){this.setState({mobileNavIsOpen:!0})},t.closeMobileNav=function(){this.setState({mobileNavIsOpen:!1})},t.render=function(){return u.a.createElement(T,null,u.a.createElement(m.a,{title:"About Us - SoCal Region 1"}),u.a.createElement(h.a,{action:this.closeMobileNav,open:this.state.mobileNavIsOpen}),u.a.createElement(f.a,{action:this.openMobileNav,mobileNavIsOpen:this.state.mobileNavIsOpen}),u.a.createElement(d.a,{headline:"WHO WE ARE",className:"aboutPage"}),u.a.createElement(U,null,u.a.createElement(D,null,u.a.createElement(J,null,u.a.createElement("h1",null,"ABOUT US"),u.a.createElement("p",null,"Region 1 is the churches, leaders, church-goers, and people who minister and live all throughout the Ventura, Santa Barbara, and San Luis Obispo counties. It is marked by incredible diversity, as we are culturally, ethnically, and economically diverse."),u.a.createElement("p",null,"We are roughly 200 miles end to end, with 34 churches that range from approximately 30 to 1,800. We have a passionate desire to see our communities reached with the love of Jesus."),u.a.createElement("p",null,"We are seeing our churches strengthened and resourced, watching as Jesus' Church united and works together. We are developing and praying for more pastors, planters, and people to partner with us in further reaching our region. We firmly believe that God has even greater things in store for Region 1 in the days and years to come!")),u.a.createElement(H,null),u.a.createElement(P,{className:"staff-list"},u.a.createElement("h1",null,"MEET THE REGIONAL LEADERSHIP TEAM (RLT)"),this.props.data.allContentfulStaffMemberList.edges[0].node.staffMemberList.map(function(e){return u.a.createElement(R,{name:e.name,title:e.staffTitle,photoURL:e.portrait.file.url,bio:e.biography.content[0].content[0].value,email:e.email,phone:e.phone,miscInfo:e.miscellaneousInfo,church:e.staffMemberChurch})})))),u.a.createElement(j.a,null))},n}(u.a.Component),G=(n.default=B,"583182965")},158:function(e,n,t){var a=t(23).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||t(15)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-about-js-abf9b46b5cd7b8f8938f.js.map
(this["webpackJsonpclone-25sprout"]=this["webpackJsonpclone-25sprout"]||[]).push([[0],{24:function(n,t,e){},30:function(n,t,e){"use strict";e.r(t);var i,o,c,r,s,a,p,d,l,x,h,f,g,b,j,u,m,w,O,v,y,k,E,z,B,I,T,Y,S,C,H,L,A,_,P,R,N,D,F,G,V,J,U=e(2),W=e(18),q=e.n(W),K=(e(24),e(5)),M=e(3),Q=e(4),X=e(1),Z=Q.a.div(i||(i=Object(M.a)(["\n  padding:15px 0;\n  position:fixed;\n  right:0;\n  z-index:600;\n  transition:all 0.5s;\n  ","\n"])),(function(n){return n.offsetY>=800||!0===n.toggle?"\n    width:232px;\n    background-color:#fff;\n    top:50px;\n  ":"\n    width:100%;\n    background-color:hsla(0,0%,100%,.9);\n    top:0px;\n  "})),$=Q.a.a(o||(o=Object(M.a)(["\n  background-image:url(http://www.25sprout.com/8dfe94245.svg);\n  background-size:100%;\n  background-repeat:no-repeat;\n  transition:all 0.5s;\n  display:block;\n  ","\n  @media (max-width:768px) {\n    margin-left:10px;\n  }\n  "])),(function(n){return n.offsetY>=800||!0===n.toggle?"\n    width:116px;\n    height:22px;\n    margin-left:14px;\n    ":"\n    width:168px;\n    height:32px;\n    margin-left:65px;\n    "})),nn=Q.a.div(c||(c=Object(M.a)(["\n  background-image:url(https://www.25sprout.com/assets/navi-btn__90eef9d746fa85ccca72159b3b7740fd.png);\n  background-size:100%;\n  position:absolute;\n  transition:all 0.3s;\n  cursor:pointer;\n  ","\n  @media (max-width:768px) {\n    right:",";\n  }\n"])),(function(n){return n.offsetY>=800||!0===n.toggle?"\n    width:auto;\n    height:0px;\n    top:0px;\n    right:0px;\n    background-color:#00c775;\n    padding:26px 31px;\n  ":"\n    width:38px;\n    height:38px;\n    top:14px;\n    right:65px;\n    padding:0px;\n  "}),(function(n){return n.offsetY>=800||!0===n.toggle?"0px":"20px"})),tn=Q.a.div(r||(r=Object(M.a)(["\n  width: 28px;\n  height: 3px;\n  background-color: ",';\n  transition: all .3s;\n  &:before{\n    content: "";\n    display: block;\n    width: 28px;\n    height: 3px;\n    background-color: #fff;\n    position: absolute;\n    left: 31px;\n    transition: all 0.3s;\n    ','\n  };\n  &:after{\n    content: "";\n    display: block;\n    width: 28px;\n    height: 3px;\n    background-color: #fff;\n    position: absolute;\n    left: 31px;\n    transition: all .3s;\n    ',"\n  }\n"])),(function(n){return!0===n.cross||n.windowBottomOffSetTop>=n.footerHeight?"transparent":"#fff"}),(function(n){return!0===n.cross||n.windowBottomOffSetTop>=n.footerHeight?"\n      top: 26px;\n      transform: rotate(-135deg);\n    ":"\n      top: 18px;\n    "}),(function(n){return!0===n.cross||n.windowBottomOffSetTop>=n.footerHeight?"\n      top: 26px;\n      transform: rotate(135deg);\n    ":"\n      top: 34px;\n    "})),en=Q.a.div(s||(s=Object(M.a)(["\n  position:absolute;\n  z-index:1000;\n  cursor:pointer;\n  width:90px;\n  height:100%;\n  top:0px;\n  right:0px;\n"]))),on=function(n){var t=n.toggle,e=n.setToggle,i=Object(U.useState)(0),o=Object(K.a)(i,2),c=o[0],r=o[1],s=Object(U.useState)(0),a=Object(K.a)(s,2),p=a[0],d=a[1],l=Object(U.useState)(0),x=Object(K.a)(l,2),h=x[0],f=x[1],g=function(){r(window.pageYOffset),d(window.pageYOffset+window.innerHeight),f(document.getElementById("footer").offsetHeight/2+document.getElementById("footer").offsetTop)},b=Object(U.useState)(!1),j=Object(K.a)(b,2),u=j[0],m=j[1],w=function(){f(document.getElementById("footer").offsetHeight/2+document.getElementById("footer").offsetTop)};Object(U.useEffect)((function(){return window.addEventListener("scroll",g),window.addEventListener("resize",w),f(document.getElementById("footer").offsetHeight/2+document.getElementById("footer").offsetTop),d(window.pageYOffset+window.innerHeight),function(){window.removeEventListener("scroll",g)}}),[]);return Object(X.jsxs)(Z,{offsetY:c,toggle:t,children:[Object(X.jsx)($,{href:"/",offsetY:c,toggle:t}),Object(X.jsx)(nn,{offsetY:c,toggle:t,onClick:function(){m((function(n){return!n})),e((function(n){return!n}))},children:c>=800||!0===t?Object(X.jsx)(tn,{cross:u,windowBottomOffSetTop:p,footerHeight:h}):""}),p>=h?Object(X.jsx)(en,{onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}):""]})},cn=e(9),rn=Q.a.div(a||(a=Object(M.a)(["\n  width: 100%;\n  height: 100vh;\n  position: relative;\n"]))),sn=Q.a.div(p||(p=Object(M.a)(["\n  height:100vh;\n  width:100vw;\n  background-size: cover;\n  background-position: 50% 50%;\n  overflow:hidden;\n  position: relative;\n"]))),an=Q.a.div(d||(d=Object(M.a)(["\n  position:absolute;\n  top:160px;\n  left:100px;\n  user-select:none;\n  & > p {\n    color:white;\n    margin:0px;\n    font-weight: bold;\n  };\n  & > p:nth-of-type(1){\n    padding-left:5px;\n    font-size:18px;\n    line-height:24px;\n  };\n  & > p:nth-of-type(2),p:nth-of-type(3){\n    font-size:64px;\n  };\n  & > p:nth-of-type(4),p:nth-of-type(5){\n    font-size:18px;\n  };\n  @media (max-width:533px){\n    top:90px;\n    left:20px;\n    & > p:nth-of-type(1){\n      display:none;\n    };\n    & > p:nth-of-type(2),p:nth-of-type(3){\n      font-size:40px;\n    };\n    & > p:nth-of-type(4),p:nth-of-type(5){\n      font-size:15px;\n    };\n  }\n"]))),pn=Object(cn.a)(l||(l=Object(M.a)(["\n  0%{\n    clip-path:inset(95% -6px 0 0);\n    transform:translate(-10px,5px);\n  }\n  10%{\n    clip-path:inset(30% -6px 35% 0);\n    transform:translate(10px,5px);\n  }\n  20%{\n    clip-path:inset(60% -6px 32% 0);\n    transform:translate(10px,5px);\n  }\n  30%{\n    clip-path:inset(70% -6px 10% 0);\n    transform:translate(-10px,5px);\n  }\n  40%{\n    clip-path:inset(10% -6px 75% 0);\n    transform:translate(15px,-5px);\n  }\n  50%{\n    clip-path:inset(90% -6px 5% 0);\n    transform:translate(5px,8px);\n  }\n  60%{\n    clip-path:inset(70% -6px 15% 0);\n    transform:translate(10px,-5px);\n  }\n  70%{\n    clip-path:inset(4% -6px 80% 0);\n    transform:translate(-5px,8px);\n  }\n  80%{\n    clip-path:inset(85% -6px 5% 0);\n    transform:translate(10px,-5px);\n  }\n  90%{\n    clip-path:inset(20% -6px 70% 0);\n    transform:translate(-10px,-5px);\n  }\n  100%{\n    clip-path:inset(10% -6px 75% 0);\n    transform:translate(0)\n  }\n"]))),dn=Q.a.div(x||(x=Object(M.a)(["\n  display:block;\n  z-index:150;\n  position:absolute;\n  top:160px;\n  left:100px;\n  user-select:none;\n  & > p {\n    color:white;\n    margin:0px;\n    font-weight: bold;\n  };\n  & > p:nth-of-type(1){\n    padding-left:5px;\n    font-size:18px;\n    line-height:24px;\n  };\n  & > p:nth-of-type(2),p:nth-of-type(3){\n    font-size:64px;\n  };\n  & > p:nth-of-type(4),p:nth-of-type(5){\n    font-size:18px;\n  };\n  @media (max-width:533px){\n    top:90px;\n    left:20px;\n    & > p:nth-of-type(1){\n      display:none;\n    };\n    & > p:nth-of-type(2),p:nth-of-type(3){\n      font-size:40px;\n    };\n    & > p:nth-of-type(4),p:nth-of-type(5){\n      font-size:15px;\n    };\n  }\n    text-shadow:-3px -3px 0px #F8F005, 3px 3px 0px #00E6E6;\n    clip-path:inset(85% 0 15% 0);\n    animation:1.5s "," infinite;\n    animation-delay:7s;\n    animation-timing-function:steps(2,end);\n  \n"])),pn),ln=Q.a.img(h||(h=Object(M.a)(["\n  height:100vh;\n  min-height:585px;\n  width:auto;  \n  min-width:1040px;\n  transform: scale(1.3);\n  filter:brightness(70%);\n  @media (min-aspect-ratio: 16 / 9) {\n    display: block;\n    width: 100%;\n    height: auto;\n  }\n"]))),xn=function(){return Object(X.jsx)(rn,{children:Object(X.jsxs)(sn,{children:[Object(X.jsx)(ln,{src:"https://www.25sprout.com/static/img/index/banner.jpg"}),Object(X.jsxs)(dn,{children:[Object(X.jsx)("p",{children:"25sprout"}),Object(X.jsxs)("p",{children:[Object(X.jsx)("span",{children:"DIGITAL "}),Object(X.jsx)("span",{children:"CREATIVE"})]}),Object(X.jsx)("p",{children:"CONSULTANT"}),Object(X.jsx)("p",{children:"\u65b0\u82bd\u7db2\u8def\u5c08\u6ce8\u65bc\u6301\u7e8c\u5275\u9020\u51fa\uff0c"}),Object(X.jsx)("p",{children:"\u4e0b\u4e00\u500b\u7db2\u8def\u5275\u65b0\u7522\u54c1\u3002"})]}),Object(X.jsxs)(an,{children:[Object(X.jsx)("p",{children:"25sprout"}),Object(X.jsxs)("p",{children:[Object(X.jsx)("span",{children:"DIGITAL "}),Object(X.jsx)("span",{children:"CREATIVE"})]}),Object(X.jsx)("p",{children:"CONSULTANT"}),Object(X.jsx)("p",{children:"\u65b0\u82bd\u7db2\u8def\u5c08\u6ce8\u65bc\u6301\u7e8c\u5275\u9020\u51fa\uff0c"}),Object(X.jsx)("p",{children:"\u4e0b\u4e00\u500b\u7db2\u8def\u5275\u65b0\u7522\u54c1\u3002"})]})]})})},hn=Object(cn.a)(f||(f=Object(M.a)(["\n0% {\n  transform: perspective(400px) rotateY(90deg);\n  animation-timing-function: ease-in;\n  opacity: 0;\n}\n40% {\n  transform: perspective(400px) rotateY(-20deg);\n  animation-timing-function: ease-in;\n}\n60% {\n  transform: perspective(400px) rotateY(10deg);\n  opacity: 1;\n}\n80% {\n  transform: perspective(400px) rotateY(-5deg);\n}\n100% {\n  transform: perspective(400px);\n}\n"]))),fn=Q.a.div(g||(g=Object(M.a)(["\n  background-image: url(https://www.25sprout.com/assets/intro-bg__b4af211e93ca6c5b935d299bc5198dc1.jpg);\n  background-size:cover ;\n  background-position: 50% 50%;\n  position: relative;\n  width:100%;\n  height:100vh;\n  background-repeat:no-repeat;\n  overflow-x:hidden;\n  & > div {\n    position:absolute;\n    backface-visibility:hidden;\n    animation:1s ",";\n    animation-fill-mode:forwards;\n    transform: perspective(400px) rotateY(90deg);\n    top:130px;\n    left:100px;\n    background-color: #fff;\n    width: 510px;\n    height: 420px;\n    padding: 100px 40px 0 60px;\n    & h1 {\n      font-size:48px;\n    }\n    & > div {\n      font-size: 16px;\n      line-height: 29px;\n      margin-top: 20px;\n      & > div {\n        display:inline-block;\n        font-size: 32px;\n        line-height: 46px;\n        color: #00c775;\n        border: 2px solid #00c775;\n        padding: 0 8px;\n        margin: 5px 5px 0 0;\n        float:left;\n        &:after{\n          content:'';\n          display:block;\n          clear:both;\n        }\n      }\n    };\n    @media(max-width:616px){\n      top:130px;\n      left:30px;\n      width:68%;\n      height: auto;\n      padding: 30px 4%;\n    };\n    @media(max-width:480px){\n      width:90%;\n      top:20%;\n      left:5%;\n      right:5%;\n    }\n  }\n"])),(function(n){return!0===n.toggleCard?hn:""})),gn=function(){var n=Object(U.useState)(0),t=Object(K.a)(n,2),e=t[0],i=t[1],o=Object(U.useState)(!1),c=Object(K.a)(o,2),r=c[0],s=c[1],a=Object(U.useState)([]),p=Object(K.a)(a,2),d=p[0],l=p[1],x=function(){return i(window.pageYOffset+window.innerHeight)},h=function(){return l([document.getElementById("target").offsetTop,document.getElementById("target").offsetHeight])};return Object(U.useEffect)((function(){return window.addEventListener("scroll",x),window.addEventListener("resize",h),i(window.pageYOffset+window.innerHeight),l([document.getElementById("target").offsetTop,document.getElementById("target").offsetHeight]),function(){window.removeEventListener("scroll",x),window.removeEventListener("resize",h)}}),[]),Object(U.useEffect)((function(){e>d[0]+d[1]/3?s(!0):s(!1)}),[e,d]),Object(X.jsx)(fn,{id:"target",toggleCard:r,children:Object(X.jsxs)("div",{children:[Object(X.jsx)("h5",{children:"We provide innovative"}),Object(X.jsx)("h1",{children:"Digital Solutions"}),Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:"\u5728"}),"\u6578\u4f4d\u7684\u9818\u57df\u88e1\uff0c\u6211\u5011\u5c08\u6ce8\u65bc\u63d0\u4f9b\u7d66\u5ba2\u6236\u6700\u6709\u6548\u7684\u89e3\u6c7a\u65b9\u6848\uff0c\u900f\u904e\u53cb\u5584\u7684\u4ecb\u9762\u8a2d\u8a08\uff0c\u4ee5\u53ca\u51fa\u8272\u7684\u7a0b\u5f0f\u6280\u8853\u5718\u968a\uff0c\u5171\u540c\u6253\u9020\u51fa\u512a\u7570\u7684\u5c08\u6848\u548c\u6578\u4f4d\u7522\u54c1\uff0c\u5e6b\u52a9\u5ba2\u6236\u5728\u7db2\u8def\u4e16\u754c\u88e1\uff0c\u5960\u5b9a\u6700\u7a69\u56fa\u7684\u57fa\u790e\u3002"]})]})})},bn=Q.a.div(b||(b=Object(M.a)(["\n  & > p{\n    line-height:30px;\n    padding:5%;\n  };  \n  & > a {\n      text-align:center;\n      cursor:pointer;\n      display:block;\n      width:100px;\n      margin:30px auto 20px;\n      text-decoration: none;\n      width: 178px;\n      height:50px;\n      & :hover{\n        background-color: hsla(0,0%,100%,.2);\n      };\n      & > div {\n        width:100%;\n        height:100%;\n        background-color: hsla(0,0%,100%,0);\n        border: 1px solid #fff;\n        color:white;\n        font-size:20px;\n        line-height:48px;\n        position:relative;\n        transition:all 0.3s;\n        &:hover{\n          padding-right:15px;\n          background-color: hsla(0,0%,100%,0.2);\n        };\n        &:after{\n          content:'\xbb';\n          opacity:0;\n          position:absolute;\n          right:15px;\n          top:-2px;\n          transition:all 0.3s;\n          font-size:30px;\n        }\n        &:hover:after{\n          opacity:1;\n          right:30px;\n        }\n      }\n    }\n  };\n"]))),jn=function(){return Object(X.jsxs)(bn,{children:[Object(X.jsxs)("p",{children:["SurveyCake \u662f\u4e00\u500b\u4f01\u696d\u7d1a\u7684\u96f2\u7aef\u554f\u5377\u8edf\u9ad4 (SaaS)\uff0c\u63d0\u4f9b\u4f01\u696d\u5f37\u5927\u4e14\u5b89\u5168\u7684\u554f\u5377\u8abf\u67e5\u3001\u5206\u6790\u8207\u5546\u696d\u81ea\u52d5\u5316\u529f\u80fd\u3002",Object(X.jsx)("br",{}),"\u6211\u5011\u81f4\u529b\u6253\u9020\u51fa\u6700\u53cb\u5584\u7684\u554f\u5377\u8edf\u9ad4\uff0c\u8b93\u505a\u554f\u5377\u5c31\u50cf a piece of cake!"]}),Object(X.jsx)("a",{href:"https://www.surveycake.com/",children:Object(X.jsx)("div",{children:"\u77ad\u89e3\u66f4\u591a"})})]})},un=Q.a.div(j||(j=Object(M.a)(["\n  padding:5%;\n  & > p{\n    line-height:30px;\n  };\n  & > div {\n    margin:50px auto 0px;\n    width: 178px;\n    height:50px;\n"]))),mn=function(){return Object(X.jsxs)(un,{children:[Object(X.jsxs)("p",{children:["\u6709\u4e86 BackStage \u5f8c\u53f0\u7ba1\u7406\u7cfb\u7d71\uff0c\u4f60\u53ef\u4ee5\u96a8\u6642\u96a8\u5730\u7ba1\u7406\u4f60\u7684\u7db2\u7ad9\u8207 APP\u3002",Object(X.jsx)("br",{}),"\u7121\u8ad6\u662f\u6d3b\u52d5\u6d88\u606f\u3001\u7522\u54c1\u5167\u5bb9\uff0c\u6216\u662f\u92b7\u552e\u8a02\u55ae\u548c\u9867\u5ba2\u8cc7\u6599\uff0c\u4f60\u90fd\u53ef\u4ee5\u8f15\u9b06\u4eab\u53d7\u5373\u6642\u7ba1\u7406\u7684\u4fbf\u5229\u3002"]}),Object(X.jsx)("div",{})]})},wn=Q.a.div(u||(u=Object(M.a)(["\n  width:100%;\n  position:relative;\n  overflow: hidden;\n"]))),On=Q.a.div(m||(m=Object(M.a)(["\n  background-image: url(https://www.25sprout.com/assets/project-bg__5384ec67396b09dd7c69f956c1811698.jpg);\n  width: 100%;  \n  height:100%;\n  min-height:auto;\n  background-position: 50% 50%;\n  background-size: cover;\n  overflow-x: hidden;\n  filter:brightness(30%);\n  position:absolute;\n  top:-100px:\n  left:0px;\n"]))),vn=Q.a.div(w||(w=Object(M.a)(["\n  text-align:center;\n  top:10%;\n  width:100%;\n  color:white;\n  position:relative;\n  z-index:200;\n  padding-top: 100px;\n"]))),yn=Q.a.div(O||(O=Object(M.a)(["\n  margin-top: 50px;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  width:100%;\n  @media (max-width:425px){\n    font-size:10px;\n  }\n  & > span {\n    display:inline-block;\n    background-color: hsla(0,0%,100%,.3);\n    width: 1px;\n    height: 70px;\n  }\n  & > div {\n    display:inline-block;\n    cursor:pointer;\n    transition:opacity 0.3s;\n    &:nth-of-type(1){\n      opacity:",";\n    };\n    &:nth-of-type(2){\n      opacity:",";\n    };\n  };\n"])),(function(n){return"cake"===n.content?1:.3}),(function(n){return""===n.content?1:.3})),kn=Q.a.div(v||(v=Object(M.a)(["\n  width: 230px;\n  height: 70px;\n  background-image: url(https://www.25sprout.com/assets/logo-products__c41c1e32673b84b9379128c5e1a107ff.png);\n  background-repeat:no-repeat;\n  background-position:50% 0 ;\n  @media (max-width:425px){\n    width:150px;\n    background-size:90%;\n    background-position:0 -90%;\n  }\n"]))),En=Q.a.div(y||(y=Object(M.a)(["\n  width: 230px;\n  height: 70px;\n  background-image: url(https://www.25sprout.com/assets/logo-products__c41c1e32673b84b9379128c5e1a107ff.png);\n  background-repeat:no-repeat;\n  background-position:50% 100% ;\n  @media (max-width:425px){\n    width:150px;\n    background-size:100%;\n  }\n"]))),zn=Q.a.div(k||(k=Object(M.a)(["\n  position:absolute;\n  top:0px;\n  color:rgba(247,255,2,0.2);\n  font-size: 880px;\n  user-select:none;\n  transition:all 0.2s;\n"]))),Bn=Q.a.div(E||(E=Object(M.a)(["\n  border-bottom: none;\n  max-width: 972px;\n  width:80%;\n  font-size: 0;\n  position:relative;\n  bottom:0px;\n  transition:transform 0.2s;\n  transform:translateY(300px);\n  margin: 0 auto;\n  @media (max-width:768px){\n    width:90%;\n  }\n  & > img {\n    width: 100%;\n    opacity: 0;\n  }\n"]))),In=Q.a.img(z||(z=Object(M.a)(["\n  border: 35px solid #000;\n  border-bottom: none;\n  position: absolute;\n  left: 0;\n  transition: all 0.7s ease-in-out;\n  @media (max-width:768px){\n    border: 5px solid #000;\n  }\n"]))),Tn=Q.a.div(B||(B=Object(M.a)(["\n  display:flex;\n  justify-content:center;\n  overflow: hidden;\n"]))),Yn=function(){var n=Object(U.useState)("cake"),t=Object(K.a)(n,2),e=t[0],i=t[1],o=Object(U.useState)([]),c=Object(K.a)(o,2),r=c[0],s=c[1],a=Object(U.useState)([]),p=Object(K.a)(a,2),d=p[0],l=p[1],x=function(){s([window.pageYOffset,document.getElementById("product").getBoundingClientRect().top]),l([document.getElementById("product").offsetTop,document.getElementById("product").offsetHeight])},h=function(){l([document.getElementById("product").offsetTop,document.getElementById("product").offsetHeight])};Object(U.useEffect)((function(){var n=document.getElementById("product");return window.addEventListener("scroll",x),window.addEventListener("resize",h),s([window.pageYOffset,n.getBoundingClientRect().top]),l([n.offsetTop,n.offsetHeight]),function(){window.removeEventListener("scroll",x),window.removeEventListener("resize",h)}}),[]);return Object(X.jsxs)(wn,{id:"product",children:[Object(X.jsx)(On,{}),Object(X.jsx)(zn,{style:{left:"".concat(function(){if(window.innerHeight+r[0]>d[0]&&r[0]<d[0]+d[1])return(d[1]+r[1])/r[0]*500-600}(),"px")},children:"25sprout"}),Object(X.jsxs)(vn,{children:[Object(X.jsx)("h5",{children:"Our"}),Object(X.jsx)("h1",{children:"Products"}),Object(X.jsx)("span",{children:"[ \u65b0\u82bd\u7522\u54c1 ]"}),Object(X.jsxs)(yn,{content:e,children:[Object(X.jsxs)("div",{onClick:function(){i("cake")},children:[Object(X.jsx)(kn,{}),"\u4f01\u696d\u7d1a\u7684\u96f2\u7aef\u554f\u5377\u670d\u52d9"]}),Object(X.jsx)("span",{}),Object(X.jsxs)("div",{onClick:function(){i("")},children:[Object(X.jsx)(En,{}),"\u7db2\u8def\u5275\u65b0\u7522\u54c1\u7684\u6700\u4f73\u57fa\u77f3"]})]}),"cake"===e?Object(X.jsx)(jn,{}):Object(X.jsx)(mn,{}),Object(X.jsx)(Tn,{children:Object(X.jsxs)(Bn,{style:{transform:"translateY(".concat(function(){if(!((d[1]+r[1])/r[0]*600-100<=0))return r[0]<=d[0]+d[1]/2&&r[1]<=0?(d[1]+r[1])/r[0]*600-100:void 0}(),"px)")},children:[Object(X.jsx)("img",{src:"https://www.25sprout.com/static/img/index/demo-surveycake.png",alt:"imgNone"}),Object(X.jsx)(In,{src:"https://www.25sprout.com/static/img/index/demo-surveycake.png",style:{opacity:"".concat("cake"===e?1:0)},alt:"img1"}),Object(X.jsx)(In,{src:"https://www.25sprout.com/static/img/index/demo-backstage.jpg",style:{opacity:"".concat(""===e?1:0)},alt:"img2"})]})})]})]})},Sn=Object(cn.a)(I||(I=Object(M.a)(["\n  0% {\n    opacity: 0;\n    transform:translateY(60px)\n  }\n  90% {\n    opacity: 1;\n    transform:translateY(-5px)\n  }\n  100% {\n    opacity: 1;\n    transform:translateY(0px)\n  }\n"]))),Cn=Q.a.div(T||(T=Object(M.a)(["\n  min-height:100vh;\n  width:100vw;\n  text-align:center;\n  font-weight: 600;\n  margin-bottom:100px;\n  & > h5 {\n    padding-top:70px;\n  }\n"]))),Hn=Q.a.div(Y||(Y=Object(M.a)(["\n  padding:100px 20% 0px;\n  display: grid;\n  justify-content:center;\n  grid-template-columns:1fr;\n  & > div {\n    display: grid;\n    grid-template-columns: repeat(auto-fit,220px);\n    justify-content:center;\n    grid-gap:0.7rem; \n  }\n"]))),Ln=Q.a.div(S||(S=Object(M.a)(["\n  height:180px;\n  opacity:0;\n  background-color:gray;\n  animation:0.7s ",";\n  animation-delay:","s;\n  animation-fill-mode:forwards;\n}\n"])),(function(n){return!0===n.toggleClients?Sn:""}),(function(n){return.1*n.index})),An=[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:4,y:1},{x:0,y:2},{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2}],_n=function(){var n=Object(U.useState)(0),t=Object(K.a)(n,2),e=t[0],i=t[1],o=Object(U.useState)(!1),c=Object(K.a)(o,2),r=c[0],s=c[1],a=Object(U.useState)([]),p=Object(K.a)(a,2),d=p[0],l=p[1],x=function(){return i(window.pageYOffset+window.innerHeight)},h=function(){return l([document.getElementById("Clients").offsetTop,document.getElementById("Clients").offsetHeight])};return Object(U.useEffect)((function(){return window.addEventListener("scroll",x),window.addEventListener("resize",h),i(window.pageYOffset+window.innerHeight),l([document.getElementById("Clients").offsetTop,document.getElementById("Clients").offsetHeight]),function(){window.removeEventListener("scroll",x),window.removeEventListener("resize",h)}}),[]),Object(U.useEffect)((function(){e>=d[0]+d[1]/5?s(!0):s(!1)}),[e,d]),Object(X.jsxs)(Cn,{id:"Clients",children:[Object(X.jsx)("h5",{children:"Our"}),Object(X.jsx)("h1",{children:"Clients"}),Object(X.jsx)("div",{children:"[ \u670d\u52d9\u5ba2\u6236 ]"}),Object(X.jsx)(Hn,{toggleClients:r,children:Object(X.jsx)("div",{children:An.map((function(n,t){return Object(X.jsx)(Ln,{style:{backgroundImage:"url(".concat("https://www.25sprout.com/assets/clients__3181a8dfd7b70bd6b5153346ae72ecd9.jpg",")"),backgroundPosition:"-".concat(220*n.x,"px -").concat(180*n.y,"px")},toggleClients:r,index:t},t)}))})})]})},Pn=e(19),Rn=e(13),Nn=Q.a.div(C||(C=Object(M.a)(["\n  width:100vw;\n  height:100vh;\n  position:relative;\n  @media (max-width:733px){\n    height:120vh;\n  }\n"]))),Dn=Q.a.div(H||(H=Object(M.a)(["\n  margin:0;\n  padding:0;\n  background-color:white;\n  transition-timing-function:ease-in-out;\n  z-index:500;\n  ","\n"])),(function(n){return n.magicPower()})),Fn=Q.a.div(L||(L=Object(M.a)(["\n  width:100vw;\n  height:100vh;\n  position:relative;\n  overflow:hidden;\n  display:flex;\n  justify-content:center;\n  @media (max-width:733px){\n    height:","\n  }\n"])),(function(n){return!0===n.toggle?"100vh":"auto"})),Gn=Q.a.div(A||(A=Object(M.a)(["\n  color:rgba(247,255,2,0.4);\n  font-size:1100px;\n  position:absolute;\n  line-height:730px;\n  letter-spacing: -50px;\n  top:20px;\n  left:-200px;\n  z-index:1;\n  user-select:none;\n"]))),Vn=Q.a.div(_||(_=Object(M.a)(["\n  margin:50px 5% 0px;\n  height:574px;\n  width:100%;\n  max-width:1200px;\n  display:flex;\n  position:relative;\n  z-index:100;\n  & > div {\n    width:33.3%;\n    height:580px;\n    padding:3% 5% 0px;\n  };\n  @media (max-width:733px){\n    display:block;\n    height:auto;\n    & > div {\n      width:100%;\n      padding:5% 5% 0px;\n      text-align:center;\n      &:nth-of-type(1),:nth-of-type(3){\n        display:",";\n      };\n      &:nth-of-type(2){\n        ",";\n      }\n    };\n  }\n"])),(function(n){return!0===n.toggle?"none":"block"}),(function(n){return!0===n.toggle?"\n          height:90vh;\n          margin:0px 0px 50px;\n          padding:25% 0px;\n        ":"\n        \n        "})),Jn=Q.a.div(P||(P=Object(M.a)(["\n  font-size: 12px;\n  color: #00c775;\n  margin: 16px 0px;\n"]))),Un=Q.a.ul(R||(R=Object(M.a)(["\n  list-style:none;\n  padding:0px;\n  & > li{\n    cursor:pointer;\n    font-size: 30px;\n    color: #000;\n    transition: all .2s;\n    font-weight: 600;\n    line-height:40px;\n    &:hover {\n      opacity:0.6;\n    }\n  }\n"]))),Wn=Q.a.div(N||(N=Object(M.a)(["\n  margin:5px 0px;\n  height:40px;\n  display:flex;\n  font-size: 14px;\n  & > span {\n    margin-right:10px;\n    color:#00c775;\n  }\n"]))),qn=Q.a.span(D||(D=Object(M.a)(["\n  display:flex;\n  & > span {\n    display:block;\n    background-color: #00c775;\n    width: 70px;\n    height: 1px;\n  };\n  @media (max-width:733px){\n    justify-content:center;\n  }\n  \n"]))),Kn=Q.a.p(F||(F=Object(M.a)(["\n  position:absolute;\n  top:50%;\n  left:-170px;\n  font-size:12px;\n  color:#999;\n  transform:rotate(90deg);\n"]))),Mn=Q.a.div(G||(G=Object(M.a)(["\n  cursor:pointer;\n  transition: all .2s;\n  &:hover{\n    opacity:0.6;\n  };\n  & > div {\n    margin-bottom: 5px;\n    font-size: 18px;\n    color:#2d2d2d;\n    width:100%;\n  };\n  & > span {\n    font-size: 14px;\n    color: #474747;\n    width:100%;\n  };\n  @media (max-width:733px){\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    text-align:center;\n  }\n"]))),Qn=Q.a.p(V||(V=Object(M.a)(["\n    width: 72px;\n    height: 1px;\n    margin: 20px 0;\n    border-top-style:dashed;\n    border-width:1px;\n"]))),Xn=Q.a.div(J||(J=Object(M.a)(['\n  display:inline-block;\n  font-size: 12px;\n  font-weight: 700;\n  color: #000;\n  padding: 8px 20px 8px 25px;\n  margin-top: 30px;\n  border: 2px solid #00c775;\n  vertical-align: bottom;\n  position: relative;\n  z-index: 3;\n  cursor: pointer;\n  &:before {\n    content: "";\n    display: block;\n    width: 0;\n    height: 100%;\n    background-color: #00c775;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    transition: width 0.3s;\n  };\n  &:hover:before {\n    width:100%;\n  }\n']))),Zn=function(n){var t=n.toggle,e=Object(U.useState)(0),i=Object(K.a)(e,2),o=i[0],c=i[1],r=Object(U.useState)(0),s=Object(K.a)(r,2),a=s[0],p=s[1],d=Object(U.useState)(0),l=Object(K.a)(d,2),x=l[0],h=l[1],f=function(){c(window.pageYOffset+window.innerHeight),h(document.getElementById("footer").offsetTop-window.pageYOffset),p(document.getElementById("footer").offsetTop)},g=function(){c(window.pageYOffset+window.innerHeight),p(document.getElementById("footer").offsetTop),h(document.getElementById("footer").offsetTop-window.pageYOffset)};Object(U.useEffect)((function(){return window.addEventListener("scroll",f),window.addEventListener("resize",g),c(window.pageYOffset+window.innerHeight),h(document.getElementById("footer").offsetTop-window.pageYOffset),p(document.getElementById("footer").offsetTop),function(){window.removeEventListener("scroll",f),window.removeEventListener("resize",g)}}),[]);return Object(X.jsx)(Nn,{id:"footer",children:Object(X.jsx)(Dn,{toggle:t,magicPower:function(){return o>=a?!1===t?"\n          @media (min-width:734px){\n            position:absolute;\n            top:0px;\n            transition:top 0.6s;\n          };\n          @media (max-width:733px){\n            position:absolute;\n            top:0px;\n            margin-top:0px;\n            transition:margin-top 0.6s;\n          }\n        ":"\n          @media (min-width:734px){  \n            position:absolute;\n            top:-".concat(x,"px;\n            transition:top 0.6s;\n          };\n          @media (max-width:733px){\n            position:absolute;\n            margin-top:-").concat(x,"px;\n            transition:margin-top 0.6s;\n          }\n        "):!1===t?"\n          @media (min-width:734px){\n            position:fixed;\n            bottom:-100vh; \n            margin-bottom:0px;\n            transition:margin-bottom 0.6s;\n          };\n          @media (max-width:733px){\n            position:fixed;\n            top:100vh;\n            margin-top:0px;\n            transition:margin-top 0.6s;\n          }\n        ":"\n          @media (min-width:734px){\n            position:fixed;\n            bottom:-100vh; \n            margin-bottom:100vh;\n            transition:margin-bottom 0.6s;\n          };\n          @media (max-width:733px){\n            position:fixed;\n            top:100vh;\n            margin-top:-100vh;\n            transition:margin-top 0.6s;\n          }\n        "},children:Object(X.jsxs)(Fn,{toggle:t,children:[Object(X.jsx)(Gn,{children:"25sprout"}),Object(X.jsxs)(Vn,{toggle:t,children:[Object(X.jsx)(Kn,{children:"COPYRIGHT\u24d2 2020 25sprout,LLC. All RIGHTS RESERVED"}),Object(X.jsxs)("div",{style:{backgroundColor:"hsla(0,0%,95%,0.8)"},children:[Object(X.jsx)(Jn,{children:"Trending"}),Object(X.jsxs)(Mn,{children:[Object(X.jsx)("div",{children:"2018\uff0cBootstrapped, Profitable, & Proud"}),Object(X.jsx)("span",{children:"2019-01-03 by Alex"}),Object(X.jsx)(Qn,{})]}),Object(X.jsxs)(Mn,{children:[Object(X.jsx)("div",{children:"\u5e78\u904b\u8207\u90a3\u4e9b\u5728\u5275\u696d\u8def\u4e0a\u9ede\u6ef4\u7684\u4e32\u9023"}),Object(X.jsx)("span",{children:"2018-04-11 by Alex"}),Object(X.jsx)(Qn,{})]}),Object(X.jsxs)(Mn,{children:[Object(X.jsx)("div",{children:"\u5beb\u7d66\u4e94\u5e74\u5f8c\u8d70\u5728\u5275\u696d\u8def\u4e0a\u7684\u81ea\u5df1"}),Object(X.jsx)("span",{children:"2017-04-11 by Alex"}),Object(X.jsx)(Qn,{})]}),Object(X.jsxs)(Xn,{children:["View All ",Object(X.jsx)(Rn.a,{style:{fontSize:"10px"}})]})]}),Object(X.jsxs)("div",{style:{backgroundColor:"hsla(0,0%,98%,0.8)"},children:[Object(X.jsx)(Jn,{children:"Explore our site"}),Object(X.jsxs)(Un,{children:[Object(X.jsx)("li",{children:"About"}),Object(X.jsx)("li",{children:"Case Studies"}),Object(X.jsx)("li",{children:"Press Center"}),Object(X.jsx)("li",{children:"Career"}),Object(X.jsx)("li",{children:"Contact"}),Object(X.jsx)("li",{children:"Blog"}),Object(X.jsx)("li",{children:"25lab"})]}),Object(X.jsx)(Jn,{children:"Handcrafted by 25sprout"}),Object(X.jsx)(Un,{children:Object(X.jsx)("li",{children:"SurveyCake"})}),Object(X.jsx)(qn,{children:Object(X.jsx)("span",{})})]}),Object(X.jsxs)("div",{style:{backgroundColor:"hsla(0,0%,95%,0.8)"},children:[Object(X.jsx)(Jn,{children:"Feel exciting to contact us"}),Object(X.jsxs)(Wn,{children:[Object(X.jsx)("span",{children:Object(X.jsx)(Pn.a,{})}),Object(X.jsx)("div",{children:"02-77515075"})]}),Object(X.jsxs)(Wn,{children:[Object(X.jsx)("span",{children:Object(X.jsx)(Rn.c,{})}),Object(X.jsx)("div",{children:"hey@25sprout.com"})]}),Object(X.jsxs)(Wn,{children:[Object(X.jsx)("span",{children:Object(X.jsx)(Rn.b,{})}),Object(X.jsx)("div",{children:"105 \u53f0\u5317\u5e02\u677e\u5c71\u5340\u5357\u4eac\u6771\u8def\u4e94\u6bb51\u865f12\u6a13"})]}),Object(X.jsx)(Jn,{children:"Let's keep in touch"})]})]})]})})})},$n=function(){var n=Object(U.useState)(!1),t=Object(K.a)(n,2),e=t[0],i=t[1];return Object(U.useEffect)((function(){document.body.style.overflowY=!0===e?"hidden":"auto"}),[e]),Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(on,{toggle:e,setToggle:i}),Object(X.jsx)(xn,{}),Object(X.jsx)(gn,{}),Object(X.jsx)(Yn,{}),Object(X.jsx)(_n,{}),Object(X.jsx)(Zn,{toggle:e})]})};q.a.render(Object(X.jsx)($n,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.652bd4f5.chunk.js.map
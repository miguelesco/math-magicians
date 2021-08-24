(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{47:function(e,n,t){"use strict";t.r(n);var i,o,r,a,c=t(0),s=t.n(c),l=t(27),u=t.n(l),d=t(12),b=t(13),m=t(17),p=t(16),x=t(15),f=t(4),j=t(2),h=t(3),g=Object(h.a)(i||(i=Object(j.a)(["\n\n  html, body {  \n    height: 100%; \n    width: 100%;  \n    margin: 0;  \n    padding: 0; \n  }     \n  body {\n    background-color: #f6f6f6;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #333;\n  }\n\n"]))),O=t(24),v=function(e,n,t){return"\n    display: flex;\n    flex-direction: ".concat(e,";\n    align-items: ").concat(n,";\n    justify-content: ").concat(t,";\n  ")},w=h.b.nav(o||(o=Object(j.a)(["\n  box-sizing: border-box;\n  padding: 0.5rem 2rem;\n  ",";\n  gap: 1rem;\n  flex-wrap: wrap;\n  width: 100%;\n\n  h1 {\n    font-size: calc(1.5rem + 2vw);\n    font-weight: bold;\n    ",";\n    gap: 1rem;\n    color: #000;\n    width: 100%;\n    @media (min-width: 634px) {\n      width: auto;\n    }\n  }\n\n  ul {\n    list-style: none;\n    width: 100%;\n    ",";\n    gap: 1rem;\n    @media (min-width: 634px) {\n      width: auto;\n    }\n\n    li {\n      font-size: calc(1rem + 0.5vw);\n      font-weight: bold;\n      @media (min-width: 634px) {\n        margin-top: 0;\n      }\n\n      @media (min-width: 978px) {\n        margin-right: 0.8rem;\n      }\n      \n    }\n  }\n\n"])),v("row","center","space-between"),v("row","center","center"),v("row","center","center")),y=t(1),q=function(){return Object(y.jsxs)(w,{children:[Object(y.jsxs)("h1",{children:[Object(y.jsx)(O.a,{}),"Math Magicians"]}),Object(y.jsx)("ul",{children:[{id:1,path:"/",text:"Home"},{id:2,path:"/calculator",text:"Calculator"},{id:3,path:"/quote",text:"Quote"}].map((function(e){return Object(y.jsx)("li",{children:Object(y.jsxs)(x.b,{to:e.path,className:"link",activeClassName:"active-link",exact:!0,children:[Object(y.jsx)(O.b,{className:"hand"}),e.text]})},e.id)}))})]})},k=t(25),z=t(31),A=t(14),S=h.b.div(r||(r=Object(j.a)(["\n  width: 70%;\n  height: 100%;\n  background-color: #f0f0f0;\n  display: grid;\n  place-items: center;\n  grid-template-columns: auto auto auto;\n"]))),K=h.b.button(a||(a=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: #e3e3e3;\n  border: solid 1px #bfbfbf;\n  cursor: pointer;\n  font-size: 1.2rem;\n  padding: 2rem 0.75rem;\n  grid-column-start: ",";\n  grid-column-end: ",";\n"])),(function(e){return"0"===e.number?"1":"0"}),(function(e){return"0"===e.number?"3":"0"})),C=S,L=["AC","+/-","%","7","8","9","4","5","6","1","2","3","0","."];var P,M,N=function(e){var n=e.updateKeyboardValue;return Object(y.jsx)(C,{children:L.map((function(e){return Object(y.jsx)(K,{number:e,type:"button",onClick:function(){return n(e)},children:e},e)}))})},V=h.b.div(P||(P=Object(j.a)(["\n  width: 30%;\n  height: 100%;\n  background-color: lightgray;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n"]))),F=h.b.button(M||(M=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: orange;\n  border: solid 1px #bfbfbf;\n  cursor: pointer;\n  font-size: 1.2rem;\n  padding: 2rem 0.75rem;\n"]))),H=V,E=["\xf7","x","-","+","="];function I(e){var n=e.updateKeyboardSymbol,t=e.error;return Object(y.jsx)(H,{children:E.map((function(e){return Object(y.jsxs)(F,{onClick:function(){return function(e){null===t&&n(e)}(e)},children:[" ",e," "]},e)}))})}I.defaultProps={error:null};var J,W=I,B=h.b.div(J||(J=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),D=function(e){Object(m.a)(t,e);var n=Object(p.a)(t);function t(e){var i;return Object(d.a)(this,t),(i=n.call(this,e)).updateKeyboard=i.updateKeyboard.bind(Object(A.a)(i)),i}return Object(b.a)(t,[{key:"updateKeyboard",value:function(e){(0,this.props.updateValue)(e)}},{key:"render",value:function(){var e=this.props.error;return Object(y.jsxs)(B,{children:[Object(y.jsx)(N,{updateKeyboardValue:this.updateKeyboard}),Object(y.jsx)(W,{updateKeyboardSymbol:this.updateKeyboard,error:e})]})}}]),t}(c.PureComponent);D.defaultProps={error:null};var Q,T,U,G,R=D,X=h.b.div(Q||(Q=Object(j.a)([" \n  width: 600px;\n  max-width: calc(100% - 20px);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  background-color: #f5f5f5;\n  margin: 0 auto;\n  padding-bottom: 150px;\n"]))),Y=h.b.h1(T||(T=Object(j.a)(["\n  font-size: 3em;\n  text-align: center;\n"]))),Z=h.b.div(U||(U=Object(j.a)(["\n  width: 100%;\n  height: 20%;\n  background-color: gray;\n  display: flex;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  padding: 1rem;\n  font-size: 1.8em;\n  color: #fff;\n  p {\n    margin: 0;\n  }\n"]))),$=h.b.div(G||(G=Object(j.a)(["\n  box-sizing: border-box;\n  background: #222831;\n  height: calc(5px + 1.5vw);\n  padding: 0.5rem;\n  text-align: left;\n  font-size: calc(#{12px} + #{0.3}vw);\n  font-weight: 700;\n  line-height: 32px;\n  color: #fff;\n  display: flex;\n  flex-direction: row;\n  align-items:center;\n  justify-content: flex-end;\n  width: 100%;\n"]))),_=X,ee=t(23),ne=t.n(ee);function te(e,n,t){var i=ne()(e),o=ne()(n);if("+"===t)return i.plus(o).toString();if("-"===t)return i.minus(o).toString();if("x"===t)return i.times(o).toString();if("\xf7"===t)return i.div(o).toString();if("%"===t)return i.mod(o).toString();throw Error("Unknown operation '".concat(t,"'"))}var ie,oe,re,ae,ce,se,le=function(){var e=Object(c.useState)({total:0,next:null,operation:null}),n=Object(z.a)(e,2),t=n[0],i=n[1],o=t.total,r=t.next,a=t.operation,s=null;return s="0"===r&&"\xf7"===a?"Division by zero is undefined":null,Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Y,{children:"Lets do some Math"}),Object(y.jsxs)(_,{children:[Object(y.jsxs)(Z,{children:[Object(y.jsx)("p",{children:o})," ",Object(y.jsx)("p",{children:a})," ",Object(y.jsx)("p",{children:r})]}),Object(y.jsx)($,{children:s}),Object(y.jsx)(R,{updateValue:function(e){var n,o,r=(n=t,void 0===(o=e)?{}:"AC"===o?{total:0,next:null,operation:null}:o.match(/[0-9]+/)?"0"===o&&"0"===n.next?{}:n.operation?"0"===n.next?{next:o}:n.next?{next:n.next+o}:{next:o}:n.next?{next:n.next+o,total:null}:{next:o,total:null}:"."===o?n.next?n.next.includes(".")?{}:{next:"".concat(n.next,".")}:n.operation?{next:"0."}:n.total?n.total.includes(".")?{}:{total:"".concat(n.total,".")}:{total:"0."}:"="===o?"\xf7"===n.operation&&"0"===n.next?{total:n.total,next:n.next,operation:"\xf7"}:n.next&&n.operation?{total:te(n.total,n.next,n.operation),next:null,operation:null}:{}:"+/-"===o?n.next?{next:(-1*parseFloat(n.next)).toString()}:n.total?{total:(-1*parseFloat(n.total)).toString()}:{}:n.next||n.total?n.next?"+"!==o&&"-"!==o&&"x"!==o&&"\xf7"!==o&&"%"!==o||"\xf7"!==n.operation||"0"!==n.next?n.operation?{total:te(n.total,n.next,n.operation),next:null,operation:o}:{total:n.next,next:null,operation:o}:{total:n.total,next:n.next,operation:"\xf7"}:{operation:o}:{});i((function(e){return Object(k.a)(Object(k.a)({},e),r)}))},error:s})]})]})},ue=h.b.div(ie||(ie=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n"]))),de=h.b.h1(oe||(oe=Object(j.a)(["\n  font-size: 3em;\n"]))),be=h.b.p(re||(re=Object(j.a)(["\n  font-size: 1.5em;\n  font-weight: bold;\n  line-height: 1.5;\n"]))),me=ue,pe=function(){return Object(y.jsxs)(me,{children:[Object(y.jsx)(de,{children:"Welcome to our Page!"}),Object(y.jsxs)(be,{children:["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam eos eveniet repellendus, sequi reprehenderit iusto officia sit veniam fugiat, fugit assumenda dolorem. Asperiores quam odio reiciendis nobis et consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam eos eveniet repellendus, sequi reprehenderit iusto officia sit veniam fugiat, fugit assumenda dolorem. Asperiores quam odio reiciendis nobis et consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam eos eveniet repellendus, sequi reprehenderit iusto officia sit veniam fugiat, fugit assumenda dolorem. Asperiores quam odio reiciendis nobis et consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam eos eveniet repellendus, sequi reprehenderit iusto officia sit veniam fugiat, fugit assumenda dolorem. Asperiores quam odio reiciendis nobis et consectetur.",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam eos eveniet repellendus, sequi reprehenderit iusto officia sit veniam fugiat, fugit assumenda dolorem. Asperiores quam odio reiciendis nobis et consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam eos eveniet repellendus, sequi reprehenderit iusto officia sit veniam fugiat, fugit assumenda dolorem. Asperiores quam odio reiciendis nobis et consectetur."]})]})},xe=h.b.div(ae||(ae=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: #f5f5f5;\n  border-radius: 5px;\n  padding: 20px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n"]))),fe=h.b.div(ce||(ce=Object(j.a)(["\n  display: flex;\n  font-size: 1.5em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n"]))),je=h.b.p(se||(se=Object(j.a)(["\n  font-size: 1em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n"]))),he=xe,ge=function(){return Object(y.jsxs)(he,{children:[Object(y.jsx)(fe,{children:"Mathematics is not about numbers, equations, computations, or algorithms: It is about understanding"}),Object(y.jsx)(je,{children:"William Paul Thurston"})]})},Oe=function(e){Object(m.a)(t,e);var n=Object(p.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return Object(y.jsxs)(x.a,{children:[Object(y.jsx)(g,{}),Object(y.jsx)(q,{}),Object(y.jsxs)(f.c,{children:[Object(y.jsx)(f.a,{path:"/",exact:!0,children:Object(y.jsx)(pe,{})}),Object(y.jsx)(f.a,{path:"/calculator",children:Object(y.jsx)(le,{})}),Object(y.jsx)(f.a,{path:"/quote",children:Object(y.jsx)(ge,{})})]})]})}}]),t}(s.a.PureComponent);u.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(Oe,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.0969a10a.chunk.js.map
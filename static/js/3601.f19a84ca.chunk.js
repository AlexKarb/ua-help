"use strict";(self.webpackChunkua_help=self.webpackChunkua_help||[]).push([[3601,4256,8919,7593,239,1269,7482,7869],{54256:function(n,e,t){t.r(e),t.d(e,{ButtonsBlock:function(){return i}});var o=t(28919),r=t(80184),i=function(n){var e=n.action,t=n.changeType,i=n.onClose;return(0,r.jsxs)(o.ButtonWrapper,{children:[(0,r.jsx)(o.Button,{action:e,agree:!0,onClick:t,children:"\u0422\u0430\u043a"}),(0,r.jsx)(o.Button,{action:e,disagree:!0,onClick:i,children:"\u041d\u0456"})]})}},28919:function(n,e,t){t.r(e),t.d(e,{ButtonWrapper:function(){return c},Button:function(){return d}});var o,r,i=t(30168),a=t(15751),c=a.ZP.div(o||(o=(0,i.Z)(["\n  width: 180px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    width: 400px;\n  }\n"]))),d=a.ZP.button.attrs((function(n){return{type:"button"}}))(r||(r=(0,i.Z)(["\n  width: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  background-color: ",";\n\n  border: none;\n  padding: 8px 0;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #fff;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    width: 175px;\n    padding: 10px 0;\n    font-size: 26px;\n  }\n"])),(function(n){var e=n.action,t=n.agree,o=n.disagree;return t&&"deleted"!==e||o&&"deleted"===e?"var(--first-color-bg)":"var(--main-text-color)"}))},23601:function(n,e,t){t.r(e),t.d(e,{DeletedModal:function(){return a}});var o=t(91269),r=t(87482),i=t(80184),a=function(n){var e=n.onChange,t=n.modalIsOpen,a=n.setIsOpen,c=n.action;return(0,i.jsx)(o.ModalWindow,{changeType:e,modalIsOpen:t,setIsOpen:a,action:c,children:(0,i.jsx)(r.Text,{children:"\u0412\u0438 \u0434\u0456\u0439\u0441\u043d\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0443?"})})}},7593:function(n,e,t){t.r(e),t.d(e,{ModalW:function(){return c}});var o=t(97948),r=t.n(o),i=t(40239),a=t(80184);r().setAppElement("#root");var c=function(n){var e=n.elements,t=n.children,o=n.onClose,c=n.open;return(0,a.jsxs)(r(),{isOpen:c,onRequestClose:o,style:i.customStyles,contentLabel:"Example Modal",overlayClassName:"Overlay",children:[e,t]})}},40239:function(n,e,t){t.r(e),t.d(e,{customStyles:function(){return o}});var o={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",overflow:"auto",maxHeight:"calc(100vh - 60px)",maxWidth:"calc(100vw - 30px)",padding:0,border:"none",background:"none"}}},91269:function(n,e,t){t.r(e),t.d(e,{ModalWindow:function(){return u}});var o=t(7593),r=t(16030),i=t(29176),a=t(87482),c=t(77869),d=t(54256),s=t(80184),u=function(n){var e=n.changeType,t=n.modalIsOpen,u=n.setIsOpen,l=n.children,p=n.action,x=(0,r.v9)(i.getRoleValue);return(0,s.jsxs)(o.ModalW,{onClose:u,open:t,children:["GUEST"===x&&(0,s.jsx)(c.NoAccess,{onClose:u}),"GUEST"!==x&&(0,s.jsxs)(a.Container,{children:[l,(0,s.jsx)(d.ButtonsBlock,{action:p,changeType:e,onClose:function(){return u(!1)}})]})]})}},87482:function(n,e,t){t.r(e),t.d(e,{Container:function(){return c},Text:function(){return d}});var o,r,i=t(30168),a=t(15751),c=a.ZP.div(o||(o=(0,i.Z)(["\n  background-color: white;\n  width: 300px;\n  padding: 30px 15px;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n    padding: 60px 35px;\n  }\n"]))),d=a.ZP.div(r||(r=(0,i.Z)(["\n  margin-bottom: 30px;\n  font-size: 20px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 30px;\n    margin-bottom: 40px;\n  }\n"])))},77869:function(n,e,t){t.r(e),t.d(e,{NoAccess:function(){return a}});var o=t(87482),r=t(28919),i=t(80184),a=function(n){var e=n.onClose;return(0,i.jsxs)(o.Container,{children:[(0,i.jsx)(o.Text,{children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043d\u044c\u043e \u043f\u0440\u0430\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0443"}),(0,i.jsx)(r.Button,{agree:!0,action:"noAccess",onClick:function(){return e(!1)},type:"button",children:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438"})]})}}}]);
//# sourceMappingURL=3601.f19a84ca.chunk.js.map
"use strict";(self.webpackChunkua_help=self.webpackChunkua_help||[]).push([[8985,4256,8919,4797,7593,239,1269,7482,7869,4958,4732,8682,3170,6542,264,8469,9173,8250],{54256:function(n,e,t){t.r(e),t.d(e,{ButtonsBlock:function(){return i}});var r=t(28919),o=t(80184),i=function(n){var e=n.action,t=n.changeType,i=n.onClose;return(0,o.jsxs)(r.ButtonWrapper,{children:[(0,o.jsx)(r.Button,{action:e,agree:!0,onClick:t,children:"\u0422\u0430\u043a"}),(0,o.jsx)(r.Button,{action:e,disagree:!0,onClick:i,children:"\u041d\u0456"})]})}},28919:function(n,e,t){t.r(e),t.d(e,{ButtonWrapper:function(){return a},Button:function(){return u}});var r,o,i=t(30168),c=t(15751),a=c.ZP.div(r||(r=(0,i.Z)(["\n  width: 180px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    width: 400px;\n  }\n"]))),u=c.ZP.button.attrs((function(n){return{type:"button"}}))(o||(o=(0,i.Z)(["\n  width: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  background-color: ",";\n\n  border: none;\n  padding: 8px 0;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #fff;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    width: 175px;\n    padding: 10px 0;\n    font-size: 26px;\n  }\n"])),(function(n){var e=n.action,t=n.agree,r=n.disagree;return t&&"deleted"!==e||r&&"deleted"===e?"var(--first-color-bg)":"var(--main-text-color)"}))},24797:function(n,e,t){t.r(e),t.d(e,{ChangeTypeModal:function(){return u}});var r=t(87482),o=t(91269),i=t(89173),c=t(94958),a=t(80184),u=function(n){var e=n.changeType,t=n.modalIsOpen,u=n.setIsOpen,d=n.action,s=n.currentPage,l=n.currentAction;return(0,a.jsx)(o.ModalWindow,{changeType:e,modalIsOpen:t,setIsOpen:u,action:d,children:(0,a.jsx)(r.Text,{children:(0,i.isDeletedPage)(s)?"\u0412\u0438 \u0434\u0456\u0439\u0441\u043d\u043e \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0443?":" \u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0443 \u0443 \n            ".concat((0,c.selectCurrentAction)(l),"? ")})})}},7593:function(n,e,t){t.r(e),t.d(e,{ModalW:function(){return a}});var r=t(97948),o=t.n(r),i=t(40239),c=t(80184);o().setAppElement("#root");var a=function(n){var e=n.elements,t=n.children,r=n.onClose,a=n.open;return(0,c.jsxs)(o(),{isOpen:a,onRequestClose:r,style:i.customStyles,contentLabel:"Example Modal",overlayClassName:"Overlay",children:[e,t]})}},40239:function(n,e,t){t.r(e),t.d(e,{customStyles:function(){return r}});var r={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",overflow:"auto",maxHeight:"calc(100vh - 60px)",maxWidth:"calc(100vw - 30px)",padding:0,border:"none",background:"none"}}},91269:function(n,e,t){t.r(e),t.d(e,{ModalWindow:function(){return s}});var r=t(7593),o=t(16030),i=t(29176),c=t(87482),a=t(77869),u=t(54256),d=t(80184),s=function(n){var e=n.changeType,t=n.modalIsOpen,s=n.setIsOpen,l=n.children,p=n.action,f=(0,o.v9)(i.getRoleValue);return(0,d.jsxs)(r.ModalW,{onClose:s,open:t,children:["GUEST"===f&&(0,d.jsx)(a.NoAccess,{onClose:s}),"GUEST"!==f&&(0,d.jsxs)(c.Container,{children:[l,(0,d.jsx)(u.ButtonsBlock,{action:p,changeType:e,onClose:function(){return s(!1)}})]})]})}},87482:function(n,e,t){t.r(e),t.d(e,{Container:function(){return a},Text:function(){return u}});var r,o,i=t(30168),c=t(15751),a=c.ZP.div(r||(r=(0,i.Z)(["\n  background-color: white;\n  width: 300px;\n  padding: 30px 15px;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n    padding: 60px 35px;\n  }\n"]))),u=c.ZP.div(o||(o=(0,i.Z)(["\n  margin-bottom: 30px;\n  font-size: 20px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 30px;\n    margin-bottom: 40px;\n  }\n"])))},77869:function(n,e,t){t.r(e),t.d(e,{NoAccess:function(){return c}});var r=t(87482),o=t(28919),i=t(80184),c=function(n){var e=n.onClose;return(0,i.jsxs)(r.Container,{children:[(0,i.jsx)(r.Text,{children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043d\u044c\u043e \u043f\u0440\u0430\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0443"}),(0,i.jsx)(o.Button,{agree:!0,action:"noAccess",onClick:function(){return e(!1)},type:"button",children:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438"})]})}},94958:function(n,e,t){t.r(e),t.d(e,{selectCurrentAction:function(){return r}});var r=function(n){switch(n){case"pending":return" \u0410\u041a\u0422\u0418\u0412\u041d\u0406";case"in progress":return" \u0420\u041e\u0411\u041e\u0422\u0423";case"completed":return" \u0412\u0418\u041a\u041e\u041d\u0410\u041d\u0406";default:return null}}},84732:function(n,e,t){t.r(e),t.d(e,{useToggleModal:function(){return i}});var r=t(70885),o=t(72791),i=function(){var n=(0,o.useState)(!1),e=(0,r.Z)(n,2),t=e[0],i=e[1];return[t,function(){return i(!0)},function(){return i(!1)}]}},18682:function(n,e,t){t.r(e),t.d(e,{Button:function(){return c}});var r=t(36542),o=t(23170),i=t(80184),c=function(n){var e=n.onClick,t=n.currentPage,c=n.currentAction,a=n.data,u=n.text;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o.Container,{disabled:t,onClick:e,children:[(0,i.jsx)(r.Icon,{styleIcon:c,currentPage:null===t||void 0===t?void 0:t.toString(),data:a}),(0,i.jsx)(o.Info,{children:u})]})})}},23170:function(n,e,t){t.r(e),t.d(e,{Info:function(){return a},Container:function(){return u}});var r,o,i=t(30168),c=t(15751),a=c.ZP.div(r||(r=(0,i.Z)(["\n  z-index: 3;\n  display: none;\n  position: absolute;\n  left: -27px;\n  bottom: -38px;\n  width: 80px;\n  padding: 5px;\n  box-shadow: -1px 0px 5px #1a225780;\n  font-size: 10px;\n  border-radius: 5px;\n  background-color: #fff;\n\n  @media screen and (min-width: 768px) {\n    left: -26px;\n    bottom: -65px;\n    width: 100px;\n    padding: 5px;\n    font-size: 13px;\n  }\n"]))),u=c.ZP.button(o||(o=(0,i.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--unactive-color-bg);\n  padding: 0;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  cursor: pointer;\n\n  &:hover > "," {\n    display: block;\n  }\n"])),a)},36542:function(n,e,t){t.r(e),t.d(e,{Icon:function(){return i}});var r=t(264),o=t(80184),i=function(n){var e=n.styleIcon,t=n.currentPage,i=n.data;switch(e){case"delivery":return(0,o.jsx)(r.IconContainer,{children:(0,o.jsx)(r.DeliveryIcon,{type:i?"needDel":null})});case"call":return(0,o.jsx)(r.TelLink,{href:"tel:".concat(i),children:(0,o.jsx)(r.IconContainer,{children:(0,o.jsx)(r.CallIcon,{})})});case"pending":return(0,o.jsx)(r.IconContainer,{children:(0,o.jsx)(r.PendingIcon,{type:t})});case"in progress":return(0,o.jsx)(r.IconContainer,{children:(0,o.jsx)(r.WaitIcon,{type:t})});case"completed":return(0,o.jsx)(r.IconContainer,{children:(0,o.jsx)(r.DoneIcon,{type:t})});case"edit":return(0,o.jsx)(r.IconContainer,{children:(0,o.jsx)(r.EditIcon,{})});case"deleted":return(0,o.jsx)(r.IconContainer,{children:(0,o.jsx)(r.DeleteIcon,{type:t})});default:return null}}},264:function(n,e,t){t.r(e),t.d(e,{DeliveryIcon:function(){return y},CallIcon:function(){return C},PendingIcon:function(){return w},WaitIcon:function(){return j},DoneIcon:function(){return I},EditIcon:function(){return P},DeleteIcon:function(){return Z},TelLink:function(){return b},IconContainer:function(){return k}});var r,o,i,c,a,u,d,s,l,p=t(30168),f=t(15751),h=t(78820),g=t(58617),x=t(23853),v=t(56355),m=t(16856),y=(0,f.ZP)(m.ZjZ)(r||(r=(0,p.Z)(["\n  color: ",";\n  width: 22px;\n  height: 22px;\n\n  width: 100%;\n  height: 100%;\n\n  &:hover {\n    color: #000;\n  }\n"])),(function(n){return n.type&&"green"})),C=(0,f.ZP)(x.CoD)(o||(o=(0,p.Z)(["\n  padding: 3px;\n  width: 100%;\n  height: 100%;\n\n  &:hover {\n    color: #10af02;\n  }\n"]))),w=(0,f.ZP)(g.qk2)(i||(i=(0,p.Z)(["\n  padding: 1.5px;\n  width: 100%;\n  height: 100%;\n  color: ",";\n\n  &:hover {\n    color: #000;\n  }\n"])),(function(n){return"true"===n.type?"var(--first-color-bg)":null})),j=(0,f.ZP)(v.xrw)(c||(c=(0,p.Z)(["\n  padding: 3px;\n  width: 100%;\n  height: 100%;\n  color: ",";\n\n  &:hover {\n    color: #000;\n  }\n"])),(function(n){return"true"===n.type?"var(--first-color-bg)":null})),I=(0,f.ZP)(g.dZ6)(a||(a=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n  color: ",";\n\n  &:hover {\n    color: #000;\n  }\n"])),(function(n){return"true"===n.type?"var(--first-color-bg)":null})),P=(0,f.ZP)(x.IYd)(u||(u=(0,p.Z)(["\n  padding: 2px;\n  width: 100%;\n  height: 100%;\n\n  &:hover {\n    color: #000;\n  }\n"]))),Z=(0,f.ZP)(h.VPh)(d||(d=(0,p.Z)(["\n  width: 19px;\n  height: 19px;\n  width: 100%;\n  height: 100%;\n  color: ",";\n\n  &:hover {\n    color: #000;\n  }\n"])),(function(n){return"true"===n.type?"var(--first-color-bg)":null})),b=f.ZP.a(s||(s=(0,p.Z)(["\n  color: inherit;\n  display: flex;\n"]))),k=f.ZP.div(l||(l=(0,p.Z)(["\n  width: 22px;\n  height: 22px;\n\n  @media screen and (min-width: 768px) {\n    width: 26px;\n    height: 26px;\n  }\n"])))},78985:function(n,e,t){t.r(e),t.d(e,{PendingButton:function(){return s}});var r=t(70885),o=t(24797),i=t(84732),c=t(89173),a=t(78250),u=t(18682),d=t(80184),s=function(n){var e=n.id,t=n.onChange,s=n.type,l=(0,i.useToggleModal)(),p=(0,r.Z)(l,3),f=p[0],h=p[1],g=p[2],x="pending";return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.Button,{currentPage:(0,c.isPendingPage)(s),currentAction:x,onClick:h,text:"\u0410\u043a\u0442\u0438\u0432\u043d\u0456"}),(0,d.jsx)(o.ChangeTypeModal,{changeType:function(){return t((0,a.changeStatus)(e,x))},modalIsOpen:f,setIsOpen:g,action:"change",currentPage:s,currentAction:x})]})}},28469:function(n,e,t){t.r(e),t.d(e,{notifyChange:function(){return a},notifyError:function(){return i},notifySuccess:function(){return c}});var r=t(30577),o={position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},i=function(){return r.Am.error(" \u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u043b\u043e\u0433\u0456\u043d \u0430\u0431\u043e \u043f\u0430\u0440\u043e\u043b\u044c. \ud83e\udd25",o)},c=function(n,e){return r.Am.success("\u0412\u0456\u0442\u0430\u044e, ".concat(n,"! \u0413\u0430\u0440\u043d\u043e\u0457 \u0440\u043e\u0431\u043e\u0442\u0438! \u0412\u0430\u0448\u0430 \u0440\u043e\u043b\u044c: ").concat(e),o)},a=function(n){return r.Am.info(n,o)}},89173:function(n,e,t){t.r(e),t.d(e,{isPendingPage:function(){return r},isInProgressPage:function(){return o},isCompletedPage:function(){return i},isDeletedPage:function(){return c}});var r=function(n){return"pending"===n},o=function(n){return"in progress"===n},i=function(n){return"completed"===n},c=function(n){return"deleted"===n}},78250:function(n,e,t){t.r(e),t.d(e,{changeStatus:function(){return o}});var r=t(28469),o=function(n,e){switch(e){case"pending":return(0,r.notifyChange)("\u0417\u0430\u044f\u0432\u043a\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u0443 \u0430\u043a\u0442\u0438\u0432\u043d\u0456"),{id:n,data:{status:e}};case"in progress":return(0,r.notifyChange)("\u0417\u0430\u044f\u0432\u043a\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u0443 \u0440\u043e\u0431\u043e\u0442\u0443 "),{id:n,data:{status:e,dataInProgress:new Date}};case"completed":return(0,r.notifyChange)(" \u0417\u0430\u044f\u0432\u043a\u0430 \u0432\u0438\u043a\u043e\u043d\u0430!   \ud83c\udf89"),{id:n,data:{status:e,dataCompleted:new Date}};case"deleted":return(0,r.notifyChange)(" \u0417\u0430\u044f\u0432\u043a\u0430 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0430!  \u274c "),{id:n,data:{status:e,dataClose:new Date}}}}}}]);
//# sourceMappingURL=8985.78dfe19d.chunk.js.map
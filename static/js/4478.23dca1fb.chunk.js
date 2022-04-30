"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[4478,5931,7890,9697,1462,8875,382,8484,6125,7854,423,4958,4732,7984,8682,3170,2445,6542,264,769,1299,3905,1466,9173,392],{45931:function(n,e,t){t.r(e),t.d(e,{Item:function(){return s},Block:function(){return u},Container:function(){return l},Main:function(){return p}});var r,i,o,a,d=t(30168),c=t(15751),s=c.ZP.li(r||(r=(0,d.Z)(["\n  list-style: none;\n  position: relative;\n  max-width: 365px;\n  background-color: white;\n  border-radius: 6px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  box-shadow: 0px 0px 10px 3px #b8b8b833;\n\n  @media screen and (min-width: 768px) {\n    max-width: 540px;\n    min-height: 208px;\n    margin-left: 30px;\n    margin-right: 0;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 1000px;\n  }\n"]))),u=c.ZP.div(i||(i=(0,d.Z)(["\n  position: relative;\n  /* display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: column-reverse;\n\n    justify-content: flex-end;\n  }\n\n  @media screen and (min-width: 1024px) {\n    display: flex;\n    flex-wrap: wrap;\n  } */\n"]))),l=c.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n\n  margin-bottom: 15px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),p=c.ZP.div(a||(a=(0,d.Z)(["\n  margin-bottom: 18px;\n"])))},74388:function(n,e,t){t.r(e),t.d(e,{Contact:function(){return o}});var r=t(37838),i=t(80184),o=function(n){var e=n.contact,t=e.name,o=e.tel,a=e.adress;return(0,i.jsxs)(r.Container,{children:[(0,i.jsxs)(r.Wrap,{children:[(0,i.jsx)(r.Name,{children:t}),(0,i.jsx)(r.Tel,{children:o})]}),(0,i.jsxs)(r.Adress,{children:[(0,i.jsx)(r.AdressIcon,{}),a]})]})}},37838:function(n,e,t){t.r(e),t.d(e,{Container:function(){return p},Wrap:function(){return x},Name:function(){return f},Tel:function(){return g},Adress:function(){return h},AdressIcon:function(){return m}});var r,i,o,a,d,c,s=t(30168),u=t(15751),l=t(16856),p=u.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n  font-size: 10px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 20px;\n  }\n"]))),x=u.ZP.div(i||(i=(0,s.Z)(["\n  margin-bottom: 6px;\n"]))),f=u.ZP.p(o||(o=(0,s.Z)(["\n  margin: 0;\n  margin-bottom: 1px;\n  margin-right: 25px;\n  font-size: 16px;\n  font-weight: 700;\n\n  @media screen and (min-width: 768px) {\n    font-size: 25px;\n    margin-bottom: 4px;\n  }\n"]))),g=u.ZP.p(a||(a=(0,s.Z)(["\n  font-size: 12px;\n  text-decoration: none;\n  color: inherit;\n  position: relative;\n  width: 100px;\n  color: #808080;\n\n  @media screen and (min-width: 768px) {\n    font-size: 15px;\n    padding-left: 3px;\n  }\n"]))),h=u.ZP.p(d||(d=(0,s.Z)(["\n  font-size: 14px;\n  color: #3f3f3f;\n  display: flex;\n  align-items: flex-start;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),m=(0,u.ZP)(l.NK0)(c||(c=(0,s.Z)(["\n  width: 13px;\n  height: 13px;\n  margin-left: -2px;\n\n  @media screen and (min-width: 768px) {\n    width: 20px;\n    height: 20px;\n  }\n"])))},77890:function(n,e,t){t.r(e),t.d(e,{DateHistory:function(){return d}});var r=t(90392),i=t(89173),o=t(9697),a=t(80184),d=function(n){var e=n.dates,t=n.type,d=e.dataAdd,c=e.dataInProgress,s=e.dataCompleted;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o.DateHistoryContainer,{children:[!(0,i.isPendingPage)(t)&&(0,a.jsxs)(o.Container,{children:[(0,a.jsx)(o.DateLabel,{children:" \u0437\u0430\u044f\u0432\u043a\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u0430:"}),(0,a.jsxs)(o.DateInfo,{children:[" ",(0,r.formatingDate)(d)]})]}),((0,i.isCompletedPage)(t)||(0,i.isDeletedPage)(t))&&c&&(0,a.jsxs)(o.Container,{children:[(0,a.jsx)(o.DateLabel,{children:"\u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u043e\u0431\u0440\u043e\u0431\u043a\u0443:"}),(0,a.jsx)(o.DateInfo,{children:(0,r.formatingDate)(c)})]}),(0,i.isDeletedPage)(t)&&s&&(0,a.jsxs)(o.Container,{children:[(0,a.jsx)(o.DateLabel,{children:"\u0434\u0430\u0442\u0430 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f: "}),(0,a.jsxs)(o.DateInfo,{children:[" ",(0,r.formatingDate)(s)]})]})]})})}},9697:function(n,e,t){t.r(e),t.d(e,{Container:function(){return s},DateLabel:function(){return u},DateInfo:function(){return l},DateHistoryContainer:function(){return p}});var r,i,o,a,d=t(30168),c=t(15751),s=c.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: baseline;\n"]))),u=c.ZP.span(i||(i=(0,d.Z)(["\n  margin-right: 5px;\n  color: #808080;\n  flex-shrink: 0;\n  font-size: 10px;\n  width: 115px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    width: 200px;\n  }\n"]))),l=c.ZP.p(o||(o=(0,d.Z)(["\n  font-size: 9px;\n  padding: 2px 0;\n\n  @media screen and (min-width: 768px) {\n    font-size: 15px;\n  }\n"]))),p=c.ZP.ul(a||(a=(0,d.Z)(["\n  padding-top: 7px;\n"])))},41462:function(n,e,t){t.r(e),t.d(e,{DateSet:function(){return d}});var r=t(90392),i=t(89173),o=t(38875),a=t(80184),d=function(n){var e=n.dates,t=n.type,d=e.dataAdd,c=e.dataClose,s=e.dataInProgress,u=e.dataCompleted;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o.Container,{children:[(0,i.isPendingPage)(t)&&(0,a.jsxs)(o.Date,{children:["\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f:",(0,r.formatingDate)(d)]}),(0,i.isInProgressPage)(t)&&(0,a.jsxs)(o.Date,{children:["\u0414\u0430\u0442\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043a\u0438 \u0443 \u0440\u043e\u0431\u043e\u0442\u0443: ",(0,r.formatingDate)(s)]}),(0,i.isCompletedPage)(t)&&u&&(0,a.jsxs)(o.Date,{children:["\u0414\u0430\u0442\u0430 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f: ",(0,r.formatingDate)(u)]}),(0,i.isDeletedPage)(t)&&c&&(0,a.jsxs)(o.Date,{children:["\u0414\u0430\u0442\u0430 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f: ",(0,r.formatingDate)(c)]})]})})}},38875:function(n,e,t){t.r(e),t.d(e,{Date:function(){return d},Container:function(){return c}});var r,i,o=t(30168),a=t(15751),d=a.ZP.div(r||(r=(0,o.Z)(["\n  font-size: 12px;\n  color: #808080;\n  display: flex;\n\n  @media screen and (min-width: 768px) {\n    font-size: 15px;\n  }\n"]))),c=a.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n"])))},40382:function(n,e,t){t.r(e),t.d(e,{DetailsComment:function(){return o}});var r=t(68484),i=t(80184),o=function(n){var e=n.data;return(0,i.jsxs)(r.CommentContainer,{children:[(0,i.jsx)(r.Label,{children:" \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f : "}),(0,i.jsx)(r.Info,{children:e})]})}},68484:function(n,e,t){t.r(e),t.d(e,{Label:function(){return c},Info:function(){return s},CommentContainer:function(){return u}});var r,i,o,a=t(30168),d=t(15751),c=d.ZP.span(r||(r=(0,a.Z)(["\n  margin-right: 5px;\n  color: #808080;\n  flex-shrink: 0;\n  font-size: 10px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    margin-bottom: 10px;\n  }\n"]))),s=d.ZP.p(i||(i=(0,a.Z)(["\n  font-size: 10px;\n  padding: 2px 0;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),u=d.ZP.div(o||(o=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  margin-top: 10px;\n"])))},73951:function(n,e,t){t.r(e),t.d(e,{MoreInfo:function(){return u}});var r=t(89173),i=t(77890),o=t(40382),a=t(92925),d=t(11640),c=t(46125),s=t(80184),u=function(n){var e=n.additional,t=n.info,u=n.dates,l=n.type;return(0,s.jsxs)(c.Block,{children:[(0,s.jsx)(d.Line,{}),(0,s.jsx)(a.OrderDescription,{data:e}),t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Line,{}),(0,s.jsx)(o.DetailsComment,{data:t})]}),!(0,r.isPendingPage)(l)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Line,{}),(0,s.jsx)(i.DateHistory,{dates:u,type:l})]})]})}},46125:function(n,e,t){t.r(e),t.d(e,{Block:function(){return o}});var r,i=t(30168),o=t(15751).ZP.div(r||(r=(0,i.Z)(["\n  padding: 15px 0;\n\n  @media screen and (min-width: 768px) {\n    padding: 0;\n    padding-bottom: 15px;\n  }\n"])))},92925:function(n,e,t){t.r(e),t.d(e,{OrderDescription:function(){return a}});var r=t(88366),i=t(87854),o=t(80184),a=function(n){var e=n.data;return(0,o.jsx)("div",{children:(0,r.nameLabelArrayTypeOfHelp)().map((function(n){var t=n.name,r=n.label;return e[t]&&(0,o.jsxs)(i.Container,{children:[(0,o.jsxs)(i.Label,{children:[" ",r," : "]}),(0,o.jsx)(i.Info,{children:e[t]})]},t)}))})}},87854:function(n,e,t){t.r(e),t.d(e,{Container:function(){return c},Label:function(){return s},Info:function(){return u}});var r,i,o,a=t(30168),d=t(15751),c=d.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  align-items: baseline;\n  padding-top: 7px;\n"]))),s=d.ZP.span(i||(i=(0,a.Z)(["\n  margin-right: 5px;\n  color: #808080;\n  flex-shrink: 0;\n  font-size: 10px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),u=d.ZP.p(o||(o=(0,a.Z)(["\n  font-size: 10px;\n  padding: 2px 0;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"])))},70296:function(n,e,t){t.r(e),t.d(e,{ShowMoreButton:function(){return o}});var r=t(9954),i=t(80184),o=function(n){var e=n.onClick,t=n.isOpen;return(0,i.jsxs)(r.Button,{onClick:e,children:[(0,i.jsx)(r.DownLine,{isopen:t?"rotate(180deg)":"rotate(0deg)"})," \u0414\u0435\u0442\u0430\u043b\u0456"]})}},9954:function(n,e,t){t.r(e),t.d(e,{Button:function(){return c},DownLine:function(){return s}});var r,i,o=t(30168),a=t(15751),d=t(23853),c=a.ZP.button(r||(r=(0,o.Z)(["\n  cursor: pointer;\n  background-color: var(--first-color-bg);\n  border: none;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 4px;\n  padding-right: 14px;\n  text-align: center;\n  border-radius: 5px;\n  color: #fff;\n  width: 110px;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n\n  &:hover {\n    background-color: rgb(65 106 229);\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    width: 140px;\n    padding-top: 6px;\n    padding-bottom: 6px;\n    padding-right: 22px;\n  }\n"]))),s=(0,a.ZP)(d.bTu)(i||(i=(0,o.Z)(["\n  width: 18px;\n  height: 18px;\n  margin-right: 8px;\n  transform: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 32px;\n    height: 32px;\n    margin-right: 10px;\n  }\n"])),(function(n){return n.isopen}))},96523:function(n,e,t){t.r(e),t.d(e,{TypeHelpList:function(){return a}});var r=t(423),i=t(88366),o=t(80184),a=function(n){var e=n.types,t=(0,i.nameEngUkrObjectTypeOfHelp)();return(0,o.jsx)(r.TypeList,{children:e.map((function(n){var e=t[n];return(0,o.jsx)(r.TypeItem,{type:n,color:e,children:t[n]},n)}))})}},423:function(n,e,t){t.r(e),t.d(e,{Label:function(){return c},TypeList:function(){return s},TypeItem:function(){return u}});var r,i,o,a=t(30168),d=t(15751),c=d.ZP.span(r||(r=(0,a.Z)(["\n  margin-right: 10px;\n  width: 78px;\n\n  @media screen and (min-width: 1024px) {\n    width: 100px;\n  }\n"]))),s=d.ZP.ul(i||(i=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  /* @media screen and (min-width: 768px) {\n    margin-bottom: 10px;\n  } */\n"]))),u=d.ZP.li(o||(o=(0,a.Z)(["\n  list-style: none;\n  margin-right: 10px;\n  background: ",";\n  padding: 4px 10px;\n  text-align: center;\n  border-radius: 30px;\n  margin-bottom: 6px;\n  font-size: 12px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 8px;\n    padding: 6px 18px;\n    font-size: 16px;\n  }\n"])),(function(n){switch(n.color){case"\u043e\u0434\u044f\u0433 \u0434\u043b\u044f \u0434\u043e\u0440\u043e\u0441\u043b\u0438\u0445":return"#e2be4762";case"\u043e\u0434\u044f\u0433 \u0434\u043b\u044f \u0434\u0456\u0442\u0435\u0439":return"#e2474776";case"\u0457\u0436\u0430":return"#4bff8161";case"\u0434\u0438\u0442\u044f\u0447\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043d\u043d\u044f":return"#4cc5f56b";case"\u043f\u0456\u0434\u0433\u0443\u0437\u043a\u0438":return"#ff70f382";case"\u0437\u0430\u0441\u043e\u0431\u0438 \u0433\u0456\u0433\u0456\u0454\u043d\u0438":return"#9a9ffc97";case"\u0456\u043d\u0448\u0438\u0439 \u0442\u0438\u043f":return"#4f726b80";default:return"#53d6ba73"}}))},54478:function(n,e,t){t.r(e),t.d(e,{Card:function(){return x}});var r=t(70885),i=t(45931),o=t(72791),a=t(74388),d=t(73951),c=t(96523),s=t(41462),u=t(70296),l=t(67984),p=t(80184),x=function(n){var e=n.onChange,t=n.type,x=n.data,f=x.id,g=void 0===f?"":f,h=x.contacts,m=void 0===h?{}:h,v=x.typeHelp,j=void 0===v?[]:v,y=x.additional,C=void 0===y?{}:y,P=x.delivery,Z=void 0!==P&&P,w=x.info,I=void 0===w?"":w,b=x.dataAdd,D=void 0===b?"":b,B=x.dataClose,k=void 0===B?"":B,T=x.dataInProgress,O=void 0===T?"":T,z=x.dataCompleted,A=void 0===z?"":z,L=(0,o.useState)(!1),M=(0,r.Z)(L,2),S=M[0],F=M[1];return(0,p.jsxs)(i.Item,{children:[(0,p.jsxs)(i.Block,{children:[(0,p.jsxs)(i.Main,{children:[(0,p.jsx)(s.DateSet,{dates:{dataAdd:D,dataClose:k,dataInProgress:O,dataCompleted:A},type:t}),(0,p.jsx)(a.Contact,{contact:m}),(0,p.jsx)(c.TypeHelpList,{types:j}),(0,p.jsx)(u.ShowMoreButton,{isOpen:S,onClick:function(){return F((function(n){return!n}))}})]}),(0,p.jsx)(l.OptionButton,{delivery:Z,id:g,contacts:m,onChange:e,type:t})]}),S&&(0,p.jsx)(d.MoreInfo,{additional:C,info:I,dates:{dataAdd:D,dataInProgress:O,dataCompleted:A},type:t})]})}},54256:function(n,e,t){t.r(e),t.d(e,{ButtonsBlock:function(){return o}});var r=t(28919),i=t(80184),o=function(n){var e=n.action,t=n.changeType,o=n.onClose;return(0,i.jsxs)(r.ButtonWrapper,{children:[(0,i.jsx)(r.Button,{action:e,agree:!0,onClick:t,children:"\u0422\u0430\u043a"}),(0,i.jsx)(r.Button,{action:e,disagree:!0,onClick:o,children:"\u041d\u0456"})]})}},24797:function(n,e,t){t.r(e),t.d(e,{ChangeTypeModal:function(){return c}});var r=t(87482),i=t(91269),o=t(89173),a=t(94958),d=t(80184),c=function(n){var e=n.changeType,t=n.modalIsOpen,c=n.setIsOpen,s=n.action,u=n.currentPage,l=n.currentAction;return(0,d.jsx)(i.ModalWindow,{changeType:e,modalIsOpen:t,setIsOpen:c,action:s,children:(0,d.jsx)(r.Text,{children:(0,o.isDeletedPage)(u)?"\u0412\u0438 \u0434\u0456\u0439\u0441\u043d\u043e \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0443?":" \u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0443 \u0443 \n            ".concat((0,a.selectCurrentAction)(l),"? ")})})}},23601:function(n,e,t){t.r(e),t.d(e,{DeletedModal:function(){return a}});var r=t(91269),i=t(87482),o=t(80184),a=function(n){var e=n.onChange,t=n.modalIsOpen,a=n.setIsOpen,d=n.action;return(0,o.jsx)(r.ModalWindow,{changeType:e,modalIsOpen:t,setIsOpen:a,action:d,children:(0,o.jsx)(i.Text,{children:"\u0412\u0438 \u0434\u0456\u0439\u0441\u043d\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0443?"})})}},91269:function(n,e,t){t.r(e),t.d(e,{ModalWindow:function(){return u}});var r=t(7593),i=t(16030),o=t(29176),a=t(87482),d=t(77869),c=t(54256),s=t(80184),u=function(n){var e=n.changeType,t=n.modalIsOpen,u=n.setIsOpen,l=n.children,p=n.action,x=(0,i.v9)(o.getRoleValue);return(0,s.jsxs)(r.ModalW,{onClose:u,open:t,children:["GUEST"===x&&(0,s.jsx)(d.NoAccess,{onClose:u}),"GUEST"!==x&&(0,s.jsxs)(a.Container,{children:[l,(0,s.jsx)(c.ButtonsBlock,{action:p,changeType:e,onClose:function(){return u(!1)}})]})]})}},94958:function(n,e,t){t.r(e),t.d(e,{selectCurrentAction:function(){return r}});var r=function(n){switch(n){case"pending":return" \u0410\u041a\u0422\u0418\u0412\u041d\u0406";case"in progress":return" \u0420\u041e\u0411\u041e\u0422\u0423";case"completed":return" \u0412\u0418\u041a\u041e\u041d\u0410\u041d\u0406";default:return null}}},84732:function(n,e,t){t.r(e),t.d(e,{useToggleModal:function(){return o}});var r=t(70885),i=t(72791),o=function(){var n=(0,i.useState)(!1),e=(0,r.Z)(n,2),t=e[0],o=e[1];return[t,function(){return o(!0)},function(){return o(!1)}]}},18682:function(n,e,t){t.r(e),t.d(e,{Button:function(){return a}});var r=t(36542),i=t(23170),o=t(80184),a=function(n){var e=n.onClick,t=n.currentPage,a=n.currentAction,d=n.data,c=n.text;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(i.Container,{disabled:t,onClick:e,children:[(0,o.jsx)(r.Icon,{styleIcon:a,currentPage:null===t||void 0===t?void 0:t.toString(),data:d}),(0,o.jsx)(i.Info,{children:c})]})})}},23170:function(n,e,t){t.r(e),t.d(e,{Info:function(){return d},Container:function(){return c}});var r,i,o=t(30168),a=t(15751),d=a.ZP.div(r||(r=(0,o.Z)(["\n  z-index: 3;\n  display: none;\n  position: absolute;\n  left: -27px;\n  bottom: -38px;\n  width: 80px;\n  padding: 5px;\n  box-shadow: -1px 0px 5px #1a225780;\n  font-size: 10px;\n  border-radius: 5px;\n  background-color: #fff;\n\n  @media screen and (min-width: 768px) {\n    left: -26px;\n    bottom: -65px;\n    width: 100px;\n    padding: 5px;\n    font-size: 13px;\n  }\n"]))),c=a.ZP.button(i||(i=(0,o.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--unactive-color-bg);\n  padding: 0;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  cursor: pointer;\n\n  &:hover > "," {\n    display: block;\n  }\n"])),d)},62445:function(n,e,t){t.r(e),t.d(e,{IconBlock:function(){return o}});var r,i=t(30168),o=t(15751).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n\n  @media screen and (min-width: 768px) {\n    position: absolute;\n    bottom: -5px;\n    right: 0;\n    width: 320px;\n  }\n"])))},36542:function(n,e,t){t.r(e),t.d(e,{Icon:function(){return o}});var r=t(264),i=t(80184),o=function(n){var e=n.styleIcon,t=n.currentPage,o=n.data;switch(e){case"delivery":return(0,i.jsx)(r.IconContainer,{children:(0,i.jsx)(r.DeliveryIcon,{type:o?"needDel":null})});case"call":return(0,i.jsx)(r.TelLink,{href:"tel:".concat(o),children:(0,i.jsx)(r.IconContainer,{children:(0,i.jsx)(r.CallIcon,{})})});case"pending":return(0,i.jsx)(r.IconContainer,{children:(0,i.jsx)(r.PendingIcon,{type:t})});case"in progress":return(0,i.jsx)(r.IconContainer,{children:(0,i.jsx)(r.WaitIcon,{type:t})});case"completed":return(0,i.jsx)(r.IconContainer,{children:(0,i.jsx)(r.DoneIcon,{type:t})});case"edit":return(0,i.jsx)(r.IconContainer,{children:(0,i.jsx)(r.EditIcon,{})});case"deleted":return(0,i.jsx)(r.IconContainer,{children:(0,i.jsx)(r.DeleteIcon,{type:t})});default:return null}}},264:function(n,e,t){t.r(e),t.d(e,{DeliveryIcon:function(){return j},CallIcon:function(){return y},PendingIcon:function(){return C},WaitIcon:function(){return P},DoneIcon:function(){return Z},EditIcon:function(){return w},DeleteIcon:function(){return I},TelLink:function(){return b},IconContainer:function(){return D}});var r,i,o,a,d,c,s,u,l,p=t(30168),x=t(15751),f=t(78820),g=t(58617),h=t(23853),m=t(56355),v=t(16856),j=(0,x.ZP)(v.ZjZ)(r||(r=(0,p.Z)(["\n  color: ",";\n  width: 22px;\n  height: 22px;\n\n  width: 100%;\n  height: 100%;\n\n  &:hover {\n    color: #000;\n  }\n"])),(function(n){return n.type&&"green"})),y=(0,x.ZP)(h.CoD)(i||(i=(0,p.Z)(["\n  padding: 3px;\n  width: 100%;\n  height: 100%;\n\n  &:hover {\n    color: #10af02;\n  }\n"]))),C=(0,x.ZP)(g.qk2)(o||(o=(0,p.Z)(["\n  padding: 1.5px;\n  width: 100%;\n  height: 100%;\n  color: ",";\n\n  &:hover {\n    color: #000;\n  }\n"])),(function(n){return"true"===n.type?"var(--first-color-bg)":null})),P=(0,x.ZP)(m.xrw)(a||(a=(0,p.Z)(["\n  padding: 3px;\n  width: 100%;\n  height: 100%;\n  color: ",";\n\n  &:hover {\n    color: #000;\n  }\n"])),(function(n){return"true"===n.type?"var(--first-color-bg)":null})),Z=(0,x.ZP)(g.dZ6)(d||(d=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n  color: ",";\n\n  &:hover {\n    color: #000;\n  }\n"])),(function(n){return"true"===n.type?"var(--first-color-bg)":null})),w=(0,x.ZP)(h.IYd)(c||(c=(0,p.Z)(["\n  padding: 2px;\n  width: 100%;\n  height: 100%;\n\n  &:hover {\n    color: #000;\n  }\n"]))),I=(0,x.ZP)(f.VPh)(s||(s=(0,p.Z)(["\n  width: 19px;\n  height: 19px;\n  width: 100%;\n  height: 100%;\n  color: ",";\n\n  &:hover {\n    color: #000;\n  }\n"])),(function(n){return"true"===n.type?"var(--first-color-bg)":null})),b=x.ZP.a(u||(u=(0,p.Z)(["\n  color: inherit;\n  display: flex;\n"]))),D=x.ZP.div(l||(l=(0,p.Z)(["\n  width: 22px;\n  height: 22px;\n\n  @media screen and (min-width: 768px) {\n    width: 26px;\n    height: 26px;\n  }\n"])))},61299:function(n,e,t){t.r(e),t.d(e,{CallButton:function(){return o}});var r=t(18682),i=t(80184),o=function(n){var e=n.tel;return(0,i.jsx)(r.Button,{data:e,text:"\u0414\u0437\u0432\u0456\u043d\u043e\u043a",currentAction:"call"})}},96224:function(n,e,t){t.r(e),t.d(e,{CompletedButton:function(){return u}});var r=t(70885),i=t(18682),o=t(89173),a=t(78250),d=t(24797),c=t(84732),s=t(80184),u=function(n){var e=n.id,t=n.onChange,u=n.type,l=(0,c.useToggleModal)(),p=(0,r.Z)(l,3),x=p[0],f=p[1],g=p[2],h="completed";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Button,{currentPage:(0,o.isCompletedPage)(u),currentAction:h,onClick:f,text:"\u0417\u0430\u044f\u0432\u043a\u0430 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0430"}),(0,s.jsx)(d.ChangeTypeModal,{changeType:function(){return t((0,a.changeStatus)(e,h))},modalIsOpen:x,setIsOpen:g,action:"change",currentPage:u,currentAction:h})]})}},5297:function(n,e,t){t.r(e),t.d(e,{DeletedButton:function(){return u}});var r=t(70885),i=t(23601),o=t(84732),a=t(89173),d=t(78250),c=t(18682),s=t(80184),u=function(n){var e=n.type,t=n.onChange,u=n.id,l=(0,o.useToggleModal)(),p=(0,r.Z)(l,3),x=p[0],f=p[1],g=p[2],h="deleted";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Button,{currentPage:(0,a.isDeletedPage)(e),currentAction:h,onClick:f,text:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"}),(0,s.jsx)(i.DeletedModal,{id:u,onChange:function(){return t((0,d.changeStatus)(u,h))},modalIsOpen:x,setIsOpen:g,action:h})]})}},13905:function(n,e,t){t.r(e),t.d(e,{DeliveryButton:function(){return o}});var r=t(18682),i=t(80184),o=function(n){var e=n.delivery;return(0,i.jsx)(r.Button,{currentAction:"delivery",data:e,text:e?"\u041f\u043e\u0442\u0440\u0456\u0431\u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430":"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043d\u0435\u043f\u043e\u0442\u0440\u0456\u0431\u043d\u0430"})}},91466:function(n,e,t){t.r(e),t.d(e,{EditButton:function(){return c}});var r=t(70885),i=t(25809),o=t(84732),a=t(18682),d=t(80184),c=function(n){var e=n.id,t=n.onChange,c=(0,o.useToggleModal)(),s=(0,r.Z)(c,3),u=s[0],l=s[1],p=s[2];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Button,{currentAction:"edit",onClick:l,text:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),(0,d.jsx)(i.EditModal,{id:e,modalIsOpen:u,setIsOpen:p,onChange:t})]})}},35125:function(n,e,t){t.r(e),t.d(e,{InProgressButton:function(){return u}});var r=t(70885),i=t(24797),o=t(84732),a=t(89173),d=t(78250),c=t(18682),s=t(80184),u=function(n){var e=n.id,t=n.onChange,u=n.type,l=(0,o.useToggleModal)(),p=(0,r.Z)(l,3),x=p[0],f=p[1],g=p[2],h="in progress";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Button,{currentPage:(0,a.isInProgressPage)(u),currentAction:h,onClick:f,text:"\u0423 \u0440\u043e\u0431\u043e\u0442\u0456"}),(0,s.jsx)(i.ChangeTypeModal,{changeType:function(){return t((0,d.changeStatus)(e,h))},modalIsOpen:x,setIsOpen:g,action:"change",currentPage:u,currentAction:h})]})}},78985:function(n,e,t){t.r(e),t.d(e,{PendingButton:function(){return u}});var r=t(70885),i=t(24797),o=t(84732),a=t(89173),d=t(78250),c=t(18682),s=t(80184),u=function(n){var e=n.id,t=n.onChange,u=n.type,l=(0,o.useToggleModal)(),p=(0,r.Z)(l,3),x=p[0],f=p[1],g=p[2],h="pending";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Button,{currentPage:(0,a.isPendingPage)(u),currentAction:h,onClick:f,text:"\u0410\u043a\u0442\u0438\u0432\u043d\u0456"}),(0,s.jsx)(i.ChangeTypeModal,{changeType:function(){return t((0,d.changeStatus)(e,h))},modalIsOpen:x,setIsOpen:g,action:"change",currentPage:u,currentAction:h})]})}},50769:function(n,e,t){t.r(e),t.d(e,{CallButton:function(){return r.CallButton},CompletedButton:function(){return i.CompletedButton},DeletedButton:function(){return o.DeletedButton},DeliveryButton:function(){return a.DeliveryButton},EditButton:function(){return d.EditButton},PendingButton:function(){return c.PendingButton},InProgressButton:function(){return s.InProgressButton}});var r=t(61299),i=t(96224),o=t(5297),a=t(13905),d=t(91466),c=t(78985),s=t(35125)},67984:function(n,e,t){t.r(e),t.d(e,{OptionButton:function(){return a}});var r=t(62445),i=t(50769),o=t(80184),a=function(n){var e=n.delivery,t=n.id,a=n.contacts,d=n.onChange,c=n.type;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(r.IconBlock,{children:[(0,o.jsx)(i.DeliveryButton,{delivery:e}),(0,o.jsx)(i.CallButton,{tel:a.tel}),(0,o.jsx)(i.PendingButton,{id:t,onChange:d,type:c}),(0,o.jsx)(i.InProgressButton,{id:t,onChange:d,type:c}),(0,o.jsx)(i.CompletedButton,{id:t,onChange:d,type:c}),(0,o.jsx)(i.EditButton,{id:t,onChange:d}),(0,o.jsx)(i.DeletedButton,{id:t,type:c,onChange:d})]})})}},89173:function(n,e,t){t.r(e),t.d(e,{isPendingPage:function(){return r},isInProgressPage:function(){return i},isCompletedPage:function(){return o},isDeletedPage:function(){return a}});var r=function(n){return"pending"===n},i=function(n){return"in progress"===n},o=function(n){return"completed"===n},a=function(n){return"deleted"===n}},78250:function(n,e,t){t.r(e),t.d(e,{changeStatus:function(){return i}});var r=t(28469),i=function(n,e){switch(e){case"pending":return(0,r.notifyChange)("\u0417\u0430\u044f\u0432\u043a\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u0443 \u0430\u043a\u0442\u0438\u0432\u043d\u0456"),{id:n,data:{status:e}};case"in progress":return(0,r.notifyChange)("\u0417\u0430\u044f\u0432\u043a\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u0443 \u0440\u043e\u0431\u043e\u0442\u0443 "),{id:n,data:{status:e,dataInProgress:new Date}};case"completed":return(0,r.notifyChange)(" \u0417\u0430\u044f\u0432\u043a\u0430 \u0432\u0438\u043a\u043e\u043d\u0430!   \ud83c\udf89"),{id:n,data:{status:e,dataCompleted:new Date}};case"deleted":return(0,r.notifyChange)(" \u0417\u0430\u044f\u0432\u043a\u0430 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0430!  \u274c "),{id:n,data:{status:e,dataClose:new Date}}}}},90392:function(n,e,t){t.r(e),t.d(e,{formatingDate:function(){return o}});var r=t(72387),i=t(98673),o=function(n){return(0,r.Z)((0,i.Z)(n)," dd.LL.yy | kk:mm ")}}}]);
//# sourceMappingURL=4478.23dca1fb.chunk.js.map
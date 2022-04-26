"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[2168,9983,4520,7839,2003,3297,7152,6336,968,4355,4812,2415,4779,1361,4310,3354,6024,5588,5080,6537,8709,8594,8469,3920,1553,9749,1978,852,6977,4554,8366,7307],{68469:function(n,e,t){t.r(e),t.d(e,{DetailsComment:function(){return a}});var r=t(32615),i=t(33297),o=t(80184),a=function(){return(0,o.jsxs)(r.ContainerBlock,{children:[(0,o.jsx)(r.Title,{text:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u043e:"}),(0,o.jsx)(i.Textarea,{name:"info",placeholder:"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043d\u0444\u043e\u0440\u043c\u0456\u0446\u0456\u044e"})]})}},33297:function(n,e,t){t.r(e),t.d(e,{Textarea:function(){return u}});var r,i=t(30168),o=t(15751),a=t(55705),u=(0,o.ZP)(a.gN).attrs((function(){return{type:"text",component:"textarea",rows:"4"}}))(r||(r=(0,i.Z)(["\n  padding: 6px;\n  border: 1px solid var(--first-color-bg);\n  margin-top: 8px;\n  border-radius: 3px;\n  font-size: 14px;\n  width: 100%;\n  resize: none;\n\n  &:focus {\n    outline: 1px solid #030067;\n  }\n\n  @media screen and (min-width: 600px) {\n    max-width: 100%;\n  }\n"])))},77152:function(n,e,t){t.r(e),t.d(e,{TextInput:function(){return o}});var r=t(66336),i=t(80184),o=function(n){var e=n.label,t=n.name,o=n.placeholder;return(0,i.jsxs)(i.Fragment,{children:[e&&(0,i.jsxs)(r.Label,{children:[" ",e]}),(0,i.jsx)(r.Input,{name:t,placeholder:o})]})}},66336:function(n,e,t){t.r(e),t.d(e,{Label:function(){return c},Input:function(){return l}});var r,i,o=t(30168),a=t(15751),u=t(55705),c=a.ZP.span(r||(r=(0,o.Z)(["\n  width: 65px;\n  display: inline-block;\n  flex-shrink: 0;\n"]))),l=(0,a.ZP)(u.gN).attrs((function(n){var e=n.required;return{type:"text",required:void 0===e||e,autoComplete:"off"}}))(i||(i=(0,o.Z)(["\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #6b8cef6e;\n  outline: none;\n  padding: 1px 10px;\n\n  &::placeholder {\n    text-align: center;\n    font-size: 10px;\n    color: var(--unactive-color-bg);\n  }\n\n  @media screen and (min-width: 600px) {\n    max-width: 100%;\n  }\n"])))},20968:function(n,e,t){t.r(e),t.d(e,{Container:function(){return o}});var r,i=t(30168),o=t(15751).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  margin: 10px 0;\n"])))},30075:function(n,e,t){t.r(e),t.d(e,{TypeHelpItem:function(){return u}});var r=t(77152),i=t(27478),o=t(14812),a=t(80184),u=function(n){var e=n.isSelected,t=n.data,u=t.name,c=t.label,l=t.details;return(0,a.jsxs)(o.Wrapper,{children:[(0,a.jsx)(i.CheckBox,{value:u,label:c,name:"typeHelp",theme:"ligth",width:"160px"}),e&&(0,a.jsx)(r.TextInput,{name:"additional.".concat(u),placeholder:l.view,required:l.required})]},u)}},14812:function(n,e,t){t.r(e),t.d(e,{Wrapper:function(){return o}});var r,i=t(30168),o=t(15751).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  height: 25px;\n  justify-content: space-between;\n"])))},11351:function(n,e,t){t.r(e),t.d(e,{TypeHelp:function(){return l}});var r=t(32615),i=t(20968),o=t(30075),a=t(88366),u=t(80184),c=(0,a.allTypeOfHelp)(),l=function(n){var e=n.selectedTypes;return(0,u.jsxs)(r.ContainerBlock,{line:!0,children:[(0,u.jsx)(r.Title,{text:"\u0412\u0438\u0434 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0438:"}),(0,u.jsx)(i.Container,{children:c.map((function(n){var t=null===e||void 0===e?void 0:e.find((function(e){return e===n.name}));return(0,u.jsx)(o.TypeHelpItem,{isSelected:t,data:n},n.name)}))})]})}},77172:function(n,e,t){t.r(e),t.d(e,{UserData:function(){return u}});var r=t(32615),i=t(77152),o=t(41361),a=t(80184),u=function(){return(0,a.jsxs)(r.ContainerBlock,{line:!0,children:[(0,a.jsx)(r.Title,{text:"*\u0414\u0430\u043d\u0456 \u043f\u0440\u043e \u0437\u0430\u043c\u043e\u0432\u043d\u0438\u043a\u0430:"}),(0,a.jsxs)(o.Wrapper,{children:[(0,a.jsx)(o.ContainerInput,{children:(0,a.jsx)(i.TextInput,{label:"\u0406\u043c\u044f",name:"contacts.name",placeholder:"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0446\u0456\u044e / \u0456\u043c\u044f "})}),(0,a.jsx)(o.ContainerInput,{children:(0,a.jsx)(i.TextInput,{label:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442",name:"contacts.tel",placeholder:"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 / \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})}),(0,a.jsx)(o.ContainerInput,{children:(0,a.jsx)(i.TextInput,{label:"\u0410\u0434\u0440\u0435\u0441\u0430",name:"contacts.adress",placeholder:"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0430\u0434\u0440\u0435\u0441\u0443"})})]}),(0,a.jsx)(r.CheckBoxDelivery,{})]})}},41361:function(n,e,t){t.r(e),t.d(e,{Wrapper:function(){return u},ContainerInput:function(){return c}});var r,i,o=t(30168),a=t(15751),u=a.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n"]))),c=a.ZP.label(i||(i=(0,o.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 12px;\n"])))},23354:function(n,e,t){t.r(e),t.d(e,{Button:function(){return l}});var r,i=t(30168),o=t(23920),a=t(15751),u=t(80184),c=a.ZP.div(r||(r=(0,i.Z)(["\n  margin-top: 12px;\n  margin-bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n"]))),l=function(n){var e=n.text;return(0,u.jsx)(c,{children:(0,u.jsx)(o.Button,{type:"submit",text:e})})}},56377:function(n,e,t){t.r(e),t.d(e,{CheckBoxDelivery:function(){return l}});var r,i=t(30168),o=t(15751),a=t(27478),u=t(80184),c=o.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),l=function(){return(0,u.jsx)(c,{children:(0,u.jsx)(a.CheckBox,{name:"delivery",label:"\u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430",theme:"ligth"})})}},75588:function(n,e,t){t.r(e),t.d(e,{ContainerBlock:function(){return l}});var r,i=t(30168),o=t(15751),a=t(85080),u=t(80184),c=o.ZP.div(r||(r=(0,i.Z)(["\n  padding-bottom: 7px;\n"]))),l=function(n){var e=n.line,t=n.children;return(0,u.jsxs)(c,{children:[t,e&&(0,u.jsx)(a.Line,{})]})}},85080:function(n,e,t){t.r(e),t.d(e,{Line:function(){return o}});var r,i=t(30168),o=t(15751).ZP.div(r||(r=(0,i.Z)(["\n  display: block;\n  margin-top: 7px;\n  border-style: inset;\n  border-width: 1px;\n"])))},6537:function(n,e,t){t.r(e),t.d(e,{StyledFormContainer:function(){return u}});var r,i=t(30168),o=t(15751),a=t(55705),u=(0,o.ZP)(a.l0)(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  max-width: 355px;\n  border-radius: ",";\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px 15px;\n  font-size: 14px;\n\n  background-color: white;\n  box-shadow: 0px 0px 10px 3px #b8b8b833;\n\n  @media screen and (min-width: 600px) {\n    max-width: 400px;\n  }\n"])),(function(n){return"edit"===n.type?"0":"6px"}))},48709:function(n,e,t){t.r(e),t.d(e,{Title:function(){return c}});var r,i=t(30168),o=t(15751),a=t(80184),u=o.ZP.h3(r||(r=(0,i.Z)(["\n  margin-right: 25px;\n  font-size: 16px;\n  font-weight: 700;\n"]))),c=function(n){var e=n.text;return(0,a.jsx)(u,{children:e})}},32615:function(n,e,t){t.r(e),t.d(e,{CheckBoxDelivery:function(){return r.CheckBoxDelivery},Line:function(){return i.Line},Title:function(){return o.Title},ContainerBlock:function(){return a.ContainerBlock},Button:function(){return u.Button},StyledFormContainer:function(){return c.StyledFormContainer}});var r=t(56377),i=t(85080),o=t(48709),a=t(75588),u=t(23354),c=t(6537)},37397:function(n,e,t){t.r(e),t.d(e,{UserData:function(){return r.UserData},TypeHelp:function(){return i.TypeHelp},DetailsComment:function(){return o.DetailsComment},TextInput:function(){return a.TextInput},Button:function(){return u.Button},CheckBoxDelivery:function(){return u.CheckBoxDelivery},ContainerBlock:function(){return u.ContainerBlock},Line:function(){return u.Line},StyledFormContainer:function(){return u.StyledFormContainer},Title:function(){return u.Title}});var r=t(77172),i=t(11351),o=t(68469),a=t(77152),u=t(32615)},14587:function(n,e,t){t.r(e),t.d(e,{Form:function(){return a}});var r=t(55705),i=t(37397),o=t(80184),a=function(n){var e=n.onSubmit,t=n.initialValues,a=n.type;return(0,o.jsx)(r.J9,{initialValues:t,onSubmit:function(n,t){var r=t.resetForm;e(n),r()},children:function(n){var e=n.values.typeHelp;return(0,o.jsxs)(i.StyledFormContainer,{type:a,children:[(0,o.jsx)(i.UserData,{}),(0,o.jsx)(i.TypeHelp,{selectedTypes:e}),(0,o.jsx)(i.DetailsComment,{}),(0,o.jsx)(i.Button,{text:"edit"===a?"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438":"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438"})]})}})}},68594:function(n,e,t){t.r(e),t.d(e,{initialValues:function(){return r}});var r={contacts:{name:"",tel:"",adress:""},typeHelp:[],additional:(0,t(88366).nameObjectTypeOfHelp)(),delivery:!1,info:"",dataClose:"",dataInProgress:"",dataCompleted:"",deletedInfo:""}},28469:function(n,e,t){t.r(e),t.d(e,{notifyChange:function(){return u},notifyError:function(){return o},notifySuccess:function(){return a}});var r=t(30577),i={position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},o=function(){return r.Am.error(" \u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u043b\u043e\u0433\u0456\u043d \u0430\u0431\u043e \u043f\u0430\u0440\u043e\u043b\u044c. \ud83e\udd25",i)},a=function(n,e){return r.Am.success("\u0412\u0456\u0442\u0430\u044e, ".concat(n,"! \u0413\u0430\u0440\u043d\u043e\u0457 \u0440\u043e\u0431\u043e\u0442\u0438! \u0412\u0430\u0448\u0430 \u0440\u043e\u043b\u044c: ").concat(e),i)},u=function(n){return r.Am.info(n,i)}},23920:function(n,e,t){t.r(e),t.d(e,{Button:function(){return o}});var r=t(41553),i=t(80184),o=function(n){var e=n.text,t=void 0===e?"":e,o=n.type,a=void 0===o?"button":o,u=n.onClick,c=n.children;return(0,i.jsxs)(r.StyledButton,{type:a,onClick:u,children:[t,c]})}},41553:function(n,e,t){t.r(e),t.d(e,{StyledButton:function(){return o}});var r,i=t(30168),o=t(15751).ZP.button(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n\n  width: 180px;\n  min-width: 110px;\n  padding: 8px 4px;\n\n  background-color: var(--first-color-bg);\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  font-size: 14px;\n  cursor: pointer;\n"])))},27478:function(n,e,t){t.r(e),t.d(e,{CheckBox:function(){return o}});var r=t(69618),i=t(80184),o=function(n){var e=n.value,t=n.label,o=n.name,a=n.onClick,u=n.theme,c=void 0===u?"dark":u,l=n.width;return(0,i.jsxs)(r.CheckBoxLabel,{width:l,children:[(0,i.jsx)(r.Input,{type:"checkbox",value:e,name:o,onClick:a}),(0,i.jsx)(r.CheckBoxIcon,{theme:c}),t]})}},69618:function(n,e,t){t.r(e),t.d(e,{CheckBoxLabel:function(){return s},CheckBoxIcon:function(){return d},Input:function(){return p}});var r,i,o,a=t(30168),u=t(15751),c=t(55705),l=t(39126),s=u.ZP.label(r||(r=(0,a.Z)(["\n  margin-right: 8px;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  width: ",";\n"])),(function(n){var e=n.width;return void 0===e?"auto":e})),d=(0,u.ZP)(l.IQF)(i||(i=(0,a.Z)(["\n  color: transparent;\n  margin-right: 8px;\n  border: 1px solid ",";\n  border-radius: 3px;\n  padding: 2px;\n"])),(function(n){return"ligth"===n.theme?"grey":"white"})),p=(0,u.ZP)(c.gN)(o||(o=(0,a.Z)(["\n  position: absolute !important;\n  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n  padding: 0 !important;\n  border: 0 !important;\n  height: 1px !important;\n  width: 1px !important;\n  clip: rect(1px, 1px, 1px, 1px);\n  overflow: hidden;\n\n  &:checked + "," {\n    background-color: var(--first-color-bg);\n    color: white;\n    border: none;\n  }\n"])),d)},20852:function(n,e,t){t.r(e),t.d(e,{TitleStyle:function(){return c},Text:function(){return l},Title:function(){return s}});var r,i,o=t(30168),a=t(15751),u=t(80184),c=a.ZP.div(r||(r=(0,o.Z)(["\n  padding: 16px;\n  color: white;\n  position: relative;\n"]))),l=a.ZP.h1(i||(i=(0,o.Z)(["\n  font-size: 20px;\n  text-align: center;\n"]))),s=function(n){var e=n.text,t=n.children;return(0,u.jsxs)(c,{children:[t,e&&(0,u.jsx)(l,{children:e})]})}},38555:function(n,e,t){t.r(e);var r=t(1413),i=t(70885),o=t(68594),a=t(28469),u=t(20852),c=t(72791),l=t(84554),s=t(14587),d=t(16977),p=t(80184);e.default=function(){var n=(0,c.useState)(),e=(0,i.Z)(n,2),t=e[0],f=e[1];return(0,c.useEffect)((function(){t&&((0,l.postPublication)((0,r.Z)((0,r.Z)((0,r.Z)({},o.initialValues),t),{},{status:"pending",dataAdd:new Date})),(0,a.notifyChange)("\u0417\u0430\u044f\u0432\u043a\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0430!"))}),[t]),(0,p.jsxs)(d.Container,{children:[(0,p.jsx)(u.Title,{text:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0437\u0430\u044f\u0432\u043a\u0438"}),(0,p.jsx)(s.Form,{onSubmit:f,initialValues:o.initialValues})]})}},16977:function(n,e,t){t.r(e),t.d(e,{Container:function(){return u},Title:function(){return c}});var r,i,o=t(30168),a=t(15751),u=a.ZP.main(r||(r=(0,o.Z)(["\n  padding: 0px 4px 10px 4px;\n  font-size: 20px;\n  position: relative;\n"]))),c=a.ZP.h1(i||(i=(0,o.Z)(["\n  font-size: 20px;\n  text-align: center;\n  padding: 16px;\n  color: white;\n"])))},84554:function(n,e,t){t.r(e),t.d(e,{keysOfTypes:function(){return c},getAllPublications:function(){return l},getPublicationById:function(){return s},getSortedPublications:function(){return d},getLengthOfSortedPublication:function(){return p},postPublication:function(){return f},editPublication:function(){return x}});var r=t(15861),i=t(87757),o=t.n(i),a=t(74569),u=t.n(a);u().defaults.baseURL="https://621faf0dce99a7de19458441.mockapi.io/ua-help";var c=function(){return["pending","in progress","completed","deleted","all"]},l=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/help");case 2:return e=n.sent,n.abrupt("return",null===e||void 0===e?void 0:e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/help/".concat(e));case 2:return t=n.sent,n.abrupt("return",null===t||void 0===t?void 0:t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l();case 2:t=n.sent,n.t0=e,n.next="pending"===n.t0?6:"in progress"===n.t0?7:"completed"===n.t0?8:"deleted"===n.t0?9:10;break;case 6:return n.abrupt("return",null===t||void 0===t?void 0:t.filter((function(n){return"pending"===n.status})));case 7:return n.abrupt("return",null===t||void 0===t?void 0:t.filter((function(n){return"in progress"===n.status})));case 8:return n.abrupt("return",null===t||void 0===t?void 0:t.filter((function(n){return"completed"===n.status})));case 9:return n.abrupt("return",null===t||void 0===t?void 0:t.filter((function(n){return"deleted"===n.status})));case 10:return n.abrupt("return",t);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d(e);case 2:return t=n.sent,n.abrupt("return",t.length);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().post("/help",e).then(console.log).catch(console.log);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(e,t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().put("/help/".concat(e),t).then((function(n){console.log(n)})).catch((function(n){console.log(n)}));case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},88366:function(n,e,t){t.r(e),t.d(e,{nameObjectTypeOfHelp:function(){return a},nameLabelArrayTypeOfHelp:function(){return u},nameEngUkrObjectTypeOfHelp:function(){return c},allTypeOfHelp:function(){return l}});var r=t(4942),i=t(1413),o=t(97307),a=function(){return o.reduce((function(n,e){var t=e.name;return(0,i.Z)((0,i.Z)({},n),{},(0,r.Z)({},t,""))}),{})},u=function(){return o.map((function(n){return{name:n.name,label:n.label}}))},c=function(){return o.reduce((function(n,e){var t=e.name,o=e.label;return(0,i.Z)((0,i.Z)({},n),{},(0,r.Z)({},t,o))}),{})},l=function(){return o}},89983:function(n,e,t){t.d(e,{w_:function(){return l}});var r=t(72791),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return a=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},a.apply(this,arguments)},u=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]])}return t};function c(n){return n&&n.map((function(n,e){return r.createElement(n.tag,a({key:e},n.attr),c(n.child))}))}function l(n){return function(e){return r.createElement(s,a({attr:a({},n.attr)},e),c(n.child))}}function s(n){var e=function(e){var t,i=n.attr,o=n.size,c=n.title,l=u(n,["attr","size","title"]),s=o||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,l,{className:t,style:a(a({color:n.color||e.color},e.style),n.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),n.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(n){return e(n)})):e(i)}},97307:function(n){n.exports=JSON.parse('[{"name":"clothes_adult","label":"\u043e\u0434\u044f\u0433 \u0434\u043b\u044f \u0434\u043e\u0440\u043e\u0441\u043b\u0438\u0445","details":{"view":"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0440\u043e\u0437\u043c\u0456\u0440","required":true}},{"name":"clothes_child","label":"\u043e\u0434\u044f\u0433 \u0434\u043b\u044f \u0434\u0456\u0442\u0435\u0439","details":{"view":"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0440\u043e\u0437\u043c\u0456\u0440","required":false}},{"name":"food","label":"\u0457\u0436\u0430","details":{"view":"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0431\u0430\u0436\u0430\u043d\u043d\u044f","required":false}},{"name":"children_food","label":"\u0434\u0438\u0442\u044f\u0447\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043d\u043d\u044f","details":{"view":"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0438\u0434","required":true}},{"name":"diapers","label":"\u043f\u0456\u0434\u0433\u0443\u0437\u043a\u0438","details":{"view":"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0440\u043e\u0437\u043c\u0456\u0440","required":true}},{"name":"hygiene","label":"\u0437\u0430\u0441\u043e\u0431\u0438 \u0433\u0456\u0433\u0456\u0454\u043d\u0438","details":{"view":"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0438\u0434","required":false}},{"name":"otherHelp","label":"\u0456\u043d\u0448\u0438\u0439 \u0442\u0438\u043f \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0438","details":{"view":"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0438\u0434","required":true}}]')}}]);
//# sourceMappingURL=2168.416e7e31.chunk.js.map
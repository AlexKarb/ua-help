"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[3500,4554],{33500:function(t,n,e){e.r(n),e.d(n,{useGetPublication:function(){return s}});var r=e(15861),u=e(70885),c=e(87757),a=e.n(c),o=e(72791),i=e(84554),s=function(t){var n=(0,o.useState)(""),e=(0,u.Z)(n,2),c=e[0],s=e[1],f=(0,o.useState)(),p=(0,u.Z)(f,2),l=p[0],d=p[1];return(0,o.useEffect)((function(){(0,i.getSortedPublications)(t).then(d)}),[t]),(0,o.useEffect)((function(){(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!c){n.next=5;break}return n.next=3,(0,i.editPublication)(c.id,c.data);case 3:return n.next=5,(0,i.getSortedPublications)(t).then(d);case 5:case"end":return n.stop()}}),n)})))()}),[c,t]),[l,s]}},84554:function(t,n,e){e.r(n),e.d(n,{keysOfTypes:function(){return i},getAllPublications:function(){return s},getPublicationById:function(){return f},getSortedPublications:function(){return p},getLengthOfSortedPublication:function(){return l},postPublication:function(){return d},editPublication:function(){return v}});var r=e(15861),u=e(87757),c=e.n(u),a=e(74569),o=e.n(a);o().defaults.baseURL="https://621faf0dce99a7de19458441.mockapi.io/ua-help";var i=function(){return["pending","in progress","completed","deleted","all"]},s=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/help");case 2:return n=t.sent,t.abrupt("return",null===n||void 0===n?void 0:n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/help/".concat(n));case 2:return e=t.sent,t.abrupt("return",null===e||void 0===e?void 0:e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s();case 2:e=t.sent,t.t0=n,t.next="pending"===t.t0?6:"in progress"===t.t0?7:"completed"===t.t0?8:"deleted"===t.t0?9:10;break;case 6:return t.abrupt("return",null===e||void 0===e?void 0:e.filter((function(t){return"pending"===t.status})));case 7:return t.abrupt("return",null===e||void 0===e?void 0:e.filter((function(t){return"in progress"===t.status})));case 8:return t.abrupt("return",null===e||void 0===e?void 0:e.filter((function(t){return"completed"===t.status})));case 9:return t.abrupt("return",null===e||void 0===e?void 0:e.filter((function(t){return"deleted"===t.status})));case 10:return t.abrupt("return",e);case 11:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(n);case 2:return e=t.sent,t.abrupt("return",e.length);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().post("/help",n).then(console.log).catch(console.log);case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n,e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().put("/help/".concat(n),e).then((function(t){console.log(t)})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=3500.f0f689a6.chunk.js.map
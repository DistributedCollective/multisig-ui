(this["webpackJsonpgovernance-dapp"]=this["webpackJsonpgovernance-dapp"]||[]).push([[9],{1267:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c})),function(e){e.Pending="0",e.Active="1",e.Canceled="2",e.Defeated="3",e.Succeeded="4",e.Queued="5",e.Expired="6",e.Executed="7"}(n||(n={}));var c=function(e){return{0:"Pending",1:"Active",2:"Canceled",3:"Defeated",4:"Succeeded",5:"Queued",6:"Expired",7:"Executed"}[e]}},1277:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),c=a.n(n),r=a(352),s={green:"bg-green-500",red:"bg-red-600",gray:"bg-gray-600",indigo:"bg-indigo-600"};function l(e){var t=Math.min(Math.round(e.value/e.max*100)||0,100);return c.a.createElement("div",{className:"w-full flex flex-row flex-no-wrap items-center justify-between mt-3"},c.a.createElement("div",{className:"bg-opacity-25 ".concat(s[e.color]," h-1 rounded w-full")},c.a.createElement("div",{className:"".concat(s[e.color]," h-1 rounded"),style:{width:"".concat(t,"%")}})),e.showVotes&&c.a.createElement("div",{className:"w-2/6 pl-3 text-xs"},Object(r.f)(e.value)))}},1301:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),c=a.n(n),r=a(1267),s=function(e){switch(e){case r.a.Pending:case r.a.Active:return"border-indigo-700";case r.a.Succeeded:case r.a.Queued:case r.a.Executed:return"border-green-500";case r.a.Canceled:case r.a.Defeated:case r.a.Expired:return"border-gray-500"}},l=function(e){switch(e){case r.a.Pending:case r.a.Active:return"text-indigo-700";case r.a.Succeeded:case r.a.Queued:case r.a.Executed:return"text-green-500";case r.a.Canceled:case r.a.Defeated:case r.a.Expired:return"text-gray-500"}};function i(e){var t=e.state;return c.a.createElement("div",{className:"border rounded py-0 px-1 text-xs ".concat(s(t)," ").concat(l(t)," text-center"),style:{width:"70px"}},function(e){switch(e){case r.a.Pending:return"Pending";case r.a.Active:return"Active";case r.a.Succeeded:case r.a.Queued:case r.a.Executed:return"Passed";case r.a.Canceled:case r.a.Defeated:case r.a.Expired:return"Failed"}}(t))}},1302:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(354),c=a(105),r=a(0),s=a(1267),l=a(45);function i(e){var t=Object(r.useState)({state:s.a.Pending,loading:!0}),a=Object(c.a)(t,2),i=a[0],d=a[1];return Object(r.useEffect)((function(){(null===e||void 0===e?void 0:e.id)&&(d((function(e){return Object(n.a)(Object(n.a)({},e),{},{loading:!0})})),l.a.call("governorAlpha","state",[e.id]).then((function(e){d((function(t){return Object(n.a)(Object(n.a)({},t),{},{state:e,loading:!1})}))})).catch(console.error))}),[e,d]),i}},1327:function(e,t,a){"use strict";a.r(t),a.d(t,"ProposalRow",(function(){return E}));var n=a(0),c=a.n(n),r=a(1267),s=a(353),l=a(352),i=a(1277),d=a(105),u=a(5),o=a.n(u),m=a(354),f=a(75),v=a(45);var g=a(1302),b=a(1301),p=function(e){switch(e){case r.a.Succeeded:case r.a.Queued:case r.a.Executed:return"proposal-state__active";case r.a.Canceled:case r.a.Defeated:case r.a.Expired:case r.a.Active:return"proposal-state__failed";case r.a.Pending:return""}};function x(e){var t=e.state;return c.a.createElement("div",{className:"proposal-state ".concat(p(t))},Object(r.b)(t))}function E(e){var t=e.proposal,a=function(e){var t=Object(n.useCallback)(Object(f.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s((function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!0})})),t.next=3,v.a.getPastEvents("governorAlpha","ProposalCreated",{id:e.id},e.startBlock-1,e.endBlock);case 3:if(!(a=t.sent).length){t.next=7;break}return n=a[0],t.abrupt("return",{value:n.returnValues,event:n,loading:!1});case 7:return t.abrupt("return",{event:null,value:null,loading:!1});case 8:case"end":return t.stop()}}),t)}))),[e]),a=Object(n.useState)({event:null,value:null,loading:!0}),c=Object(d.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){e.id&&t().then(s)}),[e,s,t]),r}(t),u=a.loading,p=a.value,E=Object(g.a)(t),w=E.loading,j=E.state;return w||u||!p||!j?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"flex justify-between items-center w-full space-x-4 py-5 px-5"},c.a.createElement("div",{className:"w-full skeleton h-4"}),c.a.createElement("div",{className:"w-full skeleton h-4"}))):c.a.createElement(c.a.Fragment,null,c.a.createElement(s.b,{to:"/proposals/".concat(t.id),className:"flex px-5 py-3 transition duration-300 bordered-list-item hover:no-underline"},j===r.a.Active?c.a.createElement("div",{className:"flex justify-between items-center w-full"},c.a.createElement("div",{className:"flex justify-between items-center"},c.a.createElement("div",{className:"pulsating-dot ml-5 mr-8"}),c.a.createElement("div",null,c.a.createElement("div",{className:"font-medium mb-2 ".concat(!p.description&&"skeleton")},p.description||"Title."),c.a.createElement("div",{className:"flex flex-row justify-start items-center"},c.a.createElement(b.a,{state:j}),c.a.createElement("div",{className:"text-indigo-700 text-xs ml-3"},String(t.id).padStart(3,"0")," \u2022 Ends at"," ",Object(l.a)(t.startTime,t.startBlock,t.endBlock))))),c.a.createElement("div",{className:"hidden md:block md:w-1/3"},c.a.createElement(i.a,{max:Object(l.g)(t.quorum),value:Object(l.g)(t.forVotes),color:"green",showVotes:!0}),c.a.createElement(i.a,{max:Object(l.g)(t.quorum),value:Object(l.g)(t.againstVotes),color:"gray",showVotes:!0}))):c.a.createElement("div",{className:"flex justify-between items-center w-full"},c.a.createElement("div",{className:"w-full md:w-10/12"},c.a.createElement("div",{className:"font-medium mb-2"},p.description),c.a.createElement("div",{className:"flex flex-row justify-start items-center"},c.a.createElement(b.a,{state:j}),c.a.createElement("div",{className:"".concat(t.executed&&t.canceled?"text-green-500":"text-gray-500"," text-xs ml-3")},String(t.id).padStart(3,"0")," \u2022 Finished at"," ",Object(l.a)(t.startTime,t.startBlock,t.endBlock)))),c.a.createElement("div",{className:"hidden md:block w-2/12"},c.a.createElement(x,{state:j})))))}}}]);
(this["webpackJsonpgovernance-dapp"]=this["webpackJsonpgovernance-dapp"]||[]).push([[7],{1269:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(65),r=Object(a.a)((function(){return n.e(12).then(n.bind(null,1291))}),(function(e){return e.Header}))},1270:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(65),r=Object(a.a)((function(){return n.e(11).then(n.bind(null,1290))}),(function(e){return e.Footer}))},1276:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(45);function r(e,t,n,r,c,l){return a.a.send("governorAlpha","propose",[e,t,n,r,c,{from:l}],{type:"propose"})}function c(){return a.a.call("governorAlpha","proposalCount",[]).then((function(e){return Number(e)}))}},1299:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(65),r=Object(a.a)((function(){return n.e(9).then(n.bind(null,1327))}),(function(e){return e.ProposalRow}))},1415:function(e,t,n){"use strict";n.r(t),n.d(t,"HomePage",(function(){return h}));var a=n(5),r=n.n(a),c=n(75),l=n(105),o=n(0),s=n.n(o),u=n(207),i=n(353),p=n(1269),m=n(1270),f=n(45),d=n(1299),b=n(1276);function h(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],h=Object(o.useState)([]),v=Object(l.a)(h,2),E=v[0],w=v[1],g=Object(o.useState)(0),x=Object(l.a)(g,2),j=x[0],N=x[1];return Object(o.useEffect)((function(){a(!0),function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,c,l,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)();case 2:t=e.sent,n=0,t>3&&(n=t-3),c=[],l=t;case 7:if(!(l>n)){e.next=15;break}return e.next=10,f.a.call("governorAlpha","proposals",[l]);case 10:o=e.sent,c.push(o);case 12:l--,e.next=7;break;case 15:w(c),a(!1),N(t);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then().catch()}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement("title",null,"Home Page"),s.a.createElement("meta",{name:"description",content:"A Boilerplate application homepage"})),s.a.createElement(p.a,null),s.a.createElement("main",null,s.a.createElement("div",{className:"bg-black"},s.a.createElement("div",{className:"container"},s.a.createElement("h2",{className:"text-white pt-20 pb-8"},"Governance Overview"),s.a.createElement("div",{className:"bg-white rounded-t shadow p-3"},s.a.createElement("h4",{className:"font-bold"},"Recent Proposals")))),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"bg-white rounded-b shadow"},n&&!E.length&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex justify-between items-center w-full space-x-4 py-5 px-5"},s.a.createElement("div",{className:"w-full skeleton h-4"}),s.a.createElement("div",{className:"w-full skeleton h-4"}))),!n&&0===j&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex justify-between items-center w-full space-x-4 py-5 px-5"},s.a.createElement("i",null,"No proposals yet."))),E.map((function(e){return s.a.createElement(d.a,{key:e.id,proposal:e})})),j>E.length&&s.a.createElement(i.b,{to:"/proposals",className:"block uppercase text-center px-3 py-2 font-bold text-sm hover:text-green-500 transition easy-in-out duration-300 border-t-1"},"View All Proposals")))),s.a.createElement(m.a,null))}}}]);
(this["webpackJsonpmultisig-ui"]=this["webpackJsonpmultisig-ui"]||[]).push([[0],{1001:function(e,t,n){},1098:function(e,t){},1117:function(e,t){},1119:function(e,t){},1134:function(e,t){},1210:function(e,t){},1212:function(e,t){},1247:function(e,t){},1249:function(e,t){},1255:function(e,t){},1395:function(e,t){},1436:function(e,t){},1526:function(e,t){},1536:function(e,t){},1550:function(e,t){},1555:function(e,t){},1571:function(e,t){},1579:function(e,t){},1714:function(e,t,n){"use strict";n.r(t);n(799),n(808);var a=n(0),r=n(60),c=n(117);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(999),n(1e3),n(1001);var o=n(203),s=n(316),i=n(152),u=n(730),l=n(457);function p(){var e=Object(u.a)([""]);return p=function(){return e},e}var d=Object(l.a)(p()),f=n(321),b=n(204),m=Object(b.a)((function(){return n.e(4).then(n.bind(null,1724))}),(function(e){return e.HomePage})),y=Object(b.a)((function(){return n.e(7).then(n.bind(null,1725))}),(function(e){return e.NotFoundPage}));var h,v=n(53),w=n(740),k=n(741),g=n(742),x=n(453),O={en:{translation:x}},j={},C=function e(t,n,a){Object.keys(t).forEach((function(r){var c=a?"".concat(a,".").concat(r):r;"object"===typeof t[r]?(n[r]={},e(t[r],n[r],c)):n[r]=c}))},E=(w.a.use(k.a).use(g.a).init({resources:O,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}},(function(){C(x,j)})),document.getElementById("root")),I=function(e){var t=e.Component;return a.createElement(c.a,{store:v.a},a.createElement(o.b,null,a.createElement(t,null)))};h=function(){return a.createElement(s.a,{basename:"/multisig-ui"},a.createElement(o.a,{titleTemplate:"%s | Sovryn MultiSig",defaultTitle:"Sovryn MultiSig"}),a.createElement(f.a,null,a.createElement(i.c,null,a.createElement(i.a,{exact:!0,path:"/",component:m}),a.createElement(i.a,{component:y}))),a.createElement(d,null))},r.render(a.createElement(I,{Component:h}),E),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(446),r={testnet:{multiSigWallet:{address:"0x189ecD23E9e34CFC07bFC3b7f5711A23F43F8a57",abi:a}},mainnet:{multiSigWallet:{address:"0x189ecD23E9e34CFC07bFC3b7f5711A23F43F8a57",abi:a}}}},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),c=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{fallback:null},c=e;t&&(c=function(){return e().then((function(e){return{default:t(e)}}))});var o=Object(a.lazy)(c);return function(e){return r.a.createElement(a.Suspense,{fallback:n.fallback},r.a.createElement(o,e))}}},206:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var a={30:"https://mainnet.sovryn.app/rpc",31:"https://testnet.sovryn.app/rpc"},r={30:"wss://mainnet.sovryn.app/ws",31:"wss://testnet.sovryn.app/ws"},c={30:"https://explorer.rsk.co",31:"https://explorer.testnet.rsk.co"},o=30},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(7),r=n.n(a),c=n(94),o=n(10),s=n(15),i=n(734),u=n.n(i),l=n(735),p=n.n(l),d=n(206),f=n(53),b=n(22),m=n(63),y=n(128),h=n.n(y),v=new(function(){function e(){Object(o.a)(this,e),this._web3Modal=null}return Object(s.a)(e,[{key:"init",value:function(e){var t={walletconnect:{display:{name:"Mobile",description:"Scan qrcode with your mobile wallet"},package:u.a,options:{chainId:e,rpc:d.c}}};this._web3Modal=new p.a({disableInjectedProvider:!1,cacheProvider:!0,providerOptions:t}),this._web3Modal.cachedProvider&&this.connect().then().catch()}},{key:"connect",value:function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,this._web3Modal.connect();case 4:return e.t1=e.sent,e.t0.connectProvider.call(e.t0,e.t1),e.abrupt("return",!0);case 9:return e.prev=9,e.t2=e.catch(0),console.error("connect fails."),console.error(e.t2),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(m.a.writeWeb3&&m.a.writeWeb3.currentProvider&&m.a.writeWeb3.currentProvider.close)){e.next=4;break}return e.next=4,m.a.writeWeb3.currentProvider.close();case 4:return e.next=6,this._web3Modal.clearCachedProvider();case 6:return f.a.dispatch(b.a.disconnected()),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"connectProvider",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f.a.dispatch(b.a.connect()),e.next=4,this.subscribeProvider(t);case 4:return n=new h.a(t),e.next=7,n.eth.net.getId();case 7:return a=e.sent,m.a.setWriteWeb3(n,30===a?"mainnet":"testnet"),e.next=11,m.a.writeWeb3.eth.getAccounts();case 11:if(c=e.sent,o=c[0]){e.next=16;break}return f.a.dispatch(b.a.disconnect()),e.abrupt("return");case 16:return e.next=18,m.a.writeWeb3.eth.chainId();case 18:s=e.sent,f.a.dispatch(b.a.chainChanged({chainId:s,networkId:a})),f.a.dispatch(b.a.connected({address:o})),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(0),console.error("connect provider fails."),console.error(e.t0);case 27:case"end":return e.stop()}}),e,this,[[0,23]])})));return function(t){return e.apply(this,arguments)}}()},{key:"subscribeProvider",value:function(e){try{e.on&&(e.on("close",(function(){f.a.dispatch(b.a.disconnect())})),e.on("error",(function(e){console.error("provider error",e)})),e.on("open",(function(e){console.log("provider open?",e)})),e.on("accountsChanged",function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.dispatch(b.a.accountChanged(t[0]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("chainChanged",function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.writeWeb3.eth.net.getId();case 2:return n=e.sent,e.next=5,f.a.dispatch(b.a.setup(t));case 5:f.a.dispatch(b.a.chainChanged({chainId:t,networkId:n}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("networkChanged",function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.writeWeb3.eth.chainId();case 2:return n=e.sent,e.next=5,f.a.dispatch(b.a.setup(n));case 5:f.a.dispatch(b.a.chainChanged({chainId:n,networkId:t}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}catch(t){console.error("subscribe provider fails"),console.error(t)}}}]),e}())},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return i}));var a=n(528),r={network:"testnet",chainId:31,setupCompleted:!1,connected:!1,connecting:!1,address:"",governanceContractConfig:{proposalMaxOperations:10,votingDelay:1,votingPeriod:8640,proposalThreshold:0,quorumVotes:0},blockNumber:0,syncBlockNumber:0,transactionStack:[],transactions:{},showTransactions:!1},c=Object(a.a)({name:"blockChainProvider",initialState:r,reducers:{setup:function(e,t){var n=t.payload;e.chainId=n,e.network=30===n?"mainnet":"testnet",e.setupCompleted=!1},setupCompleted:function(e,t){var n=t.payload;e.setupCompleted=!0,e.governanceContractConfig.quorumVotes=n.quorumVotes,e.governanceContractConfig.proposalThreshold=n.proposalThreshold},connect:function(e){e.connecting=!0},connected:function(e,t){t.payload;e.connecting=!1,e.connected=!0},disconnect:function(){},disconnected:function(e){e.connecting=!1,e.connected=!1,e.address=""},accountChanged:function(e,t){var n=t.payload;e.address=n||""},chainChanged:function(e,t){var n=t.payload;e.chainId=n.chainId,e.network=30===n.chainId?"mainnet":"testnet"},reSync:function(e,t){e.syncBlockNumber=t.payload},readerReady:function(){},blockFailed:function(e,t){console.error("block failed")},blockReceived:function(e,t){var n=t.payload;e.blockNumber=Number(n.number)},processBlock:function(e,t){},addTransaction:function(e,t){var n=t.payload;e.transactionStack.push(n.transactionHash),e.transactions[n.transactionHash]={transactionHash:n.transactionHash,status:"pending",to:n.to,type:n.type},e.showTransactions=!0},updateTransactionStatus:function(e,t){var n=t.payload;e.transactions.hasOwnProperty(n.transactionHash)&&(e.transactions[n.transactionHash].status=n.status)},toggleTransactionDrawer:function(e,t){var n=t.payload;e.showTransactions=n}}}),o=c.actions,s=c.reducer,i=c.name},261:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(93),r=n(22),c=Object(a.a)([function(e){return e.blockChainProvider||r.b}],(function(e){return e}))},321:function(e,t,n){"use strict";n.d(t,"b",(function(){return R})),n.d(t,"a",(function(){return B}));var a=n(0),r=n.n(a),c=n(117),o=n(441),s=n(22),i=n(261),u=n(7),l=n.n(u),p=n(54),d=n(155),f=(n(733),n(128)),b=n.n(f),m=n(63),y=n(206),h=n(208),v=l.a.mark(C),w=l.a.mark(E),k=l.a.mark(I),g=l.a.mark(M),x=l.a.mark(S),O=l.a.mark(P),j=l.a.mark(W);function C(e){var t,n,a,r,c;return l.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=y.d[t],r=!1,n.startsWith("http")?a=new b.a.providers.HttpProvider(n,{keepAlive:!0}):(a=new b.a.providers.WebsocketProvider(n,{timeout:5,reconnectDelay:10}),r=!0),c=new b.a(a),m.a.setWeb3(c,30===t?"mainnet":"testnet",r),h.a.init(t),0,0,o.next=11,Object(p.b)(s.a.setupCompleted({proposalThreshold:0,quorumVotes:0}));case 11:case"end":return o.stop()}}),v)}function E(e){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(p.b)(s.a.accountChanged(t.address));case 3:case"end":return n.stop()}}),w)}function I(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([h.a,h.a.disconnect]);case 2:case"end":return e.stop()}}),k)}function M(e){var t,n,a,r,c,o,u,d,f;return l.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:return t=e.payload,n=t,b.prev=2,b.next=5,Object(p.c)(i.a);case 5:if(a=b.sent,r=a.address,c=a.transactionStack,o=n.transactions,u=!1,!(o.length>0)){b.next=18;break}d=l.a.mark((function e(t){var n,a,i,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(o[t].from||"").toLowerCase(),a=(o[t].to||"").toLowerCase(),i=o[t].hash||"",!c.includes(i)){e.next=10;break}return e.next=6,Object(p.a)(m.a.web3.eth.getTransactionReceipt,i);case 6:return(null===(d=e.sent)||void 0===d?void 0:d.status)&&(u=!0),e.next=10,Object(p.b)(s.a.updateTransactionStatus({transactionHash:i,status:d.status?"confirmed":"failed"}));case 10:Object.values(m.a.contracts).find((function(e){var t=e.options.address.toLowerCase();return t===n||t===a}))&&(u=!0),!r||r.toLowerCase()!==n&&r.toLowerCase()!==n||(u=!0);case 13:case"end":return e.stop()}}),e)})),f=0;case 13:if(!(f<o.length)){b.next=18;break}return b.delegateYield(d(f),"t0",15);case 15:f++,b.next=13;break;case 18:if(!u){b.next=21;break}return b.next=21,Object(p.b)(s.a.reSync(n.number));case 21:b.next=27;break;case 23:b.prev=23,b.t1=b.catch(2),console.error("Error in block processing:"),console.error(b.t1);case 27:case"end":return b.stop()}}),g,null,[[2,23]])}function N(e){var t=e.web3;return Object(d.c)((function(e){var n=t.eth.subscribe("newBlockHeaders",(function(t,n){t&&(e(s.a.blockFailed(t.message)),console.error("Error in block header subscription:"),console.error(t),e(d.a))})).on("data",(function(t){e(s.a.blockReceived(t))})).on("error",(function(t){e(s.a.blockFailed(t.message)),e(d.a)}));return function(){n.off()}}))}function S(){var e,t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=m.a.web3,a.next=3,Object(p.a)(N,{web3:e});case 3:t=a.sent,a.prev=4;case 5:return a.next=8,Object(p.d)(t);case 8:return n=a.sent,a.next=11,Object(p.b)(n);case 11:a.next=5;break;case 13:return a.prev=13,t.close(),a.finish(13);case 16:case"end":return a.stop()}}),x,null,[[4,,13,16]])}function P(e){var t,n,a;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload.number,n=m.a.web3,r.prev=2,r.next=5,Object(p.a)(n.eth.getBlock,t,!0);case 5:return a=r.sent,r.next=8,Object(p.a)(M,{type:s.a.processBlock.type,payload:a});case 8:r.next=14;break;case 10:r.prev=10,r.t0=r.catch(2),console.error("Error in block processing:"),console.error(r.t0);case 14:case"end":return r.stop()}}),O,null,[[2,10]])}function W(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.f)(s.a.setup.type,C);case 2:return e.next=4,Object(p.f)(s.a.connected.type,E);case 4:return e.next=6,Object(p.f)(s.a.disconnect.type,I);case 6:return e.next=8,Object(p.f)(s.a.setupCompleted.type,S);case 8:return e.next=10,Object(p.e)(s.a.blockReceived.type,P);case 10:case"end":return e.stop()}}),j)}function T(){return r.a.createElement("div",{className:"container py-8"},r.a.createElement("div",{className:"skeleton my-3 w-2/5"},"Loading..."),r.a.createElement("div",{className:"flex space-x-4 my-3"},r.a.createElement("div",{className:"skeleton w-1/3"},"Loading..."),r.a.createElement("div",{className:"skeleton w-1/3"},"Loading..."),r.a.createElement("div",{className:"skeleton w-1/3"},"Loading...")),r.a.createElement("div",{className:"skeleton my-3"},"Loading..."),r.a.createElement("div",{className:"skeleton my-3 w-2/3"},"Loading..."))}var _=n(204),F=Object(_.a)((function(){return n.e(3).then(n.bind(null,1726))}),(function(e){return e.TransactionHistory})),H=n(203),L=n(316),q=n(1721);function A(e){e.connected;var t=e.connecting,n=(e.address,Object(a.useCallback)((function(){h.a.connect().then((function(){})).catch(console.error)}),[]));return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,r.a.createElement("title",null,"Connect to your wallet"),r.a.createElement("meta",{name:"description",content:"Connect to your wallet to use dapp"})),r.a.createElement("header",{className:"w-full bg-black text-white py-5 flex-grow-0 flex-shrink-0"},r.a.createElement("div",{className:"container flex flex-row justify-between items-center"},r.a.createElement("div",null,r.a.createElement(L.b,{to:"/",className:"text-white hover:text-gray-300 hover:no-underline"},"Sovryn MultiSig")))),r.a.createElement("main",{role:"main",className:"container py-5 flex-grow flex-shrink flex justify-center items-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"leading-none mb-5"},"Sovryn MultiSig",r.a.createElement("br",null),"Interface"),r.a.createElement("button",{onClick:n,className:"px-3 py-2 border-2 border-green-600 rounded text-sm text-green-600 font-bold transition duration-300 easy-in-out hover:text-white hover:bg-green-600 text-2xl"},t&&r.a.createElement("div",{className:"flex flex-row items-center"},r.a.createElement(q.e,{size:28,className:"mr-3"})," Connecting"),!t&&r.a.createElement(r.a.Fragment,null,"Connect")))))}var R=Number("31");function B(e){Object(o.a)({key:s.d,reducer:s.c}),Object(o.b)({key:s.d,saga:W});var t=Object(c.d)(i.a),n=Object(c.c)();return Object(a.useEffect)((function(){n(s.a.setup(R))}),[n]),t.setupCompleted?t.connected&&t.address?r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),e.children):r.a.createElement(A,t):r.a.createElement(T,null)}},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=n(258);function r(e){return Object(a.b)(e)}function c(e){return Object(a.c)(e)}},446:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"owners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"removeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"revokeConfirmation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"confirmations","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"isConfirmed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmationCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transactions","outputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwners","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"from","type":"uint256"},{"name":"to","type":"uint256"},{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionIds","outputs":[{"name":"_transactionIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmations","outputs":[{"name":"_confirmations","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"transactionCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_required","type":"uint256"}],"name":"changeRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"confirmTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"submitTransaction","outputs":[{"name":"transactionId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_OWNER_COUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"required","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"newOwner","type":"address"}],"name":"replaceOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"executeTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Revocation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Submission","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Execution","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"ExecutionFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerRemoval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"required","type":"uint256"}],"name":"RequirementChange","type":"event"}]')},453:function(e){e.exports=JSON.parse('{"title":"welcome"}')},455:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return y}));var a=n(150),r=n(128),c=n.n(r),o=n(447),s=n.n(o),i=n(454),u=(n(206),n(176)),l=n(53);function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,a=e.substr(0,t),r=e.substr(-n);return"".concat(a," \xb7\xb7\xb7 ").concat(r)}function d(e){var t=l.a.getState().blockChainProvider.network;return u.a[t][e]}var f=function(e,t){var n=Object(i.a)(e).toFixed(128).split("."),r=Object(a.a)(n,2),c=r[0],o=r[1];return(o=o&&o.length?o.substr(0,t):"0".repeat(t)).length<t&&(o+="0".repeat(t-o.length)),""!==o?"".concat(c,".").concat(o):"".concat(c)},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ether",n=0;switch(t){case"ether":n=18;break;default:throw new Error("Unsupported unit (custom toWei helper)")}return f(Object(i.a)(e||"0").mul(Math.pow(10,n)),0)};function m(e){switch(l.a.getState().blockChainProvider.chainId){case 30:case 31:return s.a.utils.toChecksumAddress(e);default:return c.a.utils.toChecksumAddress(e)}}function y(e){switch(l.a.getState().blockChainProvider.chainId){case 30:case 31:return s.a.utils.checkAddressChecksum(e);default:return c.a.utils.checkAddressChecksum(e)}}},528:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(175),r=function(e){return Object(a.b)(e)}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(105),r=n(175),c=n(258),o=n(155),s=n(458),i=n(80);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.keys(e).length?function(e){return e}:Object(i.c)(Object(s.a)({},e))}var l=function(){var e=Object(o.b)({}),t=e.run,n=[e],s=[Object(c.a)({createReducer:u,runSaga:t})];return Object(r.a)({reducer:u(),middleware:[].concat(Object(a.a)(Object(r.c)()),n),devTools:!1,enhancers:s})}()},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(105),r=n(7),c=n.n(r),o=n(94),s=n(10),i=n(15),u=n(176),l=n(53),p=n(22),d=n(455),f=n(321),b=new(function(){function e(){Object(s.a)(this,e),this.web3=null,this.writeWeb3=null,this.contracts={},this.writeContracts={},this._network=null,this._writeNetwork=null}return Object(i.a)(e,[{key:"setWeb3",value:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.web3=e,this._network!==t){this._network=t;for(var r=0,c=Object.keys(u.a[t]);r<c.length;r++){var o=c[r],s=u.a[t][o],i=s.address,d=s.abi;this.contracts[o]=this.makeContract(e,{address:i,abi:d})}}if(a){var b=this.web3.currentProvider;b.on("end",(function(){b.removeAllListeners("end"),n.contracts={},n.web3=void 0,l.a.dispatch(p.a.setup(f.b))}))}}},{key:"setWriteWeb3",value:function(e,t){if(this.writeWeb3=e,this.writeWeb3.eth.extend({methods:[{name:"chainId",call:"eth_chainId",outputFormatter:this.writeWeb3.utils.hexToNumber}]}),this._writeNetwork!==t){this._writeNetwork=t;for(var n=0,a=Object.keys(u.a[t]);n<a.length;n++){var r=a[n],c=u.a[t][r],o=c.address,s=c.abi;this.writeContracts[r]=this.makeContract(e,{address:o,abi:s})}}}},{key:"nonce",value:function(){var e=Object(o.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.web3.eth.getTransactionCount(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"call",value:function(){var e=Object(o.a)(c.a.mark((function e(t,n,r){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(o=this.contracts[t].methods)[n].apply(o,Object(a.a)(r)).call());case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"send",value:function(){var e=Object(o.a)(c.a.mark((function e(t,n,r,o){var s,i,u=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r,i={},r&&r.length&&"object"===typeof r[r.length-1]&&(s=r.slice(0,-1),i=r[r.length-1]),e.abrupt("return",new Promise((function(e,r){var c;return(c=u.writeContracts[t].methods)[n].apply(c,Object(a.a)(s)).send(i).once("transactionHash",(function(n){l.a.dispatch(p.a.addTransaction({transactionHash:n,to:Object(d.b)(t).address,type:null===o||void 0===o?void 0:o.type})),e(n)})).catch((function(e){console.log("rejecting"),r(e)}))})));case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"getPastEvents",value:function(){var e=Object(o.a)(c.a.mark((function e(t,n){var a,r,o,s=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]?s[2]:void 0,r=s.length>3&&void 0!==s[3]?s[3]:0,o=s.length>4&&void 0!==s[4]?s[4]:"latest",e.abrupt("return",this.contracts[t].getPastEvents(n,{fromBlock:r,toBlock:o,filter:a}));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"makeContract",value:function(e,t){return new e.eth.Contract(t.abi,t.address)}}]),e}())}},[[1714,1,2]]]);
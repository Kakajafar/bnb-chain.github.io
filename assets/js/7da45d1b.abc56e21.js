"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[76],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"Fast Node",hide_table_of_contents:!1,sidebar_position:2},s="Fast Node on BNB Smart Chain",i={unversionedId:"BSC-fast-node",id:"BSC-fast-node",title:"Fast Node on BNB Smart Chain",description:"Note",source:"@site/docs/BSC-fast-node.md",sourceDirName:".",slug:"/BSC-fast-node",permalink:"/docs/BSC-fast-node",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/BSC-fast-node.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Fast Node",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Verify Node",permalink:"/docs/BSC-verify-node"},next:{title:"Boot Nodes",permalink:"/docs/boot-nodes"}},l={},d=[{value:"Note",id:"note",level:2},{value:"Fast Node Functions",id:"fast-node-functions",level:2},{value:"Steps to Run a Fast Node",id:"steps-to-run-a-fast-node",level:2},{value:"Download the pre-build binaries from release page or follow the instructions below:",id:"download-the-pre-build-binaries-from-release-page-or-follow-the-instructions-below",level:3},{value:"Download the config files",id:"download-the-config-files",level:3},{value:"Download snapshot",id:"download-snapshot",level:3},{value:"Prune all trie data",id:"prune-all-trie-data",level:3},{value:"Start Fast Node Without Snapshot Verification",id:"start-fast-node-without-snapshot-verification",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fast-node-on-bnb-smart-chain"},"Fast Node on BNB Smart Chain"),(0,a.kt)("h2",{id:"note"},"Note"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fast Node does not generate Trie Data when syncing.",(0,a.kt)("br",{parentName:"strong"}),"Once the Fast Node is running, there is no way to switch back to Full Node.",(0,a.kt)("br",{parentName:"strong"}),"Need to re-download snapshot data to restore it to Full Node.")),(0,a.kt)("h2",{id:"fast-node-functions"},"Fast Node Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stores the full blockchain history on disk and can answer the data request from the network."),(0,a.kt)("li",{parentName:"ul"},"Receives and validates the new blocks and transactions."),(0,a.kt)("li",{parentName:"ul"},"Verifies the states of every account.")),(0,a.kt)("h2",{id:"steps-to-run-a-fast-node"},"Steps to Run a Fast Node"),(0,a.kt)("h3",{id:"download-the-pre-build-binaries-from-release-page-or-follow-the-instructions-below"},"Download the pre-build binaries from ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/bnb-chain/bsc/releases/latest"},"release page")," or follow the instructions below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_linux |cut -d\\" -f4)\nmv geth_linux geth\nchmod -v u+x geth\n\n# MacOS\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_mac |cut -d\\" -f4)\nmv geth_mac geth\nchmod -v u+x geth\n')),(0,a.kt)("h3",{id:"download-the-config-files"},"Download the config files"),(0,a.kt)("p",null,"Download ",(0,a.kt)("strong",{parentName:"p"},"genesis.json")," and ",(0,a.kt)("strong",{parentName:"p"},"config.toml")," by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'wget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep mainnet |cut -d\\" -f4)\nunzip mainnet.zip\n')),(0,a.kt)("h3",{id:"download-snapshot"},"Download snapshot"),(0,a.kt)("p",null,"Download latest chaindata snapshot from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-snapshots"},"here"),". Follow the guide to structure your files."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Your --datadir flag should point to the extracted chaindata folder path")),(0,a.kt)("h3",{id:"prune-all-trie-data"},"Prune all trie data"),(0,a.kt)("p",null,"Fast node does not need trie data anymore, prune the trie data by the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./geth snapshot insecure-prune-all --datadir ./node  ./genesis.json\n")),(0,a.kt)("h3",{id:"start-fast-node-without-snapshot-verification"},"Start Fast Node Without Snapshot Verification"),(0,a.kt)("p",null,"You can start Fast Node without snapshot verification by verify nodes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"## start a fast node\n./geth --tries-verify-mode none --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0\n")),(0,a.kt)("p",null,"Or start Fast Node With Snapshot Verification"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add verifyNodes peers in config.toml.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[Node.P2P]\nMaxPeers = 1350\nNoDiscovery = false\nBootstrapNodes = ["enode://...", "enode://...", ...]\nVerifyNodes = ["enode://...", "enode://...", ...]\nStaticNodes = ["enode://...", "enode://...", ...]\nListenAddr = ":30311"\nEnableMsgEvents = false\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Start your fast node with snapshot verification by verify nodes.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"## start a fast node\n./geth --tries-verify-mode full --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0\n")))}u.isMDXComponent=!0}}]);
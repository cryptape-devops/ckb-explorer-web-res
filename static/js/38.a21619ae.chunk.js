(this["webpackJsonpckb-explorer-fronted"]=this["webpackJsonpckb-explorer-fronted"]||[]).push([[38],{564:function(e,t,n){"use strict";var a=n(0),c=n.n(a),o=n(25),r=n(572),i=n.n(r),l=n(573),s=n.n(l),p=n(22),m=n(277),d=n(14),u=n(42),A=n(612),h=n(557),b=n.n(h),x=n(839),f=function(e){return e?"function"===typeof e?e():e:null},g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},w=a.forwardRef((function(e,t){var n=e.prefixCls,c=e.title,o=e.content,r=g(e,["prefixCls","title","content"]),i=(0,a.useContext(x.b).getPrefixCls)("popover",n);return a.createElement(A.a,b()({},r,{prefixCls:i,ref:t,overlay:function(e){return a.createElement(a.Fragment,null,c&&a.createElement("div",{className:"".concat(e,"-title")},f(c)),a.createElement("div",{className:"".concat(e,"-inner-content")},f(o)))}(i)}))}));w.displayName="Popover",w.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var E=w,k=n(574),O=n.n(k),y=n(575),j=n.n(y),v=n(576),_=n.n(v),S=n(3),N=n(4),T=n(7),U=n(6);function C(){const e=Object(T.a)(["\n  margin: 10px;\n  display: flex;\n\n  @media (max-width: 750px) {\n    margin: 5px;\n  }\n\n  .withdraw__info_title {\n    font-size: 14px;\n    font-weight: 450;\n    width: ",";\n\n    @media (max-width: 750px) {\n      font-size: 10px;\n      width: ",";\n    }\n\n    @media (max-width: 375px) {\n      font-size: 9px;\n      width: ",";\n    }\n  }\n\n  .withdraw__info_content {\n    font-size: 14px;\n\n    @media (max-width: 750px) {\n      font-size: 10px;\n    }\n\n    @media (max-width: 375px) {\n      font-size: 9px;\n    }\n  }\n\n  a {\n    color: ",";\n  }\n\n  a:hover {\n    color: ",";\n  }\n"]);return C=function(){return e},e}function B(){const e=Object(T.a)(["\n  > p {\n    font-size: 16px;\n    font-weight: 600;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 16px;\n\n    @media (max-width: 750px) {\n      font-size: 11px;\n      margin-bottom: 8px;\n    }\n  }\n"]);return B=function(){return e},e}function Y(){const e=Object(T.a)(["\n  .transaction__cell__udt__icon {\n    margin-left: 5px;\n    width: 16px;\n    height: auto;\n    cursor: pointer;\n\n    @media (max-width: 750px) {\n      width: 12px;\n      height: auto;\n      margin-bottom: 3px;\n    }\n  }\n"]);return Y=function(){return e},e}function R(){const e=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 2px;\n\n  .nervos__dao__withdraw_icon {\n    margin-left: 5px;\n    width: 16px;\n    height: auto;\n    cursor: pointer;\n\n    @media (max-width: 750px) {\n      width: 12px;\n      height: auto;\n    }\n  }\n"]);return R=function(){return e},e}function J(){const e=Object(T.a)(["\n  color: #000000;\n  margin-left: 15px;\n  display: flex;\n  max-height: 40px;\n  align-items: center;\n\n  @media (max-width: 750px) {\n    margin-left: 0px;\n    margin-top: 5px;\n    height: 16px;\n    width: 100%;\n    justify-content: flex-end;\n  }\n\n  > span {\n    margin-left: 5px;\n  }\n\n  .transaction__cell__without__icon {\n    margin-right: 21px;\n  }\n"]);return J=function(){return e},e}function z(){const e=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 16px;\n\n  background: ",";\n\n  @media (min-width: 750px) {\n    height: 20px;\n  }\n\n  @media (max-width: 750px) {\n    justify-content: normal;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .transaction__cell_address {\n    color: ",";\n\n    font-weight: 500;\n    height: 20px;\n    display: flex;\n    align-items: center;\n\n    @media (max-width: 750px) {\n      height: 16px;\n      font-size: 14px;\n    }\n\n    a {\n      color: ",";\n    }\n\n    a:hover {\n      color: ",";\n    }\n  }\n"]);return z=function(){return e},e}const V=U.c.div(z(),({highLight:e=!1})=>e?"":"#f5f5f5",({highLight:e=!1,theme:t})=>e?"".concat(t.primary):"#000000",({theme:e})=>"".concat(e.primary),({theme:e})=>"".concat(e.primary)),D=U.c.div(J()),G=U.c.div(R()),Q=U.c.div(Y()),H=U.c.div(B()),I=U.c.div(C(),({width:e})=>{switch(e){case"long":return"180px";case"medium":return"150px";default:return"85px"}},({width:e})=>{switch(e){case"long":return"130px";case"medium":return"105px";default:return"60px"}},({width:e})=>{switch(e){case"long":return"145px";case"medium":return"115px";default:return"65px"}},({theme:e})=>e.primary,({theme:e})=>"".concat(e.primary));var L=n(9),X=n(561),P=n(552),F=n(554),Z=n(8),M=n(579);const K=e=>e===L.j.Deposit,W=e=>e===L.j.Withdraw,q=({cell:e,address:t,highLight:n})=>t.includes("...")?c.a.createElement(A.a,{placement:"top",title:c.a.createElement(F.a,{content:e.addressHash})},n?c.a.createElement(o.b,{to:"/address/".concat(e.addressHash),className:"monospace"},t):c.a.createElement("span",{className:"monospace"},t)):n?c.a.createElement(o.b,{to:"/address/".concat(e.addressHash),className:"monospace"},t):c.a.createElement("span",{className:"monospace"},t),$=({width:e,title:t,content:n})=>c.a.createElement(I,{width:e},c.a.createElement("div",{className:"withdraw__info_title"},t),c.a.createElement("div",{className:"withdraw__info_content"},n)),ee=({cell:e})=>{let t="short";return"en"===Object(Z.b)().app.language&&(t=K(e.cellType)?"long":"medium"),c.a.createElement(H,null,c.a.createElement("p",null,W(e.cellType)?S.c.t("nervos_dao.withdraw_tooltip"):S.c.t("nervos_dao.withdraw_request_tooltip")),c.a.createElement($,{width:t,title:"".concat(S.c.t("nervos_dao.deposit_capacity"),": "),content:c.a.createElement(P.a,{value:Object(m.c)(Object(N.f)(e.capacity)),fontSize:Object(d.a)()?"8px":""})}),c.a.createElement($,{width:t,title:"".concat(S.c.t(W(e.cellType)?"nervos_dao.compensation":"nervos_dao.unissued_compensation"),": "),content:c.a.createElement(P.a,{value:Object(m.c)(Object(N.f)(e.interest)),fontSize:Object(d.a)()?"8px":""})}),c.a.createElement($,{width:t,title:"".concat(S.c.t("nervos_dao.compensation_period"),": "),content:c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"".concat(S.c.t("block.block")," ")),c.a.createElement(o.b,{to:"/block/".concat(e.compensationStartedBlockNumber)},c.a.createElement("span",null,Object(m.c)(e.compensationStartedBlockNumber))),c.a.createElement("span",null," - "),c.a.createElement(o.b,{to:"/block/".concat(e.compensationStartedBlockNumber)},c.a.createElement("span",null,Object(m.c)(e.compensationEndedBlockNumber))))}),c.a.createElement($,{width:t,title:"".concat(S.c.t("nervos_dao.compensation_time"),": "),content:Object(p.e)(e.compensationStartedTimestamp,e.compensationEndedTimestamp)}),W(e.cellType)&&c.a.createElement(c.a.Fragment,null,c.a.createElement($,{width:t,title:"".concat(S.c.t("nervos_dao.locked_period"),": "),content:c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"".concat(S.c.t("block.block")," ")),c.a.createElement(o.b,{to:"/block/".concat(e.compensationStartedBlockNumber)},c.a.createElement("span",null,Object(m.c)(e.compensationStartedBlockNumber))),c.a.createElement("span",null," - "),c.a.createElement(o.b,{to:"/block/".concat(e.lockedUntilBlockNumber)},c.a.createElement("span",null,Object(m.c)(e.lockedUntilBlockNumber))))}),c.a.createElement($,{width:t,title:"".concat(S.c.t("nervos_dao.locked_time"),": "),content:Object(p.e)(e.compensationStartedTimestamp,e.lockedUntilBlockTimestamp)})))},te=({cell:e,cellType:t})=>c.a.createElement(G,null,c.a.createElement(P.a,{value:Object(m.c)(Object(N.f)(e.capacity))}),t===L.e.Input?c.a.createElement(E,{placement:"right",title:"",content:c.a.createElement(ee,{cell:e}),trigger:"click"},c.a.createElement("img",{src:W(e.cellType)?j.a:O.a,className:"nervos__dao__withdraw_icon",alt:"nervos dao withdraw"})):c.a.createElement(A.a,{placement:Object(d.a)()?"topRight":"top",title:S.c.t(K(e.cellType)?"nervos_dao.deposit_tooltip":"nervos_dao.calculation_tooltip"),arrowPointAtCenter:!0,overlayStyle:{fontSize:"14px"}},c.a.createElement("img",{src:W(e.cellType)?j.a:O.a,className:"nervos__dao__withdraw_icon",alt:"nervos dao withdraw"}))),ne=({cell:e})=>{return c.a.createElement(Q,null,c.a.createElement("span",null,(t=e.udtInfo).published?"".concat(Object(m.e)(t.amount,t.decimal)," ").concat(t.symbol):"".concat(S.c.t("udt.unknown_token")," #").concat(t.typeHash.substring(t.typeHash.length-4))),c.a.createElement(A.a,{placement:Object(d.a)()?"topRight":"top",title:"Capacity: ".concat(Object(m.c)(Object(N.g)(e.capacity,8))," CKB"),arrowPointAtCenter:!0,overlayStyle:{fontSize:"14px"}},c.a.createElement("img",{src:_.a,className:"transaction__cell__udt__icon",alt:"udt token"})));var t},ae=({cell:e,cellType:t})=>(e=>K(e)||W(e))(e.cellType)?c.a.createElement(te,{cell:e,cellType:t}):e.udtInfo&&e.udtInfo.typeHash?c.a.createElement(ne,{cell:e}):c.a.createElement("div",{className:"transaction__cell__without__icon"},c.a.createElement(P.a,{value:Object(m.c)(Object(N.f)(e.capacity))}));var ce=({cell:e,address:t,cellType:n})=>{if(e.fromCellbase)return c.a.createElement(M.a,{cell:e,cellType:n});let a=S.c.t("address.unable_decode_address"),o=!1;return e.addressHash&&(a=(e=>Object(d.a)()?Object(u.a)(e,10):!Object(d.c)()&&Object(d.d)()?Object(u.b)(e,1,100):Object(u.b)(e,7,100))(e.addressHash),o=e.addressHash!==t),c.a.createElement(V,{highLight:o},c.a.createElement("div",{className:"transaction__cell_address"},n===L.e.Input&&c.a.createElement(X.a,{cell:e,cellType:n}),c.a.createElement(q,{cell:e,address:a,highLight:o}),n===L.e.Output&&c.a.createElement(X.a,{cell:e,cellType:n})),c.a.createElement(D,null,c.a.createElement(ae,{cell:e,cellType:n})))};function oe(){const e=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  width: 100%;\n\n  .transaction_item__view_all {\n    font-size: 16px;\n    color: ",";\n    margin-top: 20px;\n    height: 20px;\n\n    @media (max-width: 750px) {\n      font-size: 14px;\n      margin-top: 15px;\n      height: 16px;\n    }\n  }\n\n  a {\n    color: ",";\n  }\n\n  a:hover {\n    color: ",";\n  }\n"]);return oe=function(){return e},e}var re=U.c.div(oe(),e=>e.theme.primary,e=>e.theme.primary,e=>e.theme.primary);var ie=({cells:e,transaction:t,render:n})=>c.a.createElement(re,null,e&&e.map((e,t)=>t<10&&n(e)),e&&e.length>=10&&c.a.createElement("div",{className:"transaction_item__view_all"},c.a.createElement(o.b,{to:"/transaction/".concat(t.transactionHash)},S.c.t("common.view_all")))),le=n(18),se=n.n(le);function pe(){const e=Object(T.a)(["\n  height: 36px;\n  border-radius: 18px;\n  background-color: ",";\n  padding: 0 12px;\n  width: 220px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 16px;\n\n  @media (max-width: 750px) {\n    font-size: 14px;\n  }\n"]);return pe=function(){return e},e}function me(){const e=Object(T.a)(["\n  width: 100%;\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end;\n\n  @media (max-width: 750px) {\n    justify-content: center;\n  }\n"]);return me=function(){return e},e}const de=U.c.div(me()),ue=U.c.div(pe(),e=>e.increased?e.theme.primary:"#FF6347");var Ae=({income:e})=>{let t=new se.a(e);return t.isNaN()&&(t=new se.a(0)),c.a.createElement(de,null,c.a.createElement(ue,{increased:t.isGreaterThanOrEqualTo(0)},c.a.createElement(P.a,{value:"".concat(t.isPositive()?"+":"").concat(Object(m.c)(Object(N.f)(t))),color:"inherit"})))};function he(){const e=Object(T.a)(["\n  width: 100%;\n"]);return he=function(){return e},e}function be(){const e=Object(T.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n\n  @media (max-width: 1200px) {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  > img {\n    margin-top: 16px;\n    width: 16px;\n    height: 16px;\n  }\n\n  .transaction_item__input {\n    margin-right: 40px;\n    flex: 1;\n\n    @media (max-width: 1200px) {\n      margin: 0px;\n      flex: none;\n      width: 100%;\n    }\n  }\n\n  .transaction_item__output {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    margin-left: 40px;\n\n    @media (max-width: 1200px) {\n      margin: 0px;\n      flex: none;\n      width: 100%;\n    }\n  }\n\n  .transaction_item__output__empty {\n    font-size: 16px;\n    color: #666666;\n    margin-top: 18px;\n\n    @media (max-width: 750px) {\n      font-size: 13px;\n    }\n  }\n"]);return be=function(){return e},e}function xe(){const e=Object(T.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n\n  .transaction_item__content {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 10px;\n\n    @media (max-width: 750px) {\n      flex-direction: column;\n      justify-content: normal;\n      margin-bottom: 10px;\n    }\n\n    .transaction_item__hash {\n      font-size: 14px;\n      color: ",";\n      font-weight: 500;\n    }\n\n    .transaction_item__block {\n      color: #000000;\n\n      @media (max-width: 750px) {\n        font-weight: normal;\n      }\n    }\n  }\n\n  &:after {\n    content: '';\n    background: #e2e2e2;\n    height: 1px;\n    width: 100%;\n    display: block;\n    transform: ",";\n  }\n"]);return xe=function(){return e},e}function fe(){const e=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  height: 35px;\n  justify-content: space-between;\n  .transaction__cell {\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    color: rgb(136, 136, 136);\n  }\n  .transaction__cell__capacity {\n    font-size: 16px;\n    color: rgb(136, 136, 136);\n    margin-left: 15px;\n  }\n"]);return fe=function(){return e},e}function ge(){const e=Object(T.a)(["\n  width: 100%;\n  margin-top: 4px;\n  border-radius: ",";\n  box-shadow: 2px 2px 6px 0 #dfdfdf;\n  background-color: #ffffff;\n  padding: 10px 40px 15px 40px;\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n\n  @media (max-width: 750px) {\n    padding: 15px 20px 15px 20px;\n    font-size: 13px;\n  }\n"]);return ge=function(){return e},e}const we=U.c.div(ge(),e=>"".concat(e.circleCorner.top?"6px 6px":"0 0").concat(e.circleCorner.bottom?" 6px 6px":" 0 0")),Ee=(U.c.div(fe()),U.c.div(xe(),e=>e.theme.primary,()=>"scaleY(".concat(Math.ceil(1/window.devicePixelRatio*10)/10,")"))),ke=U.c.div(be()),Oe=U.c.div(he());t.a=({transaction:e,address:t,isBlock:n=!1,titleCard:a,circleCorner:r={top:!1,bottom:!1}})=>{const l=Object(u.a)(e.transactionHash,10),A=Object(u.b)(e.transactionHash,14,40);return c.a.createElement(we,{id:n&&e.isCellbase?"cellbase":"",circleCorner:r},a,c.a.createElement(Ee,null,c.a.createElement("div",{className:"transaction_item__content"},c.a.createElement(o.b,{to:"/transaction/".concat(e.transactionHash)},c.a.createElement("span",{className:"transaction_item__hash monospace"},Object(d.a)()?l:A)),!n&&c.a.createElement("div",{className:"transaction_item__block"},"(".concat(S.c.t("block.block")," ").concat(Object(m.c)(e.blockNumber),")  ").concat(Object(p.c)(e.blockTimestamp))))),c.a.createElement(ke,null,c.a.createElement("div",{className:"transaction_item__input"},c.a.createElement(ie,{cells:e.displayInputs,transaction:e,render:e=>c.a.createElement(ce,{cell:e,address:t,cellType:L.e.Input,key:e.id})})),c.a.createElement("img",{src:Object(d.c)()?s.a:i.a,alt:"input and output"}),c.a.createElement("div",{className:"transaction_item__output"},e.displayOutputs&&0!==e.displayOutputs.length?c.a.createElement(ie,{cells:e.displayOutputs,transaction:e,render:e=>c.a.createElement(Oe,{key:e.id},c.a.createElement(ce,{cell:e,address:t,cellType:L.e.Output}))}):c.a.createElement("div",{className:"transaction_item__output__empty"},S.c.t("transaction.empty_output")))),t&&c.a.createElement(Ae,{income:e.income}))}},567:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n(19),c=n(2);const o=(e,t)=>{e({type:c.c.UpdateBlockStatus,payload:{status:t}})},r=(e,t,n,r)=>{o(r,"InProgress"),Object(a.c)(e).then(e=>{if(e){const i=e.attributes;r({type:c.c.UpdateBlock,payload:{block:i}}),((e,t,n,r)=>{Object(a.ab)(e,t,n).then(e=>{o(r,"OK");const t=e,n=t.data,a=t.meta;r({type:c.c.UpdateBlockTransactions,payload:{transactions:n.map(e=>e.attributes)}}),a&&r({type:c.c.UpdateBlockTotal,payload:{total:a.total}})}).catch(()=>{o(r,"Error")})})(i.blockHash,t,n,r)}else o(r,"OK")}).catch(()=>{o(r,"Error")})},i=e=>{Object(a.f)().then(t=>{if(t){const n=t.map(e=>e.attributes);e({type:c.c.UpdateHomeBlocks,payload:{homeBlocks:n}})}})},l=(e,t,n)=>{Object(a.d)(e,t).then(e=>{const t=e,a=t.data,o=t.meta;if(o&&n({type:c.c.UpdateBlockListTotal,payload:{total:o.total}}),a){const e=a.map(e=>e.attributes);n({type:c.c.UpdateBlockList,payload:{blocks:e}})}})}},572:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUdwTImJiYiIiPxsNLgAAAACdFJOUwCAmytOGAAAAH5JREFUKM+F08sRhTAMQ1FDZZSoIrwRVfJ5byC5M9jZnY0mcayIiCXms26w4IQN7xssOGHDc8BpwQkbngIuC07Y8BhwW3DChoeAnwUnbPgN+FtwwoafgA+7yVN9HzfvUT0PN/NU/R9u/lP1PrjZJ9X76GafVffBTZ9U93Hs6wGL/JdpvM8hoQAAAABJRU5ErkJggg=="},573:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAACVBMVEVHcEyJiYmIiIj8bDS4AAAAAnRSTlMAgJsrThgAAAB5SURBVCjP5ZG7GYAwCAZ/GiewYhrX0WkYwgan9JUo5wrSXXH3JSD9bJatTsrBqwZwyMATA3kEHboQiIONeg3k9SKHXgNxsVF/A9m+5NDfQDQ26j2Qz04ceg/Ew0b9DmRZqkO/A1HYqJ+BxFUc+hkIsFGX5s9ZR/1zdmEalT4nUMpcAAAAAElFTkSuQmCC"},614:function(e,t,n){"use strict";var a=n(0),c=n.n(a),o=n(7);function r(){const e=Object(o.a)(["\n  width: 100%;\n  background-color: #ffffff;\n  height: ",";\n  padding-left: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: ",";\n  border-radius: ",";\n  box-shadow: ",";\n\n  @media (max-width: 750px) {\n    height: ",";\n    padding-left: ",";\n  }\n\n  .title__card__content {\n    color: #000000;\n    font-size: 20px;\n    font-weight: 600;\n    margin-bottom: ",";\n\n    @media (max-width: 750px) {\n      font-size: 20px;\n      margin-bottom: 8px;\n    }\n  }\n"]);return r=function(){return e},e}const i=n(6).c.div(r(),e=>e.isSingle?"58px":"50px",e=>e.isSingle?"40px":"0",e=>e.isSingle?"center":"flex-start",e=>e.isSingle?"6px 6px 0 0":"0",e=>e.isSingle?"2px 2px 6px 0 #dfdfdf":"0",e=>e.isSingle?"58px":"40px",e=>e.isSingle?"20px":"0",e=>e.isSingle?"0px":"12px");t.a=({title:e,isSingle:t})=>c.a.createElement(i,{isSingle:t},c.a.createElement("div",{className:"title__card__content"},e))},781:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAQCAYAAABgIu2QAAAAAXNSR0IArs4c6QAAAwVJREFUSA3lVV1IFFEUvmd2V7OwtVATgrKXNAKlUPzB3VaJ6Oc1fAsKS4loM9fth7QfFZJ1Vk2ksKAIoocWe5AoiPJnDXetRYmgsB4iKFiSIItsdXbndGbg5uysi2sWEc3LOff7zj3nu/fMvZexf+QDReeO522Z09Osl9w8YHDXhEJDf2ndh7+xBou/LQ+RtZIwK0PsyzJn7/dsrpxVhZb5XCJD5uDCAOAbMnbRmJXuHtxwIMTxP2ltATE9ImET6ahGhgZeCwTYN1zsvCUoACCQrrkPEVfQaloiwclXFr+4d475/Z4NB4xWv3gsMotvqO5hrUilGtemCk0STCJhAb0MakE2yrLH4nMNlo+68/X8UsdlI66dYV/ghSzLnSQwTZ+POtu7ZuU6j4KrrVec84hCv088RBOaaXszFCzqAyYzgGuQlNw4vNU+GcUtclA26t4IEbmdau2ZbyoJfI2C4HhS5LjH+Z9COWAb70iLzITP0W4eofabOM4tHbbPJLhpkym1+2pBjcTxROz2QI85JE010v7Y580NbApAaM41pnbpc8cI5QXLn3XmSGGpgxLu4pjOThhAOD5UUv9Ah8cMlW499otVtPgWxjAzJoC6RUKupyyHMw/znR9jeALiCuXBVr97tyxH2mmcwzGtBWD3jcakuoHC2gktzn3rU9GKYVT+wS0c01rqkBdMQq230DGuxfX+gkKVCdWBHtNL6ctRYHiWdsWsT0K/gkRcd7LJfOFRQc2UwleMietnZ9BFHamMiVcBeCcAO+Etcd6Zn49GExLKp1jGujIwFGqhPhyk+069MTinWEo2SSeuSRCETES5nkSmaHnVBzZNh6U1SzaIntK67zF8HGBRQnkO5aoKy5FLtLvbOJaQBbhthOSTg8X29wnFa4J+SSifrz4GKLeR4GyOxbEBgwHsQ0VOXxx+QXhJQpXstrc3lsnBT/V0WE6pL5qmJLU4SKf8tLfYeZP8qNdPE5aQu2ShvErFSPtaSQhfRgTlEpfpB76Stmp1Q19u1Vce81/YHw5oFhrVA88fAAAAAElFTkSuQmCC"},782:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAQCAYAAABgIu2QAAAAAXNSR0IArs4c6QAAAsJJREFUSA3VlV9IU3EUx8/57W4TqeyhgVAQPZT4EIbM1JHrGr30hyBkTz1EFElF6dwmBWklieGaTjPoH9RTD9Vrf4jyzyaiJv0RjOwlDQJNghwUW3f3/jp3Ec27u+t0Q+jChd/vfH+/cz73nvM7P4D/5MFccYoT11cpkZ+tCsAJ8skQ+GMzF072Ohq+5CJG1qCcc3QO+w8DYBuNC5OhEPEHB2gTCtcF+jcdiSZrSx1nBeocDTh4XAly4GVGgRFhCpD5whXeR0brjLRlgYrD3RtkHr3CORwycq7VCHhAYKa6vnLPO6222HxJoOKnu3nKzDevAso54JCvdU7Oopyxq6jwWQDeTGm3adcAggKIt9FibQqXnplL0dMYMgbdMdTuojr0E8DGNL4eWvKYr7fUO63q4pvOtXIsfoH++ing3Kzdg4DfCbil2Ly655a9VtLq2vmioOJo+zY5jl1Uh07t5j9zfMsErAtt94b09OpXwSIpLnUS7B49nWyTJmTugUrv0zR6wpwWtOp1tw1isVYCPEppZlontHGO0nx+d7nnzkVE6krGj3M4sFdR5A5aVaS3kur3iSBYGvrK6id1da3x+NhN83spcpr6YDOlrUCrU7okgrxmNa9peWGvnU/RDQyZ+eY9VnPBJa3vBX+0asS/j0q9g/rhFr146ldzZnIPlns+6umZ2tRs8Wj0Mh2sY5lmKwHqmnhgmYlM3yfAGv1g+IEOkXvQ0fhMX1+etXokUBJX5C7K3M40HsaszLL/ZUX9bKL2ZiOfXXqQ6smk1y1U2rfmGlIFU/tpuLJRRMZciUshldb+S5G8qjkBypEvKAGCk2njDZMFN4cdvmA/VsdTfeTOot5YpkJbMUPWpF67yZ7/sv1L/fzUPTooB6hJhwjybLjCN568YaXGu4Y61ksoU7eBgxRzPD8fap6X+L6uVPys4/wG1pcDKjUEH5gAAAAASUVORK5CYII="},783:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAQCAYAAAEXJd0GAAAAAXNSR0IArs4c6QAAA2VJREFUSA3lVk1IVFEUvufOjDoZKqUWRNoqg8B+sI2FOrbJ2kargmb8yRDJ1NKaN/JyxjCtJKhQyyctalEZFEErZ8SoFknRqmxTaoHoJpU0feO7nTvjfTyfb0yj2vQWnvudn++ce+65dyQkxgdcXyIFD84TUkEZu8QA/EqgMD+GP6rd3l7GrUJGKATobtofwcZwtzf4nhC2LdOxMd7K+AmNW3iAVbCRKOYaPN7ga0ZYDlDYqfgL35k9RXm6niuMSjO2qDO6a6C2XMVf8EowLdo9ASp1B1xNwrhSWSaHUlVVG0V/G6H0mJ69Sg6lTKpsDPfmiJABfHNsTkrvPJGjWpF7pN7LjJEaYQOgtUrAdYVjnVQYhcTmdWCCMoEJJZVEgxY8FifXAZDp5HXO1Lbq3BndZ2ERk9ToWB54uWl2ZmYIe3cDe3fKaPtnazD05numg6bKsuvHarMXS8GbGmMneRyfVkqdia0LJIlDqjbjkYJ9C/iXolgKHeBzJwiBQA8P0nvq8fa24VWr0pkAqrsDhW06NizKmgeSw1OT42JSkGTCnpGcJiZFJxUxWOkHxliWwACwDS/+oMDYrjc4SrsEptS+u8uf/1ZgLpeQcqX7Yn8aTKujGEyjTjCOF6OdsXkfx/zDZA2YzB9Fi/9akgoXtxQ6TJj2QGAusW8DSlPhHqPOvF6WVDhjSx4TRopIUtx6pW7flNDHkhHScvlF+lx4tgcbnw2MPIpzOqV2KfdrrKC/qS+R+7M1VW3GocnDFj/JsG84Lsvb5yKFun2hVqJptUsLgM94IGfw4Xq41PZnNLIcso+ESYVGmEwYSzGzAqFHlSbXXf2YZJnRkXBfKU6oHzubtiQAiMYI3CJr7L7u83njZvtqcKn8fOu8ql7FPIes4rCojwxoDTboqbDrhQqFkDhDWbhDfm+LhM4o8VgG8Yk/rTQWPDPqrda8CcPhYDFyBXAu080++DDj20GUeEeCt13eO2a2cxyzUKNzWceAIzw8WYkvfgMmSzbaoiSgYrLrtrVJFzrrcya4rtjbm4n/LLTgCR0x+0diAIYw+1n8Ob5vZTfrVlSoOcjjC+7AzlzDIvLNtmUxwD2bHepuy64vy/pZGH+rUCMPXoaEEVWr1QipR32i0YYXcRRH5FxXY8EdlHgY/8H3E6ogRI8PEewZAAAAAElFTkSuQmCC"},784:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAQCAYAAAEXJd0GAAAAAXNSR0IArs4c6QAAA1RJREFUSA3VVk1MU0EQ3nm8h1gIchBCogKJUbzJARNDItByErypXLjY8qckRkkgQV9LVmg9majRgxRoPRAO4lHUS9vIwRMHNdGAF/mJhh8PSILUvL63zha2lrKtRb3YpJmdmW++nZ3Zee8RkunncodMSpnCMU49xDJhfyEEElLhwsHtoEBVYNDxVmDiYA4ARekODNrvCUeyjBMoyp1kW8b1jhRc7vAYY6xFRAR9DQn/1va3p4rJhrECBFYDPkcJB7a5w40mY5ME4HnQ62gCcYjkaMHIpVMPfyKEVSSok53Ja0wFXJ7IF8JYadwOijvotfuSMalrKWmrHrpoEfJEgBE0EfA1NF+nkaJ1g60wwrStDWBNO1JY4u+sNgSWywSpSw/NYo+PC6eq5VYO0zMfhS6TLj08hBt0CB/2tRP76o+TYsXH8XhFmE2jAOxVXva+PvQjuvlhn5p3bK+xWeETx0+HxiZdYpYV3PZvlGvKQUrt0XR4bk9L2kYjh03DWpQFA8CrgNdRL/NxW3wOU51Y47lkQgRV8LuJGcRnCK9ZHb+zTne4OzWW6zsyRTI/BrQLoOim0IVE3AziKoWOmZ/AzGcTOl+09oebLJM9E0YxQgldsnDiCMJ3Y4mxrdPyUSzT7KWUggUuPdLCiDUWjwNYK1ehGBsRk/BITU535AJh1oRw8jKpZVrJxLyxNJSjaTUjtPadcGYrcWSfIhawvo+xlkd53I6aZkskw3XRSEHUBB+xrCs4ZQp2dTI3b3/XI3fNZxl+r7a/SrRdD9XEAG8ZI6cybwxz2Pve7Uplhqbx7ilRSiN5i4bVw4DcwItk28UJECWQc0exrGWsaj/+i1MxWGmLERgmNtUTvFm7mupPp/820XYaqTJj7D6OT62cBN4ohF0b9TVMyfw4epX4TL2LD+qzMj+O4izh79CB+hcyv7DtSrRjaFqLLaxfxZcXVoQcEEAhcRQNHMoHan7hgL+v+puwZyOz4caKP8wpKLyVyh1PlNL3uQvG8ji26rx8Q5jB6ege9dpfyv1/ZnV5wifxfvNu1ckYsCjTis12bkQ/vaxywLy50owVTE7SxBMMq5ri8VP7VxnJv7Btf0vVcy5x//GjoA/VfG7DwlVbmxu9uOzh+n/x+wn6mU1vCeprGAAAAABJRU5ErkJggg=="},785:function(e,t){e.exports="data:image/png;base64,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"},843:function(e,t,n){"use strict";n.r(t);var a=n(558),c=n.n(a),o=n(0),r=n.n(o),i=n(12),l=n(592),s=n(273),p=n(565),m=n(8),d=n(2),u=n(567),A=n(9),h=n(3),b=n(42),x=n(7),f=n(6);function g(){const e=Object(x.a)([""]);return g=function(){return e},e}function w(){const e=Object(x.a)(["\n  margin-top: 4px;\n  width: 100%;\n"]);return w=function(){return e},e}function E(){const e=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 36px;\n  transform: translateY(10px);\n\n  @media (max-width: 750px) {\n    transform: translateY(7.5px);\n  }\n\n  > img {\n    width: 21px;\n    height: 8px;\n    margin-bottom: 8px;\n  }\n"]);return E=function(){return e},e}function k(){const e=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n\n  .block__miner__reward_tip {\n    display: flex;\n    align-items: center;\n  }\n\n  img {\n    width: ",";\n    height\uff1a 15px;\n    margin: ",";\n    cursor: ",";\n\n    @media(max-width: 750px) {\n      width: ",";\n      height\uff1a 15px;\n      margin-bottom: ",";\n    }\n  }\n"]);return k=function(){return e},e}function O(){const e=Object(x.a)(["\n  a {\n    font-weight: 500;\n    color: ",";\n  }\n\n  a:hover {\n    color: ",";\n  }\n"]);return O=function(){return e},e}function y(){const e=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (min-width: 750px) {\n    height: 20px;\n    margin-top: 14px;\n  }\n\n  .block__root_info_title {\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.6);\n  }\n  .block__root_info_value {\n  }\n"]);return y=function(){return e},e}function j(){const e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 14px;\n\n  > span {\n    width: 100%;\n    height: 1px;\n    background: #e5e5e5;\n  }\n"]);return j=function(){return e},e}function v(){const e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 25px;\n  margin-bottom: 40px;\n\n  @media (max-width: 750px) {\n    margin: 0px;\n    padding: 20px;\n  }\n"]);return v=function(){return e},e}const _=f.c.div(v()),S=f.c.div(j()),N=f.c.div(y()),T=f.c.div(O(),e=>e.theme.primary,e=>e.theme.primary),U=f.c.div(k(),e=>e.sent?"30px":"15px",e=>e.sent?"0 0 3px 5px":"3px 0 0 5px",e=>e.sent?"pointer":"default",e=>e.sent?"27px":"15px",e=>e.sent?"1px":"0"),C=f.c.div(E()),B=f.c.div(w()),Y=f.c.div(g());var R=n(11),J=n(25),z=n(18),V=n.n(z),D=n(612),G=n(566),Q=n(781),H=n.n(Q),I=n(782),L=n.n(I),X=n(783),P=n.n(X),F=n(784),Z=n.n(F),M=n(577),K=n(564),W=n(22),q=n(277),$=n(14),ee=n(4),te=n(275),ne=n.n(te),ae=n(785),ce=n.n(ae),oe=n(10),re=n(552),ie=n(554),le=n(614);const se=({miner:e})=>{if(!e)return r.a.createElement(T,null,h.c.t("address.unable_decode_address"));const t=(n=e,Object($.a)()?Object(b.a)(n,8):Object(b.b)(n,12,50));var n;return r.a.createElement(T,null,t.includes("...")?r.a.createElement(D.a,{placement:"top",title:r.a.createElement(ie.a,{content:e})},r.a.createElement(J.b,{to:"/address/".concat(e),className:"monospace"},t)):r.a.createElement(J.b,{to:"/address/".concat(e),className:"monospace"},t))},pe=({value:e,tooltip:t,sentBlockNumber:n})=>{const a=Object(i.g)();return r.a.createElement(U,{sent:!!n},r.a.createElement("div",{className:"block__miner__reward_value"},e),r.a.createElement(D.a,{placement:"top",title:t},r.a.createElement("div",{className:"block__miner__reward_tip",onClick:()=>{n&&a.push("/block/".concat(n,"#cellbase"))}},r.a.createElement("img",{src:n?ce.a:ne.a,alt:"miner reward"}))))},me=()=>{const e=Object(m.b)().blockState.block,t=Object(o.useState)(!1),n=Object(R.a)(t,2),a=n[0],c=n[1],i=r.a.createElement(re.a,{value:Object(q.c)(Object(ee.f)(e.minerReward))}),l=[{title:h.c.t("block.transactions_root"),content:"".concat(e.transactionsRoot)}],s="".concat(Number(e.number)+A.i);let p=[{title:h.c.t("block.block_height"),content:Object(q.c)(e.number)},{title:h.c.t("block.miner"),content:r.a.createElement(se,{miner:e.minerHash})},{title:h.c.t("transaction.transactions"),content:Object(q.c)(e.transactionsCount)},{title:h.c.t("block.epoch"),content:Object(q.c)(e.epoch)},{title:h.c.t("block.proposal_transactions"),content:e.proposalsCount?Object(q.c)(e.proposalsCount):0},{title:h.c.t("block.epoch_start_number"),content:r.a.createElement(T,null,r.a.createElement(J.b,{to:"/block/".concat(e.startNumber)},Object(q.c)(e.startNumber)))},{title:h.c.t("block.miner_reward"),content:r.a.createElement(pe,{value:"pending"===e.rewardStatus?h.c.t("block.pending"):i,tooltip:"pending"===e.rewardStatus?h.c.t("block.pending_tip"):h.c.t("block.reward_sent_tip"),sentBlockNumber:"pending"===e.rewardStatus?void 0:s})},{title:h.c.t("block.block_index"),content:"".concat(Number(e.blockIndexInEpoch)+1,"/").concat(e.length)},{title:h.c.t("block.difficulty"),content:Object(q.a)(e.difficulty)},{title:h.c.t("block.timestamp"),content:"".concat(Object(W.g)(e.timestamp))},{title:h.c.t("block.nonce"),content:r.a.createElement(Y,null,"0x".concat(new V.a(e.nonce).toString(16)))},{title:h.c.t("block.uncle_count"),content:"".concat(e.unclesCount)}];if(Object($.a)()){const e=[];p.forEach((t,n)=>n%2===0?e.push(t):null),p.forEach((t,n)=>n%2!==0?e.push(t):null),p=e.concat(l),a||p.splice(11,p.length-11)}return r.a.createElement(M.a,{items:p,hideShadow:!0},Object($.a)()?r.a.createElement(C,{onClick:()=>c(!a)},r.a.createElement("img",{src:Object(oe.b)()?a?L.a:H.a:a?Z.a:P.a,alt:a?"show":"hide"})):r.a.createElement(S,null,r.a.createElement("span",null),l.map(e=>r.a.createElement(N,{key:e.title},r.a.createElement("div",{className:"block__root_info_title"},e.title),r.a.createElement("div",{className:"block__root_info_value monospace"},e.content)))))},de=({currentPage:e,pageSize:t,blockParam:n})=>{const a=Object(i.g)(),c=Object(m.b)().blockState,o=c.transactions,l=void 0===o?[]:o,s=c.total,p=Math.ceil(s/t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{title:"".concat(h.c.t("transaction.transactions")," (").concat(Object(q.c)(s),")"),isSingle:!0}),l.map((e,t)=>e&&r.a.createElement(K.a,{key:e.transactionHash,transaction:e,circleCorner:{bottom:t===l.length-1&&1===p},isBlock:!0})),p>1&&r.a.createElement(B,null,r.a.createElement(G.a,{currentPage:e,totalPages:p,onChange:e=>{a.push("/block/".concat(n,"?page=").concat(e,"&size=").concat(t))}})))};var ue=n(276),Ae=n(29);const he=({currentPage:e,pageSize:t,blockParam:n})=>{const a=Object(m.b)(),c=a.blockState,o=a.app;switch(c.status){case"Error":return r.a.createElement(p.a,null);case"OK":return r.a.createElement(de,{currentPage:e,pageSize:t,blockParam:n});case"InProgress":case"None":default:return r.a.createElement(ue.a,{show:o.loading})}};t.default=()=>{const e=Object(m.c)(),t=Object(i.g)().replace,n=Object(i.h)(),a=n.search,p=n.hash,x=Object(i.i)().param,f=c.a.parse(a),g=Object(m.b)().blockState,w=g.status,E=g.block,k=Object(b.h)(f.page,A.t.PageNo),O=Object(b.h)(f.size,A.t.PageSize);return Object(o.useEffect)(()=>{O>A.t.MaxPageSize&&t("/block/".concat(x,"?page=").concat(k,"&size=").concat(A.t.MaxPageSize)),Object(u.a)(x,k,O,e)},[t,x,k,O,e]),Object(o.useEffect)(()=>{let e=p;if(e){e=e.replace("#","");const t=document.getElementById(e);t&&t.scrollIntoView()}},[p]),Object(Ae.b)(()=>{e({type:d.a.UpdateLoading,payload:{loading:"None"===w||"InProgress"===w}})},()=>{e({type:d.c.UpdateBlockStatus,payload:{status:"None"}})},A.m),r.a.createElement(s.a,null,r.a.createElement(_,{className:"container"},r.a.createElement(l.a,{title:h.c.t("block.block"),hash:"OK"===w?E.blockHash:x},r.a.createElement(me,null)),r.a.createElement(he,{currentPage:k,pageSize:O,blockParam:x})))}}}]);
//# sourceMappingURL=38.a21619ae.chunk.js.map
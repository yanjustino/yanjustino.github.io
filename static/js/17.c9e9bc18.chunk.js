(this["webpackJsonpgenius-medical-app"]=this["webpackJsonpgenius-medical-app"]||[]).push([[17],{113:function(e,t,n){"use strict";var a=n(3),r=n(1),c=n(0),i=(n(10),n(30)),o=n(31),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=c.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,u=e.classes,d=e.className,f=e.component,m=void 0===f?"div":f,p=e.container,v=void 0!==p&&p,x=e.direction,g=void 0===x?"row":x,h=e.item,b=void 0!==h&&h,y=e.justify,j=void 0===y?"flex-start":y,w=e.lg,E=void 0!==w&&w,O=e.md,S=void 0!==O&&O,z=e.sm,k=void 0!==z&&z,C=e.spacing,M=void 0===C?0:C,W=e.wrap,F=void 0===W?"wrap":W,I=e.xl,N=void 0!==I&&I,P=e.xs,R=void 0!==P&&P,D=e.zeroMinWidth,q=void 0!==D&&D,B=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(i.a)(u.root,d,v&&[u.container,0!==M&&u["spacing-xs-".concat(String(M))]],b&&u.item,q&&u.zeroMinWidth,"row"!==g&&u["direction-xs-".concat(String(g))],"wrap"!==F&&u["wrap-xs-".concat(String(F))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==o&&u["align-content-xs-".concat(String(o))],"flex-start"!==j&&u["justify-xs-".concat(String(j))],!1!==R&&u["grid-xs-".concat(String(R))],!1!==k&&u["grid-sm-".concat(String(k))],!1!==S&&u["grid-md-".concat(String(S))],!1!==E&&u["grid-lg-".concat(String(E))],!1!==N&&u["grid-xl-".concat(String(N))]);return c.createElement(m,Object(r.a)({className:G,ref:t},B))})),f=Object(o.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.a=f},119:function(e,t,n){"use strict";var a=n(82);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),c=(0,a(n(83)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M5 15v-3h3v-2H5V7H3v3H0v2h3v3z"}),r.default.createElement("circle",{cx:"12",cy:"8.5",r:"1.5",opacity:".3"}),r.default.createElement("path",{d:"M7.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25z",opacity:".3"}),r.default.createElement("path",{d:"M12 12c1.93 0 3.5-1.57 3.5-3.5S13.93 5 12 5 8.5 6.57 8.5 8.5 10.07 12 12 12zm0-5c.83 0 1.5.67 1.5 1.5S12.83 10 12 10s-1.5-.67-1.5-1.5S11.17 7 12 7zm0 6.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM7.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H7.34zM17 12c1.93 0 3.5-1.57 3.5-3.5S18.93 5 17 5c-.24 0-.48.02-.71.07.76.94 1.21 2.13 1.21 3.43 0 1.3-.47 2.48-1.23 3.42.24.05.48.08.73.08zm2.32 2.02c1 .81 1.68 1.87 1.68 3.23V19h3v-1.75c0-1.69-2.44-2.76-4.68-3.23z"})),"GroupAddTwoTone");t.default=c},140:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var a=n(13),r=n(29),c=n(80),i=n(79),o=n(81),s=n(12),l=n.n(s),u=n(16),d=n(93),f=function e(){Object(a.a)(this,e)};f.getByOwner=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.a.get("team/owner/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f.deactivate=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.a.patch("team/deactivate",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var m=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e,{initial:{items:[]}})}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"load",value:function(){var e=this;f.getByOwner("3fa85f64-5717-4562-b3fc-2c963f66afa6").then((function(t){e.setState({payload:t.data.data})}))}},{key:"deactivate",value:function(e){var t=this;f.deactivate({ownerUuid:"3fa85f64-5717-4562-b3fc-2c963f66afa6",teamUuid:e}).then((function(){t.load()}))}}]),n}(o.a),p=n(0),v=n.n(p),x=n(113),g=n(201),h=n(202),b=n(199),y=n(142),j=n(91),w=n.n(j),E=n(95),O=n.n(E),S=n(96),z=n.n(S),k=n(119),C=n.n(k),M=n(92),W=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"notify",value:function(){return v.a.createElement(x.a,{item:!0,xs:12},v.a.createElement(M.a,{title:"Equipes",subtitle:"lista de equipes"},v.a.createElement(g.a,{color:"primary",size:"medium"},v.a.createElement(C.a,null))),v.a.createElement(F,{zindex:1}),v.a.createElement(h.a,null),v.a.createElement(F,{zindex:2}),v.a.createElement(h.a,null),v.a.createElement(F,{zindex:3}),v.a.createElement(h.a,null),v.a.createElement(F,{zindex:3}),v.a.createElement(h.a,null),v.a.createElement(F,{zindex:3}),v.a.createElement(h.a,null),v.a.createElement(F,{zindex:3}),v.a.createElement(h.a,null),v.a.createElement(F,{zindex:3}))}}]),n}(m),F=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).css={root:{padding:"12px 0"},grid:{padding:"0 16px"},avatar:{width:36,marginRight:-12,height:36,zIndex:e.props.zindex,border:"3px solid #FFFFFF"}},e}return Object(r.a)(n,[{key:"notify",value:function(){var e=this;return v.a.createElement(x.a,{style:this.css.root,container:!0,alignItems:"center",onClick:function(){e.redirectTo("/team/detail")}},v.a.createElement(x.a,{container:!0,item:!0,xs:6,direction:"column"},v.a.createElement(b.a,{variant:"button",noWrap:!0},"Nome da Equipe"),v.a.createElement(b.a,{variant:"caption",color:"textSecondary"},"convidado")),v.a.createElement(x.a,{item:!0,xs:6,container:!0,justify:"flex-start",direction:"row-reverse"},v.a.createElement(y.a,{style:this.css.avatar},"+3"),v.a.createElement(y.a,{style:this.css.avatar,src:w.a},"OP"),v.a.createElement(y.a,{style:this.css.avatar,src:O.a},"OP"),v.a.createElement(y.a,{style:this.css.avatar,src:z.a},"OP")))}}]),n}(m)},142:function(e,t,n){"use strict";var a=n(1),r=n(3),c=n(0),i=(n(10),n(30)),o=n(31),s=n(111),l=Object(s.a)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var u=c.forwardRef((function(e,t){var n=e.alt,o=e.children,s=e.classes,u=e.className,d=e.component,f=void 0===d?"div":d,m=e.imgProps,p=e.sizes,v=e.src,x=e.srcSet,g=e.variant,h=void 0===g?"circle":g,b=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,j=function(e){var t=e.src,n=e.srcSet,a=c.useState(!1),r=a[0],i=a[1];return c.useEffect((function(){if(t||n){i(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&i("loaded")},a.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,n]),r}({src:v,srcSet:x}),w=v||x,E=w&&"error"!==j;return y=E?c.createElement("img",Object(a.a)({alt:n,src:v,srcSet:x,sizes:p,className:s.img},m)):null!=o?o:w&&n?n[0]:c.createElement(l,{className:s.fallback}),c.createElement(f,Object(a.a)({className:Object(i.a)(s.root,s.system,s[h],u,!E&&s.colorDefault),ref:t},b),y)}));t.a=Object(o.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(u)},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(102),r=n.n(a).a.create();r.interceptors.request.use((function(e){return e.baseURL="http://localhost:5000/api/",e}),(function(e){return Promise.reject(e)})),r.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))}}]);
//# sourceMappingURL=17.c9e9bc18.chunk.js.map
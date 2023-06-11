(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[192],{5192:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"container"},[e.recipe?t("div",[t("div",{staticClass:"recipe-header mt-3 mb-4"},[t("h1",[e._v(e._s(e.recipe.title))]),t("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"wrapped"},[t("div",{staticClass:"mb-3"},[t("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),t("div",[e._v("Likes: "+e._s(e.recipe.aggregateLikes)+" likes")])]),e._v(" Ingredients: "),t("ul",e._l(e.recipe.extendedIngredients,(function(r,n){return t("li",{key:n+"_"+r.id},[e._v(" "+e._s(r.original)+" ")])})),0)]),t("div",{staticClass:"wrapped"},[e._v(" Instructions: "),t("ol",e._l(e.recipe._instructions,(function(r){return t("li",{key:r.number},[e._v(" "+e._s(r.step)+" ")])})),0)])])])]):e._e()])},a=[],i=t(4981),s=t(532),c=t(486);t(4916),t(5306),t(5827),t(1539),t(1249),t(8309),t(2222);const u={data:function(){return{recipe:null}},created:function(){var e=this;return(0,c.Z)((0,i.Z)().mark((function r(){var t,n,a,c,u,o,l,v,p,d,f;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.prev=1,r.next=4,e.axios.get(e.$root.store.server_domain+"/recipes/info",{params:{id:e.$route.params.recipeId}});case 4:t=r.sent,200!==t.status&&e.$router.replace("/NotFound"),r.next=13;break;case 8:return r.prev=8,r.t0=r["catch"](1),console.log("error.response.status",r.t0.response.status),e.$router.replace("/NotFound"),r.abrupt("return");case 13:n=t.data.recipe,a=n.analyzedInstructions,c=n.instructions,u=n.extendedIngredients,o=n.aggregateLikes,l=n.readyInMinutes,v=n.image,p=n.title,d=a.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,r){return[].concat((0,s.Z)(e),(0,s.Z)(r))}),[]),f={instructions:c,_instructions:d,analyzedInstructions:a,extendedIngredients:u,aggregateLikes:o,readyInMinutes:l,image:v,title:p},e.recipe=f,r.next=22;break;case 19:r.prev=19,r.t1=r["catch"](0),console.log(r.t1);case 22:case"end":return r.stop()}}),r,null,[[0,19],[1,8]])})))()}},o=u;var l=t(3736),v=(0,l.Z)(o,n,a,!1,null,"59ac6e8a",null);const p=v.exports},1530:(e,r,t)=>{"use strict";var n=t(8710).charAt;e.exports=function(e,r,t){return r+(t?n(e,r).length:1)}},3671:(e,r,t)=>{var n=t(9662),a=t(7908),i=t(8361),s=t(6244),c=TypeError,u=function(e){return function(r,t,u,o){n(t);var l=a(r),v=i(l),p=s(l),d=e?p-1:0,f=e?-1:1;if(u<2)while(1){if(d in v){o=v[d],d+=f;break}if(d+=f,e?d<0:p<=d)throw c("Reduce of empty array with no initial value")}for(;e?d>=0:p>d;d+=f)d in v&&(o=t(o,v[d],d,l));return o}};e.exports={left:u(!1),right:u(!0)}},7007:(e,r,t)=>{"use strict";t(4916);var n=t(1470),a=t(8052),i=t(2261),s=t(7293),c=t(5112),u=t(8880),o=c("species"),l=RegExp.prototype;e.exports=function(e,r,t,v){var p=c(e),d=!s((function(){var r={};return r[p]=function(){return 7},7!=""[e](r)})),f=d&&!s((function(){var r=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[o]=function(){return t},t.flags="",t[p]=/./[p]),t.exec=function(){return r=!0,null},t[p](""),!r}));if(!d||!f||t){var g=n(/./[p]),h=r(p,""[e],(function(e,r,t,a,s){var c=n(e),u=r.exec;return u===i||u===l.exec?d&&!s?{done:!0,value:g(r,t,a)}:{done:!0,value:c(t,r,a)}:{done:!1}}));a(String.prototype,e,h[0]),a(l,p,h[1])}v&&u(l[p],"sham",!0)}},647:(e,r,t)=>{var n=t(1702),a=t(7908),i=Math.floor,s=n("".charAt),c=n("".replace),u=n("".slice),o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,t,n,v,p){var d=t+e.length,f=n.length,g=l;return void 0!==v&&(v=a(v),g=o),c(p,g,(function(a,c){var o;switch(s(c,0)){case"$":return"$";case"&":return e;case"`":return u(r,0,t);case"'":return u(r,d);case"<":o=v[u(c,1,-1)];break;default:var l=+c;if(0===l)return a;if(l>f){var p=i(l/10);return 0===p?a:p<=f?void 0===n[p-1]?s(c,1):n[p-1]+s(c,1):a}o=n[l-1]}return void 0===o?"":o}))}},7651:(e,r,t)=>{var n=t(6916),a=t(9670),i=t(614),s=t(4326),c=t(2261),u=TypeError;e.exports=function(e,r){var t=e.exec;if(i(t)){var o=n(t,e,r);return null!==o&&a(o),o}if("RegExp"===s(e))return n(c,e,r);throw u("RegExp#exec called on incompatible receiver")}},2222:(e,r,t)=>{"use strict";var n=t(2109),a=t(7293),i=t(3157),s=t(111),c=t(7908),u=t(6244),o=t(7207),l=t(6135),v=t(5417),p=t(1194),d=t(5112),f=t(7392),g=d("isConcatSpreadable"),h=f>=51||!a((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),x=function(e){if(!s(e))return!1;var r=e[g];return void 0!==r?!!r:i(e)},m=!h||!p("concat");n({target:"Array",proto:!0,arity:1,forced:m},{concat:function(e){var r,t,n,a,i,s=c(this),p=v(s,0),d=0;for(r=-1,n=arguments.length;r<n;r++)if(i=-1===r?s:arguments[r],x(i))for(a=u(i),o(d+a),t=0;t<a;t++,d++)t in i&&l(p,d,i[t]);else o(d+1),l(p,d++,i);return p.length=d,p}})},1249:(e,r,t)=>{"use strict";var n=t(2109),a=t(2092).map,i=t(1194),s=i("map");n({target:"Array",proto:!0,forced:!s},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5827:(e,r,t)=>{"use strict";var n=t(2109),a=t(3671).left,i=t(9341),s=t(7392),c=t(5268),u=!c&&s>79&&s<83,o=u||!i("reduce");n({target:"Array",proto:!0,forced:o},{reduce:function(e){var r=arguments.length;return a(this,e,r,r>1?arguments[1]:void 0)}})},5306:(e,r,t)=>{"use strict";var n=t(2104),a=t(6916),i=t(1702),s=t(7007),c=t(7293),u=t(9670),o=t(614),l=t(8554),v=t(9303),p=t(7466),d=t(1340),f=t(4488),g=t(1530),h=t(8173),x=t(647),m=t(7651),_=t(5112),y=_("replace"),k=Math.max,$=Math.min,b=i([].concat),w=i([].push),I=i("".indexOf),C=i("".slice),E=function(e){return void 0===e?e:String(e)},M=function(){return"$0"==="a".replace(/./,"$0")}(),Z=function(){return!!/./[y]&&""===/./[y]("a","$0")}(),A=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,r,t){var i=Z?"$":"$0";return[function(e,t){var n=f(this),i=l(e)?void 0:h(e,y);return i?a(i,e,n,t):a(r,d(n),e,t)},function(e,a){var s=u(this),c=d(e);if("string"==typeof a&&-1===I(a,i)&&-1===I(a,"$<")){var l=t(r,s,c,a);if(l.done)return l.value}var f=o(a);f||(a=d(a));var h=s.global;if(h){var _=s.unicode;s.lastIndex=0}var y=[];while(1){var M=m(s,c);if(null===M)break;if(w(y,M),!h)break;var Z=d(M[0]);""===Z&&(s.lastIndex=g(c,p(s.lastIndex),_))}for(var A="",R=0,L=0;L<y.length;L++){M=y[L];for(var S=d(M[0]),z=k($(v(M.index),c.length),0),F=[],N=1;N<M.length;N++)w(F,E(M[N]));var T=M.groups;if(f){var O=b([S],F,z,c);void 0!==T&&w(O,T);var j=d(n(a,void 0,O))}else j=x(S,c,z,F,T,a);z>=R&&(A+=C(c,R,z)+j,R=z+S.length)}return A+C(c,R)}]}),!A||!M||Z)}}]);
//# sourceMappingURL=192.bfec9084.js.map
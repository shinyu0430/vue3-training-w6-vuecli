(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52646044"],{"057f":function(t,e,r){var n=r("c6b6"),c=r("fc6a"),o=r("241c").f,i=r("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(e){return i(a)}};t.exports.f=function(t){return a&&"Window"==n(t)?u(t):o(c(t))}},"0b42":function(t,e,r){var n=r("da84"),c=r("e8b5"),o=r("68ee"),i=r("861d"),a=r("b622"),u=a("species"),s=n.Array;t.exports=function(t){var e;return c(t)&&(e=t.constructor,o(e)&&(e===s||c(e.prototype))?e=void 0:i(e)&&(e=e[u],null===e&&(e=void 0))),void 0===e?s:e}},"1dde":function(t,e,r){var n=r("d039"),c=r("b622"),o=r("2d00"),i=c("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"428f":function(t,e,r){var n=r("da84");t.exports=n},"4dae":function(t,e,r){var n=r("da84"),c=r("23cb"),o=r("07fa"),i=r("8418"),a=n.Array,u=Math.max;t.exports=function(t,e,r){for(var n=o(t),s=c(e,n),f=c(void 0===r?n:r,n),d=a(u(f-s,0)),b=0;s<f;s++,b++)i(d,b,t[s]);return d.length=b,d}},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),c=r("1a2d"),o=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});c(e,t)||i(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("a04b"),c=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?c.f(t,i,o(0,r)):t[i]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),c=r("da84"),o=r("d039"),i=r("e8b5"),a=r("861d"),u=r("7b0b"),s=r("07fa"),f=r("8418"),d=r("65f0"),b=r("1dde"),l=r("b622"),p=r("2d00"),v=l("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",O=c.TypeError,m=p>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),j=b("concat"),y=function(t){if(!a(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},w=!m||!j;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,n,c,o,i=u(this),a=d(i,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],y(o)){if(c=s(o),b+c>g)throw O(h);for(r=0;r<c;r++,b++)r in o&&f(a,b,o[r])}else{if(b>=g)throw O(h);f(a,b++,o)}return a.length=b,a}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),c=r("da84"),o=r("d066"),i=r("2ba4"),a=r("c65b"),u=r("e330"),s=r("c430"),f=r("83ab"),d=r("4930"),b=r("d039"),l=r("1a2d"),p=r("e8b5"),v=r("1626"),g=r("861d"),h=r("3a9b"),O=r("d9b5"),m=r("825a"),j=r("7b0b"),y=r("fc6a"),w=r("a04b"),x=r("577e"),S=r("5c6c"),P=r("7c73"),F=r("df75"),k=r("241c"),C=r("057f"),$=r("7418"),A=r("06cf"),E=r("9bf2"),N=r("37e8"),J=r("d1e7"),T=r("f36a"),B=r("6eeb"),U=r("5692"),_=r("f772"),I=r("d012"),M=r("90e3"),q=r("b622"),D=r("e538"),Q=r("746f"),R=r("d44e"),W=r("69f3"),z=r("b727").forEach,G=_("hidden"),H="Symbol",K="prototype",L=q("toPrimitive"),V=W.set,X=W.getterFor(H),Y=Object[K],Z=c.Symbol,tt=Z&&Z[K],et=c.TypeError,rt=c.QObject,nt=o("JSON","stringify"),ct=A.f,ot=E.f,it=C.f,at=J.f,ut=u([].push),st=U("symbols"),ft=U("op-symbols"),dt=U("string-to-symbol-registry"),bt=U("symbol-to-string-registry"),lt=U("wks"),pt=!rt||!rt[K]||!rt[K].findChild,vt=f&&b((function(){return 7!=P(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=ct(Y,e);n&&delete Y[e],ot(t,e,r),n&&t!==Y&&ot(Y,e,n)}:ot,gt=function(t,e){var r=st[t]=P(tt);return V(r,{type:H,tag:t,description:e}),f||(r.description=e),r},ht=function(t,e,r){t===Y&&ht(ft,e,r),m(t);var n=w(e);return m(r),l(st,n)?(r.enumerable?(l(t,G)&&t[G][n]&&(t[G][n]=!1),r=P(r,{enumerable:S(0,!1)})):(l(t,G)||ot(t,G,S(1,{})),t[G][n]=!0),vt(t,n,r)):ot(t,n,r)},Ot=function(t,e){m(t);var r=y(e),n=F(r).concat(xt(r));return z(n,(function(e){f&&!a(jt,r,e)||ht(t,e,r[e])})),t},mt=function(t,e){return void 0===e?P(t):Ot(P(t),e)},jt=function(t){var e=w(t),r=a(at,this,e);return!(this===Y&&l(st,e)&&!l(ft,e))&&(!(r||!l(this,e)||!l(st,e)||l(this,G)&&this[G][e])||r)},yt=function(t,e){var r=y(t),n=w(e);if(r!==Y||!l(st,n)||l(ft,n)){var c=ct(r,n);return!c||!l(st,n)||l(r,G)&&r[G][n]||(c.enumerable=!0),c}},wt=function(t){var e=it(y(t)),r=[];return z(e,(function(t){l(st,t)||l(I,t)||ut(r,t)})),r},xt=function(t){var e=t===Y,r=it(e?ft:y(t)),n=[];return z(r,(function(t){!l(st,t)||e&&!l(Y,t)||ut(n,st[t])})),n};if(d||(Z=function(){if(h(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?x(arguments[0]):void 0,e=M(t),r=function(t){this===Y&&a(r,ft,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),vt(this,e,S(1,t))};return f&&pt&&vt(Y,e,{configurable:!0,set:r}),gt(e,t)},tt=Z[K],B(tt,"toString",(function(){return X(this).tag})),B(Z,"withoutSetter",(function(t){return gt(M(t),t)})),J.f=jt,E.f=ht,N.f=Ot,A.f=yt,k.f=C.f=wt,$.f=xt,D.f=function(t){return gt(q(t),t)},f&&(ot(tt,"description",{configurable:!0,get:function(){return X(this).description}}),s||B(Y,"propertyIsEnumerable",jt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),z(F(lt),(function(t){Q(t)})),n({target:H,stat:!0,forced:!d},{for:function(t){var e=x(t);if(l(dt,e))return dt[e];var r=Z(e);return dt[e]=r,bt[r]=e,r},keyFor:function(t){if(!O(t))throw et(t+" is not a symbol");if(l(bt,t))return bt[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),n({target:"Object",stat:!0,forced:!d,sham:!f},{create:mt,defineProperty:ht,defineProperties:Ot,getOwnPropertyDescriptor:yt}),n({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:wt,getOwnPropertySymbols:xt}),n({target:"Object",stat:!0,forced:b((function(){$.f(1)}))},{getOwnPropertySymbols:function(t){return $.f(j(t))}}),nt){var St=!d||b((function(){var t=Z();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));n({target:"JSON",stat:!0,forced:St},{stringify:function(t,e,r){var n=T(arguments),c=e;if((g(e)||void 0!==t)&&!O(t))return p(e)||(e=function(t,e){if(v(c)&&(e=a(c,this,t,e)),!O(e))return e}),n[1]=e,i(nt,null,n)}})}if(!tt[L]){var Pt=tt.valueOf;B(tt,L,(function(t){return a(Pt,this)}))}R(Z,H),I[G]=!0},b727:function(t,e,r){var n=r("0366"),c=r("e330"),o=r("44ad"),i=r("7b0b"),a=r("07fa"),u=r("65f0"),s=c([].push),f=function(t){var e=1==t,r=2==t,c=3==t,f=4==t,d=6==t,b=7==t,l=5==t||d;return function(p,v,g,h){for(var O,m,j=i(p),y=o(j),w=n(v,g),x=a(y),S=0,P=h||u,F=e?P(p,x):r||b?P(p,0):void 0;x>S;S++)if((l||S in y)&&(O=y[S],m=w(O,S,j),t))if(e)F[S]=m;else if(m)switch(t){case 3:return!0;case 5:return O;case 6:return S;case 2:s(F,O)}else switch(t){case 4:return!1;case 7:s(F,O)}return d?-1:c||f?f:F}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},e01a:function(t,e,r){"use strict";var n=r("23e7"),c=r("83ab"),o=r("da84"),i=r("e330"),a=r("1a2d"),u=r("1626"),s=r("3a9b"),f=r("577e"),d=r("9bf2").f,b=r("e893"),l=o.Symbol,p=l&&l.prototype;if(c&&u(l)&&(!("description"in p)||void 0!==l().description)){var v={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=s(p,this)?new l(t):void 0===t?l():l(t);return""===t&&(v[e]=!0),e};b(g,l),g.prototype=p,p.constructor=g;var h="Symbol(test)"==String(l("test")),O=i(p.toString),m=i(p.valueOf),j=/^Symbol\((.*)\)[^)]+$/,y=i("".replace),w=i("".slice);d(p,"description",{configurable:!0,get:function(){var t=m(this),e=O(t);if(a(v,t))return"";var r=h?w(e,7,-1):y(e,j,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:g})}},e538:function(t,e,r){var n=r("b622");e.f=n},e6dc:function(t,e,r){"use strict";r.r(e);r("a4d3"),r("e01a");var n=r("7a23"),c={class:"container"},o={class:"row justify-content-center"},i={class:"col-5",style:{height:"100vh",overflow:"scroll"}},a={class:"col-3"},u={key:0},s=["src"],f={class:"card-body"},d={class:"card-text"},b={class:"badge bg-primary"},l={class:"text-muted"},p=Object(n["h"])(" 個/元"),v={class:"d-flex flex-wrap"},g=["src"];function h(t,e,r,h,O,m){var j=Object(n["C"])("Card");return Object(n["w"])(),Object(n["f"])("div",c,[Object(n["g"])("div",o,[Object(n["g"])("div",i,[(Object(n["w"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(O.products,(function(t){return Object(n["w"])(),Object(n["d"])(j,{product:t,onShowProduct:m.showProduct,key:t.id},null,8,["product","onShowProduct"])})),128))]),Object(n["g"])("div",a,[O.temp.id?(Object(n["w"])(),Object(n["f"])("div",u,[Object(n["g"])("div",null,[Object(n["g"])("img",{src:O.temp.imageUrl,class:"card-img-top"},null,8,s),Object(n["g"])("div",f,[Object(n["g"])("div",d,[Object(n["g"])("h3",null,[Object(n["h"])(Object(n["F"])(O.temp.title),1),Object(n["g"])("span",b,Object(n["F"])(O.temp.category),1)]),Object(n["g"])("p",null,"商品描述："+Object(n["F"])(O.temp.description),1),Object(n["g"])("p",null,"商品內容："+Object(n["F"])(O.temp.content),1),Object(n["g"])("p",null,[Object(n["h"])(Object(n["F"])(O.temp.price)+" ",1),Object(n["g"])("del",l,Object(n["F"])(O.temp.origin_price),1),p])])])]),Object(n["g"])("div",v,[(Object(n["w"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(O.temp.imagesUrl,(function(t,e){return Object(n["w"])(),Object(n["f"])("img",{src:t,alt:"",class:"w-50 img-fluid",key:e},null,8,g)})),128))])])):Object(n["e"])("",!0)])])])}r("99af");var O={class:"card mb-3"},m={class:"row g-0"},j={class:"col-md-4"},y=["src","alt"],w={class:"col-md-8"},x={class:"card-body"},S={class:"badge badge-pill badge-secondary bg-secondary"},P={class:"card-title"},F={class:"card-text"},k={class:"text-muted text-decoration-line-through"};function C(t,e,r,c,o,i){return Object(n["w"])(),Object(n["f"])("div",O,[Object(n["g"])("div",m,[Object(n["g"])("div",j,[Object(n["g"])("img",{class:"img-fluid",src:r.product.imageUrl,alt:r.product.title},null,8,y)]),Object(n["g"])("div",w,[Object(n["g"])("div",x,[Object(n["g"])("span",S,Object(n["F"])(r.product.category),1),Object(n["g"])("h5",P,Object(n["F"])(r.product.title),1),Object(n["g"])("p",F,[Object(n["g"])("small",k,"$"+Object(n["F"])(r.product.origin_price),1),Object(n["g"])("small",null,"$"+Object(n["F"])(r.product.price),1)]),Object(n["g"])("button",{class:"btn btn-outline-success btn-sm",onClick:e[0]||(e[0]=function(t){return i.addToCart(r.product.id)})},"加入購物車"),Object(n["g"])("button",{class:"btn btn-outline-primary btn-sm",onClick:e[1]||(e[1]=function(t){return i.showProduct(r.product)})},"查看詳細資訊")])])])])}var $={props:["product"],data:function(){return{}},methods:{addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("record-product","/cart"),n={data:{product_id:t,qty:e}};this.$http.post(r,n).then((function(t){alert(t.data.message)})).catch((function(t){alert(t.data.message)}))},showProduct:function(t){this.$emit("showProduct",t)}}},A=r("6b0d"),E=r.n(A);const N=E()($,[["render",C]]);var J=N,T={data:function(){return{products:[],temp:{}}},components:{Card:J},methods:{getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("record-product","/products/all");this.$http.get(e).then((function(e){t.products=e.data.products,t.temp=e.data.products[0]})).catch((function(t){alert(t.response.data.message)}))},showProduct:function(t){this.temp=t}},created:function(){this.getProducts()}};const B=E()(T,[["render",h]]);e["default"]=B},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-52646044.2b938477.js.map
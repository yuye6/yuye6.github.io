(function(t){function s(s){for(var e,n,c=s[0],o=s[1],l=s[2],d=0,p=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);u&&u(s);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,s=0;s<r.length;s++){for(var a=r[s],e=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(e=!1)}e&&(r.splice(s--,1),t=n(n.s=a[0]))}return t}var e={},i={app:0},r=[];function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,s,a){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)n.d(a,e,function(s){return t[s]}.bind(null,e));return a},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"0025":function(t,s,a){},"0edf":function(t,s,a){},"122d":function(t,s,a){},"2eae":function(t,s,a){},"30db":function(t,s,a){"use strict";var e=a("0025"),i=a.n(e);i.a},3410:function(t,s,a){"use strict";var e=a("0edf"),i=a.n(e);i.a},"38a0":function(t,s,a){"use strict";var e=a("6f2a"),i=a.n(e);i.a},3924:function(t,s,a){"use strict";var e=a("122d"),i=a.n(e);i.a},"50ba":function(t,s,a){"use strict";var e=a("eb90"),i=a.n(e);i.a},"511f":function(t,s,a){},"56d7":function(t,s,a){"use strict";a.r(s);a("d3b7"),a("0fb7"),a("450d");var e=a("f529"),i=a.n(e),r=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),n=a("bc3a"),c=a.n(n),o=a("a7fe"),l=a.n(o),u=a("caf9"),d=a("00e7"),p=a.n(d),v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},m=[],f={name:"App",components:{},methods:{getUser:function(){var t=this;this.axios.get("/user").then((function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.$store.dispatch("saveUserName",s.username)}))},getCartCount:function(){var t=this;this.axios.get("/carts/products/sum").then((function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.$store.dispatch("saveCartCount",s)}))}},mounted:function(){this.$cookie.get("userId")&&(this.getUser(),this.getCartCount())}},h=f,_=(a("5c0b"),a("2877")),g=Object(_["a"])(h,v,m,!1,null,null,null),C=g.exports,b=a("8c4f"),w=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("nav-header"),a("router-view"),a("nav-footer")],1)},x=[],y=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header"},[a("div",{staticClass:"nav-topbar"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"topbar-user"},[t.username?a("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.username))]):a("router-link",{attrs:{to:"/login"}},[a("a",{attrs:{href:"javascript:;"}},[t._v("登录")])]),t.username?a("a",{attrs:{href:"javascript:;"},on:{click:t.logOut}},[t._v("退出")]):t._e(),t.username?a("a",{attrs:{href:"javascript:;"}},[t._v("我的订单")]):t._e(),a("router-link",{attrs:{to:"/register"}},[a("a",{attrs:{href:"javascript:;"}},[t._v("注册")])]),a("router-link",{attrs:{to:"/cart"}},[a("a",{staticClass:"shop-car",attrs:{href:"javascript:;"}},[a("span",{staticClass:"car-icon"}),t._v(" 购物车("+t._s(t.cartCount)+") ")])])],1)])]),a("div",{staticClass:"nav-header"},[a("div",{staticClass:"container"},[t._m(1),a("div",{staticClass:"header-menu"},[a("div",{staticClass:"menu-item"},[a("h3",[t._v("小米手机")]),a("div",{staticClass:"children"},[a("ul",t._l(t.phoneList,(function(s){return a("li",{key:s.id,staticClass:"product"},[a("div",{staticClass:"pro-img"},[a("img",{attrs:{src:s.mainImage,alt:"item.subtitle"}})]),a("div",{staticClass:"pro-name"},[t._v(" "+t._s(s.name)+" ")]),a("div",{staticClass:"pro-price"},[t._v(" "+t._s(t._f("currency")(s.price))+" ")])])})),0)])]),t._m(2),t._m(3)]),t._m(4)])])])},j=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"topbar-menu"},[a("a",{attrs:{href:"javascript:;"}},[t._v("小米商城")]),a("a",{attrs:{href:"javascript:;"}},[t._v("MIUI")]),a("a",{attrs:{href:"javascript:;"}},[t._v("云服务")]),a("a",{attrs:{href:"javascript:;"}},[t._v("协议规则")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header-logo"},[a("a",{attrs:{href:"/#/index"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"menu-item"},[a("h3",[t._v("RedMi手机")]),a("div",{staticClass:"children"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"menu-item"},[a("h3",[t._v("电视")]),a("div",{staticClass:"children"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header-search"},[a("div",{staticClass:"wrapper"},[a("input",{attrs:{type:"text",name:"keyword"}}),a("div",{staticClass:"icon-search"})])])}],k=(a("a434"),a("b680"),a("5530")),$=a("2f62"),E={name:"nav-header",data:function(){return{phoneList:[]}},computed:Object(k["a"])({},Object($["c"])(["username","cartCount"])),methods:{getPhoneInfo:function(){var t=this;this.axios.get("/products",{params:{categoryId:100012}}).then((function(s){s.list.length>6&&(t.phoneList=s.list.splice(0,6))}))},logOut:function(){var t=this;this.axios.post("/user/logout").then((function(){t.$message.success("退出成功"),t.$cookie.set("userId","",{expires:"-1"}),t.$store.dispatch("saveUserName",""),t.$store.dispatch("saveCartCount",0)}))}},filters:{currency:function(t){return t?t.toFixed()+"元起":0}},mounted:function(){this.getPhoneInfo()}},S=E,P=(a("8ee7"),Object(_["a"])(S,y,j,!1,null,null,null)),O=P.exports,I=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-logo"},[a("img",{staticClass:"logo-img",attrs:{src:"imgs/logo-footer.png",alt:""}})]),a("p",{staticClass:"footer-title"},[t._v("小米商城")]),a("div",{staticClass:"footer-link"},[a("a",{attrs:{href:"javascript:;",target:"_blank"}},[t._v("MIUI")]),a("span",[t._v("|")]),a("a",{attrs:{href:"javascript:;",target:"_blank"}},[t._v("米家")]),a("span",[t._v("|")]),a("a",{attrs:{href:"javascript:;",target:"_blank"}},[t._v("米聊")]),a("span",[t._v("|")]),a("a",{attrs:{href:"javascript:;",target:"_blank"}},[t._v("多看")]),a("span",[t._v("|")]),a("a",{attrs:{href:"javascript:;",target:"_blank"}},[t._v("游戏")]),a("span",[t._v("|")]),a("a",{attrs:{href:"javascript:;",target:"_blank"}},[t._v("政企服务")])]),a("div",{staticClass:"footer-copyright"},[t._v(" © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号 ")])])}],N={name:"nav-footer"},M=N,U=(a("920e"),Object(_["a"])(M,I,T,!1,null,null,null)),L=U.exports,A={name:"home",components:{NavHeader:O,NavFooter:L}},B=A,D=Object(_["a"])(B,w,x,!1,null,null,null),G=D.exports,z=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index"},[a("div",{staticClass:"container"},[a("div",{staticClass:"swiper-box"},[a("div",{staticClass:"menu"},[a("ul",{staticClass:"menu-wrap"},[a("li",{staticClass:"menu-item"},[a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[t._v("手机 电话卡")]),a("div",{staticClass:"children"},t._l(t.menuList,(function(s,e){return a("ul",{key:e},t._l(s,(function(s){return a("li",{key:s.id},[a("a",{attrs:{href:"/#/product"+s.id}},[a("img",{attrs:{src:"sub.imgUrl",alt:""}}),t._v(" "+t._s(s.name)+" ")])])})),0)})),0)]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])]),a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[t._l(t.swiperList,(function(t){return a("swiper-slide",{key:t.id},[a("router-link",{attrs:{to:"/product/"+t.id}},[a("a",{attrs:{href:"javascipt:;"}},[a("img",{attrs:{src:t.imgUrl,alt:""}})])])],1)})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1),a("div",{staticClass:"ads-box"},t._l(t.adsList,(function(t){return a("a",{key:t.id,attrs:{href:"/#/product/"+t.id}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"item.img",expression:"'item.img'"}],attrs:{alt:""}})])})),0),a("div",{staticClass:"banner-box"},[a("a",{attrs:{href:"/#/product/30"}},[a("img",{attrs:{src:"imgs/banner-1.png",alt:""}})])])]),a("div",{staticClass:"product"},[a("div",{staticClass:"container"},[a("h3",[t._v("手机")]),a("div",{staticClass:"product-info"},[a("div",{staticClass:"info-left"},[a("a",{attrs:{href:"javascipt:;"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/imgs/mix-alpha.jpg",expression:"'/imgs/mix-alpha.jpg'"}],attrs:{alt:""}})])]),a("div",{staticClass:"info-right"},t._l(t.productList,(function(s,e){return a("ul",{key:e,staticClass:"phone-list"},t._l(s,(function(s,e){return a("li",{key:s.id,staticClass:"item"},[a("span",{class:{"pro-kill":e%2===0,"pro-new":e%2!==0}},[t._v("新品")]),a("div",{staticClass:"pro-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"item.mainImage",expression:"'item.mainImage'"}],attrs:{alt:""}})]),a("h3",{staticClass:"pro-name"},[t._v(t._s(s.name))]),a("div",{staticClass:"pro-desc"},[t._v(t._s(s.subtitle))]),a("div",{staticClass:"pro-price"},[t._v(" "+t._s(s.price)+"元 "),a("span",{staticClass:"pro-car",on:{click:function(a){return t.addCart(s.id)}}})])])})),0)})),0)])])]),a("service-bar"),a("modal",{attrs:{title:"提示",sureText:"查看购物车",btnType:"sure",modalType:"middle",showModal:t.showModal},on:{"close-modal":function(s){t.showModal=!1},submit:t.goToCart,cancel:function(s){t.showModal=!1}},scopedSlots:t._u([{key:"body",fn:function(){return[a("p",[t._v("商品添加成功")])]},proxy:!0}])})],1)},V=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"menu-item"},[a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[t._v("电视 盒子")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"menu-item"},[a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[t._v("笔记本 平板")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"menu-item"},[a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[t._v("家电 插线板")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"menu-item"},[a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[t._v("出行 穿戴")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"menu-item"},[a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[t._v("耳机 音箱")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"menu-item"},[a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[t._v("电源 配件")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"menu-item"},[a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[t._v("生活 箱包")])])}],F=(a("fb6a"),function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)}),R=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"service-bar"},[a("div",{staticClass:"container"},[a("ul",[a("li",[a("span",{staticClass:"icon-setting"}),a("span",[t._v("预约维修服务")])]),a("li",[a("span",{staticClass:"icon-return"}),a("span",[t._v("7天无理由退货")])]),a("li",[a("span",{staticClass:"icon-exchange"}),a("span",[t._v("15天免费换货")])]),a("li",[a("span",{staticClass:"icon-post"}),a("span",[t._v("满150元包邮")])])])])])}],q={name:"service-bar"},H=q,J=(a("f8b2"),Object(_["a"])(H,F,R,!1,null,null,null)),Q=J.exports,Y=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"slide"}},[t.showModal?a("div",{staticClass:"modal"},[a("div",{staticClass:"mask"}),a("div",{staticClass:"dialog"},[a("div",{staticClass:"modal-header"},[a("span",[t._v(t._s(t.title))]),a("a",{staticClass:"icon-close",attrs:{href:"javascript:;"},on:{click:function(s){return t.$emit("close-modal")}}})]),a("div",{staticClass:"modal-body"},[t._t("body")],2),a("div",{staticClass:"modal-footer"},["sure"===t.btnType?a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(s){return t.$emit("submit")}}},[t._v(t._s(t.sureText))]):t._e(),"cancle"===t.btnType?a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(s){return t.$emit("cancel")}}},[t._v(t._s(t.cancelText))]):t._e(),t.all?a("div",{staticClass:"btn-group"},[a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(s){return t.$emit("submit")}}},[t._v(t._s(t.sureText))]),a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(s){return t.$emit("cancel")}}},[t._v(t._s(t.cancelText))])]):t._e()])])]):t._e()])},K=[],W={name:"Modal",props:{modalType:{type:String,default:"form"},title:String,btnType:String,sureText:{type:String,default:"确认"},cancelText:{type:String,default:"取消"},showModal:Boolean},methods:{handleCloseClick:function(){this.showModal=!1}}},X=W,Z=(a("30db"),Object(_["a"])(X,Y,K,!1,null,null,null)),tt=Z.exports,st=a("7212"),at=(a("a7a3"),{name:"index",data:function(){return{swiperList:[{id:42,imgUrl:"/imgs/slider/slide-1.jpg"},{id:45,imgUrl:"/imgs/slider/slide-2.jpg"},{id:46,imgUrl:"/imgs/slider/slide-3.jpg"}],swiperOptions:{speed:900,autoplay:{delay:3e3},loop:!0,loopAdditionalSlides:3,effect:"cube",pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},menuList:[[{id:30,imgUrl:"/imgs/item-box-1.png",name:"小米cc9"},{id:31,imgUrl:"/imgs/item-box-2.png",name:"小米cc9"},{id:32,imgUrl:"/imgs/item-box-3.jpg",name:"小米cc9"},{id:33,imgUrl:"/imgs/item-box-4.jpg",name:"小米cc9"}],[],[],[],[],[]],adsList:[{id:33,img:"/imgs/ads/ads-1.png"},{id:48,img:"/imgs/ads/ads-2.jpg"},{id:45,img:"/imgs/ads/ads-3.png"},{id:47,img:"/imgs/ads/ads-4.jpg"}],productList:[],showModal:!1}},components:{ServiceBar:Q,Swiper:st["Swiper"],SwiperSlide:st["SwiperSlide"],Modal:tt},methods:{swiperOp:function(){this.swiper.el.onmouseover=function(){this.swiper.autoplay.stop()},this.swiper.el.onmouseout=function(){this.swiper.autoplay.start()}},getProductInfo:function(){var t=this;this.axios.get("/products",{params:{categoryId:100012}}).then((function(s){t.productList=[s.list.slice(0,4),s.list.slice(4,8)]}))},addCart:function(t){var s=this;this.axios.post("/carts",{productId:t,selected:!0}).then((function(t){s.showModal=!0,s.$store.dispatch("saveCartCount",t.cartTotalQuantity)})).catch((function(){s.showModal=!0}))},goToCart:function(){this.$router.push("/cart")}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){this.swiperOp(),this.getProductInfo()}}),et=at,it=(a("bd5f"),Object(_["a"])(et,z,V,!1,null,null,null)),rt=it.exports,nt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"product"},[a("product-params",{attrs:{title:t.proDuct.name},scopedSlots:t._u([{key:"buy",fn:function(){return[a("button",{staticClass:"btn",on:{click:t.buy}},[t._v("立即购买")])]},proxy:!0}])}),a("div",{staticClass:"content"},[a("div",{staticClass:"item-bg"},[a("h2",[t._v(t._s(t.proDuct.name))]),a("h3",[t._v(t._s(t.proDuct.subtitle))]),t._m(0),a("div",{staticClass:"price"},[a("span",[t._v("￥"),a("em",[t._v(t._s(t.proDuct.price))])])])]),a("div",{staticClass:"item-bg-2"}),a("div",{staticClass:"item-bg-3"}),a("div",{staticClass:"item-swiper"},[a("swiper",{attrs:{options:t.swiperOption}},[a("swiper-slide",[a("img",{attrs:{src:"/imgs/product/gallery-2.png",alt:""}})]),a("swiper-slide",[a("img",{attrs:{src:"/imgs/product/gallery-3.png",alt:""}})]),a("swiper-slide",[a("img",{attrs:{src:"/imgs/product/gallery-4.png",alt:""}})]),a("swiper-slide",[a("img",{attrs:{src:"/imgs/product/gallery-5.jpg",alt:""}})]),a("swiper-slide",[a("img",{attrs:{src:"/imgs/product/gallery-6.jpg",alt:""}})]),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1),a("p",{staticClass:"desc"},[t._v("小米8 AI变焦双摄拍摄")])],1),a("div",{staticClass:"item-video"},[t._m(1),t._m(2),a("div",{staticClass:"video-bg",on:{click:function(s){t.showVideo=!0}}}),a("div",{staticClass:"video-box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showVideo,expression:"showVideo"}],staticClass:"overlay"}),a("transition",{attrs:{name:"slide"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showVideo,expression:"showVideo"}],staticClass:"video"},[a("span",{staticClass:"icon-close",on:{click:function(s){t.showVideo=!1}}}),a("video",{attrs:{src:"/imgs/product/video.mp4",muted:"muted",autoplay:"autoplay",controls:"controls"},domProps:{muted:!0}})])])],1)])])],1)},ct=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("a",{attrs:{href:"",id:""}},[t._v("全球首款双频 GP")]),a("span",[t._v("|")]),a("a",{attrs:{href:"",id:""}},[t._v("骁龙845")]),a("span",[t._v("|")]),a("a",{attrs:{href:"",id:""}},[t._v("AI 变焦双摄")]),a("span",[t._v("|")]),a("a",{attrs:{href:"",id:""}},[t._v("红外人脸识别")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h2",[t._v("60帧超慢动作摄影"),a("br"),t._v("慢慢回味每一瞬间的精彩")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！"),a("br"),t._v("更能AI 精准分析视频内容，15个场景智能匹配背景音效。")])}],ot=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"nav-bar",class:{isFixed:t.isFixed}},[a("div",{staticClass:"container"},[a("div",{staticClass:"pro-title"},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"pro-param"},[a("a",{attrs:{href:"javascript:;"}},[t._v("概述")]),a("span",[t._v("|")]),a("a",{attrs:{href:"javascript:;"}},[t._v("参数")]),a("span",[t._v("|")]),a("a",{staticClass:"dis",attrs:{href:"javascript:;"}},[t._v("用户评价")]),t._t("buy")],2)])])},lt=[],ut={name:"ProductParams",props:{title:String},data:function(){return{isFixed:!1}},methods:{handleScorll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isFixed=t>152}},mounted:function(){window.addEventListener("scroll",this.handleScorll)},destroyed:function(){window.removeEventListener("scroll",this.handleScorll)}},dt=ut,pt=(a("38a0"),Object(_["a"])(dt,ot,lt,!1,null,null,null)),vt=pt.exports,mt={name:"product",components:{ProductParams:vt},data:function(){return{showVideo:!1,proDuct:{}}},methods:{getProductInfo:function(){var t=this,s=this.$route.params.id;this.axios.get("/products/".concat(s)).then((function(s){t.proDuct=s}))},buy:function(){var t=this.$route.params.id;this.$router.push("/detail/".concat(t))}},mounted:function(){this.getProductInfo()}},ft=mt,ht=(a("7aba"),Object(_["a"])(ft,nt,ct,!1,null,null,null)),_t=ht.exports,gt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"login"},[t._m(0),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"container"},[a("div",{staticClass:"login-form"},[t._m(1),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入帐号"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),a("div",{staticClass:"btn-box"},[a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:t.login}},[t._v("登录")])]),a("div",{staticClass:"tips"},[a("router-link",{attrs:{to:"/register"}},[a("div",{staticClass:"reg"},[t._v("没有账号？立即注册")])])],1)])])]),t._m(2)])},Ct=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("a",{attrs:{href:"/#/index"}},[a("img",{attrs:{src:"/imgs/login-logo.png",alt:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",[a("span",{staticClass:"checked"},[t._v("帐号登录")]),a("span",{staticClass:"sep-line"},[t._v("|")]),a("span",[t._v("扫码登录")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-link"},[a("a",{attrs:{href:"javascript:;"}},[t._v("111")]),a("span",[t._v("|")]),a("a",{attrs:{href:"javascript:;"}},[t._v("1111")]),a("span",[t._v("|")]),a("a",{attrs:{href:"javascript:;"}},[t._v("1111")]),a("span",[t._v("|")]),a("a",{attrs:{href:"javascript:;"}},[t._v("11111111")])]),a("p",{staticClass:"copyright"},[t._v("Copyright ©2019 mi.futurefe.com All Rights Reserved.")])])}],bt={name:"login",data:function(){return{username:"",password:""}},methods:Object(k["a"])({login:function(){var t=this,s=this.username,a=this.password;this.axios.post("/user/login",{username:s,password:a}).then((function(s){t.$cookie.set("userId",s.id,{expires:"Session"}),t.saveUserName(s.username),t.$router.push("/index")}))}},Object($["b"])(["saveUserName"]))},wt=bt,xt=(a("50ba"),Object(_["a"])(wt,gt,Ct,!1,null,null,null)),yt=xt.exports,jt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"register"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"register-box"},[t._m(0),a("h3",{staticClass:"title"},[t._v("注册小米账号")]),a("div",{staticClass:"register-form"},[a("div",{staticClass:"user"},[a("label",[t._v("用户名")]),a("div",{staticClass:"user-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})])]),a("div",{staticClass:"pwd"},[a("label",[t._v("密码")]),a("div",{staticClass:"pwd-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})])]),a("div",{staticClass:"em"},[a("label",[t._v("邮箱")]),a("div",{staticClass:"em-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})])]),a("div",{staticClass:"reg-btn-wrapper"},[a("a",{staticClass:"reg-btn btn",attrs:{href:"javascript:;"},on:{click:t.register}},[t._v("立即注册")]),a("a",{staticClass:"reg-btn btn log",attrs:{href:"/#/login"}},[t._v("返回登录页面")])])])])])])},kt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"logo"},[a("img",{staticClass:"logo-img",attrs:{src:"/imgs/logo-mi.png",alt:""}})])}],$t={name:"register",data:function(){return{username:"",password:"",email:""}},methods:{register:function(){var t=this,s=this.username,a=this.password,e=this.email;this.axios.post("/user/register",{username:s,password:a,email:e}).then((function(){t.$message.sucess("注册成功")}))}}},Et=$t,St=(a("3410"),Object(_["a"])(Et,jt,kt,!1,null,null,null)),Pt=St.exports,Ot=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"detail"},[a("product-param",{attrs:{title:t.product.name}}),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"container clearfix"},[a("div",{staticClass:"swiper"},[a("swiper",{attrs:{options:t.swiperOption}},[a("swiper-slide",[a("img",{attrs:{src:"/imgs/detail/phone-1.jpg",alt:""}})]),a("swiper-slide",[a("img",{attrs:{src:"/imgs/detail/phone-2.jpg",alt:""}})]),a("swiper-slide",[a("img",{attrs:{src:"/imgs/detail/phone-3.jpg",alt:""}})]),a("swiper-slide",[a("img",{attrs:{src:"/imgs/detail/phone-4.jpg",alt:""}})]),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),a("div",{staticClass:"content"},[a("h2",{staticClass:"item-title"},[t._v(t._s(t.product.name))]),t._m(0),a("div",{staticClass:"delivery"},[t._v("小米自营")]),a("div",{staticClass:"item-price"},[t._v(t._s(t.product.price)+"元"),a("span",{staticClass:"del"},[t._v("1999元")])]),a("div",{staticClass:"line"}),t._m(1),a("div",{staticClass:"item-version clearfix"},[a("h2",[t._v("选择版本")]),a("div",{staticClass:"phone fl",class:{checked:1==t.version},on:{click:function(s){t.version=1}}},[t._v("6GB+64GB 全网通")]),a("div",{staticClass:"phone fr",class:{checked:2==t.version},on:{click:function(s){t.version=2}}},[t._v("4GB+64GB 移动4G")])]),t._m(2),a("div",{staticClass:"item-total"},[a("div",{staticClass:"phone-info clearfix"},[a("div",{staticClass:"fl"},[t._v(t._s(t.product.name)+" "+t._s(1==t.version?"6GB+64GB 全网通":"4GB+64GB 移动4G")+" 深灰色")]),a("div",{staticClass:"fr"},[t._v(t._s(t.product.price)+"元")])]),a("div",{staticClass:"phone-total"},[t._v("总计："+t._s(t.product.price)+"元")])]),a("div",{staticClass:"btn-group"},[a("a",{staticClass:"btn btn-huge fl",attrs:{href:"javascript:;"},on:{click:t.addCart}},[t._v("加入购物车")])])])])]),t._m(3),a("service-bar")],1)},It=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"item-info"},[t._v("相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红"),a("br"),t._v("外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item-addr"},[a("i",{staticClass:"icon-loc"}),a("div",{staticClass:"addr"},[t._v("北京 北京市 朝阳区 安定门街道")]),a("div",{staticClass:"stock"},[t._v("有现货")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item-color"},[a("h2",[t._v("选择颜色")]),a("div",{staticClass:"phone checked"},[a("span",{staticClass:"color"}),t._v(" 深空灰 ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"price-info"},[a("div",{staticClass:"container"},[a("h2",[t._v("价格说明")]),a("div",{staticClass:"desc"},[a("img",{attrs:{src:"/imgs/detail/item-price.jpeg",alt:""}})])])])}],Tt={name:"detail",data:function(){return{id:this.$route.params.id,err:"",version:1,product:{},swiperOption:{autoplay:!0,pagination:{el:".swiper-pagination",clickable:!0}}}},components:{Swiper:st["Swiper"],SwiperSlide:st["SwiperSlide"],ProductParam:vt,ServiceBar:Q},mounted:function(){this.getProductInfo()},methods:{getProductInfo:function(){var t=this;this.axios.get("/products/".concat(this.id)).then((function(s){t.product=s}))},addCart:function(){var t=this;this.axios.post("/carts",{productId:this.id,selected:!0}).then((function(s){t.$store.dispatch("saveCartCount",s.cartTotalQuantity),t.$router.push("/cart")}))}}},Nt=Tt,Mt=(a("f8df"),Object(_["a"])(Nt,Ot,It,!1,null,null,null)),Ut=Mt.exports,Lt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"cart"},[a("order-header",{attrs:{title:"我的购物车"},scopedSlots:t._u([{key:"tip",fn:function(){return[a("span",[t._v("温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算")])]},proxy:!0}])}),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"container"},[a("div",{staticClass:"cart-box"},[a("ul",{staticClass:"cart-item-head"},[a("li",{staticClass:"col-1"},[a("span",{staticClass:"checkbox",class:{checked:t.allChecked},on:{click:t.toggleAll}}),t._v("全选")]),a("li",{staticClass:"col-3"},[t._v("商品名称")]),a("li",{staticClass:"col-1"},[t._v("单价")]),a("li",{staticClass:"col-2"},[t._v("数量")]),a("li",{staticClass:"col-1"},[t._v("小计")]),a("li",{staticClass:"col-1"},[t._v("操作")])]),a("ul",{staticClass:"cart-item-list"},t._l(t.list,(function(s,e){return a("li",{key:e,staticClass:"cart-item"},[a("div",{staticClass:"item-check"},[a("span",{staticClass:"checkbox",class:{checked:s.productSelected},on:{click:function(a){return t.updateCart(s)}}})]),a("div",{staticClass:"item-name"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.productMainImage,expression:"item.productMainImage"}],attrs:{alt:""}}),a("span",[t._v(t._s(s.productName+" , "+s.productSubtitle))])]),a("div",{staticClass:"item-price"},[t._v(t._s(s.productPrice))]),a("div",{staticClass:"item-num"},[a("div",{staticClass:"num-box"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.updateCart(s,"-")}}},[t._v("-")]),a("span",[t._v(t._s(s.quantity))]),a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.updateCart(s,"+")}}},[t._v("+")])])]),a("div",{staticClass:"item-total"},[t._v(t._s(s.productTotalPrice))]),a("div",{staticClass:"item-del",on:{click:function(a){return t.delProduct(s)}}})])})),0)]),a("div",{staticClass:"order-wrap clearfix"},[a("div",{staticClass:"cart-tip fl"},[a("a",{attrs:{href:"/#/index"}},[t._v("继续购物")]),t._v(" 共"),a("span",[t._v(t._s(t.list.length))]),t._v("件商品，已选择"),a("span",[t._v(t._s(t.checkedNum))]),t._v("件 ")]),a("div",{staticClass:"total fr"},[t._v(" 合计："),a("span",[t._v(t._s(t.cartTotalPrice))]),t._v("元 "),a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:t.order}},[t._v("去结算")])])])])]),a("service-bar"),a("nav-footer")],1)},At=[],Bt=(a("a623"),a("4de4"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"order-header"},[a("div",{staticClass:"container clearfix"},[t._m(0),a("div",{staticClass:"title"},[a("h2",[t._v(t._s(t.title)),t._t("tip")],2)]),t._m(1)])])}),Dt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header-logo"},[a("a",{attrs:{href:"/#/index"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"username"},[a("a",{attrs:{href:"javascript:;"}},[t._v("sswd")])])}],Gt={name:"order-header",props:{title:String}},zt=Gt,Vt=(a("6b4a"),Object(_["a"])(zt,Bt,Dt,!1,null,null,null)),Ft=Vt.exports,Rt={name:"index",components:{OrderHeader:Ft,ServiceBar:Q,NavFooter:L},data:function(){return{list:[],allChecked:!1,cartTotalPrice:0,checkedNum:0}},mounted:function(){this.getCartList()},methods:{getCartList:function(){var t=this;this.axios.get("/carts").then((function(s){t.renderData(s)}))},toggleAll:function(){var t=this,s=this.allChecked?"/carts/unSelectAll":"/carts/selectAll";this.axios.put(s).then((function(s){t.renderData(s)}))},renderData:function(t){this.list=t.cartProductVoList||[],this.allChecked=t.selectedAll,this.cartTotalPrice=t.cartTotalPrice,this.checkedNum=this.list.filter((function(t){return t.productSelected})).length},updateCart:function(t,s){var a=this,e=t.quantity,i=t.productSelected;if("-"===s){if(1===e)return void this.$message.warning("没了啊，兄弟");e--}else"+"===s?e++:i=!i;this.axios.put("/carts/".concat(t.productId),{quantity:e,selected:i}).then((function(t){a.renderData(t)}))},delProduct:function(t){var s=this;this.axios.delete("/carts/".concat(t.productId)).then((function(t){s.renderData(t)}))},order:function(){var t=this.list.every((function(t){return!t.productSelected}));t?this.$message.warning("请选择商品"):this.$router.push("/order/confirm")}}},qt=Rt,Ht=(a("3924"),Object(_["a"])(qt,Lt,At,!1,null,null,null)),Jt=Ht.exports;r["default"].use(b["a"]);var Qt=new b["a"]({routes:[{path:"/",name:"home",component:G,redirect:"/index",children:[{path:"/index",name:"index",component:rt},{path:"/product/:id",name:"product",component:_t},{path:"/detail/:id",name:"detail",component:Ut}]},{path:"/login",name:"login",component:yt},{path:"/register",name:"register",component:Pt},{path:"/cart",name:"cart",component:Jt}]}),Yt={saveUserName:function(t,s){t.username=s},saveCartCount:function(t,s){t.cartCount=s}},Kt={saveUserName:function(t,s){t.commit("saveUserName",s)},saveCartCount:function(t,s){t.commit("saveCartCount",s)}};r["default"].use($["a"]);var Wt={username:"",cartCount:0},Xt=new $["a"].Store({state:Wt,mutations:Yt,actions:Kt});a("0fae");c.a.defaults.baseURL="/api",c.a.defaults.timeout=6e3,c.a.interceptors.response.use((function(t){var s=t.data,a=location.hash;return 0===s.status?s.data:10===s.status?("#/index"!=a&&(window.location.href="/#/login"),Promise.reject(s)):(this.$message.warning(s.msg),Promise.reject(s))})),r["default"].prototype.$message=i.a,r["default"].use(l.a,c.a),r["default"].use(p.a),r["default"].use(u["a"],{loading:"/imgs/loading-svg/loading-bars.svg"}),r["default"].config.productionTip=!1,new r["default"]({store:Xt,router:Qt,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,s,a){"use strict";var e=a("9c0c"),i=a.n(e);i.a},"6b4a":function(t,s,a){"use strict";var e=a("511f"),i=a.n(e);i.a},"6f2a":function(t,s,a){},"7aba":function(t,s,a){"use strict";var e=a("7dc5"),i=a.n(e);i.a},"7dc5":function(t,s,a){},"8ee7":function(t,s,a){"use strict";var e=a("e8ec"),i=a.n(e);i.a},"920e":function(t,s,a){"use strict";var e=a("a6b5"),i=a.n(e);i.a},"9c0c":function(t,s,a){},a6b5:function(t,s,a){},b8a9:function(t,s,a){},bd5f:function(t,s,a){"use strict";var e=a("fa94"),i=a.n(e);i.a},e8ec:function(t,s,a){},eb90:function(t,s,a){},f8b2:function(t,s,a){"use strict";var e=a("b8a9"),i=a.n(e);i.a},f8df:function(t,s,a){"use strict";var e=a("2eae"),i=a.n(e);i.a},fa94:function(t,s,a){}});
webpackJsonp([1],{CH5y:function(t,n){},ECOM:function(t,n){},KcfF:function(t,n){},Ml5c:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/"}},[n("h3",[this._v("Z.J Music")])])],1)},staticRenderFns:[]};var s=e("VU/8")({},a,!1,function(t){e("sQY5")},"data-v-be61c74c",null).exports,r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tab"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/recommend"}},[n("span",{staticClass:"tab-link"},[this._v("推荐")])])],1),this._v(" "),n("li",[n("router-link",{attrs:{to:"/singer"}},[n("span",{staticClass:"tab-link"},[this._v("歌手")])])],1),this._v(" "),n("li",[n("router-link",{attrs:{to:"/rank"}},[n("span",{staticClass:"tab-link"},[this._v("新歌首发")])])],1),this._v(" "),n("li",[n("router-link",{attrs:{to:"/search"}},[n("span",{staticClass:"tab-link"},[this._v("搜索")])])],1)])])},staticRenderFns:[]};var o=e("VU/8")({},r,!1,function(t){e("Ml5c")},"data-v-0fc1a9bd",null).exports,c=e("mtWM"),l=e.n(c),u=e("OKJt"),d=e.n(u),v={data:function(){return{songname:"",isPlaying:!1,startnum:"00:00",endnum:"03:33",isLyrics:!1,currentLyric:[]}},created:function(){this._getSongPlay()},mounted:function(){},methods:{toLyrics:function(){this.isLyrics=!this.isLyrics},changeStart:function(){this.isPlaying=!this.isPlaying;var t=document.getElementById("audio");this.isPlaying?t.pause():t.play()},_getSongPlay:function(){var t=this;this.id=this.$route.query.ids,this.songname=this.$route.query.songname,l.a.get("https://v1.itooi.cn/netease/lrc?id="+this.id).then(function(n){var e=n.data;t.currentLyric=new d.a(e,t.handleLyric).lines}).catch(function(t){console.log(t)})}}},h={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("mt-header",{staticClass:"mt-header",attrs:{title:"歌曲播放"}},[e("router-link",{attrs:{slot:"left",to:""},slot:"left"},[e("mt-button",{attrs:{icon:"back"},on:{click:function(n){return t.$router.back(-1)}}})],1)],1),t._v(" "),e("audio",{attrs:{id:"audio",src:"https://v1.itooi.cn/netease/url?id="+this.id+"&quality=128",autoplay:""}}),t._v(" "),t.isLyrics?e("div",[e("div",{staticClass:"lyrics",on:{click:t.toLyrics}},t._l(t.currentLyric.length,function(n){return e("span",{key:n},[t._v("\n                "+t._s(t.currentLyric[n-1].txt)+"\n            ")])}),0)]):e("div",[e("div",{staticClass:"top"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://v1.itooi.cn/netease/pic?id="+this.id,expression:"'https://v1.itooi.cn/netease/pic?id=' + this.id"}],attrs:{alt:""},on:{click:t.toLyrics}}),t._v(" "),e("span",{staticClass:"songname"},[e("h2",[t._v(t._s(t.songname))])])]),t._v(" "),e("div",{staticClass:"bottom"},[t._m(0),t._v(" "),e("div",{staticClass:"bottom_c"},[e("mt-progress",[e("div",{attrs:{slot:"start"},slot:"start"},[t._v(t._s(t.startnum))]),t._v(" "),e("div",{attrs:{slot:"end"},slot:"end"},[t._v(t._s(t.endnum))])])],1),t._v(" "),e("div",{staticClass:"bottom_b"},[t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{on:{click:t.changeStart}},[t.isPlaying?e("i",{staticClass:"icon iconfont icon-bofang",staticStyle:{"font-size":"2.5rem"}}):e("i",{staticClass:"icon iconfont icon-zanting",staticStyle:{"font-size":"2.5rem"}})]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"bottom_t"},[n("div",[n("i",{staticClass:"icon iconfont icon-xin"})]),this._v(" "),n("div",[n("i",{staticClass:"icon iconfont icon-xiazai"})]),this._v(" "),n("div",[n("i",{staticClass:"icon iconfont icon-pinglun"})]),this._v(" "),n("div",[n("i",{staticClass:"icon iconfont icon-gengduo"})])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("i",{staticClass:"icon iconfont icon-xunhuan"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("i",{staticClass:"icon iconfont icon-prev"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("i",{staticClass:"icon iconfont icon-next"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("i",{staticClass:"icon iconfont icon-gengduo-2"})])}]};var p=e("VU/8")(v,h,!1,function(t){e("nrOx")},"data-v-31b567d4",null).exports,f={name:"App",data:function(){return{}},components:{Header:s,Tab:o,SongPlay:p},created:function(){},methods:{}},_={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"fixed_top"},[n("Header")],1),this._v(" "),this.$route.meta.tab?this._e():n("Tab"),this._v(" "),n("keep-alive",[this.$route.meta.keepAlive?n("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():n("router-view")],1)},staticRenderFns:[]};var m=e("VU/8")(f,_,!1,function(t){e("KcfF")},null,null).exports,g=e("//Fk"),y=e.n(g),k=e("mw3O"),C=e.n(k);l.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",l.a.defaults.baseURL="https://v1.itooi.cn/netease",l.a.interceptors.request.use(function(t){return"post"===t.method&&(t.data=C.a.stringify(t.data,{arrayFormat:"repeat"})),t},function(t){return y.a.reject(t)});l.a;var b=e("/ocq"),x={data:function(){return{playlist:[]}},created:function(){this._getPlaylist()},methods:{_getPlaylist:function(){var t=this;l.a.get("https://v1.itooi.cn/netease/songList/highQuality?cat=全部&pageSize=100").then(function(n){var e=n.data.data;t.playlist=e}).catch(function(t){console.log(t)})}}},$={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("span",{staticClass:"title"},[t._v("精品歌单")]),t._v(" "),t._l(t.playlist.length,function(n){return e("div",{key:n.id,staticClass:"play"},[e("router-link",{staticClass:"playlist",attrs:{to:{path:"/playdetails",query:{id:t.playlist[n-1].id}}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.playlist[n-1].coverImgUrl,expression:"playlist[item-1].coverImgUrl"}],attrs:{alt:""}}),t._v(" "),e("div",{staticClass:"playlist_span"},[e("span",[t._v(t._s(t.playlist[n-1].name))])])])],1)})],2)},staticRenderFns:[]};var U={data:function(){return{bannerlist:[]}},components:{Playlist:e("VU/8")(x,$,!1,function(t){e("vm7l")},"data-v-fbdf5682",null).exports},created:function(){this._getBanner()},methods:{_getBanner:function(){var t=this;l.a.get("https://v1.itooi.cn/netease/banner").then(function(n){t.bannerlist=n.data.data}).catch(function(t){console.log(t)})}}},w={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"top"}),t._v(" "),e("mt-swipe",{staticClass:"mt-swipe",attrs:{auto:4e3}},t._l(t.bannerlist.length,function(n){return e("mt-swipe-item",{key:n.id},[e("img",{attrs:{src:t.bannerlist[n-1].picUrl,alt:""}})])}),1),t._v(" "),e("playlist")],1)},staticRenderFns:[]};var E=e("VU/8")(U,w,!1,function(t){e("OmM0")},"data-v-58625a16",null).exports,F={data:function(){return{ranklist:[]}},created:function(){this._getRankList()},methods:{_getRankList:function(){var t=this;l.a.get("https://v1.itooi.cn/netease/song/newest").then(function(n){t.ranklist=n.data.data}).catch(function(t){console.log(t)})}}},L={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.ranklist.length,function(n){return e("div",{key:n.id,staticClass:"rank"},[e("router-link",{staticClass:"ranklist",attrs:{to:{path:"/songplay",query:{ids:t.ranklist[n-1].id,songname:t.ranklist[n-1].name}}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.ranklist[n-1].picUrl,expression:"ranklist[item-1].picUrl"}],attrs:{alt:""}}),t._v(" "),e("div",{staticClass:"ranklist_r"},[e("h3",[t._v(t._s(t.ranklist[n-1].name))]),t._v(" "),e("span",[t._v(t._s(t.ranklist[n-1].song.artists[0].name))])])])],1)}),0)},staticRenderFns:[]};var S=e("VU/8")(F,L,!1,function(t){e("ECOM")},"data-v-75e2602b",null).exports,q={data:function(){return{artists:[],picUrl:""}},created:function(){this._getTopSinger()},methods:{_getTopSinger:function(){var t=this;l.a.get("https://v1.itooi.cn/netease/artist/top").then(function(n){var e=n.data.data;t.artists=e}).catch(function(t){console.log(t)})}}},z={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("span",{staticClass:"title"},[t._v("热门歌手")]),t._v(" "),t._l(t.artists.length,function(n){return e("div",{key:n.id},[e("router-link",{staticClass:"singerlist",attrs:{to:{path:"/singerinfo",query:{id:t.artists[n-1].id}}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.artists[n-1].picUrl,expression:"artists[item-1].picUrl"}],attrs:{alt:""}}),t._v(" "),e("span",[t._v(t._s(t.artists[n-1].name))])])],1)})],2)},staticRenderFns:[]};var P=e("VU/8")(q,z,!1,function(t){e("SWw1")},"data-v-95c89a9e",null).exports,R={data:function(){return{briefDesc:"",songs:[]}},created:function(){this._getSingerInfo()},methods:{_getSingerInfo:function(){var t=this;this.id=this.$route.query.id,l.a.get("https://v1.itooi.cn/netease/song/artist?id="+this.id).then(function(n){t.songs=n.data.data.songs}).catch(function(t){console.log(t)}),l.a.get("https://v1.itooi.cn/netease/artist/info?id="+this.id).then(function(n){t.briefDesc=n.data.data.briefDesc}).catch(function(t){console.log(t)})}}},V={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("mt-header",{staticClass:"mt-header",attrs:{title:"歌手详情"}},[e("router-link",{attrs:{slot:"left",to:""},slot:"left"},[e("mt-button",{attrs:{icon:"back"},on:{click:function(n){return t.$router.back(-1)}}})],1)],1),t._v(" "),e("div",{staticClass:"singerinfo"},[t._v("\n        "+t._s(t.briefDesc)+"\n    ")]),t._v(" "),e("div",t._l(t.songs.length,function(n){return e("router-link",{key:n,staticClass:"songslist",attrs:{to:{path:"/songplay",query:{ids:t.songs[n-1].id,songname:t.songs[n-1].name}}}},[e("div",[e("span",[t._v(t._s(n)+".")])]),t._v(" "),e("div",[t._v(t._s(t.songs[n-1].name))])])}),1)],1)},staticRenderFns:[]};var A=e("VU/8")(R,V,!1,function(t){e("CH5y")},"data-v-05d02326",null).exports,M={data:function(){return{inputvalue:"",searchlist:[]}},created:function(){},methods:{search:function(){var t=this;l.a.get("https://v1.itooi.cn/netease/search?keyword="+this.inputvalue+"&type=song").then(function(n){t.searchlist=n.data.data.songs}).catch(function(t){console.log(t)})}}},O={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"top"},[e("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputvalue,expression:"inputvalue"}],attrs:{placeholder:"请输入内容...",type:"text"},domProps:{value:t.inputvalue},on:{input:function(n){n.target.composing||(t.inputvalue=n.target.value)}}},"input",t.search(),!1))]),t._v(" "),t._l(t.searchlist.length,function(n){return e("div",{key:n.id},[e("router-link",{attrs:{to:{path:"/songplay",query:{ids:t.searchlist[n-1].id,songname:t.searchlist[n-1].name}}}},[e("div",{staticClass:"searchlist"},[e("span",{staticClass:"search_color"},[t._v(t._s(t.searchlist[n-1].name))])])])],1)})],2)},staticRenderFns:[]};var N=e("VU/8")(M,O,!1,function(t){e("ms0s")},"data-v-4348120a",null).exports,I={data:function(){return{playdetails:"",playlist:"",tracks:[],creator:"",avatarUrl:"",privileges:[]}},created:function(){this._getPlaydetails()},methods:{_getPlaydetails:function(){var t=this;this.id=this.$route.query.id,l.a.get("https://v1.itooi.cn/netease/songList?id="+this.id).then(function(n){t.playdetails=n.data.data})}}},T={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("mt-header",{attrs:{title:"歌单详情"}},[e("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[e("mt-button",{attrs:{icon:"back"}})],1),t._v(" "),e("mt-button",{attrs:{slot:"right"},slot:"right"},[t._v("分享")])],1),t._v(" "),e("div",{staticClass:"details_man"},[e("div",{staticClass:"details_man-l"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.playdetails.coverImgUrl,expression:"playdetails.coverImgUrl"}],attrs:{alt:""}})]),t._v(" "),e("div",{staticClass:"details_man-r"},[e("div",[e("span",[t._v(t._s(t.playdetails.name))])]),t._v(" "),t._m(0)])]),t._v(" "),t._l(t.playdetails.tracks.length,function(n){return e("div",{key:n.id},[e("router-link",{attrs:{to:{path:"/songplay",query:{ids:t.playdetails.tracks[n-1].id,songname:t.playdetails.tracks[n-1].name}}}},[e("div",{staticClass:"details_list"},[e("span",[t._v(t._s(n)+".")]),t._v(" "),e("div",{staticClass:"details_listitem"},[e("span",[t._v("\n                        "+t._s(t.playdetails.tracks[n-1].name)+"\n                    ")]),t._v(" "),e("span",{staticClass:"color_author"},[t._v("\n                        "+t._s(t.playdetails.tracks[n-1].artists[0].name)+"--"+t._s(t.playdetails.tracks[n-1].album.name)+"\n                    ")])])])])],1)})],2)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("span",[this._v("作者详情页面后期开发")])])}]};var H=e("VU/8")(I,T,!1,function(t){e("Vesq")},"data-v-4cb8631d",null).exports,W={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h3",[this._v("WoW,页面到火星去了")])])}]},D=e("VU/8")({},W,!1,null,null,null).exports;i.default.use(b.a);var j=new b.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",component:E,meta:{keepAlive:!1}},{path:"/rank",component:S,meta:{bottom:!0,keepAlive:!1}},{path:"/singer",component:P,meta:{isplay:!0,keepAlive:!1}},{path:"/singerinfo",component:A,meta:{tab:!0,keepAlive:!1}},{path:"/search",component:N},{path:"/playdetails",component:H,meta:{tab:!0}},{path:"/songplay",component:p,meta:{tab:!0}},{path:"*",component:D,meta:{tab:!0}}]}),B=e("Au9i"),J=e.n(B),K=(e("d8/S"),e("AXdl")),Q=e("v5o6"),Y=e.n(Q);i.default.config.productionTip=!1,Y.a.attach(document.body),i.default.use(K.default,{error:"./static/loading.jpg",loading:"./static/loading.gif"}),i.default.use(J.a),new i.default({el:"#app",router:j,components:{App:m},template:"<App/>"})},OmM0:function(t,n){},SWw1:function(t,n){},Vesq:function(t,n){},"d8/S":function(t,n){},ms0s:function(t,n){},nrOx:function(t,n){},sQY5:function(t,n){},vm7l:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.49f606863bc60470e5da.js.map
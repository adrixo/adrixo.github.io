(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"35bf":function(e,t,a){e.exports=a.p+"img/neuralwallpaper2.158cc343.jpg"},4145:function(e,t,a){},5375:function(e,t,a){"use strict";a("4145")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("NavBar"),a("v-main",{staticClass:"vistas"},[a("router-view")],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-bottom-navigation",{attrs:{app:"",color:"teal",grow:"","background-color":"#f5f5f5"}},[a("v-btn",{on:{click:function(t){return e.$router.push("/home")}}},[a("span",[e._v("Songs")]),a("v-icon",[e._v("mdi-music")])],1),a("v-btn",{on:{click:function(t){return e.$router.push("/")}}},[a("span",[e._v("Clustering")]),a("v-icon",[e._v("mdi-graph")])],1),a("v-btn",{on:{click:function(t){return e.$router.push("/aboutdata")}}},[a("span",[e._v("Sobre los datos")]),a("v-icon",[e._v("mdi-information-outline")])],1)],1)},i=[],c={name:"NavBar",data:function(){return{drawer:!1}},methods:{}},l=c,d=a("2877"),u=a("6544"),p=a.n(u),g=a("b81c"),f=a("8336"),v=a("132d"),m=Object(d["a"])(l,s,i,!1,null,null,null),h=m.exports;p()(m,{VBottomNavigation:g["a"],VBtn:f["a"],VIcon:v["a"]});var b={name:"App",components:{NavBar:h},data:function(){return{}}},y=b,S=(a("034f"),a("7496")),_=a("f6c4"),x=Object(d["a"])(y,r,o,!1,null,null,null),C=x.exports;p()(x,{VApp:S["a"],VMain:_["a"]});var w=a("9483");Object(w["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var k=a("8c4f"),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"mx-auto",staticStyle:{"box-shadow":"none"}},[n("v-img",{attrs:{src:a("c575"),height:"2.5em"}}),n("v-card-title",{staticClass:"justify-center"},[e._v(" Song's attributes analysis ")])],1),n("v-container",[n("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},[n("v-col",[n("v-select",{staticClass:"attr-select",attrs:{dense:"",filled:"",rounded:"",items:e.songProps,placeholder:"Select one",label:"Property for the X axis"},on:{input:e.changeSelectedProps},model:{value:e.selectedSongProp1,callback:function(t){e.selectedSongProp1=t},expression:"selectedSongProp1"}})],1),n("v-col",[n("v-select",{staticClass:"attr-select",attrs:{dense:"",filled:"",rounded:"",items:e.songProps,placeholder:"Select one",label:"Property for the Y axis"},on:{input:e.changeSelectedProps},model:{value:e.selectedSongProp2,callback:function(t){e.selectedSongProp2=t},expression:"selectedSongProp2"}})],1),n("v-col",[n("v-select",{staticClass:"attr-select",attrs:{dense:"",filled:"",rounded:"",items:e.songProps,clearable:!0,placeholder:"Select one",label:"Property for the color"},on:{input:e.changeSelectedProps},model:{value:e.selectedSongProp3,callback:function(t){e.selectedSongProp3=t},expression:"selectedSongProp3"}})],1)],1)],1),n("v-container",{staticClass:"song-chart-container",attrs:{fluid:"",justify:"center",align:"center"}},[n("v-row",{attrs:{"no-gutters":"",justify:"center"}},[n("v-col",{attrs:{lg:"3",md:"4",sm:"12",xs:"12"}},[n("v-card",{staticClass:"selected-song-card mx-auto",staticStyle:{"box-shadow":"none"}},[n("v-card-title",{staticClass:"justify-center"},[e._v(" Filters ")]),n("v-card-text",e._l(e.songsFilters,(function(t,a){return n("div",[n("v-row",[n("v-col",{attrs:{lg:"6"}},[e._v(" "+e._s(t[0])+" ")]),n("v-col",{attrs:{lg:"6"}},[n("v-range-slider",{attrs:{max:"100",min:"0","thumb-label":!0,"loader-height":"100"},on:{change:e.updateChart},model:{value:t[1],callback:function(a){e.$set(t,1,a)},expression:"param[1]"}})],1)],1)],1)})),0)],1)],1),n("v-col",{attrs:{lg:"6",md:"8",sm:"12",xs:"12"}},[n("Chart",{ref:"songsChart",attrs:{songsFilters:e.songsFilters}})],1),n("v-col",{attrs:{lg:"3",md:"12",sm:"12",xs:"12"}},[this.$vuetify.breakpoint.lg||this.$vuetify.breakpoint.xl?n("v-card",{staticClass:"selected-song-card"},[e.$store.state.selectedSong?e._e():n("v-card-title",{staticClass:"justify-center"},[e._v(" No song selected ")]),e.$store.state.selectedSong?n("v-card-title",{staticClass:"justify-center"},[e._v(" "+e._s(e.$store.state.selectedSong.name)+" ")]):e._e(),e.$store.state.selectedSong?n("v-card-subtitle",{staticClass:"text-center"},[e._v(" Artist: "+e._s(e.$store.state.selectedSong.artists)+" ")]):e._e(),e.$store.state.selectedSong?n("v-card-text",[e._v(" Popularity: "+e._s(e.$store.state.selectedSong.popularity)+" "),n("br"),e._v(" Year: "+e._s(e.$store.state.selectedSong.year)+" "),n("br"),e._v(" Duration: "+e._s(e.$store.state.selectedSong.duration_ms/1e3)+"s "),n("br")]):e._e(),n("iframe",{staticStyle:{"max-height":"200!important"},attrs:{src:e.$store.state.selectedSongLink,width:"100%",height:"300",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}})],1):e._e()],1)],1)],1),n("iframe",{attrs:{src:"",width:"300",height:"380",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}}),n("div",[!e.$store.state.selectedSongLink||this.$vuetify.breakpoint.lg||this.$vuetify.breakpoint.xl?e._e():n("Embed",{ref:"embed",staticClass:"spotify-embed"})],1)],1)},j=[],$=(a("96cf"),a("1da1")),V=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"songsChart"}})])}],O=(a("4160"),a("45fc"),a("159b"),a("5698")),A=(a("6f04"),{name:"Chart",props:["songsFilters"],data:function(){return{svg:null,x:null,y:null,dotRadius:3,dotRadiusSelected:5,data:null,dotsColor:"#69b3a2",x_prop:null,y_prop:null,color_prop:null}},mounted:function(){this.colourScale=O["e"]().range(["#5EAFC6","#FE9922","#93c464","#75739F"]),this.songsChart("acousticness","danceability",null)},methods:{songsChart:function(e,t,a){var n=this;return Object($["a"])(regeneratorRuntime.mark((function r(){var o,s,i,c,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.x_prop=e,n.y_prop=t,n.color_prop=a,n,console.log("Generating chart"),o={top:10,right:30,bottom:30,left:60},s=460-o.left-o.right,i=500-o.top-o.bottom,n.clearAll(),s=parseInt(O["f"]("#songsChart").style("width"),10)-o.left-o.right,n.svg=O["f"]("#songsChart").append("svg").attr("width",s+o.left+o.right).attr("height",i+o.top+o.bottom).append("g").attr("transform","translate("+o.left+","+o.top+")"),null!=n.data){r.next=12;break}return r.next=11,O["c"]("./songs_reduced.csv");case 11:n.data=r.sent;case 12:c=n.getMaxValue(n.data,e),l=n.getMaxValue(n.data,t),n.x=O["d"]().domain([0,c]).range([0,s]),n.svg.append("g").attr("transform","translate(0,"+i+")").call(O["a"](n.x)),n.svg.append("text").style("text-anchor","end").attr("x",s).attr("y",i-8).text(e),n.y=O["d"]().domain([0,l]).range([i,0]),n.svg.append("g").call(O["b"](n.y)),n.svg.append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy","1em").style("text-anchor","end").text(t),n.addDots(n.data,e,t,a),n.addClickEvent();case 22:case"end":return r.stop()}}),r)})))()},invalidSong:function(e){var t=100,a=!1;return this.songsFilters.forEach((function(n){t="popularity"==n[0]?1:100,(e[n[0]]*t<n[1][0]||e[n[0]]*t>n[1][1])&&(a=!0)})),a},addDots:function(e,t,a,n){var r=this,o=O["d"]().domain([r.getMinValue(this.data,n),r.getMaxValue(this.data,n)]).range(["white","#005B47"]);this.svg.append("g").selectAll("dot").data(e).enter().append("circle").attr("cx",(function(e){return r.invalidSong(e)?999999999:r.x(e[t])})).attr("cy",(function(e){return r.y(e[a])})).attr("id",(function(e){return e.id})).attr("r",this.dotRadius).style("fill",(function(e){return n?o(e[n]):r.dotsColor}))},addClickEvent:function(){var e=this,t=O["d"]().domain([e.getMinValue(this.data,e.color_prop),e.getMaxValue(this.data,e.color_prop)]).range(["white","#005B47"]);this.svg.selectAll("circle").on("click",(function(){var a={},n=O["f"](this).attr("id");a=e.getSongById(n),e.$store.dispatch("changeSong",a),O["g"]("circle").attr("r",e.dotRadius).style("fill",(function(a){return e.color_prop?t(a[e.color_prop]):e.dotsColor})).style("stroke","none"),O["f"](this).attr("r",e.dotRadiusSelected).style("fill","lightcoral").style("stroke","red")}))},getSongById:function(e){var t={};return this.data.some((function(a){if(a.id==e)return t=a,t})),t},clearDots:function(){O["g"]("circle").remove()},clearText:function(){O["g"]("text").remove()},clearAll:function(){O["g"]("svg").remove()},getMaxValue:function(e,t){var a=0;return e.forEach((function(e){a<e[t]&&(a=e[t])})),a<1&&(a=1),a},getMinValue:function(e,t){var a=999999;return e.forEach((function(e){a>e[t]&&(a=e[t])})),a<=.1&&(a=-.2),a}},computed:{}}),D=A,L=Object(d["a"])(D,V,E,!1,null,null,null),M=L.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("iframe",{attrs:{src:e.$store.state.selectedSongLink,width:"100%",height:"75",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}})},R=[],z={name:"Embed",components:{},data:function(){return{source:"https://open.spotify.com/embed/track/7ylTBs4903HoXeYSp24hoA",type:"track/",uri:"https://open.spotify.com/embed/",arg:"7ylTBs4903HoXeYSp24hoA"}},mounted:function(){this.source=this.$store.selectedSong,console.log("mounted")},methods:{changeLink:function(e,t){this.source=this.uri+e+"/"+t}}},N=z,F=Object(d["a"])(N,B,R,!1,null,null,null),T=F.exports,q={name:"Home",components:{Chart:M,Embed:T},data:function(){return{show:!1,songsFilters:[["popularity",[0,100]],["acousticness",[0,100]],["danceability",[0,100]],["energy",[0,100]],["instrumentalness",[0,100]],["liveness",[0,100]],["speechiness",[0,100]]],songProps:["acousticness","danceability","energy","explicit","instrumentalness","key","liveness","mode","popularity","release_date","speechiness","tempo","duration_ms","valence","year"],selectedSongProp1:"acousticness",selectedSongProp2:"danceability",selectedSongProp3:void 0,loadData:[],source:"https://open.spotify.com/embed/track/7ylTBs4903HoXeYSp24hoA"}},mounted:function(){this.resizeFunction(),window.addEventListener("resize",this.resizeFunction)},beforeDestroy:function(){this.$store.dispatch("clearSelectedSong")},computed:{},methods:{fetchData:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e.selectedSongProp1),console.log(e.selectedSongProp2);case 2:case"end":return t.stop()}}),t)})))()},changeSelectedProps:function(){this.updateChart()},changeSong:function(e,t){this.$store.dispatch("changeSong","0UztrUuVBPMn7cEys3LWQ4")},updateChart:function(){var e=this.$refs.songsChart;e&&e.songsChart(this.selectedSongProp1,this.selectedSongProp2,this.selectedSongProp3)},showSong:function(){console.log(this.$store.state.selectedSong)},resizeFunction:function(){this.updateChart()}}},I=q,Y=a("b0af"),H=a("99d9"),U=a("62ad"),X=a("a523"),W=a("adda"),J=a("5963"),G=a("0fd9"),K=a("b974"),Q=Object(d["a"])(I,P,j,!1,null,null,null),Z=Q.exports;p()(Q,{VCard:Y["a"],VCardSubtitle:H["b"],VCardText:H["c"],VCardTitle:H["d"],VCol:U["a"],VContainer:X["a"],VImg:W["a"],VRangeSlider:J["a"],VRow:G["a"],VSelect:K["a"]});var ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"mx-auto",staticStyle:{"box-shadow":"none"}},[n("v-img",{attrs:{src:a("35bf"),height:"2.5em"}}),n("v-card-title",{staticClass:"justify-center"},[e._v(" UMAP Visualization ")])],1),n("v-container",[n("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},[n("v-col",{attrs:{lg:"4"}},[n("v-select",{staticClass:"attr-select",attrs:{dense:"",filled:"",rounded:"",items:e.datasets,placeholder:"Select one",label:"Select dataset"},model:{value:e.dataset,callback:function(t){e.dataset=t},expression:"dataset"}})],1),n("v-col",{attrs:{lg:"2"}},[n("v-btn",{staticClass:"property-button",attrs:{elevation:"2",color:"primary"},on:{click:e.changeDatasetURL}},[e._v("Change dataset ")])],1),n("v-col",{attrs:{lg:"4"}},[n("v-select",{staticClass:"attr-select",attrs:{dense:"",filled:"",rounded:"",items:e.songProps,placeholder:"Select one",label:"Property for the color"},model:{value:e.selectedColorProp,callback:function(t){e.selectedColorProp=t},expression:"selectedColorProp"}})],1),n("v-col",{attrs:{lg:"2"}},[n("v-btn",{staticClass:"controls property-button",attrs:{elevation:"2",color:"primary"}},[e._v("Change color ")])],1)],1)],1),n("v-container",{staticClass:"song-chart-container",attrs:{fluid:"",justify:"center",align:"center"}},[n("v-row",{attrs:{"no-gutters":"",justify:"center"}},[n("v-col",{attrs:{lg:"9",md:"9",sm:"12",xs:"12"}},[n("div",{attrs:{id:"chart-container"}},[n("div",{ref:"clusterchart",attrs:{id:"chart"}}),n("div",{attrs:{id:"loading"}},[n("span",[e._v("loading...")])])])]),n("v-col",{attrs:{lg:"3",md:"3",sm:"12",xs:"12"}},[this.$vuetify.breakpoint.lg||this.$vuetify.breakpoint.xl?n("v-card",{staticClass:"selected-song-card-cluster"},[e.$store.state.selectedSong?e._e():n("v-card-title",{staticClass:"justify-center"},[e._v(" Ninguna cancion seleccionada ")]),e.$store.state.selectedSong?n("v-card-title",{staticClass:"justify-center"},[e._v(" "+e._s(e.$store.state.selectedSong.name)+" ")]):e._e(),e.$store.state.selectedSong?n("v-card-subtitle",{staticClass:"text-center"},[e._v(" Album: "+e._s(e.$store.state.selectedSong.album)+" ")]):e._e(),e.$store.state.selectedSong?n("v-card-text",[e._v(" Year: "+e._s(e.$store.state.selectedSong.year)+" "),n("br")]):e._e(),n("iframe",{staticStyle:{"max-height":"200!important"},attrs:{src:e.$store.state.selectedSongLink,width:"100%",height:"300",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}})],1):e._e()],1)],1)],1),n("div",[!e.$store.state.selectedSongLink||this.$vuetify.breakpoint.lg||this.$vuetify.breakpoint.xl?e._e():n("Embed",{ref:"embed",staticClass:"spotify-embed"})],1)],1)},te=[],ae=(a("99af"),a("4de4"),a("7db0"),a("c975"),a("d81d"),a("13d5"),a("b0c0"),a("a9e3"),a("ac1f"),a("1276"),a("3835")),ne=a("5530"),re=(a("3b8a"),{name:"Cluster",components:{Embed:T},created:function(){this.loadLibraries()},mounted:function(){},beforeDestroy:function(){this.$store.dispatch("clearSelectedSong")},data:function(){return{librariesLoaded:!1,drawer:!1,data:[],quadtree:null,svg:null,closestSong:null,selectedColorProp:"energy",dataset:"umapsongs_reduced.tsv",local:!1,datasets:["umapsongs.tsv","umapsongs_reduced.tsv","umapdata-n15-d0.1_ext.tsv","umapdata-n50-d0.1_ext.tsv","umapdata-n5-d0.1_ext.tsv","umapdata-n15-d0.25_ext.tsv","umapdata-n15-d0.5_ext.tsv","umapdata-n15-d0_ext.tsv"],songProps:["acousticness","danceability","energy","speechiness","instrumentalness","liveness","valence","tempo","key","loudness","year"],songPropsColor:[]}},methods:{loadLibraries:function(){var e=this,t=this,a=["https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.8.0/document-register-element.js","https://unpkg.com/d3@5.15.0/dist/d3.min.js","https://unpkg.com/d3fc@14.2.3/build/d3fc.js","https://unpkg.com/d3-svg-annotation@2.5.1/indexRollup.js"];a.forEach(function(){var a=Object($["a"])(regeneratorRuntime.mark((function a(n){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=document.createElement("script"),a.next=3,r.setAttribute("src",n);case 3:return a.next=5,document.head.appendChild(r);case 5:console.log("imported",n),"https://unpkg.com/d3-svg-annotation@2.5.1/indexRollup.js"==n&&(console.log("All imported"),e.librariesLoaded=!0,setTimeout((function(){t.generateChart()}),3e3));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},clearChart:function(){},changeDatasetURL:function(){this.$router.push({path:"",query:{dataset:this.dataset}}),window.location.reload()},generateChart:function(){try{var e,t=this,a=function(){var e=Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:d3.select("#chart").datum({annotations:h,data:i}).call(S);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=d3.annotation(),t=d3.scaleLinear(),a=d3.scaleLinear(),n=fc.dataJoin("g","annotation"),r=function(r){r.each((function(r,o,s){var i=r.map((function(e){return Object(ne["a"])(Object(ne["a"])({},e),{},{x:t(e.x),y:a(e.y)})}));e.annotations(i),n(d3.select(s[o]),i).call(e)}))};return r.xScale=function(){return arguments.length?(t=arguments.length<=0?void 0:arguments[0],r):t},r.yScale=function(){return arguments.length?(a=arguments.length<=0?void 0:arguments[0],r):a},fc.rebindAll(r,e),r},r=function(e,t){return e.length>t?e.substr(0,t-1)+"...":e},o=function(e){var t=d3.color(e).rgb(),a=t.r,n=t.g,r=t.b,o=t.opacity;return[a/255,n/255,r/255,o]},s=function(e,t){return[].forEach.call(document.querySelectorAll(e),t)},i=[],c=function(e){return{note:{label:e.album+" "+e.year,bgPadding:5,title:r(e.name,100)},x:e.x,y:e.y,dx:20,dy:20}},l=new Worker("./streaming-tsv-parser.js");l.onmessage=function(n){var r=n.data,c=r.items,l=(r.totalBytes,r.finished),u=c.map((function(e){return Object(ne["a"])(Object(ne["a"])({},e),{},{x:Number(e.x),y:Number(e.y),acousticness:Number(e.acousticness),danceability:Number(e.danceability),energy:Number(e.energy),year:Number(e.year),language:Number(e.year)})})).filter((function(e){return e.year}));if(i=i.concat(u),l){document.getElementById("loading").style.display="none",t.songProps.forEach((function(e){var a=1,n=0;"tempo"==e&&(a=1/160),"key"==e&&(a=.1),"loudness"==e&&(a=-.05),"year"==e&&(a=1/40,n=1980);var r=function(t){return o(d(100*(1-(t[e]-n)*a)%100))};t.songPropsColor.push(r)}));var p=fc.webglFillColor().value(t.songPropsColor[t.songProps.indexOf(t.selectedColorProp)]).data(i);v.decorate((function(e){return p(e)})),s(".controls",(function(e){e.addEventListener("click",(function(){p.value(t.songPropsColor[t.songProps.indexOf(t.selectedColorProp)]),a()}))})),e=d3.quadtree().x((function(e){return e.x})).y((function(e){return e.y})).addAll(i)}a()},void 0!=t.$route.query.dataset&&(t.dataset=t.$route.query.dataset),l.postMessage(t.dataset);d3.scaleOrdinal(d3.schemeCategory10);var d=d3.scaleSequential().domain([0,100]).interpolator(d3.interpolateRdYlGn),u=d3.scaleLinear().domain([-5,23]),p=d3.scaleLinear().domain([-12,20]),g=u.copy(),f=p.copy(),v=fc.seriesWebglPoint().equals((function(e,t){return e===t})).size(1).crossValue((function(e){return e.x})).mainValue((function(e){return e.y})),m=d3.zoom().scaleExtent([.8,10]).on("zoom",(function(){u.domain(d3.event.transform.rescaleX(g).domain()),p.domain(d3.event.transform.rescaleY(f).domain()),a()})),h=[],b=fc.pointer().on("point",(function(n){var r=Object(ae["a"])(n,1),o=r[0];if(h.pop(),o&&e){var s=u.invert(o.x),i=p.invert(o.y),l=Math.abs(u.invert(o.x)-u.invert(o.x-20));t.closestSong=e.find(s,i,l),t.closestSong&&(h[0]=c(t.closestSong)),a()}}));d3.select("#chart").on("click",(function(){console.log(t.closestSong),t.$store.dispatch("changeSong",t.closestSong)}));var y=n().notePadding(15).type(d3.annotationCallout),S=fc.chartCartesian(u,p).webglPlotArea(fc.seriesWebglMulti().series([v]).mapping((function(e){return e.data}))).svgPlotArea(fc.seriesSvgMulti().series([y]).mapping((function(e){return e.annotations}))).decorate((function(e){return e.enter().select("d3fc-svg.plot-area").on("measure.range",(function(){g.range([0,d3.event.detail.width]),f.range([d3.event.detail.height,0])})).call(m).call(b)}))}catch(_){console.log(_),window.location.reload()}}}}),oe=re,se=(a("5375"),Object(d["a"])(oe,ee,te,!1,null,null,null)),ie=se.exports;p()(se,{VBtn:f["a"],VCard:Y["a"],VCardSubtitle:H["b"],VCardText:H["c"],VCardTitle:H["d"],VCol:U["a"],VContainer:X["a"],VImg:W["a"],VRow:G["a"],VSelect:K["a"]});var ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"mx-auto",staticStyle:{"box-shadow":"none"}},[n("v-img",{attrs:{src:a("a6b4"),height:"2.5em"}}),n("v-card-title",{staticClass:"justify-center"},[e._v(" Sobre los datos ")])],1),n("v-card",{staticClass:"about-card"},[n("v-card-title",[e._v(" Datasets utilizados ")]),n("v-card-subtitle",[e._v(" Se han utilizado dos datasets diferentes para cada una de las representaciones: "),n("br"),n("ol",{staticStyle:{"margin-top":"1em"}},[n("li",[n("b",[e._v("Sección 'songs': ")]),e._v(" Para la primera se han utilizado los datos del proyecto de "),n("a",{attrs:{href:"https://www.kaggle.com/yamaerenay/spotify-dataset-19212020-160k-tracks"}},[e._v("Kaggle: Spotify dataset: 160 tracks")]),n("br"),e._v("No obstante, solo se toma un conjunto reducido de estas (10k) para agilizar la renderización del gráfico. ")]),n("li",[n("b",[e._v("Sección 'clustering': ")]),e._v(" también se ha tomado una fracción de los registros del repositorio de "),n("a",{attrs:{href:"https://www.kaggle.com/rodolfofigueroa/spotify-12m-songs"}},[e._v("Spotify 1.2M+ Songs")]),n("br"),e._v(" Estos han sido tratados con el algoritmo de reducción de la dimensionalidad umap a través de python con la librería umap-learn, junto a panda, scikitlearn, entre otras. ")])])])],1),n("v-card",{staticClass:"about-card"},[n("v-card-title",[e._v(" Bibliotecas/Módulos utilizados para la visualización ")]),n("v-card-subtitle",[e._v(" Las dos herramientas de visualización se basan en la librería D3.js: "),n("br"),n("ol",{staticStyle:{"margin-top":"1em"}},[n("li",[n("b",[e._v("Sección 'songs': ")]),e._v(" Se ha implementado un scatter plot chart a través de D3 ")]),n("li",[n("b",[e._v("Sección 'clustering': ")]),e._v(" Se ha utilizado una implementación de este módulo de "),n("a",{attrs:{href:"https://colineberhardt.github.io/d3fc-webgl-hathi-explorer/# "}},[e._v(" Coline Berhardt.")]),n("br"),e._v(" Este módulo hace uso de D3 junto a D3FC ")])])])],1),n("v-card",{staticClass:"about-card"},[n("v-card-title",[e._v(" Propiedades de las canciones ")]),n("v-card-subtitle",[e._v(" Hay un total de 13 características relevantes de las canciones, descritas en profundidad en "),n("a",{attrs:{href:"https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-audio-features"}},[e._v(" la api de spotify")])]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"orange",text:""},on:{click:function(t){e.show=!e.show}}},[e._v(" Detalle de las propiedades "),n("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("v-divider"),e._l(e.properties,(function(t,a){return n("div",[n("v-card-text",{staticStyle:{"margin-left":"2em"}},[n("b",[e._v(e._s(a+". "+t[0]))])]),n("v-card-subtitle",[e._v(" "+e._s(t[1])+" ")])],1)}))],2)])],1)],1)},le=[],de={name:"AboutData",components:{},data:function(){return{show:!1,properties:[["Danceability","Esta característica describe cuan aduecuada es la canción para ser bailada, en función de algunas de las otras características. Entre 0-1"],["Acousticness","Describe cuan acustica es la canción. Entre 0-1"],["Duration_ms","Duración, en milisegundos, de la canción. Entre 0-n"],["Energy","Mide la percepción de la energía de la canción, Entre 0-1"],["Instrumentalness","Predice la cantidad de partes instrumentales en la canción, las tonadas son consideradas como instrumentos en este caso, se considera un umbral el valor 0.5. Entre 0-1"],["Key","Clave de la canción, entre 0-12, donde cada número representa una nota."],["Liveness","A través de la presencia de audiencia en la canción, predice si se corresponde mas o menos con un concierto. Entre 0-1"],["Loudness","Mide, en decibelios, la media de la potencia de la canción. Entre 0~(-60)"],["Mode","Indica si es o no una canción con modalidad mayor o menor."],["Explicita","Si es o no recomendable para los jóvenes. Booleano"],["Popularity","Popularidad de la canción, basado en el número de reproducciones, por lo que puede variar. Entre 0-100"],["Speechiness","Al contrario que Instrumentalness, mide la presencia de voces en la canción. Se consideran dos umbrales, 0.33 y 0.66, para indicar si es mayormente instrumental, ambas o mayormente cantada. Entre 0-1"],["Tempo","Tiempo medio de la canción en beats por minuto. Entre 40~150"],["Valence","Mide cuan positiva es la canción, en cuanto a emotividad, lo que significa que una valencia baja se corresponde con una canción triste. Entre 0-1"]]}},mounted:function(){},methods:{}},ue=de,pe=a("ce7e"),ge=a("0789"),fe=a("2fa4"),ve=Object(d["a"])(ue,ce,le,!1,null,null,null),me=ve.exports;p()(ve,{VBtn:f["a"],VCard:Y["a"],VCardActions:H["a"],VCardSubtitle:H["b"],VCardText:H["c"],VCardTitle:H["d"],VDivider:pe["a"],VExpandTransition:ge["a"],VIcon:v["a"],VImg:W["a"],VSpacer:fe["a"]}),n["a"].use(k["a"]);var he=[{path:"/home",name:"Home",component:Z},{path:"/",name:"Cluster",component:ie},{path:"/aboutdata",name:"AboutData",component:me}],be=new k["a"]({mode:"history",routes:he}),ye=be,Se=(a("fb6a"),a("2f62"));n["a"].use(Se["a"]);var _e=new Se["a"].Store({state:{selectedSongLink:void 0,selectedSong:void 0,selectedClusterDataSet:"umapsongs_reduced.tsv"},mutations:{setSelectedSongLink:function(e,t){e.selectedSongLink=t},setSelectedClusterDataSet:function(e,t){e.ClusterDataSet=t},setSelectedSong:function(e,t){if(void 0!=t["artists"]){var a=t["artists"];a=a.slice(1,a.length-1),a=a.split(","),a=a[0].slice(1,a[0].length-1),t["artists"]=a}e.selectedSong=t},clearSelectedSong:function(e){e.selectedSongLink="",e.selectedSong=void 0}},actions:{changeSong:function(e,t){var a=e.commit,n=xe(t.id);a("setSelectedSongLink",n),a("setSelectedSong",t)},changeSelectedClusterDataSet:function(e,t){var a=e.commit;a("setSelectedClusterDataSet",t)},clearSelectedSong:function(e){var t=e.commit;t("clearSelectedSong")}},modules:{}});function xe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"track",a="https://open.spotify.com/embed/",n=a+t+"/"+e;return n}var Ce=a("f309");n["a"].use(Ce["a"]);var we=new Ce["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:ye,store:_e,vuetify:we,render:function(e){return e(C)}}).$mount("#app")},"85ec":function(e,t,a){},a6b4:function(e,t,a){e.exports=a.p+"img/yellow-wallpaper.753b47b3.png"},c575:function(e,t,a){e.exports=a.p+"img/wallpaper.2fd11bd5.jpg"}});
//# sourceMappingURL=app.de8560f7.js.map
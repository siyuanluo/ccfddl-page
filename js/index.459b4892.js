(function(e){function t(t){for(var i,l,r=t[0],o=t[1],c=t[2],h=0,f=[];h<r.length;h++)l=r[h],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],i=!0,r=1;r<s.length;r++){var o=s[r];0!==a[o]&&(i=!1)}i&&(n.splice(t--,1),e=l(l.s=s[0]))}return e}var i={},a={index:0},n=[];function l(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=i,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(s,i,function(t){return e[t]}.bind(null,i));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=o;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"000c":function(e,t,s){},"034f":function(e,t,s){"use strict";s("85ec")},1:function(e,t){},"231d":function(e,t,s){},"39a1":function(e,t,s){"use strict";s("231d")},4678:function(e,t,s){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=n(e);return s(t)}function n(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=n,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);var i=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Home")],1)},n=[],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("Header"),s("el-checkbox",{staticStyle:{"padding-top":"10px",width:"33%"},attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[s("span",{staticStyle:{color:"#666666"}},[e._v("全选")])]),s("el-checkbox-group",{on:{change:e.handleCheckedChange},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},e._l(e.subList,(function(t){return s("el-checkbox",{key:t.sub,staticClass:"boxes",attrs:{size:"medium",label:t.sub}},[s("span",{staticStyle:{color:"#666666"}},[e._v(e._s(e.formatSubName(t)))])])})),1),s("el-row",{staticClass:"timezone"},[s("div",{staticStyle:{float:"left"}},[e._v(" Deadlines are shown in "+e._s(e.timeZone)+" time. ")]),s("div",{staticStyle:{float:"left",width:"155px"}},[s("el-input",{attrs:{"prefix-icon":"el-icon-search",size:"mini",placeholder:"search conference"},on:{change:e.handleInputChange},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),s("div",{staticStyle:{float:"right"}},[s("el-checkbox-group",{staticClass:"rankbox",attrs:{size:"mini"},on:{change:e.handleRankChange},model:{value:e.rankList,callback:function(t){e.rankList=t},expression:"rankList"}},e._l(e.rankoptions,(function(t,i){return s("el-checkbox-button",{key:i,attrs:{label:i}},[e._v(e._s(t))])})),1)],1)]),s("el-row",{staticClass:"zonedivider"}),s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.showList,"show-header":!1}},[s("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{class:{"conf-fin":"FIN"===t.row.status}},[s("el-row",{staticClass:"conf-title"},[s("a",{attrs:{href:e.generateDBLP(t.row.dblp)}},[e._v(e._s(t.row.title))]),e._v(" "+e._s(t.row.year)+" "),!0===t.row.isLike?s("i",{staticClass:"el-icon-star-on",staticStyle:{color:"#FBCA04"},on:{click:function(s){return e.handleClickIcon(t.row,!0)}}}):s("i",{staticClass:"el-icon-star-off",on:{click:function(s){return e.handleClickIcon(t.row,!1)}}})]),s("el-row",[e._v(e._s(t.row.date+" "+t.row.place))]),s("el-row",{staticClass:"conf-des"},[e._v(e._s(t.row.description))]),s("el-row",[s("el-tag",{attrs:{size:"mini",type:"",effect:"plain"}},[e._v(e._s(t.row.displayrank))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.row.comment,expression:"scope.row.comment"}],staticStyle:{color:"#409eff"}},[s("b",[e._v("NOTE:")]),e._v(" "+e._s(t.row.comment))])],1),s("el-row",{staticStyle:{"padding-top":"5px"}},["string"===typeof t.row.acc?s("span",[e._v("Acc. Rate: "+e._s(t.row.acc)+" ")]):e._e(),s("span",{staticClass:"conf-sub"},[e._v(e._s(t.row.subname))])])],1)]}}])}),s("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{class:{"conf-fin":"FIN"===t.row.status}},[s("el-row",{staticClass:"conf-timer"},["TBD"===t.row.status?s("div",{staticStyle:{color:"black"}},[e._v("TBD")]):s("countdown",{staticStyle:{color:"black"},attrs:{time:t.row.remain,transform:e.transform},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.days)+" "+e._s(t.hours)+" "+e._s(t.minutes)+" "+e._s(t.seconds))]}}],null,!0)}),s("el-popover",{attrs:{placement:"right",trigger:"click"}},[s("el-row",[s("img",{staticStyle:{width:"20px",height:"20px","vertical-align":"middle"},attrs:{src:"//ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png#",srcset:"//ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png 2x, //ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png# 1x",alt:"","aria-hidden":"true"}}),s("span",{staticStyle:{"padding-left":"5px"}},["TBD"===t.row.status?s("a",[e._v("Not Available")]):s("a",{attrs:{href:e.formatGoogleCalendar(t.row),target:"_blank",rel:"nofollow"}},[e._v("Google Calendar")])])]),s("el-row",[s("img",{staticStyle:{width:"20px",height:"20px","vertical-align":"middle"},attrs:{src:"https://help.apple.com/assets/61526E8E1494760B754BD308/61526E8F1494760B754BD30F/zh_CN/2162f7d3de310d2b3503c0bbebdc3d56.png",alt:"","aria-hidden":"true"}}),s("span",{staticStyle:{"padding-left":"5px"}},["TBD"===t.row.status?s("a",[e._v("Not Available")]):s("a",{attrs:{href:e.formatiCloudCalendar(t.row),rel:"nofollow"}},[e._v("iCloud Calendar")])])]),s("i",{staticClass:"el-icon-date icon",staticStyle:{"padding-left":"5px"},attrs:{slot:"reference"},slot:"reference"})],1)],1),s("el-row",["TBD"===t.row.status?s("div",[e._v(" Deadline: "),s("a",{attrs:{href:"https://github.com/ccfddl/ccf-deadlines/pulls"}},[e._v("pull request to update")])]):s("div",[e._v(" Deadline: "+e._s(t.row.localDDL)+" ("+e._s(t.row.originDDL)+") ")])]),s("el-row",[e._v("website: "),s("a",{attrs:{href:t.row.link}},[e._v(e._s(t.row.link))])]),"RUN"===t.row.status?s("TimeLine",{attrs:{ddls:t.row.ddls}}):e._e()],1)]}}])})],1),s("el-row",{staticStyle:{"padding-top":"8px"}},[s("div",{staticStyle:{float:"left",color:"#666666","font-size":"12px"}},[s("div",[e._v("ccf-deadlines is maintained by "),s("a",{attrs:{href:"https://github.com/jacklightChen"}},[e._v("@jacklightChen")]),e._v(" and "),s("a",{attrs:{href:"https://github.com/0x4f5da2"}},[e._v("@0x4f5da2")]),e._v(".")]),s("div",{staticStyle:{"padding-top":"3px"}},[e._v("If you find it useful, try find "),s("a",{attrs:{href:"https://github.com/0x4f5da2"}},[e._v("him")]),e._v(" a girlfriend or follow "),s("a",{attrs:{href:"https://www.researchgate.net/profile/Zhihao_Chen23"}},[e._v("him")]),e._v(" on ResearchGate.")])]),s("div",{staticStyle:{float:"right"}},[s("el-pagination",{attrs:{background:"",small:"",layout:"prev, pager, next","page-size":e.pageSize,"current-page":e.page,total:e.showNumber},on:{"current-change":e.handleCurrentChange}})],1)])],1)},r=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("el-row",[s("a",{staticClass:"title",attrs:{href:"/"}},[e._v("Graphics and Robotics Conferences Deadlines")])]),s("el-row",{staticClass:"subtitle"},[e._v(" The Conferences are selected by Siyuan Luo and Ce Hao. For Deadline Tracking only. ")])],1)},c=[],d={name:"Header",data(){return{showLatestConf:!1,showStr:""}},mounted(){this.$http.get("https://api.github.com/repos/ccfddl/ccf-deadlines/commits?page=1&per_page=10").then(e=>{let t=e.body.length;for(let s=0;s<t;s++){let t=e.body[s].commit.message,i=t.split(" "),a=t.indexOf("(");if("update"===i[0].toLowerCase()||"add"===i[0].toLowerCase()){-1!==a&&(t=t.substr(0,a)),this.showStr=t,this.showLatestConf=!0;break}}})}},h=d,f=(s("ec65"),s("2877")),u=Object(f["a"])(h,o,c,!1,null,"0f31b82a",null),p=u.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"time_con"},[s("div",{staticClass:"line_time"},[s("div",{staticClass:"all_line"},[s("div",{ref:"allLineTime",staticClass:"line"},[s("div",{ref:"canLine",staticClass:"can_line"}),e._l(e.dateTips,(function(t,i){return s("div",{key:"tips-"+i,staticClass:"reference",style:e.setLeft(t["timepoint"])},[0===i&&e.isSingle||e._isMobile()&&e.dateTips.length>6&&(i%3===1||i%3===2)?e._e():s("em",{domProps:{textContent:e._s(e.formatter(t["timepoint"],1,i))}})])})),e._l(e.incre_dates,(function(t,i){return s("div",{key:i,class:e.formatClass(t["type"]),style:e.setLeft(t["timepoint"],i)},[s("em",{style:e.setText(i),domProps:{textContent:e._s(e.formatType(t["type"])+" "+e.formatter(t["timepoint"]))}})])})),s("div",{ref:"selDot",staticClass:"dot sel_dot"},[s("em",[e._v("Now: "+e._s(e.selTime))])])],2)])])])},b=[];const g=s("7f45"),y=g.tz.guess();var _={name:"TimeLine",props:["ddls"],data(){return{fullDate:null,binlogDate:null,selTime:null,start_date:null,end_date:null,timeline:null,incre_dates:[],allIncre:[],dateTips:[],deadlines:[],isSingle:!1,expireIndex:-1}},created(){},mounted(){this.$nextTick(()=>{this.getBackupTimeline()})},methods:{_isMobile(){let e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return e},formatter(e,t,s){if(t){if(this.ddls.length>1&&s<this.ddls.length-1){let e=this.dateTips[s],t=this.dateTips[s+1];if((t.timepoint-this.start_date)/(this.end_date-this.start_date)*100-(e.timepoint-this.start_date)/(this.end_date-this.start_date)*100<8)return""}return""+g(1e3*e).format("MM/DD")}return""+g(1e3*e).format("YYYY/MM/DD HH:mm:ss")},formatType(e){return 0===e?"Registration:":1===e?"Submission:":""},formatClass(e){return 0===e?"square square_all":1===e?"dot dot_all":""},getBackupTimeline(){this.fullDate=null,this.binlogDate=null,this.selTime=null,this.start_date=null,this.end_date=null,this.timeline=null,this.deadlines=[],this.incre_dates=[],this.allIncre=[],this.dateTips=[],this.isSingle=!1,this.expireIndex=-1;let e=g.tz(new Date,y).valueOf(),t=this.ddls.length;1===t&&(this.deadlines.push({timepoint:e/1e3,type:1}),this.isSingle=!0);for(let r=0;r<t;r++){let e={timepoint:g(this.ddls[r]["timepoint"]).valueOf()/1e3,type:this.ddls[r]["type"]};this.deadlines.push(e)}let s=this.deadlines.length;for(let r=0;r<s;r++){let t=this.deadlines[r]["timepoint"];if(!(e>=1e3*t))break;this.expireIndex=r}e<1e3*this.deadlines[0]["timepoint"]?this.start_date=1*g(e).subtract(7,"d").startOf("day").format("X"):this.start_date=1*g(1e3*this.deadlines[0]["timepoint"]).subtract(7,"d").startOf("day").format("X"),this.end_date=1*g(1e3*this.deadlines[s-1]["timepoint"]).add(7,"d").endOf("day").format("X"),this.fullDate=e/1e3,this.binlogDate=this.deadlines[s-1]["timepoint"];let i=this.$refs.canLine,a=e/1e3,n=(this.binlogDate-a)/(this.end_date-this.start_date);n>0?(i.style.width=100*n+"%",i.style.left=(a-this.start_date)/(this.end_date-this.start_date)*100+"%",i.style.maxWidth=100-parseFloat(i.style.left)+"%"):i.style.width="0%";let l=this.deadlines;this.incre_dates=l,this.allIncre=l.concat([{timepoint:this.binlogDate,type:1},{timepoint:this.fullDate,type:1}]),this.clickDot(this.fullDate),this.timeline=l[l.length-1]["timepoint"],this.dateTips=[];for(let r=0;r<this.deadlines.length;r++)this.dateTips.push(this.deadlines[r])},lineMouseDown(e){let t=this.$refs.allLineTime,s=(e.offsetX-6)/(1*t.offsetWidth);this.setSelTime(s)},canLineMouseDown(e){let t=this.$refs.canLine,s=this.$refs.allLineTime,i=e.offsetX/(1*s.offsetWidth);parseFloat(t.style.left)>0&&(i=e.offsetX/(1*s.offsetWidth)+parseFloat(t.style.left)/100),this.setSelTime(i)},clickDot(e){let t=(e-this.start_date)/(this.end_date-this.start_date);this.setSelTime(t)},setSelTime(e){let t=this.$refs.selDot;t.classList.remove("sel_dot_left"),t.classList.remove("sel_dot_right");let s=e;this.timeline=(this.end_date-this.start_date)*s+this.start_date,(this.timeline>this.binlogDate||this.timeline<this.fullDate)&&(this.allIncre.sort((e,t)=>Math.abs(e-this.timeline)-Math.abs(t-this.timeline)),this.timeline=this.allIncre[0],s=(this.timeline-this.start_date)/(this.end_date-this.start_date)),this.selTime=g(1e3*this.timeline).format("YYYY-MM-DD HH:mm:ss"),t.style.left=100*s+"%",100*s<10&&t.classList.add("sel_dot_left"),100*s>90&&t.classList.add("sel_dot_right")},dragDown(e){let t=1*this.$refs.allLineTime.offsetWidth,s=this.$refs.selDot,i=e.clientX-s.offsetLeft;document.onmousemove=e=>{let s=(e.clientX-i)/t*100;s>=100?s=100:s<=0&&(s=0),this.setSelTime(s/100)},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}},setLeft(e,t){return t<=this.expireIndex?`left:${(e-this.start_date)/(this.end_date-this.start_date)*100}%;border: 2px solid #ccc;`:`left:${(e-this.start_date)/(this.end_date-this.start_date)*100}%;`},setText(e){if(e<=this.expireIndex)return"color: #ccc;"}},watch:{ddls(){this.$nextTick(()=>{this.getBackupTimeline()})}}},j=_,k=(s("e8b5"),Object(f["a"])(j,m,b,!1,null,"17de0d54",null)),w=k.exports;const v=s("e2c1"),L=s("7f45"),C=L.tz.guess();var x={name:"Home",components:{Header:p,TimeLine:w},data(){return{publicPath:"/",checkAll:!0,isIndeterminate:!1,pageSize:10,page:1,checkList:[],subList:[],allconfList:[],allconfMap:new Map,showList:[],showNumber:0,typeMap:new Map,timeZone:"",utcMap:new Map,rankoptions:{A:"High",B:"Medium",C:"Low"},typesList:[],rankList:[],cachedLikes:[],cachedRanks:[],input:""}},methods:{loadFile(){this.timeZone=C,this.$http.get(this.publicPath+"conference/types.yml").then(e=>{const t=v.load(e.body);this.subList=t;for(let s=0;s<this.subList.length;s++)this.checkList.push(this.subList[s].sub),this.typesList.push(this.subList[s].sub),this.typeMap.set(this.subList[s].sub,this.subList[s].name);this.loadCachedTypes(),this.getAllConf()},()=>{alert("sorry your network is not stable!")})},getAllConf(){let e=this.$http.get(this.publicPath+"conference/allconf.yml").then(e=>{const t=v.load(e.body);let s=[],i=L.tz(new Date,C);for(let n=0;n<t.length;n++){let e=t[n];for(let t=0;t<e.confs.length;t++){let a=e.confs[t];a.title=e.title,a.description=e.description,a.sub=e.sub,a.rank=e.rank,a.displayrank=this.rankoptions[a.rank],a.dblp=e.dblp;let n=a.timeline.length;a.deadline=a.timeline[n-1].deadline,a.abstract_deadline=a.timeline[n-1].abstract_deadline,a.comment=a.timeline[n-1].comment,a.ddls=[];let l=!1;for(let e=0;e<n;e++){let t=L(a.timeline[e].deadline+this.utcMap.get(a.timezone)),s=t.diff(i);a.timeline[e].abstract_deadline&&a.ddls.push({timepoint:a.timeline[e].abstract_deadline+this.utcMap.get(a.timezone),type:0}),a.ddls.push({timepoint:a.timeline[e].deadline+this.utcMap.get(a.timezone),type:1}),!l&&s>=0&&(a.deadline=a.timeline[e].deadline,a.abstract_deadline=a.timeline[e].abstract_deadline,a.comment=a.timeline[e].comment,l=!0)}s.push(a)}}let a=L.tz(new Date,C);for(let n=0;n<s.length;n++){let e=s[n];if(e.subname=this.typeMap.get(e.sub),"TBD"===e.deadline)e.remain=0,e.status="TBD";else{"AoE"===e.timezone?e.timezone="UTC-12":"UTC"===e.timezone&&(e.timezone="UTC+0");let t=L(e.deadline+this.utcMap.get(e.timezone));if(e.localDDL=t.tz(this.timeZone).format("ddd MMM Do YYYY HH:mm:ss z"),e.originDDL=e.deadline+" "+e.timezone,e.abstract_deadline){let t=L(e.abstract_deadline+this.utcMap.get(e.timezone));e.comment||(e.comment="abstract deadline on "+t.tz(this.timeZone).format("MMM D, YYYY")+".")}let s=t.diff(a);s<=0?(e.remain=0,e.status="FIN"):(e.remain=s,e.status="RUN"),this.cachedLikes&&this.cachedLikes.indexOf(e.title+e.id)>=0?e.isLike=!0:e.isLike=!1}this.allconfList.push(e),this.allconfMap.set(e.title+e.year,e)}},()=>{alert("sorry your network is not stable!")}),t={},s=this.$http.get(this.publicPath+"conference/allacc.yml").then(e=>{t=v.load(e.body)},()=>{alert("sorry your network is not stable!")});Promise.all([e,s]).then(()=>{for(let e=0;e<t.length;++e){let s=t[e].accept_rates;for(let i=0;i<s.length;++i){let a=s[i];for(let s=1;s<=3;++s)this.allconfMap.has(t[e].title+(a.year+s))&&(this.allconfMap.get(t[e].title+(a.year+s)).acc=a.str)}}this.showConf(this.typesList,this.rankList,this.input,1)}).catch(e=>{console.error("Error occurred:",e)})},showConf(e,t,s,i){let a=this.allconfList;null!=e&&0!=e.length&&(a=a.filter((function(t){return e.indexOf(t.sub.toUpperCase())>=0}))),null!=t&&t.length>0&&(a=a.filter((function(e){return t.indexOf(e.rank)>=0}))),null!=s&&s.length>0&&(a=a.filter((function(e){return e.id.toLowerCase().indexOf(s.toLowerCase())>=0})));let n=a.filter((function(e){return"RUN"===e.status})),l=a.filter((function(e){return"TBD"===e.status})),r=a.filter((function(e){return"FIN"===e.status}));n.sort((e,t)=>t.remain===e.remain?0:e.remain<t.remain?-1:1),r.sort((e,t)=>t.year===e.year?0:e.year>t.year?-1:1),this.showList=[];let o=[],c=[];o.push.apply(o,n),o.push.apply(o,l),o.push.apply(o,r);for(let d=o.length-1;d>=0;d--){let e=o[d];!0===e.isLike&&(c.push(e),o.splice(d,1))}c.reverse(),c.push.apply(c,o),this.showList=c,this.showNumber=this.showList.length,this.showList=this.showList.slice(this.pageSize*(i-1),this.pageSize*i),this.page=i},transform(e){return Object.entries(e).forEach(([t,s])=>{const i=s<10?"0"+s:s,a=s<2?t.replace(/s$/,""):t;"d"===a[0]?e[t]=`${i} ${a}`:e[t]=`${i} ${a[0]}`}),e},loadUTCMap(){for(let e=-12;e<=12;e++)e>=0?this.utcMap.set("UTC+"+e,"+"+(Array(2).join(0)+e).slice(-2)+"00"):this.utcMap.set("UTC"+e,"-"+(Array(2).join(0)+-1*e).slice(-2)+"00");this.utcMap.set("AoE","-1200"),this.utcMap.set("UTC","+0000")},handleCheckedChange(e){this.typesList=e;let t=e.length;this.checkAll=t===this.subList.length,this.isIndeterminate=t>0&&t<this.subList.length,this.$ls.set("types",Array.from(this.typesList)),this.showConf(this.typesList,this.rankList,this.input,1)},handleInputChange(){this.showConf(this.typesList,this.rankList,this.input,1)},handleRankChange(e){this.rankList=e,this.$ls.set("ranks",Array.from(this.rankList)),this.showConf(this.typesList,this.rankList,this.input,1)},handleCurrentChange(e){this.showConf(this.typesList,this.rankList,this.input,e)},handleCheckAllChange(){this.typesList=this.checkList.length===this.subList.length?[]:this.subList.map(e=>e.sub).join(",").split(","),this.checkList=this.typesList,this.isIndeterminate=!1,this.$ls.set("types",Array.from(this.typesList)),this.showConf(this.typesList,this.rankList,this.input,1)},handleClickIcon(e,t){if(!0===t){e.isLike=!1;let t=this.cachedLikes.indexOf(e.title+e.id);t>-1&&this.cachedLikes.splice(t,1),this.$ls.set("likes",Array.from(new Set(this.cachedLikes)))}else e.isLike=!0,this.cachedLikes.push(e.title+e.id),this.$ls.set("likes",Array.from(new Set(this.cachedLikes)))},generateDBLP(e){return"https://dblp.uni-trier.de/db/conf/"+e},formatGoogleCalendar(e){return"https://www.google.com/calendar/render?action=TEMPLATE&text="+e.title+"+"+e.year+"&dates="+L(e.deadline+this.utcMap.get(e.timezone)).toISOString().replace(/-|:|\.\d\d\d/g,"")+"/"+L(e.deadline+this.utcMap.get(e.timezone)).toISOString().replace(/-|:|\.\d\d\d/g,"")+"&details="+e.comment+"&location=Online&ctz="+this.timeZone+"&sf=true&output=xml"},formatiCloudCalendar(e){return"data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:https://ccfddl.github.io/%0ADTSTART:"+L(e.deadline+this.utcMap.get(e.timezone)).toISOString().replace(/-|:|\.\d\d\d/g,"")+"%0ADTEND:"+L(e.deadline+this.utcMap.get(e.timezone)).toISOString().replace(/-|:|\.\d\d\d/g,"")+"%0ASUMMARY:"+e.title+" "+e.year+" Deadline %0ADESCRIPTION:"+e.comment+"%0ALOCATION:%0AEND:VEVENT%0AEND:VCALENDAR"},_isMobile(){let e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return e},formatSubName(e){return this._isMobile()?e.sub:e.name},loadCachedTypes(){let e=this.$ls.get("types");if(e){this.typesList=e,this.checkList=this.typesList;let t=this.checkList.length;this.checkAll=t===this.subList.length,this.isIndeterminate=t>0&&t<this.subList.length}},loadCachedLikes(){this.cachedLikes=this.$ls.get("likes"),this.cachedLikes||(this.cachedLikes=[])},loadCachedRanks(){this.cachedRanks=this.$ls.get("ranks"),this.cachedRanks||(this.cachedRanks=[]),this.rankList=this.cachedRanks}},mounted(){this.loadCachedRanks(),this.loadCachedLikes(),this.loadUTCMap(),this.loadFile()}},S=x,T=(s("39a1"),Object(f["a"])(S,l,r,!1,null,"197197e6",null)),D=T.exports,M={name:"App",components:{Home:D}},z=M,A=(s("034f"),Object(f["a"])(z,a,n,!1,null,null,null)),O=A.exports,I=s("5c96"),N=s.n(I),$=(s("0fae"),s("28dd")),B=s("407d"),E=s.n(B),P=s("c16e"),R=s.n(P);i["default"].use(N.a),i["default"].use($["a"]),i["default"].component(E.a.name,E.a);const U={namespace:"vuejs__",name:"ls",storage:"local"};i["default"].use(R.a,U),i["default"].config.productionTip=!1,new i["default"]({render:e=>e(O)}).$mount("#app")},"85ec":function(e,t,s){},cd1c:function(e,t,s){},e8b5:function(e,t,s){"use strict";s("cd1c")},ec65:function(e,t,s){"use strict";s("000c")}});
//# sourceMappingURL=index.459b4892.js.map
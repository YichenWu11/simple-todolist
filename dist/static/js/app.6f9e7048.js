(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);m&&m(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var m=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"14ec":function(e,t,a){},"176e":function(e,t,a){"use strict";a("37f3")},"22e5":function(e,t,a){},"37f3":function(e,t,a){},"4d04":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("f4f9"),a("450d");var n=a("c2cc"),i=a.n(n),r=(a("6611"),a("e772")),s=a.n(r),o=(a("d4df"),a("7fc1")),l=a.n(o),c=(a("fe07"),a("6ac5")),m=a.n(c),u=(a("4ffc"),a("946e")),p=a.n(u),f=(a("826b"),a("c263")),h=a.n(f),d=(a("e960"),a("b35b")),g=a.n(d),_=(a("b5d8"),a("f494")),b=a.n(_),k=(a("560b"),a("dcdc")),y=a.n(k),v=(a("1f1a"),a("4e4b")),w=a.n(v),x=(a("eca7"),a("3787")),T=a.n(x),$=(a("425f"),a("4105")),S=a.n($),D=(a("a7cc"),a("df33")),V=a.n(D),O=(a("9d4c"),a("e450")),j=a.n(O),C=(a("10cb"),a("f3ad")),M=a.n(C),H=(a("5466"),a("ecdf")),P=a.n(H),q=(a("38a0"),a("ad41")),B=a.n(q),E=(a("1951"),a("eedf")),z=a.n(E),R=(a("0fb7"),a("f529")),Z=a.n(R),F=(a("9e1f"),a("6ed5")),J=a.n(F),N=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("b0c0"),a("2b0e")),L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("MainContent")],1)},I=[],Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"head"},[e._v(" ToDo_List "),"/login"!=e.$route.fullPath?a("el-button",{staticClass:"exit-btn",attrs:{type:"info",icon:"el-icon-error"},on:{click:e.logout}},[e._v(" 登出 ")]):e._e()],1),a("div",{staticClass:"main"},["/login"!=e.$route.fullPath?a("div",{staticClass:"top-btn"},[a("router-link",{attrs:{to:"/task-center"}},[a("el-button",{staticClass:"btn",staticStyle:{width:"40%","margin-bottom":"15px"},attrs:{type:"primary",plain:""}},[e._v(" 任务中心 ")])],1),a("router-link",{attrs:{to:"/task-template"}},[a("el-button",{staticClass:"btn",staticStyle:{width:"40%","margin-bottom":"15px"},attrs:{type:"primary",plain:""}},[e._v(" 任务模板 ")])],1)],1):e._e(),a("router-view")],1)])},A=[],X={name:"MainContent",methods:{logout:function(){var e=this;this.$confirm("确认登出?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){sessionStorage.clear(),window.localStorage.username="",window.localStorage.token="",e.$router.push("/login")})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}},G=X,W=(a("176e"),a("2877")),K=Object(W["a"])(G,Y,A,!1,null,"3ccb1020",null),Q=K.exports,U={name:"App",components:{MainContent:Q}},ee=U,te=Object(W["a"])(ee,L,I,!1,null,null,null),ae=te.exports,ne=a("1da1"),ie=(a("96cf"),a("8c4f")),re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{padding:"0",margin:"-40px auto 0 -106px"}},[a("el-button",{attrs:{plain:""},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新增任务")]),a("el-button",{attrs:{plain:""},on:{click:e.showTaskTemplates}},[e._v("导入模板任务")])],1),a("el-dialog",{attrs:{title:"新增任务",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",rules:e.rule_for_new}},[a("el-form-item",{attrs:{label:"任务名称",prop:"title"}},[a("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"任务内容",prop:"content"}},[a("el-input",{model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),a("el-form-item",{attrs:{label:"计划完成"}},[a("el-col",{attrs:{span:24,prop:"date"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.planning_finish_time,callback:function(t){e.$set(e.form,"planning_finish_time",t)},expression:"form.planning_finish_time"}}),a("el-time-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"HH:mm:ss",placeholder:"选择时间"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),a("el-col",{staticClass:"line",attrs:{span:2}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.createTask}},[e._v("立即创建")]),a("el-button",{on:{click:e.cancel_task}},[e._v("取消")])],1)],1)],1),a("el-dialog",{attrs:{title:"修改任务",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",rules:e.rule_for_change}},[e.can_change?a("el-form-item",{attrs:{label:"任务名称",prop:"title"}},[a("el-input",{model:{value:e.change_form.title,callback:function(t){e.$set(e.change_form,"title",t)},expression:"change_form.title"}})],1):e._e(),e.can_change?a("el-form-item",{attrs:{label:"任务内容",prop:"content"}},[a("el-input",{model:{value:e.change_form.content,callback:function(t){e.$set(e.change_form,"content",t)},expression:"change_form.content"}})],1):e._e(),e.can_change?a("el-form-item",{attrs:{label:"计划完成"}},[a("el-col",{attrs:{span:24}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.change_form.planning_finish_time,callback:function(t){e.$set(e.change_form,"planning_finish_time",t)},expression:"change_form.planning_finish_time"}}),a("el-time-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"HH:mm:ss",placeholder:"选择时间"},model:{value:e.change_time,callback:function(t){e.change_time=t},expression:"change_time"}})],1),a("el-col",{staticClass:"line",attrs:{span:2}})],1):e._e(),a("el-form-item",{attrs:{label:"任务备注",prop:"remark"}},[a("el-input",{model:{value:e.change_form.remark,callback:function(t){e.$set(e.change_form,"remark",t)},expression:"change_form.remark"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.ChangeTask}},[e._v("立即修改")]),a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取消")])],1)],1)],1),a("div",{staticClass:"task-center"},[a("el-table",{staticStyle:{width:"1350px"},attrs:{data:e.tableData,fit:"",border:"",stripe:""}},[a("el-table-column",{attrs:{align:"center",prop:"title",label:"任务名称",width:"120"}}),a("el-table-column",{attrs:{align:"center",prop:"content",label:"任务内容",width:"120"}}),a("el-table-column",{attrs:{align:"center",prop:"state",label:"任务状态",width:"100"}}),a("el-table-column",{attrs:{align:"center",prop:"remark",label:"任务备注",width:"120"}}),a("el-table-column",{attrs:{align:"center",prop:"planning_finish_time",label:"计划完成时间",width:"200"}}),a("el-table-column",{attrs:{align:"center",prop:"actual_finish_time",label:"实际完成时间",width:"200"}}),a("el-table-column",{attrs:{align:"center",prop:"create_time",label:"创建时间",width:"200"}}),a("el-table-column",{attrs:{label:"操作",width:"280",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",prop:"id",type:"success",disabled:"已完成"===t.row.state||"延期完成"===t.row.state},on:{click:function(a){return e.FinishTask(t.row)}}},[e._v("完成 ")]),a("el-button",{attrs:{size:"mini",type:"warning",disabled:"已拒绝"===t.row.state},on:{click:function(a){return e.RejectTask(t.row)}}},[e._v("拒绝 ")]),a("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(a){return e.change(t.row)}}},[e._v("修改 ")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.DeleteTask(t.row.id)}}},[e._v("删除 ")])]}}])})],1)],1),a("el-dialog",{attrs:{title:"选择模板",visible:e.outerVisible},on:{"update:visible":function(t){e.outerVisible=t}}},[a("el-dialog",{attrs:{width:"55%",title:"配置任务信息",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[a("ul",e._l(e.task_array,(function(t,n){return a("li",{key:n,staticStyle:{"list-style-type":"none",margin:"30px 100px 30px 120px",padding:"0"}},[a("h4",{staticStyle:{"font-family":'"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif'}},[e._v(" 任务"+e._s(n+1)+" ")]),a("el-form",{attrs:{rules:e.rule_for_new}},[a("el-form-item",{attrs:{label:"任务名称",prop:"title"}},[a("el-input",{model:{value:t.title,callback:function(a){e.$set(t,"title",a)},expression:"item.title"}})],1),a("el-form-item",{attrs:{label:"任务内容",prop:"content"}},[a("el-input",{model:{value:t.content,callback:function(a){e.$set(t,"content",a)},expression:"item.content"}})],1),a("el-form-item",{attrs:{label:"计划完成"}},[a("el-col",{attrs:{span:24}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.planning_finish_time,callback:function(a){e.$set(t,"planning_finish_time",a)},expression:"item.planning_finish_time"}}),a("el-time-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"HH:mm:ss",placeholder:"选择时间"},model:{value:e.time_array[n],callback:function(t){e.$set(e.time_array,n,t)},expression:"time_array[index]"}})],1),a("el-col",{staticClass:"line",attrs:{span:2}})],1)],1)],1)})),0),a("el-form",[a("el-form-item",{staticStyle:{"margin-left":"560px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.ensure_create}},[e._v("确认创建")]),a("el-button",{on:{click:function(t){e.innerVisible=!1}}},[e._v("取消")])],1)],1)],1),a("ul",e._l(e.temp_array,(function(t,n){return a("li",{key:n,staticStyle:{"list-style-type":"none",margin:"30px 100px 30px 120px",padding:"0"}},[a("el-button",{staticStyle:{width:"80%"},on:{click:function(a){return e.showTasks(t)}}},[e._v(e._s(t.title))])],1)})),0),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel_outer}},[e._v("取 消")])],1)],1)],1)},se=[],oe=(a("99af"),a("d3b7"),a("159b"),a("ac1f"),a("5319"),a("fb6a"),a("4de4"),a("466d"),a("bc3a")),le=a.n(oe),ce=le.a.create({withCredentials:!0});ce.interceptors.request.use((function(e){e.headers["X-Requested-With"]="XMLHttpRequest";var t=/.*csrftoken=([^;.]*).*$/;return e.headers["X-CSRFToken"]=null===document.cookie.match(t)?null:document.cookie.match(t)[1],e})),ce.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),N["default"].prototype.axios=ce;var me=ce,ue=me,pe=function(e){return ue({url:"http://localhost:8000/api/authorizations/",method:"post",data:e})},fe=function(e){return ue({url:"http://localhost:8000/api/myuser/",method:"post",data:e})},he=function(){return ue({url:"http://localhost:8000/api/task/",method:"get"})},de=function(e){return ue({url:"http://localhost:8000/api/task/",method:"post",data:e})},ge=function(e,t){return ue({url:"http://localhost:8000/api/task/".concat(e,"/"),method:"patch",data:t})},_e=function(e){return ue({url:"http://localhost:8000/api/task/".concat(e,"/"),method:"delete"})},be=function(e,t){return ue({url:"http://localhost:8000/api/task/".concat(e,"/"),method:"patch",data:t})},ke=function(){return ue({url:"http://localhost:8000/api/template/",method:"get"})},ye=function(e){return ue({url:"http://localhost:8000/api/template/",method:"post",data:e})},ve=function(e){return ue({url:"http://localhost:8000/api/template/".concat(e,"/"),method:"delete"})},we=function(e,t){return ue({url:"http://localhost:8000/api/template/".concat(e,"/"),method:"patch",data:t})},xe={name:"Task_Center",data:function(){return{nowDate:"",time:"",change_time:"",change_data:{title:"",content:"",remark:"",planning_finish_time:""},can_change:!0,form:{user:"",title:"",content:"",state:0,remark:"",planning_finish_time:"",actual_finish_time:null,create_time:null},change_form:{content:"",remark:"",planning_finish_time:""},dialogVisible:!1,editVisible:!1,outerVisible:!1,innerVisible:!1,tableData:[],rule_for_new:{title:[{required:!0,message:"请输入任务名称",trigger:"blur"},{max:20,message:"长度不超过20个字符"}],content:[{max:100,message:"长度不超过100个字符"}],remark:[{max:50,message:"长度不超过50个字符"}]},rule_for_change:{title:[{max:20,message:"长度不超过20个字符"}],content:[{max:100,message:"长度不超过100个字符"}],remark:[{max:50,message:"长度不超过50个字符"}]},temp_array:[],task_array:[],time_array:[],temp:{title:"",content:"",remark:"",range:"",update_time:null,user:""}}},methods:{currentTime:function(){setInterval(this.formatDate,500)},formatDate:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),i=e.getHours();i=i<10?"0"+i:i;var r=e.getMinutes();r=r<10?"0"+r:r;var s=e.getSeconds();s=s<10?"0"+s:s,this.nowDate="".concat(t,"-").concat(a,"-").concat(n," ").concat(i,":").concat(r,":").concat(s)},loadTasks:function(){var e=this;he().then((function(t){e.tableData=t.data,e.tableData.forEach((function(e){0==e["state"]?e["state"]="未完成":1==e["state"]?e["state"]="已完成":2==e["state"]?e["state"]="延期完成":3==e["state"]&&(e["state"]="已拒绝"),e["planning_finish_time"]&&(e["planning_finish_time"]=e["planning_finish_time"].replace("T"," "),e["planning_finish_time"]=e["planning_finish_time"].replace("Z"," ")),e["actual_finish_time"]&&(e["actual_finish_time"]=e["actual_finish_time"].replace("T"," "),e["actual_finish_time"]=e["actual_finish_time"].replace("Z"," ")),e["create_time"]&&(e["create_time"]=e["create_time"].replace("T"," "),e["create_time"]=e["create_time"].replace("Z"," "),e["create_time"]=e["create_time"].slice(0,19))})),e.tableData=e.tableData.filter((function(e){return e.user===window.localStorage.username}))}))},createTask:function(){var e=this;if(this.form.user=window.localStorage.username,this.form["planning_finish_time"]+=" "+this.time,Date.parse(this.form["planning_finish_time"])<Date.now())return this.$message({message:"计划完成时间不能早于当前时间！",type:"warning"}),this.dialogVisible=!1,this.form.title="",this.form.content="",this.form.planning_finish_time="",void(this.time="");de(this.form).then((function(t){e.loadTasks(),e.$message({message:"任务创建成功！",type:"success"})})).catch((function(t){console.error(t.response.data),e.$message.error("任务创建失败！")})),this.dialogVisible=!1,this.form.title="",this.form.content="",this.form.planning_finish_time="",this.time=""},cancel_task:function(){this.dialogVisible=!1,this.$message({message:"已取消创建",type:"info"})},FinishTask:function(e){var t=this;if("未完成"==e.state){var a=1;Date.parse(e.planning_finish_time)<Date.now()&&(a=2),ge(e.id,{state:a,actual_finish_time:this.nowDate}).then((function(e){t.loadTasks(),1==a?t.$message({message:"任务已完成！可点击修改对任务进行备注",type:"success"}):2==a&&t.$message({message:"任务延期完成,可点击修改对任务进行备注",type:"info"})}))}else"已完成"==e.state?this.$message({message:"任务已完成,请勿点击",type:"info"}):"已拒绝"==e.state&&this.$message({message:"任务已拒绝,请勿点击",type:"info"})},RejectTask:function(e){var t=this;"未完成"==e.state?this.$confirm("确认拒绝?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){ge(e.id,{state:3}).then((function(e){t.loadTasks(),t.$message({message:"任务已拒绝！可点击修改对任务进行备注",type:"warning"})})).catch((function(e){console.error(e.response)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})})):"已完成"==e.state||"延期完成"==e.state?this.$message({message:"任务已完成,请勿点击",type:"info"}):"已拒绝"==e.state&&this.$message({message:"任务已拒绝,请勿点击",type:"info"})},DeleteTask:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){_e(e).then((function(e){t.loadTasks(),t.$message({message:"已删除",type:"success"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},ChangeTask:function(){var e=this;if(this.can_change){if(""==this.change_form.title&&(this.change_form.title=this.change_data.title),""!=this.change_form["planning_finish_time"]&&""!=this.change_time?(this.change_form["planning_finish_time"]+=" "+this.change_time,this.change_form["planning_finish_time"]=this.change_form["planning_finish_time"]):this.change_form["planning_finish_time"]=this.change_data.planning_finish_time.slice(0,19),""==this.change_form["content"]&&(this.change_form["content"]=this.change_data.content),""==this.change_form["remark"]&&(this.change_form["remark"]=this.change_data.remark),Date.parse(this.change_form["planning_finish_time"])<Date.now())return this.$message({message:"计划完成时间不能早于当前时间！",type:"warning"}),this.change_form["title"]="",this.change_form["planning_finish_time"]="",this.change_form["content"]="",this.change_form["remark"]="",this.change_time="",this.editVisible=!1,void(this.can_change=!0);be(this.change_data.id,this.change_form).then((function(t){e.loadTasks(),e.$message({message:"修改成功",type:"success"})})).catch((function(t){e.$message.error("修改失败！")}))}else null===this.change_form["remark"]&&(this.change_form["remark"]=""),be(this.change_data.id,{remark:this.change_form["remark"]}).then((function(t){e.loadTasks(),e.$message({message:"修改成功！",type:"success"})})).catch((function(t){e.$message.error("修改失败！")}));this.change_form["title"]="",this.change_form["planning_finish_time"]="",this.change_form["content"]="",this.change_form["remark"]="",this.change_time="",this.editVisible=!1,this.can_change=!0},change:function(e){this.change_data=e,this.editVisible=!0,"已完成"===this.change_data.state||"已拒绝"===this.change_data.state||"延期完成"===this.change_data.state?this.can_change=!1:this.can_change=!0},showTaskTemplates:function(){var e=this;ke().then((function(t){e.temp_array=t.data,e.outerVisible=!0;for(var a=0;a<e.temp_array.length;a++)e.time_array.push("")}))},showTasks:function(e){this.task_array=JSON.parse(e.content),this.innerVisible=!0},ensure_create:function(){for(var e=this,t=0;t<this.task_array.length;t++){if(this.task_array[t].planning_finish_time+=" "+this.time_array[t],Date.parse(this.task_array[t].planning_finish_time)<Date.now())return this.$message({message:"计划完成时间不能早于现在!",type:"warning"}),this.time_array=[],this.task_array=[],this.temp_array=[],this.innerVisible=!1,void(this.outerVisible=!1);de(this.task_array[t]).then((function(t){e.loadTasks()})).catch((function(e){console.log(e.response.data)}))}this.time_array=[],this.task_array=[],this.temp_array=[],this.innerVisible=!1,this.outerVisible=!1,this.$message({message:"创建成功！",type:"success"})},cancel_outer:function(){this.outerVisible=!1,this.time_array=[],this.task_array=[],this.temp_array=[],this.$message({message:"已取消创建",type:"info"})}},mounted:function(){this.currentTime()},created:function(){this.loadTasks()},beforeDestroy:function(){this.formatDate&&clearInterval(this.formatDate)}},Te=xe,$e=(a("dc20"),Object(W["a"])(Te,re,se,!1,null,"e240c55c",null)),Se=$e.exports,De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{padding:"0",margin:"-40px auto 0 -106px"}},[a("el-button",{attrs:{plain:""},on:{click:e.open}},[e._v("新增模板")]),a("el-input",{staticStyle:{width:"400px",height:"36px",margin:"0 10px 0 30px",border:"1px solid lightgray","border-radius":"4px"},attrs:{placeholder:"请输入内容"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),a("el-button",{attrs:{plain:""},on:{click:e.search}},[e._v("搜索")]),a("el-button",{attrs:{plain:""},on:{click:e.loadTaskTemplates}},[e._v("展示所有内容")]),a("el-button",{attrs:{plain:""},on:{click:e.showMyTemps}},[e._v("只展示我创建的模板")]),a("el-button",{attrs:{plain:""},on:{click:e.showOtherTemps}},[e._v("只展示其他人创建的模板")])],1),a("el-dialog",{attrs:{title:"新增模板",visible:e.outerVisible,width:"30%"},on:{"update:visible":function(t){e.outerVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",rules:e.rule_for_new}},[a("el-form-item",{attrs:{label:"模板名称",prop:"title"}},[a("el-input",{model:{value:e.temp.title,callback:function(t){e.$set(e.temp,"title",t)},expression:"temp.title"}})],1),a("el-form-item",{attrs:{label:"模板备注",prop:"remark"}},[a("el-input",{model:{value:e.temp.remark,callback:function(t){e.$set(e.temp,"remark",t)},expression:"temp.remark"}})],1),a("el-form-item",{attrs:{label:"可见范围"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0,max:1},model:{value:e.temp.range,callback:function(t){e.$set(e.temp,"range",t)},expression:"temp.range"}})],1),a("p",{staticStyle:{"font-size":"small",color:"gray",margin:"-10px 0 10px 80px"}},[e._v("( 注:0代表仅自己可见,1代表所有人可见 )")]),a("el-form-item",{attrs:{label:"任务数目"}},[a("el-input-number",{attrs:{"controls-position":"right",min:1,max:5},model:{value:e.task_num,callback:function(t){e.task_num=t},expression:"task_num"}})],1),a("el-dialog",{attrs:{width:"30%",title:"编辑任务",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[a("ul",e._l(e.task_array,(function(t,n){return a("li",{key:n,staticStyle:{"list-style-type":"none",margin:"0 100px 0 0",padding:"0"}},[a("h4",{staticStyle:{"font-family":'"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif'}},[e._v("任务"+e._s(n+1))]),a("el-form-item",{attrs:{label:"任务名称",prop:"title"}},[a("el-input",{model:{value:t.title,callback:function(a){e.$set(t,"title",a)},expression:"item.title"}})],1),a("el-form-item",{attrs:{label:"任务内容",prop:"content"}},[a("el-input",{model:{value:t.content,callback:function(a){e.$set(t,"content",a)},expression:"item.content"}})],1)],1)})),0),a("el-form-item",{staticStyle:{"margin-left":"50px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.createTaskTemplate}},[e._v("确认创建")]),a("el-button",{on:{click:function(t){e.innerVisible=!1}}},[e._v("取消")])],1)],1),a("el-form-item",{staticStyle:{"margin-left":"50px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.edit}},[e._v("编辑任务")]),a("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1),a("el-dialog",{attrs:{title:"新增模板",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",rules:e.rule_for_change}},[a("el-form-item",{attrs:{label:"模板名称",prop:"title"}},[a("el-input",{model:{value:e.temp_data.title,callback:function(t){e.$set(e.temp_data,"title",t)},expression:"temp_data.title"}})],1),a("el-form-item",{attrs:{label:"模板备注",prop:"title"}},[a("el-input",{model:{value:e.temp_data.remark,callback:function(t){e.$set(e.temp_data,"remark",t)},expression:"temp_data.remark"}})],1),a("el-form-item",{attrs:{label:"可见范围"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0,max:1},model:{value:e.temp_data.range,callback:function(t){e.$set(e.temp_data,"range",t)},expression:"temp_data.range"}})],1),a("p",{staticStyle:{"font-size":"small",color:"gray",margin:"-10px 0 10px 80px"}},[e._v("( 注:0代表仅自己可见,1代表所有人可见 )")]),a("el-form-item",{staticStyle:{"margin-left":"50px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.ChangeTaskTemplate}},[e._v("修改模板")]),a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取消")])],1)],1)],1),a("div",{staticClass:"task-temp"},[a("el-table",{staticStyle:{width:"1350px"},attrs:{data:e.tableData,fit:"",border:"",stripe:""}},[a("el-table-column",{attrs:{"header-align":"center","text-align":"“center”",align:"center",prop:"title",label:"模板名称",width:"120"}}),a("el-table-column",{attrs:{align:"center",prop:"content",label:"模板内容",width:"190"}}),a("el-table-column",{attrs:{align:"center",prop:"remark",label:"模板备注",width:"120"}}),a("el-table-column",{attrs:{align:"center",prop:"range",label:"可见范围",width:"120"}}),a("el-table-column",{attrs:{align:"center",prop:"update_time",label:"更新时间",width:"190"}}),a("el-table-column",{attrs:{align:"center",prop:"create_time",label:"创建时间",width:"190"}}),a("el-table-column",{attrs:{align:"center",prop:"user",label:"创建人",width:"120"}}),a("el-table-column",{attrs:{label:"操作",width:"280",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"info",disabled:t.row.user!=e.username},on:{click:function(a){return e.change(t.row)}}},[e._v("修改 ")]),a("el-button",{attrs:{size:"mini",type:"danger",disabled:t.row.user!=e.username},on:{click:function(a){return e.DeleteTaskTemplate(t.row.id)}}},[e._v("删除 ")])]}}])})],1)],1)],1)},Ve=[],Oe=a("ade3"),je=(a("e9c4"),{name:"Task_Template",data:function(){var e;return e={username:"",input:"",nowDate:"",outerVisible:!1,innerVisible:!1,editVisible:!1},Object(Oe["a"])(e,"input",""),Object(Oe["a"])(e,"tableData",[]),Object(Oe["a"])(e,"time",""),Object(Oe["a"])(e,"task_array",[]),Object(Oe["a"])(e,"task_num",0),Object(Oe["a"])(e,"form",{title:"",content:"",remark:"",planning_finish_time:"",user:window.localStorage.username}),Object(Oe["a"])(e,"temp",{title:"",content:"",remark:"",range:"",update_time:null,user:""}),Object(Oe["a"])(e,"temp_data",{title:"",remark:"",range:"",update_time:null}),Object(Oe["a"])(e,"change_temp",{}),Object(Oe["a"])(e,"rule_for_new",{title:[{required:!0,message:"请输入任务名称",trigger:"blur"},{max:20,message:"长度不超过20个字符"}],remark:[{max:50,message:"长度不超过50个字符"}]}),Object(Oe["a"])(e,"rule_for_change",{title:[{max:20,message:"长度不超过20个字符"}],remark:[{max:50,message:"长度不超过50个字符"}]}),e},methods:{currentTime:function(){setInterval(this.formatDate,500)},formatDate:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),i=e.getHours();i=i<10?"0"+i:i;var r=e.getMinutes();r=r<10?"0"+r:r;var s=e.getSeconds();s=s<10?"0"+s:s,this.nowDate="".concat(t,"-").concat(a,"-").concat(n," ").concat(i,":").concat(r,":").concat(s)},open:function(){this.outerVisible=!0},edit:function(){for(var e=0;e<this.task_num;e++){var t={};for(var a in this.form)t[a]=this.form[a];this.task_array.push(t)}this.innerVisible=!0},cancel:function(){this.outerVisible=!1,this.$message({message:"已取消创建",type:"info"}),this.task_num=0,this.task_array=[],this.temp.title="",this.temp.content="",this.temp.remark="",this.temp.range=0},loadTaskTemplates:function(){var e=this;ke().then((function(t){e.tableData=t.data,e.tableData=e.tableData.filter((function(e){return e.user===window.localStorage.username||1===e.range})),e.tableData.forEach((function(e){var t=JSON.parse(e.content);e.content="";for(var a=0;a<t.length;a++){for(var n in t[a])e.content+=t[a][n]+" ";e.content+=" ### "}0==e["range"]?e["range"]="仅自己可见":1==e["range"]&&(e["range"]="所有人可见"),e["update_time"]&&(e["update_time"]=e["update_time"].replace("T"," "),e["update_time"]=e["update_time"].replace("Z"," ")),e["create_time"]&&(e["create_time"]=e["create_time"].replace("T"," "),e["create_time"]=e["create_time"].replace("Z"," "),e["create_time"]=e["create_time"].slice(0,19))}))})).catch((function(e){console.log(e.response)}))},createTaskTemplate:function(){var e=this;this.temp.user=window.localStorage.username,this.temp.content=JSON.stringify(this.task_array),ye(this.temp).then((function(t){e.loadTaskTemplates(),e.$message({message:"任务创建成功!",type:"success"}),e.innerVisible=!1,e.outerVisible=!1,e.task_num=0,e.task_array=[],e.temp.title="",e.temp.content="",e.temp.range=0,e.temp.remark=""})).catch((function(t){console.log(t.response.data),e.$message.error("任务创建失败!")}))},DeleteTaskTemplate:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){ve(e).then((function(e){t.loadTaskTemplates(),t.$message({message:"任务删除成功!",type:"success"})})).catch((function(e){console.log(e.response.data),t.$message.error("删除失败！")}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},ChangeTaskTemplate:function(){var e=this;""===this.temp_data.title&&(this.temp_data.title=this.change_temp.title),""===this.temp_data.remark&&(this.temp_data.remark=this.change_temp.remark),this.temp_data.update_time=this.nowDate,we(this.change_temp.id,this.temp_data).then((function(t){e.loadTaskTemplates(),e.$message({message:"修改成功",type:"success"})})).catch((function(t){console.log(t.response),e.$message.error("修改失败！")})),this.temp_data.title="",this.temp_data.remark="",this.temp_data.update_time="",this.change_temp={},this.editVisible=!1},change:function(e){this.change_temp=e,this.editVisible=!0},search:function(){var e=this;this.tableData=this.tableData.filter((function(t){return-1!=t.title.indexOf(e.input)})),""==this.input&&this.loadTaskTemplates()},showMyTemps:function(){var e=this;ke().then((function(t){e.tableData=t.data,e.tableData=e.tableData.filter((function(e){return e.user===window.localStorage.username||1===e.range})),e.tableData=e.tableData.filter((function(t){return t.user===e.username})),e.tableData.forEach((function(e){var t=JSON.parse(e.content);e.content="";for(var a=0;a<t.length;a++){for(var n in t[a])e.content+=t[a][n]+" ";e.content+=" ### "}0==e["range"]?e["range"]="仅自己可见":1==e["range"]&&(e["range"]="所有人可见"),e["update_time"]&&(e["update_time"]=e["update_time"].replace("T"," "),e["update_time"]=e["update_time"].replace("Z"," ")),e["create_time"]&&(e["create_time"]=e["create_time"].replace("T"," "),e["create_time"]=e["create_time"].replace("Z"," "),e["create_time"]=e["create_time"].slice(0,19))}))})).catch((function(e){console.log(e.response)}))},showOtherTemps:function(){var e=this;ke().then((function(t){e.tableData=t.data,e.tableData=e.tableData.filter((function(e){return e.user===window.localStorage.username||1===e.range})),e.tableData=e.tableData.filter((function(t){return t.user!=e.username})),e.tableData.forEach((function(e){var t=JSON.parse(e.content);e.content="";for(var a=0;a<t.length;a++){for(var n in t[a])e.content+=t[a][n]+" ";e.content+=" ### "}0==e["range"]?e["range"]="仅自己可见":1==e["range"]&&(e["range"]="所有人可见"),e["update_time"]&&(e["update_time"]=e["update_time"].replace("T"," "),e["update_time"]=e["update_time"].replace("Z"," ")),e["create_time"]&&(e["create_time"]=e["create_time"].replace("T"," "),e["create_time"]=e["create_time"].replace("Z"," "),e["create_time"]=e["create_time"].slice(0,19))}))})).catch((function(e){console.log(e.response)}))}},mounted:function(){this.currentTime(),this.username=window.localStorage.username},created:function(){this.loadTaskTemplates()},beforeDestroy:function(){this.formatDate&&clearInterval(this.formatDate)}}),Ce=je,Me=(a("97ab"),Object(W["a"])(Ce,De,Ve,!1,null,"43ce777f",null)),He=Me.exports,Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main",staticStyle:{"margin-top":"120px"}},[a("el-form",{attrs:{rules:e.rules}},[a("el-form-item",{attrs:{label:"用户名",prop:"name"}},[a("el-input",{model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[a("el-input",{attrs:{type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("el-button",{attrs:{plain:"",type:"primary"},on:{click:e.Login}},[e._v("登录")]),a("el-button",{staticStyle:{"margin-left":"80px"},attrs:{plain:"",type:"primary"},on:{click:e.open}},[e._v("注册")])],1),a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{rules:e.rules_re}},[a("el-form-item",{attrs:{label:"用户名",prop:"name"}},[a("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[a("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.close}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.Register}},[e._v("注册")])],1)],1)],1)},qe=[],Be={name:"Login",data:function(){return{dialogVisible:!1,username:"",password:"",rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"}]},rules_re:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}]},form:{username:"",password:"",email:""}}},methods:{Login:function(){var e=this;pe({username:this.username,password:this.password}).then((function(t){sessionStorage.clear(),localStorage.token=t.data.token,localStorage.username=t.data.username,e.$message({message:"欢迎 "+localStorage.username+" !",type:"success"}),e.$router.push("/task-center")})).catch((function(t){e.$message.error("登陆失败，请检查用户名或密码是否正确"),console.log(t.response)}))},Register:function(){var e=this;fe(this.form).then((function(t){e.$message({message:"注册成功!",type:"success"})})).catch((function(t){e.$message.error("注册失败!")})),this.dialogVisible=!1,this.form={username:"",password:"",email:""}},open:function(){this.dialogVisible=!0},close:function(){this.dialogVisible=!1,this.$message({message:"已取消注册",type:"info"}),this.form={username:"",password:"",email:""}}}},Ee=Be,ze=(a("9f6c"),Object(W["a"])(Ee,Pe,qe,!1,null,"3cd0b009",null)),Re=ze.exports;N["default"].use(ie["a"]);var Ze=[{path:"/login",component:Re},{path:"/task-center",component:Se},{path:"/task-template",component:He},{path:"*",redirect:"/login"}],Fe=new ie["a"]({routes:Ze});Fe.beforeEach(function(){var e=Object(ne["a"])(regeneratorRuntime.mark((function e(t,a,n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=window.localStorage.token,window.localStorage.username,""!=i?"/login"===t.path?n("/task-center"):n():"/task-center"===t.path||"/task-template"===t.path?n("/"):n();case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}());var Je=Fe;N["default"].prototype.$msgbox=J.a,N["default"].prototype.$alert=J.a.alert,N["default"].prototype.$confirm=J.a.confirm,N["default"].prototype.$prompt=J.a.prompt,N["default"].prototype.$message=Z.a,N["default"].component(z.a.name,z.a),N["default"].component(B.a.name,B.a),N["default"].component(P.a.name,P.a),N["default"].component(M.a.name,M.a),N["default"].component(j.a.name,j.a),N["default"].component(V.a.name,V.a),N["default"].component(S.a.name,S.a),N["default"].component(T.a.name,T.a),N["default"].component(w.a.name,w.a),N["default"].component(y.a.name,y.a),N["default"].component(b.a.name,b.a),N["default"].component(g.a.name,g.a),N["default"].component(h.a.name,h.a),N["default"].component(p.a.name,p.a),N["default"].component(m.a.name,m.a),N["default"].component(l.a.name,l.a),N["default"].component(s.a.name,s.a),N["default"].component(i.a.name,i.a),N["default"].config.productionTip=!1,new N["default"]({render:function(e){return e(ae)},router:Je}).$mount("#app")},"97ab":function(e,t,a){"use strict";a("4d04")},"9f6c":function(e,t,a){"use strict";a("22e5")},dc20:function(e,t,a){"use strict";a("14ec")}});
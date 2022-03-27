<template>
  <div>
    <div style="padding: 0;margin: -40px auto 0 -106px;">
      <el-button plain @click="dialogVisible = true">新增任务</el-button>
      <el-button plain @click=showTaskTemplates>导入模板任务</el-button>
    </div>

    <!-- 创建任务dialog -->
    <el-dialog
      title="新增任务"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form ref="form" :model="form" label-width="80px" :rules="rule_for_new">
        <el-form-item label="任务名称" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="任务内容" prop="content">
          <el-input v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item label="计划完成">
          <el-col :span="24" prop="date">
            <el-date-picker 
              type="date" 
              placeholder="选择日期" 
              v-model="form.planning_finish_time" 
              style="width: 100%;" 
              value-format="yyyy-MM-dd">
            </el-date-picker>
            <el-time-picker
              v-model="time"
              style="width: 100%;"
              value-format="HH:mm:ss"
              placeholder="选择时间">
            </el-time-picker>            
          </el-col>
          <el-col class="line" :span="2"></el-col>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click= createTask>立即创建</el-button>
          <el-button @click=cancel_task>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 修改任务dialog -->
    <el-dialog
      title="修改任务"
      :visible.sync="editVisible"
      width="30%">
      <el-form ref="form" :model="form" label-width="80px" :rules="rule_for_change">
        <el-form-item label="任务名称" v-if="can_change" prop="title">
          <el-input v-model="change_form.title"></el-input>
        </el-form-item>        
        <el-form-item label="任务内容" v-if="can_change" prop="content">
          <el-input v-model="change_form.content"></el-input>
        </el-form-item>
        <el-form-item label="计划完成" v-if="can_change">
          <el-col :span="24">
            <el-date-picker 
              type="date" 
              placeholder="选择日期" 
              v-model="change_form.planning_finish_time" 
              style="width: 100%;" 
              value-format="yyyy-MM-dd">
            </el-date-picker>
            <el-time-picker
              v-model="change_time"
              style="width: 100%;"
              value-format="HH:mm:ss"
              placeholder="选择时间">
            </el-time-picker>            
          </el-col>
          <el-col class="line" :span="2"></el-col>
        </el-form-item>
        <el-form-item label="任务备注" prop="remark">
          <el-input v-model="change_form.remark"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click= ChangeTask>立即修改</el-button>
          <el-button @click="editVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    

    <!-- 任务列表 -->
    <div class="task-center">
      <el-table
          :data="tableData"
          fit
          border
          stripe
          style="width: 1350px">
        <el-table-column
            align="center"
            prop="title"
            label="任务名称"
            width="120">
        </el-table-column>
        <el-table-column
            align="center"
            prop="content"
            label="任务内容"
            width="120">
        </el-table-column>
        <el-table-column
            align="center"
            prop="state"
            label="任务状态"
            width="100">
        </el-table-column>
        <el-table-column
            align="center"
            prop="remark"
            label="任务备注"
            width="120">
        </el-table-column>
        <el-table-column
            align="center"
            prop="planning_finish_time"
            label="计划完成时间"
            width="200">
        </el-table-column>
        <el-table-column
            align="center"
            prop="actual_finish_time"
            label="实际完成时间"
            width="200">
        </el-table-column>
        <el-table-column
            align="center"
            prop="create_time"
            label="创建时间"
            width="200">
        </el-table-column>
        <el-table-column label="操作" width="280" align="center">
          <template slot-scope="scope">
            <el-button
                size="mini"
                prop="id"
                type="success"
                @click=FinishTask(scope.row)
                :disabled="scope.row.state==='已完成' || scope.row.state==='延期完成'"
            >完成
            </el-button>
            <el-button
                size="mini"
                type="warning"
                @click=RejectTask(scope.row)
                :disabled="scope.row.state==='已拒绝'"
            >拒绝
            </el-button>
            <el-button
                size="mini"
                @click=change(scope.row)
                type="info"
            >修改
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click=DeleteTask(scope.row.id)
            >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 根据选中的任务模板创建任务 -->
    <el-dialog title="选择模板" :visible.sync="outerVisible">
      <el-dialog
        width="55%"
        title="配置任务信息"
        :visible.sync="innerVisible"
        append-to-body>
        <!-- 配置模板中包含的任务的一些信息(内层dialog) -->
        <ul>
          <li
          v-for="(item,index) in task_array"
          :key="index" 
          style="list-style-type:none;margin:30px 100px 30px 120px;padding:0;">
            <h4 
            style='font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;'>
            任务{{ index + 1 }}
            </h4>
            <el-form :rules="rule_for_new">
              <el-form-item label="任务名称" prop="title">
                <el-input v-model="item.title"></el-input>
              </el-form-item>
              <el-form-item label="任务内容" prop="content">
                <el-input v-model="item.content"></el-input>
              </el-form-item>     
              <!-- 编辑完成时间  -->
              <el-form-item label="计划完成">
                <el-col :span="24">
                  <el-date-picker 
                    type="date" 
                    placeholder="选择日期" 
                    v-model="item.planning_finish_time" 
                    style="width: 100%;" 
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                  <el-time-picker
                    v-model="time_array[index]"
                    style="width: 100%;"
                    value-format="HH:mm:ss"
                    placeholder="选择时间">
                  </el-time-picker>            
                </el-col>
                <el-col class="line" :span="2"></el-col>
              </el-form-item>                   
            </el-form>
          </li>
        </ul>
        <el-form>
          <el-form-item style="margin-left:560px;">
            <el-button type="primary" @click=ensure_create>确认创建</el-button>
            <el-button @click="innerVisible = false">取消</el-button>
          </el-form-item>
        </el-form>

      </el-dialog>

      <!-- 展示可选模板 -->
      <ul>
        <li 
        v-for="(item,index) in temp_array" 
        :key="index" 
        style="list-style-type:none;margin:30px 100px 30px 120px;padding:0;">
          <el-button style="width:80%;" @click=showTasks(item)>{{ item.title }}</el-button>
        </li>
      </ul>
      <div slot="footer" class="dialog-footer">
        <el-button @click=cancel_outer>取 消</el-button>
      </div>
    </el-dialog>    

    <!-- I think the Paginator is unnecessary -->
    
  </div>
</template>

<script>
// 引入接口 (最后一个为获取任务模板列表的接口)
import {getTasks, postTask, changeTaskState, deleteTask, changeTask, getTaskTemplates} from "../api/api"

export default {
  name: "Task_Center",
  data() {
    return {
      nowDate: "", // 当前日期
      time: '', // 创建任务时用来拼接的时间
      change_time: '', // 修改任务时用来拼接的时间
      change_data:{
        title:'',
        content:'',
        remark:'',
        planning_finish_time:'',
      }, // 修改任务用的数据
      can_change: true, // 修改任务时能否修改任务内容和计划完成时间
      // 创建任务时的数据
      form: {
        user:'',
        title: '',
        content: '',
        state: 0,
        remark: '',
        planning_finish_time: '',
        actual_finish_time: null,
        create_time:null
      },
      // 修改任务使用的数据
      change_form: {
        content:'',
        remark:'',
        planning_finish_time:'',
      },
      // 控制创建任务弹窗
      dialogVisible: false,
      // 控制修改任务弹窗
      editVisible: false,
      // 控制导入模板任务弹窗
      outerVisible: false,
      // 控制根据模板配置任务并创建的弹窗
      innerVisible: false,
      // 从后端拿到的数据，用来渲染列表
      tableData: [],
      // 创建任务表单校验规则
      rule_for_new: {
        title: [
            { required: true, message: '请输入任务名称', trigger: 'blur' },
            { max: 20,  message: '长度不超过20个字符', }
        ],
        content: [
            { max: 100,  message: '长度不超过100个字符', }
        ],
        remark: [
            { max: 50,  message: '长度不超过50个字符', }
        ]
      },
      rule_for_change: {
        title: [
            { max: 20,  message: '长度不超过20个字符', }
        ],
        content: [
            { max: 100,  message: '长度不超过100个字符', }
        ],
        remark: [
            { max: 50,  message: '长度不超过50个字符', }
        ]
      },
      // 接收后端传来的任务模板的数据(数组)
      temp_array: [],
      // 展示的模板中包括的任务
      task_array: [],
      // 拼接用的时间数组
      time_array: [],
      // 选中的任务模板
      temp: {
        title: '',
        content: '',
        remark: '',
        range: '',
        update_time: null,
        user: '',
      },             
    };
  },
  methods: {
    // 获取当前时间
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    // 时间格式化
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      let second = date.getSeconds(); // 秒
      second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      this.nowDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    },

    // 获取任务列表
    loadTasks() {
      getTasks().then(response => {
        // console.log(response.data)
        this.tableData = response.data
        // console.log(this.tableData)
        this.tableData.forEach(function(item){
          // 处理
          if (item['state'] == 0) {
            item['state'] = '未完成'
          }
          else if (item['state'] == 1) {
            item['state'] = '已完成'
          }
          else if (item['state'] == 2) {
            item['state'] = '延期完成'
          }
          else if (item['state'] == 3) {
            item['state'] = '已拒绝'
          }
          if(item['planning_finish_time']) {
            item['planning_finish_time'] = item['planning_finish_time'].replace('T',' ')
            item['planning_finish_time'] = item['planning_finish_time'].replace('Z',' ')
          }
          if(item['actual_finish_time']) {
            item['actual_finish_time'] = item['actual_finish_time'].replace('T',' ')
            item['actual_finish_time'] = item['actual_finish_time'].replace('Z',' ')
          }
          if(item['create_time']) {
            item['create_time'] = item['create_time'].replace('T',' ')
            item['create_time'] = item['create_time'].replace('Z',' ')
            item['create_time'] = item['create_time'].slice(0,19)
          }
        })
        this.tableData = this.tableData.filter((item)=>(item.user === window.localStorage.username))
      })
    },

    // 创建任务
    createTask() {
      this.form.user = window.localStorage.username
      this.form['planning_finish_time'] += ' ' + this.time  // 拼接时间
      // 限制计划完成时间不能早于当前时间
      if (Date.parse(this.form['planning_finish_time']) < Date.now()) {
        this.$message({
          message: '计划完成时间不能早于当前时间！',
          type: 'warning'
        }) 
        // 清空状态
        this.dialogVisible = false
        this.form.title = ''
        this.form.content = ''
        this.form.planning_finish_time = ''
        this.time = ''
        return ;       
      }
      // 创建任务
      postTask(this.form).then(response => {
        this.loadTasks()
        this.$message({
          message: '任务创建成功！',
          type: 'success'
        })
      }).catch(error => {
        console.error(error.response.data)
        this.$message.error('任务创建失败！')
      })
      // 清空状态
      this.dialogVisible = false
      this.form.title = ''
      this.form.content = ''
      this.form.planning_finish_time = ''
      this.time = ''
    },
    cancel_task() {
      this.dialogVisible = false
      this.$message({
        message: '已取消创建',
        type: 'info'
      })
    },

    // 完成任务
    FinishTask(data) {
      if(data.state == '未完成') {
        let post_state = 1
        if (Date.parse(data.planning_finish_time) < Date.now())
          post_state = 2
        changeTaskState(data.id, {'state':post_state,'actual_finish_time':this.nowDate}).then(response => {
          this.loadTasks()
          if (post_state == 1) {
            this.$message({
              message: '任务已完成！可点击修改对任务进行备注',
              type: 'success'
            })  
          }
          else if (post_state == 2) {
            this.$message({
              message: '任务延期完成,可点击修改对任务进行备注',
              type: 'info'
            })  
          }
        })
      }
      else if(data.state == "已完成"){
        this.$message({
          message: '任务已完成,请勿点击',
          type: 'info'
        })
      }
      else if(data.state == "已拒绝"){
        this.$message({
          message: '任务已拒绝,请勿点击',
          type: 'info'
        })
      }
    },

    // 拒绝任务
    RejectTask(data) {
      if(data.state == '未完成') {
        this.$confirm('确认拒绝?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          changeTaskState(data.id, {'state':3}).then(response => {
          this.loadTasks()
          this.$message({
            message: '任务已拒绝！可点击修改对任务进行备注',
            type: 'warning'
          })
          }).catch(error => {
            console.error(error.response)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
      else if(data.state == "已完成" || data.state == "延期完成"){
        this.$message({
          message: '任务已完成,请勿点击',
          type: 'info'
        })
      }
      else if(data.state == "已拒绝"){
        this.$message({
          message: '任务已拒绝,请勿点击',
          type: 'info'
        })
      }
    },

    // 删除任务
    DeleteTask(id) {
      this.$confirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteTask(id).then(response => {
          this.loadTasks()
          this.$message({
            message: '已删除',
            type: 'success'
          })        
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });      
    },

    // 修改任务
    ChangeTask() {
      if (this.can_change) {
        if (this.change_form.title == '')
          this.change_form.title = this.change_data.title
        if (this.change_form['planning_finish_time'] != '' && this.change_time != '') {
          this.change_form['planning_finish_time'] += ' ' + this.change_time
          this.change_form['planning_finish_time'] = this.change_form['planning_finish_time']
        }
        else
          this.change_form['planning_finish_time'] = this.change_data.planning_finish_time.slice(0,19)
        if (this.change_form['content'] == '')
          this.change_form['content'] = this.change_data.content
        if (this.change_form['remark'] == '')
          this.change_form['remark'] = this.change_data.remark

        // 限制计划完成时间不能早于当前时间
        if (Date.parse(this.change_form['planning_finish_time']) < Date.now()) {
          this.$message({
            message: '计划完成时间不能早于当前时间！',
            type: 'warning'
          }) 
          // 清空状态
          this.change_form['title'] = ''
          this.change_form['planning_finish_time'] = ''
          this.change_form['content'] = ''
          this.change_form['remark'] = ''
          this.change_time = ''
          // 关闭dialog
          this.editVisible = false
          this.can_change = true
          return ;       
        }
        changeTask(this.change_data.id, this.change_form).then(response => {
          this.loadTasks()
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        }).catch(error => {
          this.$message.error('修改失败！')
        })        
      }
      else {
        if (this.change_form['remark'] === null) 
          this.change_form['remark'] = ''
        changeTask(this.change_data.id, {'remark':this.change_form['remark']}).then(response => {
          this.loadTasks()
          this.$message({
            message: '修改成功！',
            type: 'success'
          })
        }).catch(error => {
          // console.log(error.response)
          this.$message.error('修改失败！')
        })         
      }
      // 清空状态
      this.change_form['title'] = ''
      this.change_form['planning_finish_time'] = ''
      this.change_form['content'] = ''
      this.change_form['remark'] = ''
      this.change_time = ''
      // 关闭dialog
      this.editVisible = false
      this.can_change = true
    },
    change(data) {
      this.change_data = data
      this.editVisible = true
      if (this.change_data.state === '已完成' || this.change_data.state === '已拒绝' || this.change_data.state === '延期完成')
        this.can_change = false
      else
        this.can_change = true
      // console.log(JSON.stringify(this.change_data))
    },

    // 展示模板信息
    showTaskTemplates() {
      getTaskTemplates().then(response => {
        this.temp_array = response.data
        this.outerVisible = true
        for(let i = 0; i < this.temp_array.length; i++) {
          this.time_array.push('')
        }
      })
    },
    // 展示模板中包含的任务（存在 task_array 中）
    showTasks(item) {
      this.task_array = JSON.parse(item.content)
      this.innerVisible = true
      // console.log(this.task_array)
    },
    // 确认创建（创建任务）
    ensure_create() {
      for(let i = 0; i < this.task_array.length; i++) {
        // 拼接时间
        this.task_array[i].planning_finish_time += ' ' + this.time_array[i]
        if (Date.parse(this.task_array[i].planning_finish_time) < Date.now()) {
          this.$message({
            message: '计划完成时间不能早于现在!',
            type: 'warning'
          })
          // 清空状态
          this.time_array = []
          this.task_array = []
          this.temp_array = []
          // 关闭dialog
          this.innerVisible = false
          this.outerVisible = false
          return ;
        }
        // 创建任务
        postTask(this.task_array[i]).then(response => {
          this.loadTasks()
        }).catch(error => {
          console.log(error.response.data)
        })
      } 
      // 清空状态
      this.time_array = []
      this.task_array = []
      this.temp_array = []
      // 关闭dialog
      this.innerVisible = false
      this.outerVisible = false
      this.$message({
        message: '创建成功！',
        type: 'success'
      })
    },
    // 外层取消
    cancel_outer() {
      this.outerVisible = false
      // 清空状态
      this.time_array = []
      this.task_array = []
      this.temp_array = []
      this.$message({
        message: '已取消创建',
        type: 'info'
      })
    }
  },
  mounted() {
    this.currentTime()
  },
  created() {
    this.loadTasks()
  },
  // 销毁定时器
  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate) // 在Vue实例销毁前，清除时间定时器
    }
  }  
}
</script>

<style scoped>
  .task-center {
    margin: 20px 0 0 -106px;
  }
</style>
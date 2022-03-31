<template>
  <div>
    <!-- 功能按钮 -->
    <div style="padding: 0;margin: -40px auto 0 -106px;">
      <el-button plain @click="outerVisible = true">新增模板</el-button>
      <!-- 搜索框 -->
      <el-input 
        v-model="input" 
        placeholder="请输入内容" 
        style="width:400px;height:36px;margin: 0 10px 0 30px;border:1px solid lightgray;border-radius:4px;;">
      </el-input>
      <el-button plain @click=search>搜索</el-button>
      <el-button plain @click="loadTaskTemplates">展示所有内容</el-button>
      <el-button plain @click="showMyTemps">只展示我创建的模板</el-button>
      <el-button plain @click="showOtherTemps">只展示其他人创建的模板</el-button>

    </div>

    <!-- 创建模板dialog -->
    <el-dialog
      title="新增模板"
      :visible.sync="outerVisible"
      width="30%">
      <el-form ref="form" :model="temp" label-width="80px" :rules="rule_for_new">
        <el-form-item label="模板名称" prop="title">
          <el-input v-model="temp.title"></el-input>
        </el-form-item>
        <el-form-item label="模板备注" prop="remark">
          <el-input v-model="temp.remark"></el-input>
        </el-form-item>
        <el-form-item label="可见范围">
          <el-input-number v-model="temp.range" controls-position="right" :min="0" :max="1"></el-input-number> 
        </el-form-item>    
        <p style="font-size:small;color:gray;margin:-10px 0 10px 80px;">( 注:0代表仅自己可见,1代表所有人可见 )</p>     
        <el-form-item label="任务数目">
          <el-input-number v-model="task_num" controls-position="right" :min="1" :max="5"></el-input-number> 
        </el-form-item>  
        <el-dialog
        width="30%"
        title="编辑任务"
        :visible.sync="innerVisible"
        append-to-body>
          <ul>    
        <!-- 任务模板中包含的任务的模板 -->
            <li v-for="(item,index) in task_array" :key="index" style="list-style-type:none;margin:0 100px 0 0;padding:0;">
                <h4 style='font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;'>任务{{ index + 1 }}</h4>
                <el-form-item label="任务名称" prop="title">
                  <el-input v-model="item.title"></el-input>
                </el-form-item>
                <el-form-item label="任务内容" prop="content">
                  <el-input v-model="item.content"></el-input>
                </el-form-item>   
              </li>
          </ul>
          <el-form-item style="margin-left:50px;">
              <el-button type="primary" @click=createTaskTemplate>确认创建</el-button>
              <el-button @click="innerVisible = false">取消</el-button>
            </el-form-item>
          </el-dialog>
          <el-form-item style="margin-left:50px;">
          <el-button type="primary" @click=edit>编辑任务</el-button>
          <el-button @click=cancel>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>    

    <!-- 修改模板dialog -->
    <el-dialog
      title="新增模板"
      :visible.sync="editVisible"
      width="30%">
      <el-form ref="form" :model="form" label-width="80px" :rules="rule_for_change">
        <el-form-item label="模板名称" prop="title">
          <el-input v-model="temp_data.title"></el-input>
        </el-form-item>
        <el-form-item label="模板备注" prop="title">
          <el-input v-model="temp_data.remark"></el-input>
        </el-form-item>
        <el-form-item label="可见范围">
          <el-input-number v-model="temp_data.range" controls-position="right" :min="0" :max="1"></el-input-number> 
        </el-form-item>    
        <p style="font-size:small;color:gray;margin:-10px 0 10px 80px;">( 注:0代表仅自己可见,1代表所有人可见 )</p>      
        <el-form-item style="margin-left:50px;">
          <el-button type="primary" @click=ChangeTaskTemplate>修改模板</el-button>
          <el-button @click="editVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog> 


    <!-- 任务模板列表 -->
    <div class="task-temp">
      <el-table
          :data="tableData"
          fit
          border
          stripe
          style="width: 1350px">
        <el-table-column
            header-align="center"
            text-align=“center”
            align="center"
            prop="title"
            label="模板名称"
            width="120">
        </el-table-column>
        <el-table-column
            align="center"
            prop="content"
            label="模板内容"
            width="190">
        </el-table-column>
        <el-table-column
            align="center"
            prop="remark"
            label="模板备注"
            width="120">
        </el-table-column>
        <el-table-column
            align="center"
            prop="range"
            label="可见范围"
            width="120">
        </el-table-column>
        <el-table-column
            align="center"
            prop="update_time"
            label="更新时间"
            width="190">
        </el-table-column>
        <el-table-column
            align="center"
            prop="create_time"
            label="创建时间"
            width="190">
        </el-table-column>
        <el-table-column
            align="center"
            prop="user"
            label="创建人"
            width="120">
        </el-table-column>
        <el-table-column label="操作" width="280" align="center">
          <template slot-scope="scope">
            <el-button
                size="mini"
                type="info"
                @click=change(scope.row)
                :disabled="scope.row.user != username"
            >修改
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click=DeleteTaskTemplate(scope.row.id)
                :disabled="scope.row.user != username"
            >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
// 引入接口
import {getTaskTemplates, postTaskTemplate, deleteTaskTemplate, changeTaskTemplate} from "../api/api"

export default {
  name: "Task_Template",
  data() {
    return {
      username:'',  // 登陆时存储的用户名称
      input: '',  // 用来搜索
      nowDate: "", // 当前日期
      outerVisible: false,  // 控制创建模板外层dialog
      innerVisible: false, // 控制创建模板内层dialog
      editVisible: false, // 控制修改模板dialog
      // 任务模板列表的展示内容
      tableData: [],
      // 创建新模板时候使用的数据
      time:'', // 用来拼接
      task_array:[],
      task_num:0,  // 创建模板时选择的模板中包含的任务数量，初始默认为0
      // 空任务
      form: {
        title:'',
        content:'',
        remark:'',
        planning_finish_time:'',
        user:window.localStorage.username,
      },
      // 创建用的任务模板
      temp: {
        title: '',
        content: '',
        remark: '',
        range: '',
        update_time: null,
        user: '',
      },
      // 修改用的
      temp_data: {
        user:'',
        title: '',
        remark: '',
        range: '',
        update_time: null,
      },
      change_temp: {

      },
      // 表单校验规则
      rule_for_new: {
        title: [
            { required: true, message: '请输入任务名称', trigger: 'blur' },
            { max: 20,  message: '长度不超过20个字符', }
        ],
        remark: [
            { max: 50,  message: '长度不超过50个字符', }
        ]
      },
      rule_for_change: {
        title: [
            { max: 20,  message: '长度不超过20个字符', }
        ],
        remark: [
            { max: 50,  message: '长度不超过50个字符', }
        ]
      }        
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

    // 根据任务数目创建好task_array
    edit() {
      for (let i = 0; i < this.task_num; i++) {
        let objCopy = {}  // 用来拷贝form
        for (let i in this.form) {
            objCopy[i] = this.form[i]
        }
        this.task_array.push(objCopy)
      }
      this.innerVisible = true
    },
    // 外层dialog取消
    cancel() {
      this.outerVisible = false
      this.$message({
        message: '已取消创建',
        type: 'info'
      }) 
      // 清除状态
      this.task_num = 0
      this.task_array = []
      this.temp.title = ''
      this.temp.content = ''
      this.temp.remark = ''
      this.temp.range = 0
    },

    // 加载任务模板列表
    loadTaskTemplates() {
      // 发送请求获取任务模板列表
      getTaskTemplates().then(response => {
        this.tableData = response.data 
        // 处理数据
        this.tableData.forEach(function(item){
          // 处理
          let obj = JSON.parse(item.content)
          item.content = ''
          for (let i = 0; i < obj.length; i++) {
            for (let key in obj[i])
              item.content += obj[i][key] + ' '
            item.content += ' ### '
          }
          let obj_range = {0:"仅自己可见", 1:"所有人可见"}
          item.range = obj_range[item.range]
          // 时间格式处理（及切片）
          if(item['update_time']) {
            item['update_time'] = item['update_time'].replace('T',' ')
            item['update_time'] = item['update_time'].replace('Z',' ')
          }
          if(item['create_time']) {
            item['create_time'] = item['create_time'].replace('T',' ')
            item['create_time'] = item['create_time'].replace('Z',' ')
            item['create_time'] = item['create_time'].slice(0,19)
          }
        }) 
      }).catch(error => {
        console.log(error.response)
      })  
    },

    // 创建模板
    createTaskTemplate() {
      this.temp.user = window.localStorage.username
      this.temp.content = JSON.stringify(this.task_array)
      // 发送请求
      postTaskTemplate(this.temp).then(() => {
        this.loadTaskTemplates()
        this.$message({
          message: '任务创建成功!',
          type: 'success'
        }) 
        // 清除状态
        this.innerVisible = false
        this.outerVisible = false
        this.task_num = 0
        this.task_array = []
        this.temp.title = ''
        this.temp.content = ''
        this.temp.range = 0
        this.temp.remark = ''
      }).catch(error => {
        console.log(error.response.data)
        this.$message.error("任务创建失败!")
      })
    },

    // 删除模板
    DeleteTaskTemplate(id) {
      this.$confirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteTaskTemplate(id,{token:window.localStorage.token}).then(() => {
          this.loadTaskTemplates()
          this.$message({
            message:'任务删除成功!',
            type:'success'
          })
        }).catch(error => {
          console.log(error.response.data)
          this.$message.error('删除失败！')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });      
    },

    // 修改模板
    ChangeTaskTemplate() {
      this.temp_data.user = window.localStorage.token
      if(this.temp_data.title === '')
        this.temp_data.title = this.change_temp.title
      if(this.temp_data.remark === '')
        this.temp_data.remark = this.change_temp.remark   
      this.temp_data.update_time = this.nowDate
  
      // 发送请求
      changeTaskTemplate(this.change_temp.id,this.temp_data).then(() => {
        this.loadTaskTemplates()
        this.$message({
          message:'修改成功',
          type: 'success'
        })
      }).catch(() => {
          // console.log(error.response.data)
          this.$message.error("修改失败！")
        })
      // 清空状态
      this.temp_data.user = ''
      this.temp_data.title = ''
      this.temp_data.remark = ''
      this.temp_data.update_time = ''
      this.change_temp = {}
      this.editVisible = false
    },
    change(data) {
      this.change_temp = data
      this.editVisible = true
    },

    // 搜索功能
    search() {
      this.tableData = this.tableData.filter((item) => {
        return item.title.indexOf(this.input) != -1
      })
      if (this.input == '')
        this.loadTaskTemplates()
    },

    // 只展示我创建的的模板
    showMyTemps() {
      getTaskTemplates().then(response => {
        this.tableData = response.data
        this.tableData = this.tableData.filter((item) => (item.user === window.localStorage.username || item.range === 1)) 
        this.tableData = this.tableData.filter((item) => {
          return item.user === this.username
        })
        // 处理数据
        this.tableData.forEach(function(item){
          // 处理
          let obj = JSON.parse(item.content)
          item.content = ''
          for (let i = 0; i < obj.length; i++) {
            for (let key in obj[i]) {
              item.content += obj[i][key] + ' '
            }
            item.content += ' ### '
          }
          let obj_range = {0:"仅自己可见", 1:"所有人可见"}
          item.range = obj_range[item.range]
          // 时间处理（及切片）
          if(item['update_time']) {
            item['update_time'] = item['update_time'].replace('T',' ')
            item['update_time'] = item['update_time'].replace('Z',' ')
          }
          if(item['create_time']) {
            item['create_time'] = item['create_time'].replace('T',' ')
            item['create_time'] = item['create_time'].replace('Z',' ')
            item['create_time'] = item['create_time'].slice(0,19)
          }
        }) 
      }).catch(error => {
        console.log(error.response)
      })  
    },

    // 只展示其他人创建的模板
    showOtherTemps() {
      getTaskTemplates().then(response => {
        this.tableData = response.data
        this.tableData = this.tableData.filter((item) => (item.user === window.localStorage.username || item.range === 1)) 
        this.tableData = this.tableData.filter((item) => {
          return item.user != this.username
        }) 
        // 处理数据
        this.tableData.forEach(function(item){
          // 处理
          let obj = JSON.parse(item.content)
          item.content = ''
          for (let i = 0; i < obj.length; i++) {
            for (let key in obj[i]) {
              item.content += obj[i][key] + ' '
            }
            item.content += ' ### '
          }
          let obj_range = {0:"仅自己可见", 1:"所有人可见"}
          item.range = obj_range[item.range]
          // 时间处理（及切片）
          if(item['update_time']) {
            item['update_time'] = item['update_time'].replace('T',' ')
            item['update_time'] = item['update_time'].replace('Z',' ')
          }
          if(item['create_time']) {
            item['create_time'] = item['create_time'].replace('T',' ')
            item['create_time'] = item['create_time'].replace('Z',' ')
            item['create_time'] = item['create_time'].slice(0,19)
          }
        }) 
      }).catch(error => {
        console.log(error.response)
      })  
    }
  },
  mounted() {
    this.currentTime()
    this.username = window.localStorage.username
  },
  created() {
    this.loadTaskTemplates()
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
  .task-temp {
    margin: 20px 0 0 -106px;
  }
</style>

<template>
  <div>
    <div class="head">
      ToDo_List
      <el-button 
        type="info" 
        icon="el-icon-error" 
        class="exit-btn" 
        @click="logout" 
        v-if="$route.fullPath != '/login'">
        登出
      </el-button>
    </div>
    <div class="main" >
      <div class="top-btn" v-if="$route.fullPath != '/login'">
        <router-link to="/task-center">
          <el-button 
            type="primary" 
            plain 
            style="width:40%;margin-bottom:15px;" 
            class="btn" >
          任务中心
          </el-button>
        </router-link>
        <router-link to="/task-template">
        <el-button 
          type="primary" 
          plain 
          style="width:40%;margin-bottom:15px;" 
          class="btn">
        任务模板
        </el-button>
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  methods: {
    logout() {
      this.$confirm('确认登出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        sessionStorage.clear()
        window.localStorage.username = ''
        window.localStorage.token = ''
        this.$router.push('/login')        
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    }
  }
}
</script>

<style scoped>
  .head {
    padding:20px 0 0 0;
    margin:0;
    background-color: #409EFF;
    height: 80px;
    border: 2px solid whitesmoke;
    color:white;
    text-align:center;
    font:italic 1em Georgia, serif;
    font-size: 50px;
  }

  .main {
    margin:0;
    padding:0;
    display: flex;
    width:100%;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .top-btn {
    width: 1200px;
    height: 100px;
    margin: 10px 300px 0 500px;
    padding: 0 30px 0 30px;
  }

  .btn:hover {
    box-shadow: 0 6px 8px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
  .btn:active {
    background-color: #409EFF;
    box-shadow: 0 5px lightgray;
    transform: translateY(3px);
  }

  .exit-btn {
    margin: 0 0 60px 1100px;
    /* height: 30px; */
    float: top;
    text-align: center;
  }

</style>
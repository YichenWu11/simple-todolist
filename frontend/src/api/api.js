// 对后端进行请求的接口
import axiosInstance from './index'

const axios = axiosInstance

// 登录
export const login = (data) => axios({url:'api/authorizations/',method:'post',data})

// 注册
export const register = (data) => axios({url:'api/myuser/',method:'post',data})

// 发送邮件 (只传一个id)(传递params参数)
export const sendEmail = (id) => axios({url:'http://127.0.0.1:8000/api/sendemail/',method:'post',params:{id:id}})

// tasks
// 获取任务列表
export const getTasks = () => axios({url:'api/task/',method:'get'})

// 创建任务
export const postTask = (data) => axios({url:'api/task/',method:'post',data})

// 修改任务状态
export const changeTaskState = (id, data) => axios({url:`api/task/${id}/`, method:'patch', data})

// 删除任务
export const deleteTask = (id) => axios({url:`api/task/${id}/`, method:'delete'})

// 修改任务
export const changeTask = (id, data) => axios({url:`api/task/${id}/`, method:'patch', data})


// task-template
// 获取任务模板列表
export const getTaskTemplates = () => axios({url:'api/template/',method:'get'})

// 创建任务模板
export const postTaskTemplate = (data) => axios({url:'api/template/',method:'post',data})

// 删除模板
export const deleteTaskTemplate = (id,data) => axios({url:`api/template/${id}/`, method:'delete',data})

// 修改模板
export const changeTaskTemplate = (id, data) => axios({url:`api/template/${id}/`, method:'patch', data})

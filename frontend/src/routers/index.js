//引入vue-router路由插件
import VueRouter from "vue-router";
//引入Vue
import Vue from "vue";
//使用插件
Vue.use(VueRouter);

import Task_Center from "../pages/Task_Center"
import Task_Template from "../pages/Task_Template"
import Login from "../pages/Login"


// 路由表
const routes = [
    {
        path:'*',
        redirect: "/login"
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/task-center',
        component: Task_Center,
    },
    {
        path: '/task-template',
        component: Task_Template
    },
]


// 修改路由模式
let router = new VueRouter({
    routes
})


// 全局守卫，前置守卫
router.beforeEach(async (to, from, next) => {
    //to:获取到要跳转到的路由信息
    //from：获取到从哪个路由跳转过来来的信息
    //next: next() 放行  next(path) 放行
    //方便测试 统一放行
    let token = window.localStorage.token
    // 已登录
    if (token != '') {
        if (to.path === '/login') {
            next('/task-center')
        }
        else {
            next()
        }
    }
    // 未登录
    else {
        if (to.path === '/task-center' || to.path === '/task-template') {
            next('/')
        }
        else{
            next()
        }
    }    
})


//暴露
export default router
import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:"/",
            redirect:'/login', //路由重定向
            //component:Home
            //路由懒加载
            component: () => import('../components/Login.vue')              
            //component: resolve => require(['@/components/Login'],resolve)  路由异步加载
        },
        {
            path:"/login",
            name:'Login',
            component: () => import('../components/Login.vue')    
        },
        {
            path:"/home",
            name:'Home',
            component: () => import('../components/Home.vue')    
        }
    ],
    mode:'history'
})
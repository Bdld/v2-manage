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
            hidden:true,
            component: () => import('../components/Login.vue')              
            //component: resolve => require(['@/components/Login'],resolve)  路由异步加载
        },
        {
            path:"/login",
            name:'Login',
            hidden:true,
            component: () => import('../components/Login.vue')    
        },
        {
            path:"*",
            name:'NotFound',
            hidden:true,
            component: () => import('../components/NotFound.vue')    
        },
        {
            path:"/home",
            name:'学生管理',
            iconClass:'fa fa-users',
            redirect:'/home/student',
            component: () => import('../components/Home.vue')    ,
            children: [
                {
                    path:"/home/student",
                    name:'学生列表',
                    iconClass:'fa fa-list',
                    component: () => import('../components/students/StudentList.vue')
                },
                {
                    path:"/home/info",
                    name:'信息列表',
                    iconClass:'fa fa-list-alt',
                    component: () => import('../components/students/InfoList.vue')
                },
                {
                    path:"/home/infos",
                    name:'信息管理',
                    iconClass:'fa fa-list-alt',
                    component: () => import('../components/students/InfoLists.vue')
                },
                {
                    path:"/home/work",
                    name:'作业列表',
                    iconClass:'fa fa-list-ul',
                    component: () => import('../components/students/WorkList.vue')
                },
                {
                    path:"/home/works",
                    name:'作业管理',
                    iconClass:'fa fa-th-list',
                    component: () => import('../components/students/WorkMent.vue')
                },
            ]
        },
        {
            path:"/home",
            name:'数据分析',
            iconClass:'fa fa-bar-chart',
            component: () => import('../components/Home.vue')    ,
            children: [
                {
                    path:"/home/dataVierw",
                    name:'数据概览',
                    iconClass:'fa fa-line-chart',
                    component: () => import('../components/dataAnalysis/DataView')
                },
                {
                    path:"/home/mapview",
                    name:'地图概览',
                    iconClass:'fa fa-line-chart',
                    component: () => import('../components/dataAnalysis/MapView')
                },
                {
                    path:"/home/scoremap",
                    name:'分数地图',
                    iconClass:'fa fa-line-chart',
                    component: () => import('../components/dataAnalysis/ScoreMap')
                },
                {
                    path:"/home/TravelMap",
                    name:'旅游地图',
                    iconClass:'fa fa-line-chart',
                    component: () => import('../components/dataAnalysis/TravelMap')
                },
            ]
        },
        {
            path:"/users",
            name:'用户中心',
            iconClass:'fa fa-user',
            component: () => import('../components/Home.vue'),
            children:[
                {
                    path:"/users/user",
                    name:'权限管理',
                    iconClass:'fa fa-line-chart',
                    component: () => import('../components/users/User.vue')
                },
            ]
        },
    ],
    mode:'history'
})
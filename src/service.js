// import axios from 'axios'
// import { getToken } from '../src/untils/setToken.js'
// import { Promise } from 'core-js'
// import { Message } from 'element-ui'

// const service = axios.create({
//     baseURL:"/api", //baseURL会自动加到请求地址上
//     timeout: 3000
// })

// //添加请求拦截器
// service.interceptors.request.use((config) => {
//     //可以在请求之前干些什么（获取并且设置token)
//     console.log(config);
//     config.headers['token'] = getToken('token')
//     return config
// }),(error) => {
//     return Promise.reject(error)
// }

// //添加响应拦截器
// service.interceptors.response.use((response) => {
//     //对响应数据做些什么
//     let { status, message } = response.data    
//     if( status !== 200){
//         Message({Message: message || 'error' , type:'warning'})
//     }
//     return response
// },(error) => {
//     return Promise.reject(error)
// })

// export default service
import axios from "axios";
import { getToken } from '@/untils/setToken.js'
import { Message } from 'element-ui'


const service = axios.create({
    baseURL:'/api',
    timeout: 3000
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers['token'] = getToken('token')
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let { message,status } = response.data
    if(status !== 200){
        Message({Message:message || 'error',type:'waring'})
    }
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default service

  
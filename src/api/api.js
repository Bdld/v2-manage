//项目中大多数时候都会将对应的请求封装成api来调用
import service from "../service.js";

//登录接口
export function login(data){
    return service({
        method:'post',
        url:'/login',
        data
    })
}

//学生列表的查询接口
export function student(parms){
    return service({
        method:'get',
        url:'/students',
        parms
    })
}

//学生列表的删除接口
export function studentDel(id){
    return service({
        method:'delete',
        url:`/students/${id}`
    })
}

//学生列表查询重置
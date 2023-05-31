//用户名匹配
export function nameRule(rule, value, callback) {   // 请输入4-10位的昵称
        let reg = /(^[a-zA-Z0-9]{4,10}$)/
        if(value === ''){
            callback(new Error('请输入用户名'))
        }else if(!reg.test(value)){
            callback(new Error('请输入4-10位用户名'))
        }else {
            callback()
    }
}

//密码匹配
export function passRule(rule, value, callback) {   // 请输入4-10位的昵称
        let pass = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/
        if(value === ''){
            callback(new Error('请输入密码'))
        }else if(!pass.test(value)){
            callback(new Error('6-12位密码需要包含大小写字母和数字以及特殊符号'))
        }else {
            callback()
    }
}
module.exports = {
    devServer:{
        open:true,
        proxy:{
            '/api':{
                target:'http://1.116.64.64:5004/api2/',
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
            },
            // 还有需要向其他服务器发起请求的话可以在这里加
            // '/nb':{
            //     target:'http://1.116.64.64:5004/api2/',
            //     changeOrigin: true,
            //     pathRewrite:{
            //         '^/nb':''
            //     }
            // }
        }
    }
}
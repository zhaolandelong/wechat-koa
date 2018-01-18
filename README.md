### 参考文献

*[使用koa2对接微信公众平台](https://www.jianshu.com/p/7a4ba7f752f1)

*[nodejs微信开发(express版)-目录](http://blog.csdn.net/zzwwjjdj1/article/details/52222653)

*[微信公众平台](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1445241432)

*[微信JS-SDK说明文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)

### 准备工作

*外网可访问的服务器地址，可利用花生壳代理到本地，方便开发调试（参考[微信后台开发第一步：nodeJS+express接入微信后台详细教程](https://www.cnblogs.com/xuange306/p/4971702.html)）
*测试公众号，可用微信公众平台提供的测试号（[接口测试号申请](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421137522)）
*node v7.6.0以上，koa2依赖async（[koa中文官网](https://koa.bootcss.com/)）
*把测试公众号的二维码发给你的ta，启动服务后开撩

### 初始化项目并安装依赖

```bash
$ mkdir koa-wechat && cd koa-wechat && npm init -y  
$ npm i -S koa co-wechat 
```
[co-wechat介绍](https://github.com/node-webot/co-wechat)

### 业务逻辑

新建app.js
```js
//app.js  
const Koa = require('koa');  
const wechat = require('co-wechat');  
  
const app = new Koa();  
  
app.use(async (ctx, next) => {  
    if (ctx.path === '/wechat') {//自定义的路由，微信后台配置的url  
        await next();  
    } else {  
        ctx.body = `Hello, koa2! Path is: ${ctx.path}`;  
    }  
});  
  
app.use(wechat({  
    token: '在微信后台自己配',//微信后台配置的token  
    appid: '微信后台提供',//微信公众号的appid  
    encodingAESKey: ''//微信公众号的encodingAESKey  
}).middleware(async (message, ctx) => {  
    let { MsgType, Content } = message;  
    if (MsgType === 'text') {  
        let reply;  
        switch (Content) {  
            case '12345':  
                reply = '上山打老虎';  
                break;  
            case 'kiki':  
                reply = '是我媳妇';  
                break;  
            default:  
                const msgs = [  
                    '我媳妇老漂亮了',  
                    '我媳妇会做饭',  
                    '我媳妇会煎药',  
                    '我媳妇吃的可多了',  
                    '我媳妇可能睡了',  
                    '我媳妇叫kiki',  
                    '我媳妇会打太极拳',  
                    '我媳妇总掉头发',  
                    '我媳妇可爱哭了',  
                    '我媳妇有点二'  
                ];  
                let rand = Math.floor(Math.random() * msgs.length);  
                reply = msgs[rand];  
        }  
        return reply;  
    } else {  
        return '欢迎光临';  
    }  
}));  
  
app.listen(7001);//端口要跟花生壳里配置的对应
```

确认代码里的变量后，启动服务。

```bash
$ node app.js
```

此时已经离成功一步之遥。

### 微信公众号后台配置

以微信公众平台提供的测试账号为例

![pic](http://img.blog.csdn.net/20180117155110534?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvemhhb2xhbmRlbG9uZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

点击提交，如果验证成功，则大功告成。去测试公众号里面发点什么吧。

这篇只是快速搭建环境，主要是熟悉微信配置用的。至于微信接口实现的原理，后面会再写一篇，手写实现微信接口，还可以顺便熟悉koa。
const request = require('request');
const config = require('../config');

const wechat = require('co-wechat');

module.exports = {
    'GET /': async (ctx, next) => {
        // let { appid, secret, prefix,access_token } = config.wechat;
        // let json = {
        //     "button":[
        //     {    
        //          "type":"click",
        //          "name":"今日歌曲",
        //          "key":"V1001_TODAY_MUSIC"
        //      },
        //      {
        //           "name":"菜单",
        //           "sub_button":[
        //           {    
        //               "type":"view",
        //               "name":"搜索",
        //               "url":"http://www.soso.com/"
        //            },
        //            {
        //                 "type":"miniprogram",
        //                 "name":"wxa",
        //                 "url":"http://mp.weixin.qq.com",
        //                 "appid":"wx286b93c14bbf93aa",
        //                 "pagepath":"pages/lunar/index"
        //             },
        //            {
        //               "type":"click",
        //               "name":"赞一下我们",
        //               "key":"V1001_GOOD"
        //            }]
        //       }]
        // };
        // request.post(`${prefix}/menu/create?access_token=${access_token}`,{json},(err,httpResponse,body)=>{
        //     console.log(err,httpResponse,body)
        // });
        // wechat({
        //     token: 'zldl',
        //     appid: 'wxc04ca1666d781d0a',
        //     encodingAESKey: ''
        //   }).middleware
        let data = wechat({
            token: 'zldl',
            appid: 'wxc04ca1666d781d0a',
            encodingAESKey: ''
          }).middleware(async (message, ctx) => {
            // TODO
            console.log(message,ctx)
            return 'hehe';
          });
        console.log(data)
        ctx.body = data.toString();
    }
};
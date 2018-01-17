const request = require('request');
const config = require('../config');

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
        ctx.body = 'Hello world';
    }
};
const sha1 = require('sha1');
const config = require('../config');

module.exports = {
    'GET /wechat': async (ctx, next) => {
        let { signature, timestamp, nonce, echostr } = ctx.query,
            { token } = config.wechat;
        /* 
        1）将token、timestamp、nonce三个参数进行字典序排序 
        2）将三个参数字符串拼接成一个字符串进行sha1加密 
        3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信 
        */
        // console.log(signature, timestamp, nonce, echostr)
        let sha = sha1([token, timestamp, nonce].sort().join(''));
        if (sha === signature) {
            ctx.body = echostr;
        } else {
            ctx.body = 'err';
        }
    },
    'POST /wechat': async (ctx, next) => {
        let { access_token } = config.wechat;
        console.log(access_token)
        ctx.body = `Hello post wechat ${access_token}`;
    }
};
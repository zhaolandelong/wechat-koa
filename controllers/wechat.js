const sha1 = require('sha1');
const xml2js = require('xml2js');
const wechat = require('co-wechat');

const config = require('../config');

module.exports = {
    // 'GET /wechat': async (ctx, next) => {
    //     let { signature, timestamp, nonce, echostr } = ctx.query,
    //         { token } = config.wechat;
    //     /* 
    //     1）将token、timestamp、nonce三个参数进行字典序排序 
    //     2）将三个参数字符串拼接成一个字符串进行sha1加密 
    //     3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信 
    //     */
    //     // console.log(signature, timestamp, nonce, echostr)
    //     let sha = sha1([token, timestamp, nonce].sort().join(''));
    //     if (sha === signature) {
    //         ctx.body = echostr;
    //     } else {
    //         ctx.body = 'err';
    //     }
    // },
    // 'POST /wechat': async (ctx, next) => {
    //     let msg = ctx.req.body.xml;
    //     // console.log(msg);
    //     let data = {
    //         xml: {
    //             ToUserName: msg.FromUserName,
    //             FromUserName: msg.ToUserName,
    //             CreateTime: Date.now(),
    //             MsgType: msg.MsgType,
    //             Content: msg.Content
    //         }
    //     };
    //     ctx.res.setHeader('Content-Type', 'application/xml');
    //     ctx.res.end(new xml2js.Builder().buildObject(data));
    // },
    'GET /wechat': wechat({
        token: 'zldl',
        appid: 'wxc04ca1666d781d0a',
        encodingAESKey: ''
    }).middleware(async (message, ctx) => {
        // TODO
        console.log(message, ctx)
    }),
    'POST /wechat': wechat({
        token: 'zldl',
        appid: 'wxc04ca1666d781d0a',
        encodingAESKey: ''
    }).middleware(async (message, ctx) => {
        let { MsgType, Content } = message;
        console.log(Content);
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
                    let rand = Math.round(Math.random() * msgs.length);
                    reply = msgs[rand];
            }
            return reply;
        } else {
            return '欢迎光临';
        }
    })
};
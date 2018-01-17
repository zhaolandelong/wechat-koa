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
        console.log(message,ctx)
      }),
    'POST /wechat': wechat({
        token: 'zldl',
        appid: 'wxc04ca1666d781d0a',
        encodingAESKey: ''
      }).middleware(async (message, ctx) => {
        // 微信输入信息就是这个 message
  if (message.FromUserName === 'diaosi') {
    // 回复屌丝(普通回复)
    return 'hehe';
  } else if (message.FromUserName === 'text') {
    //你也可以这样回复text类型的信息
    return {
      content: 'text object',
      type: 'text'
    };
  } else if (message.FromUserName === 'hehe') {
    // 回复一段音乐
    return {
      type: "music",
      content: {
        title: "来段音乐吧",
        description: "一无所有",
        musicUrl: "http://mp3.com/xx.mp3",
        hqMusicUrl: "http://mp3.com/xx.mp3"
      }
    };
  } else if (message.FromUserName === 'kf') {
    // 转发到客服接口
    return {
      type: "customerService",
      kfAccount: "test1@test"
    };
  } else {
    // 回复高富帅(图文回复)
    return [
      {
        title: '你来我家接我吧',
        description: '这是女神与高富帅之间的对话',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
      }
    ];
  }
      })
};
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const wechat = require('co-wechat');

const router = require('./router');
const xmlParse = require('./middlewares/xmlParse');

const app = new Koa();
// app.use(bodyParser());

// app.use(xmlParse());

app.use(router.routes());

// x-response-time

// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
// });

// logger

// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

// app.use(async (ctx, next) => {
//     if (ctx.path === '/wechat') {
//         next();
//     } else {
//         ctx.body = `Hello, koa2! Path is: ${ctx.path}`;
//     }
// });

// response
// const config = {
//     token: 'zldl',
//     appid: 'wxc04ca1666d781d0a',
//     encodingAESKey: ''
// };
// app.use(wechat(config).middleware(async (message, ctx) => {
//     console.log(ctx)
//     // 微信输入信息就是这个 message
//     if (message.FromUserName === 'diaosi') {
//         // 回复屌丝(普通回复)
//         return 'hehe';
//     } else if (message.FromUserName === 'text') {
//         //你也可以这样回复text类型的信息
//         return {
//             content: 'text object',
//             type: 'text'
//         };
//     } else if (message.FromUserName === 'hehe') {
//         // 回复一段音乐
//         return {
//             type: "music",
//             content: {
//                 title: "来段音乐吧",
//                 description: "一无所有",
//                 musicUrl: "http://mp3.com/xx.mp3",
//                 hqMusicUrl: "http://mp3.com/xx.mp3"
//             }
//         };
//     } else if (message.FromUserName === 'kf') {
//         // 转发到客服接口
//         return {
//             type: "customerService",
//             kfAccount: "test1@test"
//         };
//     } else {
//         // 回复高富帅(图文回复)
//         return [
//             {
//                 title: '你来我家接我吧',
//                 description: '这是女神与高富帅之间的对话',
//                 picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
//                 url: 'http://nodeapi.cloudfoundry.com/'
//             }
//         ];
//     }
// }));

app.listen(7001);
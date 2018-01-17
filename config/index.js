const request = require('request');

let wechat = {//测试账号
    token: 'zldl',
    appid: 'wxc04ca1666d781d0a',
    secret: '83622e71883e541ab78dee42e4163c8e',
    encodingAESKey: '',
    prefix: 'https://api.weixin.qq.com/cgi-bin',
    access_token: ''
};
// let wechat = {//实际测试账号
//     token: 'zldl',
//     appid: 'wx1e33cbe5d78306e4',
//     secret: '52c1187183f12cc7ebd5a945ffced2f1',
//     encodingAESKey: 'YWAKiuPrPpV9rjaqOqx4UIFkUiIz2YkPUoSImrVGVc6',
//     prefix: 'https://api.weixin.qq.com/cgi-bin',
//     access_token: ''
// };
async function getToken() {
    console.log('getToken start');
    let { appid, secret, prefix } = wechat;
    let data = await new Promise((resolve, reject) => {
        request({ url: `${prefix}/token?grant_type=client_credential&appid=${appid}&secret=${secret}`, json: true }, (error, response, body) => {
            if (error) {
                return reject(error);
            }
            resolve(body);
        })
    });
    wechat.access_token = data.access_token;
    console.log(`getToken finish, access_token: ${data.access_token}`);
};

getToken();
setInterval(getToken, 7000000);

module.exports = {
    wechat
};
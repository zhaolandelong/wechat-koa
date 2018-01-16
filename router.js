const router = require('koa-router')();
const fs = require('fs');

function addToRouter(router, mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET ')) {
            router.get(url.substring(4), mapping[url]);
        } else if (url.startsWith('POST ')) {
            router.post(url.substring(5), mapping[url]);
        } else {
            // 无效的URL:
            console.log(`invalid URL: ${url}`);
        }
    }
}
//遍历controllers
fs.readdirSync(__dirname + '/controllers')
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        addToRouter(router, require(__dirname + '/controllers/' + f));
    });

module.exports = router;
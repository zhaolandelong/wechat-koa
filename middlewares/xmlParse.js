
const xml2js = require('xml2js')

function xmlToJson(str) {
    return new Promise((resolve, reject) => {
        const parseString = xml2js.parseString
        parseString(str, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

function jsonToXml(obj) {
    const builder = new xml2js.Builder()
    return builder.buildObject(obj)
}

module.exports = () => {
    return async (ctx, next) => {
        if (ctx.method == 'POST' && ctx.is('text/xml')) {
            let promise = new Promise((resolve, reject) => {
                let buf = ''
                ctx.req.setEncoding('utf8')
                ctx.req.on('data', (chunk) => {
                    buf += chunk
                })
                ctx.req.on('end', () => {
                    xmlToJson(buf)
                        .then(resolve)
                        .catch(reject)
                })
            })

            await promise.then(result => {
                console.log(result)
                ctx.req.body = result
            })
                .catch((e) => {
                    e.status = 400
                })
                
            next()
        } else {
            await next()
        }
    }
}
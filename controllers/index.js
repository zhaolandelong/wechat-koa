module.exports = {
    'GET /': async (ctx, next) => {
        console.log('index', ctx)
        ctx.body = 'Hello world';
    }
};
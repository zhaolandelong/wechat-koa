module.exports = {
    'GET /test': async (ctx, next) => {
        ctx.body = `<h1>Index</h1>
        <form action="/test" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password" value="12345"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
    },
    'POST /test': async (ctx, next) => {
        let { name, password } = ctx.request.body;
        console.log(`signin with name: ${name}, password: ${password}`);
        if (name === 'koa' && password === '12345') {
            ctx.body = `<h1>Welcome, ${name}!</h1>`;
        } else {
            ctx.body = `<h1>Login failed!</h1>
            <p><a href="/test">Try again</a></p>`;
        }
    }
};
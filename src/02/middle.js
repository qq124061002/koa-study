const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body ="1";
    await next();
    ctx.body +="8";
});

app.use(async (ctx, next) => {
    ctx.body +="2";
    await next();
    ctx.body +="7";
});

app.use(async (ctx, next) => {
    ctx.body +="3";
    await next();
    ctx.body +="6";
});

app.use(async (ctx, next) => {
    ctx.body +="4";
    await next();
    ctx.body +="5";
});

app.listen(3000);
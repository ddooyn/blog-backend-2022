const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  console.log(ctx.url);
  console.log(1);
  if (ctx.query.authorized !== '1') {
    ctx.status = 401; // unauthorized
    return;
  }
  next().then(() => { // next 함수를 호출하면 Promise를 반환
    console.log('END');
  });
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use((ctx) => {
  ctx.body = 'hello world';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});

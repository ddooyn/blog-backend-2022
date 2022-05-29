const Koa = require('koa');
const Router = require('koa-router'); // 불러오기

const api = require('./api');

const app = new Koa();
const router = new Router(); // 라우터 인스턴스 만들기

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});

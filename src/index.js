const Koa = require('koa');
const Router = require('koa-router'); // 불러오기

const app = new Koa();
const router = new Router(); // 라우터 인스턴스 만들기

// 라우터 설정
// 첫 번째 파라미터에는 라우트의 경로, 두 번째 파라미터에는 해당 라우트에 적용할 미들웨어 함수
router.get('/', (ctx) => {
  ctx.body = '홈';
});
router.get('/about', (ctx) => {
  ctx.body = '소개';
});
// 파라미터를 사용하는 라우트
router.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;
  // name의 존재 유무에 따라 다른 결과 출력
  ctx.body = name ? `${name}의 소개` : '소개';
});
// 쿼리를 사용하는 라우트
router.get('/posts', (ctx) => {
  const { id } = ctx.query;
  // id의 존재 유무에 따라 다른 결과 출력
  ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
});

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});

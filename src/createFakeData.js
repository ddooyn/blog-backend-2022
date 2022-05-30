import Post from './models/post';

export default function createFakeData() {
  // 0, 1, ..., 39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quod fuga molestias eligendi expedita obcaecati odio ratione labore esse, assumenda voluptatum dignissimos aut magni unde. Accusamus sapiente animi rem rerum!',
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}

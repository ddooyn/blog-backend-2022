import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();
posts.post('/', postsCtrl.write);
posts.get('/', postsCtrl.list);

const post = new Router(); // /api/posts/:id
post.get('/:id', postsCtrl.read);
post.delete('/:id', postsCtrl.remove);
post.patch('/:id', postsCtrl.update);
post.use('/:id', postsCtrl.checkObjectId, post.routes())

export default posts;

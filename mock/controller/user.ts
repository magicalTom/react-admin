import { randomUUID } from 'crypto';
import KoaRouter from 'koa-router';
import { root } from '../root';

const userRouter = new KoaRouter();

userRouter.get('/login', (ctx) => {
  ctx.body = JSON.stringify(
    root({
      token: randomUUID(),
    })
  );
});

export default userRouter;

import chalk from 'chalk';
import Koa from 'koa';
import { koaBody } from 'koa-body';
import koaLogger from 'koa-logger';
import log4j from 'log4js';
import userRouter from './controller/user';

const logger = log4j.getLogger();
logger.level = log4j.levels.DEBUG;

const koa = new Koa();

koa.use(koaBody());

koa.use(
  koaLogger((str) => {
    logger.debug(chalk.green(str));
  })
);

koa.use(async (ctx, next) => {
  await next();
  logger.debug(chalk.bgBlue('入参'), JSON.stringify(ctx.request.query), JSON.stringify(ctx.request.body));
  logger.debug(chalk.bgBlue('出参'), JSON.stringify(ctx.body));
});

koa.use(userRouter.routes());

koa.listen(3000, () => {
  logger.info('启动成功');
});

import { Controller, Get, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';

@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/')
  async home() {
    const ctx = this.ctx;
    await ctx.render('index.html');
  }
}

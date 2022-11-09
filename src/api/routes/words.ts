import Router from '@koa/router';
import * as wordController from '../controllers/words';
const words = new Router({
  prefix: '/words'
});

words.get('/',async (ctx) => {
  const {keyword} = ctx.query
  const res = await wordController.getList(keyword as string)
  ctx.body = res
});

words.get('/option',async (ctx)=>{
  const {keyword} = ctx.query
  const res = await wordController.getOption(keyword as string)
  ctx.body = res
})

words.get('/:word', async (ctx) => {
  const {word} = ctx.params;
  const res = await wordController.getDetail(word);
  ctx.body = res;
});

export default words;

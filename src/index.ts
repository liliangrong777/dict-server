import Koa from 'koa'
import words from './api/routes/words';
const app = new Koa();
app.use(words.routes())
app.listen(3000);

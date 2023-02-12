import express,{Request, Response} from 'express'
import bodyParser from "body-parser";
const app = express()
const port = process.env.PORT || 3000;

const jsonBodyMiddleware = bodyParser.json()
app.use (jsonBodyMiddleware)

//прописываем наши роуты
app.use('/auth', authRouter) 
app.use('/blogs', blogsRouter) 
app.use('/posts', postsRouter) 
app.use('/testing', testingRouter)
app.use('/users', usersRouter)

app.delete("/testing/all-data", async (req: Request, res: Response) => {
  let result = await blogsCollections.deleteMany({});
  let result1 =await postsCollections.deleteMany({});
  
  res.send(204);
});


const startApp = async () => {
  await runDb();
  app.listen(port, () => {
  console.log("Example app listening on port: ${port}");
  });
 };
 startApp();

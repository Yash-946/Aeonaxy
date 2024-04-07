
import express, { json } from 'express';
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(cors());
app.use(json());

app.get('/', (req, res) => {
  res.send('Hello good1458!');
});

app.post('/user/signup', async (req, res) => {

  const body = req.body
  console.log(body);
  
  try {
    const post = await prisma.profile.create({
      data: {
        name: body.name,
        username: body.username,
        email: body.email,
        password: body.password
      }
    })
    return res.status(200).json({ post });
  } catch (error) {
    if(error instanceof PrismaClientKnownRequestError){
      if(error.meta)

        console.log(error.meta.target);
        return res.status(202).json({error:error.meta});
    }
  }
})

app.listen(port, () => {
  return console.log(`Express server is listening at http://localhost:${port} 🚀`);
});
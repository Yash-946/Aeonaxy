import express, { Request, Response, json } from 'express';
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Resend } from 'resend';

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(cors());
app.use(json());

app.get('/', (req, res) => {
  res.send('Hello good!');
});

app.post('/user/signup', async (req: Request, res: Response) => {

  const body = req.body

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
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.meta)

        console.log(error.meta.target);
      return res.status(202).json({ error: error.meta });
    }
  }
})

app.put('/user/profile/:id', async (req: Request, res: Response) => {

  const body = req.body;
  const ID = Number(req.params.id);

  try {
    const put = await prisma.profile.update({
      where: { id: ID },
      data: {
        avatar: body.imageURL,
        location: body.location,
        reason1: body.reason1,
        reason2: body.reason2,
        reason3: body.reason3,
      }
    })

    return res.status(200).json({ put });

  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.meta)
        // console.log(error.meta.target);
        return res.status(202).json({ error: error.meta });
    }
  }
})

// Sending email
const resend = new Resend(process.env.RESEND_KEY);

app.post("/user/verify/:email", async (req: Request, res: Response) => {

  const email = req.params.email;
  // console.log(email);
  
  const { data, error } = await resend.emails.send({
    from: 'Dribble <dribble@yashagrawal.top>',
    to: [`${email}`],
    subject: "Verify account",
    text: `Welcome to dribble, Thankyou `,
  });

  if (error) {
    return res.status(400).json({ error });
  }
  res.status(200).json({ data });
});


app.listen(port, () => {
  return console.log(`Express server is listening at http://localhost:${port} 🚀`);
});
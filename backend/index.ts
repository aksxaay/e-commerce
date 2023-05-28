import { PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from 'express';
const dotenv = require('dotenv').config({ path: '.env.development' })

const prisma = new PrismaClient();
const app: Express = express();
const port = process.env.PORT;

app.use(express.json())

app.get('/', async (req, res: Response) => {
  res.json('E-Commerce Typescript Backend');
})

app.get('/users', async (req: Request, res: Response) => {
  const users = prisma.user.findMany();
  res.json(users);
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// const main = async () => {
//   // prisma queries
//   const allUsers = await prisma.user.findMany();
//   console.log('allUsers :', allUsers);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   })
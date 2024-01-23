import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

import { z } from "zod";

const app = fastify();

const prisma = new PrismaClient();

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();

  return { users };
});

app.post("/users", async (req, res) => {
  const createUserSchema = z.object({
    name: z.string(),
    email: z.string(),
  });

  const { email, name } = createUserSchema.parse(req.body);

  const user = await prisma.user.create({ data: { email, name } });

  return res.status(201).send({ user });
});

app
  .listen({
    host: process.env.HOST ? process.env.HOST : "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => console.log("server is running"));

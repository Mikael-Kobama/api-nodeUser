import express, { request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/users/:id", async (req, res) => {
  await prisma.user.create({
    data: {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    },
  });

  res.status(201).json(req.body);
});

app.put("/users", async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    },
  });

  res.status(201).json(req.body);
});

app.get("/users", async (req, res) => {
  if (req.query) {
    let users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.body.age,
      },
    });
  } else {
    const users = await prisma.user.findMany();
  }
  res.status(200).json(users);
});

app.delete("/users/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: "Deletado com sucesso!" });
});

app.listen(3000);

/*
 criar nossa api de usuarios

 -criar o user
 -listar todos os users
 -editar os users
 -deleter os users
<kobamamikael></kobamamikael>
 O8jswFP98CHwAurm
*/

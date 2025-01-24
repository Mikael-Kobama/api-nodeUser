import express, { request } from "express";

const app = express();
app.use(express.json());

const users = [];

app.post("/users", (req, res) => {
  users.push(req.body);

  res.status(201).json(req.body);
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.listen(3000);

/*
 criar nossa api de usuarios

 -criar o user
 -listar todos os users
 -editar os users
 -deleter os users
*/

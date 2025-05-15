import express from "express";
import db from "./client/db";
const app = express();
const port = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/usuarios", (req, res) => {
  const usuarios = db.findAll();
  res.setHeader("Content-type", "application/json; charset=utf-8");
  res.status(200).json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  const usuario = db.findById(id);

  if (!usuario) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }

  res.status(200).json(usuario);
});

app.post("/usuarios", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ mensagem: "Todos os campos são obrigatórios" });
  }

  const novoUsuario = db.create({ id: "", name, email, password });
  res.status(201).json(novoUsuario);
});

app.put("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;

  const resultado = db.updateById(id, { id, name, email, password });

  if ("message" in resultado) {
    return res.status(404).json(resultado);
  }

  res.status(200).json(resultado);
});

app.delete("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  const resultado = db.remove(id);
  res.status(200).json(resultado);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

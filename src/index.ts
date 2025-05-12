import express from "express";
import db from "./client/db";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🟢 GET /usuarios → Retorna todos os usuários
app.get("/usuarios", (req, res) => {
  const usuarios = db.findAll();
  res.setHeader("Content-type","application/json; charset=utf-8");
  res.status(200).json(usuarios);
});

// 🔵 GET /usuarios/:id → Retorna um usuário pelo ID
app.get("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);
  const usuario = db.findById(id);

  if (!usuario) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }

  res.status(200).json(usuario);
});

// 🟡 POST /usuarios → Cria um novo usuário
app.post("/usuarios", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" });
  }

  const novoUsuario = db.create({ id: 0, name, email, password });
  res.status(201).json(novoUsuario);
});

// 🟠 PUT /usuarios/:id → Atualiza um usuário pelo ID
app.put("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, email, password } = req.body;

  const resultado = db.updateById(id, { id, name, email, password });

  if ("message" in resultado) {
    return res.status(404).json(resultado);
  }

  res.status(200).json(resultado);
});

// 🔴 DELETE /usuarios/:id → Remove um usuário pelo ID
app.delete("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);
  const resultado = db.remove(id);
  res.status(200).json(resultado);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

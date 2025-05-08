import express from "express";
import db from "./client/db";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Exercicio de CRUD (create , read , update, delete )
// Utilizando as 5 funções encontradas em db, crie 5 endpoints para o recurso "usuario".
// (Leia em README para saber mais sobre as funções)
/* 
    O recurso usuario deve ter as seguintes propriedades com seus respectivos tipos:
    { 
        name: String, 
        email: String, 
        password: String 
    }
*/

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(port, () => {
  console.log(`Esse servidor está rodando em ${port}`);
});

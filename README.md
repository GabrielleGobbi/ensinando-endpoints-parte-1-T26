# rodando a aplicação

1 - Instalando as dependencias do projeto

```bash
cd ensinando-endpoints
npm install
```

2 - Iniciando a aplicação
n
```bash
npm start
```

# Documentação

No arquivo `client/db.ts` temos uma simulação de **framework** que nos ajuda a enviar e receber informações para um banco de dados. **Vocês não precisam entender os detalhes da implementação desse arquivo**, porem devem entender o que eles nos fornece para que consigamos trabalhar.

são 5 operações que podemos utilizar apartir da importação desse arquivo e são elas:

- findAll - **nos retorna todas as ocorrencias dentro de do banco**
- findById - **nos retorna apenas uma ocorrencia no banco de acordo com o ID**
- create - **cria uma nova ocorrencia no banco de dados**
- removeById - **remove uma ocorrencia de acordo com o id**
- updateById - **atualiza uma ocorrencia de acordo com o id**

## Como utilizar

Primeiro se certifique de estar importando o arquivo `client/db.ts` no inicio do arquivo que você pretende trabalhar.

```typescript
import db from './client/db';
```

Para receber todos os elementos existentes no banco você pode utilizar a função `findAll`

```typescript
const items = db.findAll()
console.log(items)
```

Para receber apenas um elemento de acordo com o seu `ID` você pode utilizar a função `findById`

```typescript
const id = 1
const item = db.findById(id)
console.log(item)
```

Para criar um novo elemento no banco você pode utilizar a função `create`

```typescript
const user = {
    id: 1,
    name: "Joana",
    email: "j.ana@gmail.com",
    password: "abc.123#"
}
const createdItem = db.create(user)
console.log(createdItem)
```

Para alterar um determinado elemento por `ID` você pode utilizar a função `updateById`

```typescript
const id = 1
const user = {
    id = id,
    name: "Joana Maria",
    email: "jmaria@gmail.com",
    password: "123#abc"
}
const updatedItem = db.updatedById(id, user)
console.log(updatedItem)
```

Para remover apenas um elemento de acordo com o seu `ID` você pode utilizar a função `removeById`

```typescript
const id = 1
const removedItem = db.removeById(id)
console.log(removedItem)
```

### Observação

Para cada funcão você precisa criar uma rota com nome ("/rota") e metodo de requisição http (get, delete, etc), exemplo:

```typescript
  app.get("/", (req, res) => {
    const acharTodosUsuarios = todosUsuarios()

    res.send(acharTodosUsuarios)
  });
```
para acessar
curl --location http://localhost:8081/usuarios


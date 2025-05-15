import { randomUUID } from "node:crypto";

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

const db = () => {
  const database: User[] = [];
  const message = "nao foi possivel encontrar, informacao invalida!";

  const getIndice = (id: string) =>
    database.findIndex((user) => user.id === id);

  return {
    findById: (id: string) => {
      const user = database.find((user) => user.id == id);
      return user;
    },
    findAll: () => database,
    create: (user: User) => {
      const newUser = {
        // id: `${database.length + 1}user${Date.now()}`,
        id: randomUUID().toString(),
        name: user.name,
        email: user.email,
        password: user.password,
      };
      database.push(newUser);
      return newUser;
    },
    updateById: (id: string, user: User) => {
      const { name, email, password } = user;
      const indice = getIndice(id);
      if (indice >= 0) {
        const actualUser = database[indice];

        actualUser.name = name ? name : actualUser.name;
        actualUser.email = email ? email : actualUser.email;
        actualUser.password = password ? password : actualUser.password;

        database[indice] = actualUser;

        return { user: actualUser };
      }
      return { message };
    },
    remove: (id: string) => {
      const indice = getIndice(id);
      if (indice >= 0) {
        database.splice(indice, 1);
        return { message: "removido com sucesso! " };
      }
      return { message };
    },
  };
};

export default db();

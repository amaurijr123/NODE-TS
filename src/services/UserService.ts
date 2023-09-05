const db = [
  {
    name: "Amauri1",
    email: "amauri1@gmail.com",
  },
];

export class UserService {
  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };

    db.push(user);
    console.log("Db Atualizado", db);
  };

  getAllUsers = () => {
    return db;
  };
}

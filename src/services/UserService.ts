export interface User {
  name: string,
  email: string
}

const db = [
  {
    name: "Amauri1",
    email: "amauri1@gmail.com",
  },
];

export class UserService {
  db: User[]

  constructor(
    database = db
  ){
    this.db = database
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };

    this.db.push(user);
    console.log("Db Atualizado", this.db);
  };

  getAllUsers = () => {
    return this.db;
  };
}

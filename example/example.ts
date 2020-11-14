enum Role {
  frontend = "FRONTEND",
  backend = "BACKEND",
  fullStack = "FULL-STACK"
}

type id = string | number;

interface IPerson {
  readonly _id: id;
  name: string;
  age: number;
  role: Role;
}

const user: IPerson = {
  _id: 5,
  name: "Name",
  age: 18,
  role: Role.fullStack
};


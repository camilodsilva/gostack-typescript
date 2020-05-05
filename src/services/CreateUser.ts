interface Techs {
  title: string;
  evaluation: 100;
}

interface CreateUser {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | Techs>;
}

export default function createUser({ name = "", email, password }: CreateUser) {
  return {
    name,
    email,
    password,
  };
}

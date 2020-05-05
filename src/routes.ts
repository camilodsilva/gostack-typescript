import { Request, Response } from "express";

import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "user@gmail.com",
    password: "12345678",
    techs: [
      "JavaScript",
      { title: "NodeJS", evaluation: 100 },
      { title: "ReactJS", evaluation: 100 },
    ],
  });
  return response.json(user);
}

import "reflect-metadata";
import express from "express";
import { json, Request, Response } from "express";
import { container } from "@/ioc";
import { loginController, loginControllerAdapter } from "@/ioc/constants";

// import {
//   createThread,
//   assistantName,
//   modelName,
//   createAssistant,
// } from "./openai";
// import { LoginController } from "./presentation/controllers/auth";
// import { AuthenticateByCredentialsService } from "./data/services";
// import { UserRepository } from "./infrastructure/database/drizzle/repositories/user.repository";
// import { DrizzleAdapter } from "./infrastructure/database/drizzle";
// import { BcryptAdapter } from "./infrastructure/cryptography/bcrypt";
import { Controller } from "./presentation/protocols";
import { adaptRoute } from "./main/adapters";

const contacts: any[] = [];
const app = express();

app.use(json({}));

app.get("/healthcheck", (_req: Request, res: Response) => {
  res.json(null);
});

app.post("/webhook", async (req: Request, res: Response) => {
  res.status(201).send();
});
// app.post("/login", adaptRoute(container.resolve<Controller>(loginController)));
app.post("/login", container.resolve<any>(loginControllerAdapter));

export { app };

import { Controller } from "@/presentation/protocols";
import { DependencyContainer } from "tsyringe";
import { loginController } from "./constants";
import { LoginController } from "@/presentation/controllers";

export const registerControllers = (container: DependencyContainer) => {
  container.register<Controller>(loginController, {
    useClass: LoginController,
  });
};

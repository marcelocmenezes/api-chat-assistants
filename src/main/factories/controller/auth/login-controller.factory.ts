import { container } from "@/ioc";
import { loginController } from "@/ioc/constants";
import { Controller } from "@/presentation/protocols";

export const loginControllerAdapter = (): Controller => {
  const loginContoler = container.resolve<Controller>(loginController);
  return loginContoler;
};

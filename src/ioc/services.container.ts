import { AuthenticateByCredentialsUsecase } from "@/domain/usecases";
import { DependencyContainer } from "tsyringe";
import { authenticateByCredentialsUsecase } from "./constants";
import { AuthenticateByCredentialsService } from "@/data/services";

export const registerServices = (container: DependencyContainer) => {
  container.register<AuthenticateByCredentialsUsecase>(
    authenticateByCredentialsUsecase,
    { useClass: AuthenticateByCredentialsService }
  );
};

import { AuthenticateByCredentialsUsecase } from "@/domain/usecases";
import { authenticateByCredentialsUsecase } from "@/ioc/constants";
import {
  badRequest,
  serverError,
  success,
  unauthorized,
} from "@/presentation/helpers";
import { Controller, HttpResponse, Validation } from "@/presentation/protocols";
import { inject, injectable } from "tsyringe";

@injectable()
export class LoginController implements Controller {
  constructor(
    @inject(authenticateByCredentialsUsecase)
    private readonly authentication: AuthenticateByCredentialsUsecase
    // private readonly validation: Validation
  ) {}

  async handle(request: LoginController.Request): Promise<HttpResponse> {
    try {
      // const error = this.validation.validate(request)
      // if (error) return badRequest(error)

      const authenticationModel =
        await this.authentication.authenticate(request);
      console.info(authenticationModel);
      if (!authenticationModel) return unauthorized();

      return success(authenticationModel);
    } catch (error: any) {
      return serverError(error);
    }
  }
}

export namespace LoginController {
  export type Request = {
    email: string;
    password: string;
  };
}

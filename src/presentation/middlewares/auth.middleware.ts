import { GetIdByTokenUsecase } from "@/domain/usecases";
import { AccessDeniedError, ServerError } from "@/presentation/errors";
import { forbidden, success, serverError } from "@/presentation/helpers";
import { HttpResponse, Middleware } from "@/presentation/protocols";
import { injectable } from "tsyringe";

@injectable()
export class AuthMiddleware implements Middleware {
  constructor(
    private readonly getIdByTokenUsecase: GetIdByTokenUsecase,
    private readonly role?: string
  ) {}

  async handle(request: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { accessToken } = request;

      if (accessToken) {
        const account = await this.getIdByTokenUsecase.load({
          accessToken,
          role: this.role,
        });
        if (account) {
          return success({ accountId: account.id });
        }
      }
      return forbidden(new AccessDeniedError());
    } catch (error: any) {
      return serverError(new ServerError(error));
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string;
  };
}

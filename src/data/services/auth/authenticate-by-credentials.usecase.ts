import { AuthenticateByCredentialsUsecase } from "@/domain/usecases";
import {
  Comparator,
  Encrypter,
  LoadAccountByEmailRepository,
} from "@/data/protocols";
import { inject, injectable } from "tsyringe";
import {
  bcryptAdapter,
  jwtAdapter,
  loadAccountByEmailRepository,
} from "@/ioc/constants";

@injectable()
export class AuthenticateByCredentialsService
  implements AuthenticateByCredentialsUsecase
{
  constructor(
    @inject(loadAccountByEmailRepository)
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    @inject(jwtAdapter) private readonly encrypter: Encrypter,
    @inject(bcryptAdapter) private readonly comparator: Comparator
  ) {}

  async authenticate(
    params: AuthenticateByCredentialsUsecase.Params
  ): Promise<AuthenticateByCredentialsUsecase.Result> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(
      params.email
    );
    if (account) {
      const isValid = await this.comparator.compare(
        params.password,
        account.password
      );
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.id.toString());

        return {
          accessToken,
          name: account.name,
        };
      }
    }

    return null;
  }
}

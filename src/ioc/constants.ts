// Purpose: Constants for the IoC container.
export const jwtConfigValues = Symbol.for("JwtConfig");
export const postgresConfigValues = Symbol.for("PostgresConfig");

export const drizzleDatabaseAdapter = Symbol.for("DrizzleDatabaseAdapter");
export const bcryptAdapter = Symbol.for("BcryptAdapter");
export const jwtAdapter = Symbol.for("JwtAdapter");

export const loadAccountByEmailRepository = Symbol.for(
  "LoadAccountByEmailRepository"
);

export const authenticateByCredentialsUsecase = Symbol.for(
  "AuthenticateByCredentialsUsecase"
);

export const loginController = Symbol.for("LoginController");

export const loginControllerAdapter = Symbol.for("LoginControllerAdapter");

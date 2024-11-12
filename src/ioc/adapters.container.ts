// Adapters

import {
  Comparator,
  Decrypter,
  Encrypter,
} from "@/data/protocols/cryptography";
import { BcryptAdapter, JwtAdapter } from "@/infrastructure/cryptography";
import { DrizzleAdapter } from "@/infrastructure/database";
import { DependencyContainer } from "tsyringe";
import {
  bcryptAdapter,
  drizzleDatabaseAdapter,
  jwtAdapter,
  postgresConfigValues,
} from "./constants";

export const registerAdapters = (container: DependencyContainer) => {
  container.register<DrizzleAdapter>(drizzleDatabaseAdapter, {
    useFactory: (c) => new DrizzleAdapter(c.resolve(postgresConfigValues)),
  });

  container.register<Encrypter>(bcryptAdapter, {
    useClass: BcryptAdapter,
  });

  container.register<Comparator>(bcryptAdapter, {
    useClass: BcryptAdapter,
  });

  container.register<Decrypter>(jwtAdapter, {
    useClass: JwtAdapter,
  });

  container.register<Encrypter>(jwtAdapter, {
    useClass: JwtAdapter,
  });
};

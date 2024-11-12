import { DependencyContainer } from "tsyringe";
import { loadAccountByEmailRepository } from "./constants";
import { LoadAccountByEmailRepository } from "@/data/protocols/database";
import { UserRepository } from "@/infrastructure/database/drizzle/repositories";

export const registerRepositories = (container: DependencyContainer) => {
  container.register<LoadAccountByEmailRepository>(
    loadAccountByEmailRepository,
    {
      useClass: UserRepository,
    }
  );
};

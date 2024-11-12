import { DependencyContainer } from "tsyringe";
import { jwtConfigValues, postgresConfigValues } from "./constants";
import { jwtConfig, postgresConfig } from "@/main/config";

export const registerValues = (container: DependencyContainer) => {
  container.register(jwtConfigValues, { useValue: jwtConfig });
  container.register(postgresConfigValues, { useValue: postgresConfig });
};

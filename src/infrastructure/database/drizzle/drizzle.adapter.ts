import postgres from "postgres";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { inject, injectable, type Disposable } from "tsyringe";

import { PostgresConfig } from "@/main/config";
import { postgresConfigValues } from "@/ioc/constants";

import * as schema from "./tables";

@injectable()
export class DrizzleAdapter implements Disposable {
  protected readonly client: postgres.Sql<{}>;
  public readonly db: PostgresJsDatabase<typeof schema>;
  public readonly schema: typeof schema = schema;

  constructor(
    @inject(postgresConfigValues)
    private readonly postgresConfig: PostgresConfig
  ) {
    const client = postgres(this.postgresConfig.connectionStr, {
      max: this.postgresConfig.max,
    });
    this.client = client;
    this.db = drizzle(client, { schema });
  }

  dispose(): Promise<void> | void {
    this.client.end();
  }
}

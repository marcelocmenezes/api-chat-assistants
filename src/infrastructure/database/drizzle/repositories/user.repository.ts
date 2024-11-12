import { eq, getTableColumns } from "drizzle-orm";
import { inject, injectable } from "tsyringe";

import { LoadAccountByEmailRepository } from "@/data/protocols";
import { DrizzleAdapter } from "../drizzle.adapter";
import { drizzleDatabaseAdapter } from "@/ioc/constants";

@injectable()
export class UserRepository implements LoadAccountByEmailRepository {
  constructor(
    @inject(drizzleDatabaseAdapter)
    private readonly drizzleAdapter: DrizzleAdapter
  ) {}
  async loadByEmail(
    email: string
  ): Promise<LoadAccountByEmailRepository.Result> {
    const schema = this.drizzleAdapter.schema.userTable;
    const { id, name, password, email: schemaEmail } = getTableColumns(schema);
    const result = await this.drizzleAdapter.db
      .select({ id, name, password })
      .from(schema)
      .where(eq(schemaEmail, email))
      .limit(1);
    console.info(result);
    return result[0] || null;
  }
}

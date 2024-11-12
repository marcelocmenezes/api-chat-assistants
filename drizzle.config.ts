import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config();


export default {
    schema: "./src/infrastructure/database/drizzle/tables/index.ts",
    out: "./.drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
} as Config;
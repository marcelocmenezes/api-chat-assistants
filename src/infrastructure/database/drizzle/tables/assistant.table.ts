import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const assistantTable = pgTable('assistants', {
    id: serial('id').primaryKey(),
    name: text('name'),
    model: text('model'),
});
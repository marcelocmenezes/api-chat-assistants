
import { relations } from "drizzle-orm";
import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { userOrganizationTable } from "./user-organization.table";


export const userTable = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
})

export const userRelations = relations(userTable, ({ many }) => ({
    userOrganization: many(userOrganizationTable)
}));
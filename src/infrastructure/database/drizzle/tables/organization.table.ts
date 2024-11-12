import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { userOrganizationTable } from "./user-organization.table";

export const organizationTable = pgTable('organizations', {
    id: serial('id').primaryKey(),
    name: text('name'),
    description: text('description'),
});

export const organizationRelations = relations(organizationTable, ({ many }) => ({
    userOrganization: many(userOrganizationTable)
}));

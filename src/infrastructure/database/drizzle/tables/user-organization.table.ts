import { relations } from "drizzle-orm";
import { pgTable, serial } from "drizzle-orm/pg-core";
import { userTable } from "./user.table";
import { organizationTable } from "./organization.table";

export const userOrganizationTable = pgTable('users_organizations', {
    id: serial('id').primaryKey(),
    userId: serial('user_id'),
    organizationId: serial('organization_id')
})


export const userOrganizationRelations = relations(userOrganizationTable, ({ one }) => ({
    user: one(userTable),
    organization: one(organizationTable)
}))
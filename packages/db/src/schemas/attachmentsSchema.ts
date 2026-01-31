import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const attachments = pgTable("attachments", {
    id: integer("id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    slot: varchar("slot", { length:50 }).notNull(),
});
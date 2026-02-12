import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const syandanas = pgTable("syandanas", {
    id: integer("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull(),
});
import { pgTable, integer, varchar } from "drizzle-orm/pg-core";
import { warframes } from "./warframesSchema.js";

export const skins = pgTable("skins", {
    id: integer("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull().unique(),
    warframeName: varchar("warframeName", { length: 50 })
        .notNull()
        .references(() => warframes.name, { onDelete: "cascade", onUpdate: "cascade" } ),
});
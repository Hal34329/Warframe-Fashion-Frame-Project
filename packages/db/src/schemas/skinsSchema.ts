import { pgTable, integer, varchar } from "drizzle-orm/pg-core";
import { warframes } from "./warframesSchema.js";

export const skins = pgTable("skins", {
    id: integer("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull().unique(),
    warframe_id: integer("warframe_id")
        .notNull()
        .references(() => warframes.id, { onDelete: "cascade", onUpdate: "cascade" } ),
});
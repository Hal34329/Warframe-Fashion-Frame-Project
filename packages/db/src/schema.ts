// Cambiar después
import { pgTable, uuid, varchar, integer, text } from "drizzle-orm/pg-core";

export const usersTest = pgTable("users_test", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    age: integer("age"),
    comment: text("comment"),
});
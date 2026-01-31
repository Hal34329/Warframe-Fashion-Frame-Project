import { pgTable, integer, varchar, boolean } from "drizzle-orm/pg-core";

export const warframes = pgTable("warframes", {
    id: integer("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull().unique(),
    isPrime: boolean("is_prime").notNull().default(false),
    isGemini: boolean("is_gemini").notNull().default(false),
});
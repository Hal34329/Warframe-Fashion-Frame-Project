import { pgTable, serial, varchar, boolean, jsonb } from "drizzle-orm/pg-core";

export const warframes = pgTable("warframes", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull().unique(),
    isPrime: boolean("is_prime").notNull().default(false),
    isGemini: boolean("is_gemini").notNull().default(false),
});

export type ColorPalette = Record<`color_${number}`, string>;

export const palettes = pgTable("palettes", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull(),
    colors: jsonb("colors").$type<ColorPalette>().notNull(),
});
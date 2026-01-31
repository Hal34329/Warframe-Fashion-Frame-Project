import { pgTable, integer, varchar, jsonb } from "drizzle-orm/pg-core";

export type ColorPalette = Record<`color_${number}`, string>;

export const palettes = pgTable("palettes", {
    id: integer("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull().unique(),
    colors: jsonb("colors").$type<ColorPalette>().notNull(),
});
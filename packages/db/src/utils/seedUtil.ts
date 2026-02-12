import { warframes, palettes, attachments, syandanas } from "../schemas/index.js";

export type NewWarframe = typeof warframes.$inferInsert;
export type NewPalette = typeof palettes.$inferInsert;
export type NewAttachment = typeof attachments.$inferInsert;
export type NewSyandana = typeof syandanas.$inferInsert;

export const cleanSeedData = <T extends { name: string }>(data: unknown[]): T[] => {
    return data.filter((item): item is T => {
        return (
            typeof item === "object" &&
            item !== null &&
            "name" in item &&
            !("_comment" in item)
        );
    });
};
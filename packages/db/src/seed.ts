import { db } from "./index.js";
import { warframes, palettes, attachments } from "./schemas/index.js";
import warframeData from "./seeds/warframes.json" with { type: "json" };
import paletteData from "./seeds/palettes.json" with { type:"json" };
import attachmentData from "./seeds/attachments.json" with { type:"json" };
import { cleanSeedData, type NewPalette, type NewWarframe } from "./utils/seedUtil.js";

async function main(): Promise<void> {
    console.log("Sembrando datos iniciales...");

    const cleanWarframes = cleanSeedData<NewWarframe>(warframeData as unknown[]);
    const cleanPalettes = cleanSeedData<NewPalette>(paletteData as unknown[]);
    const clearAttachments = cleanSeedData<NewAttachment>(attachmentData as unknown[]);

    if (cleanWarframes.length === 0) {
        console.log("No hay datos válidos para insertar");
        return;
    }

    for (const palette of cleanPalettes) {
        const { colors, name } = palette;
        const totalColors = Object.keys(colors).length;

        if (totalColors !== 50) {
            throw new Error(`Error en paleta '${name}': Debe tener 50 colores, pero tiene ${totalColors}`);
        }

        console.log(`Paleta '${name}' validada (50 colores).`);
    }

    await db.insert(palettes)
        .values(cleanPalettes)
        .onConflictDoNothing();

    await db.insert(warframes)
        .values(cleanWarframes)
        .onConflictDoNothing();

    console.log("Semillas plantadas con éxito");
    process.exit(0);
}

main().catch((err) => {
    console.error("Error al sembrar:", err);
    process.exit(1);
});
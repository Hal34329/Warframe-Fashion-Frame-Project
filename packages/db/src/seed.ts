import { db } from "./index.js";
// import { warframes, palettes } from "./schema.js";
import { warframes, palettes } from "./schemas/index.js";
import warframeData from "./seeds/warframes.json" with { type: "json" };
import paletteData from "./seeds/palettes.json" with { type:"json" };
import { cleanSeedData, type NewPalette, type NewWarframe } from "./utils/seedUtil.js";

// Type Guard para borrar los "comentarios"
// type NewWarframe = typeof warframes.$inferInsert;
// type NewPalette = typeof palettes.$inferInsert;

// const isWarframe = (item: unknown): item is NewWarframe => {
//     return (
//         typeof item === "object" &&
//         item !== null &&
//         "name" in item &&
//         typeof (item as Record<string, unknown>).name === "string"
//     );
// };

// const isPalette = (item: unknown): item is NewPalette => {
//     return (
//         typeof item === "object" &&
//         item !== null &&
//         "name" in item &&
//         "colors" in item &&
//         typeof (item as Record<string, unknown>).name === "string"
//     );
// };
// Fin del primer bloque de Type Guard

async function main(): Promise<void> {
    console.log("Sembrando datos iniciales...");

    // Parte del Type Guard
    // const cleanData = (warframeData as unknown[]).filter(isWarframe);
    // const cleanPalettes = (paletteData as unknown[]).filter(isPalette);

    const cleanWarframes = cleanSeedData<NewWarframe>(warframeData as unknown[]);
    const cleanPalettes = cleanSeedData<NewPalette>(paletteData as unknown[]);

    if (cleanWarframes.length === 0) {
        console.log("No hay datos válidos para insertar");
        return;
    }
    // Fin del segundo bloque del Type Guard

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
        .values(cleanWarframes) // Pasar de warframeData a cleanData
        .onConflictDoNothing();

    console.log("Semillas plantadas con éxito");
    process.exit(0);
}

main().catch((err) => {
    console.error("Error al sembrar:", err);
    process.exit(1);
});
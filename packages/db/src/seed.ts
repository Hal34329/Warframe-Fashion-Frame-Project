import { db } from "./index.js";
// import { warframes, palettes } from "./schema.js";
import { warframes, palettes } from "./schemas/index.js";
import initialData from "./seeds/initial.json" with { type: "json" };
import paletteData from "./seeds/palettes.json" with { type:"json" };

// Type Guard para borrar los "comentarios"
type NewWarframe = typeof warframes.$inferInsert;

const isWarframe = (item: unknown): item is NewWarframe => {
    return (
        typeof item === "object" &&
        item !== null &&
        "name" in item &&
        typeof (item as Record<string, unknown>).name === "string"
    );
};
// Fin del primer bloque de Type Guard

async function main(): Promise<void> {
    console.log("Sembrando datos iniciales...");

    // Parte del Type Guard
    const cleanData = (initialData as unknown[]).filter(isWarframe);

    if (cleanData.length === 0) {
        console.log("No hay datos válidos para insertar");
        return;
    }
    // Fin del segundo bloque del Type Guard

    for (const palette of paletteData) {
        const { colors, name } = palette;
        const totalColors = Object.keys(colors).length;

        if (totalColors !== 50) {
            throw new Error(`Error en paleta '${name}': Debe tener 50 colores, pero tiene ${totalColors}`);
        }

        console.log(`Paleta '${name}' validada (50 colores).`);
    }

    await db.insert(palettes)
        .values(paletteData)
        .onConflictDoNothing();

    await db.insert(warframes)
        .values(cleanData) // Pasar de initialData a cleanData
        .onConflictDoNothing();

    console.log("Semillas plantadas con éxito");
    process.exit(0);
}

main().catch((err) => {
    console.error("Error al sembrar:", err);
    process.exit(1);
});
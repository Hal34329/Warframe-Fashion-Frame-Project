import { db } from "./index.js";
import { warframes, palettes } from "./schema.js";
import initialData from "./seeds/initial.json" with { type: "json" };
import paletteData from "./seeds/palettes.json" with { type:"json" };

async function main(): Promise<void> {
    console.log("Sembrando datos iniciales...");

    const { colors, name } = paletteData;
    const totalColors = Object.keys(colors).length;

    if (totalColors !== 50) {
        throw new Error(`Error en paleta '${name}': Debe tener 50 colores, pero tiene ${totalColors}`);
    }

    await db.insert(palettes)
        .values({
            name,
            colors,
        })
        .onConflictDoNothing();

    await db.insert(warframes)
        .values(initialData)
        .onConflictDoNothing();

    console.log("Semillas plantadas con éxito");
    process.exit(0);
}

main().catch((err) => {
    console.error("Error al sembrar:", err);
    process.exit(1);
});
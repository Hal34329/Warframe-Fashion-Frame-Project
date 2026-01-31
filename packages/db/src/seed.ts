import { db } from "./index.js";
import { warframes } from "./schema.js";
import initialData from "./seeds/initial.json" with { type: "json" };

async function main(): Promise<void> {
    console.log("Sembrando datos iniciales...");

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
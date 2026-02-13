import { defineConfig } from "drizzle-kit";
// Nota: Agregarlos de nuevo cuando se corrija el error en versiones futuras de Drizzle-kit
// import path from "node:path";
// import { fileURLToPath } from "node:url";

// const envPath = path.resolve(import.meta.dirname, "../../.env");
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const envPath = path.resolve(__dirname, "../../.env");
// process.loadEnvFile(envPath);
process.loadEnvFile("../../.env");

export default defineConfig({
    out: "./drizzle",
    schema: [
        "./src/schemas/attachmentsSchema.ts",
        "./src/schemas/helmetsSchema.ts",
        "./src/schemas/palettesSchema.ts",
        "./src/schemas/skinsSchema.ts",
        "./src/schemas/syandanasSchema.ts",
        "./src/schemas/warframesSchema.ts",

    ],
    // schema: "./src/schemas/index.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
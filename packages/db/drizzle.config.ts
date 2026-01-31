import { defineConfig } from "drizzle-kit";

process.loadEnvFile("../../.env");

export default defineConfig({
    out: "./drizzle",
    schema: "./src/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});

// import { fileURLToPath } from "node:url";
// import path from "node:path";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// // Subimos dos niveles (de packages/db/src a packages/db y luego a la raíz)
// const envPath = path.resolve(__dirname, "../../../.env");

// process.loadEnvFile(envPath);
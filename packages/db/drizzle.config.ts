import { defineConfig } from "drizzle-kit";
// import path from "node:path";
// import { fileURLToPath } from "node:url";

// const envPath = path.resolve(import.meta.dirname, "../../.env");
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const envPath = path.resolve(__dirname, "../../.env");
// process.loadEnvFile(envPath);
process.loadEnvFile("../../.env");

export default defineConfig({
    out: "./drizzle",
    schema: "./src/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
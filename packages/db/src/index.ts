import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
// import * as schema from "./schema.js";
import * as schema from "./schemas/index.js";
// Nota: Agregarlos de nuevo cuando se corrija el error en versiones futuras de Drizzle-kit
// import { fileURLToPath } from "node:url";
// import path from "node:path";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const envPath = path.resolve(__dirname, "../../.env");
// const envPath = path.resolve(import.meta.dirname, "../../.env");

// process.loadEnvFile(envPath);
process.loadEnvFile("../../.env");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL!,
});

// export const db = drizzle({ client: pool });
export const db = drizzle({ 
    client: pool,
    schema: schema, 
});
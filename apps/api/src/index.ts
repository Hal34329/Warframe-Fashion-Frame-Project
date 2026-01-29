// Cambiar después
// import express from "express";
// import { usersTest } from "@repo/db/schema";

// import { createSelectSchema } from "drizzle-zod";
// import { z } from "zod";

// const app = express();
// const port = 3001;

// const selectUserSchema = createSelectSchema(usersTest);
// type User = z.infer<typeof selectUserSchema>;

// const testUser: User = {
//     id: "123",
//     name: "Excalibur",
//     age: 10,
//     comment: "Prueba de monorepo"
// };

// app.get("/", (_req, res) => {
//     console.log("Zod validó correctamente a:", testUser.name);
//     res.send("API funcionando y conectada al paquete DB");
// });

// app.listen(port, () => {
//     console.log(`Servidor corriendo en http://localhost:${port}`);
// });
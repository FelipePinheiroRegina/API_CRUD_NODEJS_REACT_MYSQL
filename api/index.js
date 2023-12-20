import express from "express";  // IMPORTANDO EXPRESS
const app = express() // VARIAVEL APP RECEBE EXPRESS

import cors from "cors";

import userRoutes from "./routes/users.js"; // IMPORTANTO A ROTA USER


app.use(express.json()) // EXPRESS USA JSON PARA MIM
app.use(cors()) // EVITAR CONFLITOS LOCALMENTE

app.use("/", userRoutes)

app.listen(8800); // PORTA
/*import express from "express";
import {getUsers, addUser, updateUser, deleteUser} from "../controllers/user.js"; // FAZENDO A CONEXAO COM O USER DE CONTROLLERS

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);
export default router*/

import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router()

router.get("/", getUsers)

router.post("/", addUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router
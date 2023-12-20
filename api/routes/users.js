import express from "express";
import {getUsers} from "../controllers/user.js"; // FAZENDO A CONEXAO COM O USER DE CONTROLLERS

const router = express.Router()

router.get("/", getUsers)
export default router
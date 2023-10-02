import { createPlayer,  getAllPlayers } from "../../src/controllers/PlayerControllerCheck";
import express from "express";

export const router = express.Router();

router.post("/api/players", createPlayer);

router.get("/api/getPlayers", getAllPlayers)

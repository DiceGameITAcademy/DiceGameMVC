"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PlayerControllerCheck_1 = require("../../src/controllers/PlayerControllerCheck");
const router = (0, express_1.Router)();
// Define a route for creating a player (POST request)
router.post("/api/players", PlayerControllerCheck_1.createPlayer);
exports.default = router;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPlayers = exports.createPlayer = void 0;
const playerModelCheck_1 = __importDefault(require("../models/playerModelCheck"));
// Function to handle creating a new player
function createPlayer(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, password } = req.body; // Adjust type as needed
            const existingPlayer = yield playerModelCheck_1.default.findOne({ where: { name } });
            if (existingPlayer) {
                return res.status(400).json({ error: "Player already exists, choose other name" });
            }
            if (password.length < 6) {
                return res
                    .status(400)
                    .json({ error: "Password should be at least 6 characters long" });
            }
            const newPlayer = yield playerModelCheck_1.default.create({ name, password });
            res
                .status(201)
                .json({ message: "Player created successfully", player: newPlayer });
            next();
        }
        catch (error) {
            console.error("Error creating player:", error);
            res.status(500).json({ error: "Internal server error" });
            next(error);
        }
    });
}
exports.createPlayer = createPlayer;
function getAllPlayers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch all players from the database
            const players = yield playerModelCheck_1.default.findAll();
            res.status(200).json({ players });
        }
        catch (error) {
            console.error("Error fetching players:", error);
            res.status(500).json({ error: "Internal server error" });
            next(error);
        }
    });
}
exports.getAllPlayers = getAllPlayers;
// backup
// import { Request, Response, NextFunction } from "express";
// import Player from "../models/playerModelCheck";
// // Function to handle creating a new player
// export async function createPlayer(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     // Extract player data from the request body
//     const { name, password }: any = req.body; // Adjust type as needed
//     // Create a new player instance
//     const newPlayer = await Player.create({ name, password });
//     // Respond with a success message or the newly created player data
//     res
//       .status(201)
//       .json({ message: "Player created successfully", player: newPlayer });
//     // Call next to continue with the next middleware
//     next();
//   } catch (error) {
//     // Handle errors, e.g., validation errors or database errors
//     console.error("Error creating player:", error);
//     res.status(500).json({ error: "Internal server error" });
//     // Call next with an error to trigger error handling middleware (if defined)
//     next(error);
//   }
// }

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
exports.createPlayer = void 0;
const playerModelCheck_1 = __importDefault(require("../models/playerModelCheck"));
// Function to handle creating a new player
function createPlayer(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Extract player data from the request body
            const { name, password } = req.body; // Adjust type as needed
            // Create a new player instance
            const newPlayer = yield playerModelCheck_1.default.create({ name, password });
            // Respond with a success message or the newly created player data
            res
                .status(201)
                .json({ message: "Player created successfully", player: newPlayer });
            // Call next to continue with the next middleware
            next();
        }
        catch (error) {
            // Handle errors, e.g., validation errors or database errors
            console.error("Error creating player:", error);
            res.status(500).json({ error: "Internal server error" });
            // Call next with an error to trigger error handling middleware (if defined)
            next(error);
        }
    });
}
exports.createPlayer = createPlayer;

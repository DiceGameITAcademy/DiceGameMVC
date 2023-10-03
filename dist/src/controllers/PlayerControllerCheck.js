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
exports.modifyPlayerName = exports.getAllPlayers = exports.createPlayer = void 0;
const playerModelCheck_1 = __importDefault(require("../models/playerModelCheck"));
function createPlayer(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let { name, password } = req.body; // Use 'let' instead of 'const'
            // Check if the name is provided; if not, set it to "ANONYMOUS"
            if (!name) {
                name = "ANONYMOUS";
            }
            const existingPlayer = yield playerModelCheck_1.default.findOne({ where: { name } });
            if (existingPlayer) {
                return res
                    .status(400)
                    .json({ error: "Player already exists, choose another name" });
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
// export async function createPlayer(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     const { name, password }: CreatePlayerRequest = req.body; // Adjust type as needed
//     if (!name) {
//       name = "ANONYMOUS";
//     }
//     const existingPlayer = await Player.findOne({ where: { name } });
//     if (existingPlayer) {
//       return res
//         .status(400)
//         .json({ error: "Player already exists, choose other name" });
//     }
//     if (password.length < 6) {
//       return res
//         .status(400)
//         .json({ error: "Password should be at least 6 characters long" });
//     }
//     const newPlayer = await Player.create({ name, password });
//     res
//       .status(201)
//       .json({ message: "Player created successfully", player: newPlayer });
//     next();
//   } catch (error) {
//     console.error("Error creating player:", error);
//     res.status(500).json({ error: "Internal server error" });
//     next(error);
//   }
// }
function getAllPlayers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
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
function modifyPlayerName(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const playerId = req.params.id; // Assuming you pass the player ID as a URL parameter
            const { name } = req.body; // Adjust type as needed
            // Check if the player with the given ID exists
            const player = yield playerModelCheck_1.default.findOne({ where: { id: playerId } });
            if (!player) {
                return res.status(404).json({ error: "Player not found" });
            }
            // Update the player's name
            player.name = name;
            yield player.save();
            res
                .status(200)
                .json({ message: "Player name updated successfully", player });
        }
        catch (error) {
            console.error("Error modifying player name:", error);
            res.status(500).json({ error: "Internal server error" });
            next(error);
        }
    });
}
exports.modifyPlayerName = modifyPlayerName;

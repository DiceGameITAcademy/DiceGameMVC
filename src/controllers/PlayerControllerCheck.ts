import { Request, Response, NextFunction } from "express";
import Player from "../models/playerModelCheck";
import { CreatePlayerRequest } from  "../types/playerTypes"

// Function to handle creating a new player
export async function createPlayer(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { name, password }: CreatePlayerRequest = req.body; // Adjust type as needed

    const existingPlayer = await Player.findOne({ where: { name } });
    if (existingPlayer) {
      return res.status(400).json({ error: "Player already exists, choose other name" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password should be at least 6 characters long" });
    }

    const newPlayer = await Player.create({ name, password });

    res
      .status(201)
      .json({ message: "Player created successfully", player: newPlayer });

    next();
  } catch (error) {
    console.error("Error creating player:", error);
    res.status(500).json({ error: "Internal server error" });

    next(error);
  }
}

export async function getAllPlayers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Fetch all players from the database
    const players = await Player.findAll();

    res.status(200).json({ players });
  } catch (error) {
    console.error("Error fetching players:", error);
    res.status(500).json({ error: "Internal server error" });

    next(error);
  }
}

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

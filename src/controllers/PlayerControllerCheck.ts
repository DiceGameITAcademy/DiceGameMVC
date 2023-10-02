import { Request, Response, NextFunction } from "express";
import Player from "../models/playerModelCheck";

// Function to handle creating a new player
export async function createPlayer(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Extract player data from the request body
    const { name, password }: any = req.body; // Adjust type as needed

    // Create a new player instance
    const newPlayer = await Player.create({ name, password });

    // Respond with a success message or the newly created player data
    res
      .status(201)
      .json({ message: "Player created successfully", player: newPlayer });

    // Call next to continue with the next middleware
    next();
  } catch (error) {
    // Handle errors, e.g., validation errors or database errors
    console.error("Error creating player:", error);
    res.status(500).json({ error: "Internal server error" });

    // Call next with an error to trigger error handling middleware (if defined)
    next(error);
  }
}

import { Request, Response } from "express";
import * as UserRepository from "../repositories/userRepository";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserRepository.createUser(email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Error creating user" });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await UserRepository.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserRepository.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await UserRepository.deleteUser(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting user" });
  }
};

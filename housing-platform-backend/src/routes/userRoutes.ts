import express, { RequestHandler } from "express";
import * as UserController from "../controllers/userController";

const router = express.Router();

router.post("/", UserController.createUser as RequestHandler);
router.get("/", UserController.getAllUsers as RequestHandler);
router.get("/:id", UserController.getUserById as RequestHandler);
router.delete("/:id", UserController.deleteUser as RequestHandler);

export default router;

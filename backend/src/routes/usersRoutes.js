import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
  .get("/users", UserController.listUsers)
  .get("/users/search", UserController.listUser)
  .post("/users", UserController.createUser)
  .get("/users/login", UserController.validateLogin)
export default router;
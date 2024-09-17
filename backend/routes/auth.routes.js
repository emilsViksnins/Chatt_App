import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Define routes without the "/api/auth" part
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;

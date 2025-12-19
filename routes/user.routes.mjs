import express from "express";
import * as userController from "../controller/user.controller.mjs";

const router = express.Router();

router.post("/login", userController.loginUserController);

export default router;

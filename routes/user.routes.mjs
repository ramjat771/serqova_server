import express from "express";
import * as userController from "../controller/user.controller.mjs";

const router = express.Router();

router.post("/login", userController.loginUserController);
router.get("/",(req, res)=>{
    res.send("User route is working fine");
});
export default router;

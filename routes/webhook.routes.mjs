import express from "express";
import * as webhook from "../webhook/webhook.mjs";
import * as phonepay from "../webhook/phonepe.controller.mjs";

const router = express.Router();

router.post("/", webhook.handleWebhook);
router.get("/",  webhook.handleWebhook);
router.post("/orderId", phonepay.phonepeOrderIdController );
router.get("/auth", phonepay.phonepeAuthController );



export default router;

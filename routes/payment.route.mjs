import express from "express";
import * as paymentController from "../controller/payment.controller.mjs";
const router = express.Router();
router.post("/saveWithdrawal", paymentController.withdrawalController);
router.get("/getBalance/vendor/:vendorEmail", paymentController.getPaymentController);
router.get("/withdrawalHistory/:email", paymentController.withdrawalHistoryController);
export default router;

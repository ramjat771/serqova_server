import express from "express";
import * as bookingController from "../controller/booking.controller.mjs";

const router = express.Router();

router.post("/", bookingController.createBookingController);
router.get("/professional/:professionalEmail", bookingController.getBookingsByProfessionalController);
router.get("/user/:userEmail", bookingController.getBookingsByUserController);

router.get("/allBookings", bookingController.getAllBookingController);

router.patch("/:bookingId/status", bookingController.updateBookingStatusController);

export default router;

import { Router } from "express";
import categoryRoutes from "./category.routes.mjs";
import serviceRoutes from "./service.routes.mjs"
import bookingRoutes from "./booking.routes.mjs"
import paymentRoutes from "./payment.route.mjs"
import webhookRoutes from "./webhook.routes.mjs"
import userRoutes from "./user.routes.mjs"
import dataRoutes from "./data.routes.mjs";
const router = Router();
router.use("/categories", categoryRoutes);
router.use("/services",serviceRoutes)
router.use("/bookings",bookingRoutes)
router.use("/payment",paymentRoutes)
router.use("/webhook",webhookRoutes)
router.use("/users",userRoutes)
router.use("/data", dataRoutes);
export default router;
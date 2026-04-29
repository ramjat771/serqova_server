import express from "express";
import * as dataController from "../controller/data.controller.mjs";
const router = express.Router();
router.post("/",dataController.createOrUpdateDataController);
router.get("/",dataController.getAllDataController);
router.get("/:idString",dataController.getDataByIdStringController);
router.patch("/:idString/status",dataController.updateStatusController);
export default router;
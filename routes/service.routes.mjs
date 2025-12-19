import { Router } from "express";
import {
  createService,
  getServices,
  getServiceById,
  getServicesByProfile,
  updateService,
  deleteService,
  updateKycStatus,
  getServicesByEmailController,
  getAllServicesController,
  getServicesByLatLngAndCategoryController,
} from "../controller/service.controller.mjs";
import { upload } from "../middlewares/multer.mjs";
import { filesToBody } from "../middlewares/file-to-body.middleware.mjs";

const router = Router();

router.get(
  "/nearby-by-category",
  getServicesByLatLngAndCategoryController
);

router.get("/", getServices);
router.get("/allServices", getAllServicesController);
router.get("/id/:id", getServiceById);
router.get("/profile/:profileId", getServicesByProfile);

router.post(
  "/",
  upload.fields([
      { name: "profile", maxCount: 1 },
    { name: "img1", maxCount: 1 },
    { name: "img2", maxCount: 1 },
    { name: "img3", maxCount: 1 },
  ]),
  filesToBody,
  createService
);

// ✅ Changed from PUT → PATCH
router.patch("/:id",upload.any(),
  filesToBody, updateService);
router.delete("/:id", deleteService);

// ✅ Separate route for KYC status (PATCH instead of PUT)
router.patch("/:id/kyc", updateKycStatus);
router.get("/email/:email", getServicesByEmailController);


export default router;

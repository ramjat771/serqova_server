import { Router } from "express";
import { createOrReturnCategory, getCategories, updateCategoryController } from "../controller/category.controller.mjs";
import { validateCategory } from "../middlewares/validator/validateCategory.mjs";
import { upload } from "../middlewares/multer.mjs";
import { filesToBody } from "../middlewares/file-to-body.middleware.mjs";
//import { validateCategory } from "../middlewares/validator/validateCategory.mjs";

const router = Router();

router.get("/", getCategories);
router.post("/",validateCategory,upload.any(), filesToBody,  createOrReturnCategory);


router.patch("/:categoryCode", upload.any(), filesToBody, updateCategoryController);


export default router;

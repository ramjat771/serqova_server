import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dxladutih",
  api_key: "989343698562726",
  api_secret: "BnvO_BLn07A_5m2WHohFyvoaPlg",
});
export const upload = multer({
  storage: multer.memoryStorage(),
});

import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dnervrywy",
  api_key: "972722711284976",
  api_secret: "vHTX_s8vVrXa_rQn-t7A4fwWiWA",
});
export const upload = multer({
  storage: multer.memoryStorage(),
});

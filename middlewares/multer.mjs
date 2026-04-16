
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
cloudinary.config({
cloud_name: "dnervrywy",
  api_key: "972722711284976",
  api_secret: "vHTX_s8vVrXa_rQn-t7A4fwWiWA",
});
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
         public_id: (req, file)=> { 
      const name = file.originalname.split(".")[0];
      return `${name}_${Date.now()}`},             // unique name
  },
});
export const upload = multer({ storage });

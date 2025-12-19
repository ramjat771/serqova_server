import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
cloudinary.config({
  cloud_name: "dxladutih",
  api_key: "989343698562726",
  api_secret: "BnvO_BLn07A_5m2WHohFyvoaPlg",
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

import { v2 as cloudinary } from "cloudinary";

export const filesToBody = async (req, res, next) => {
  try {
    if (req.files && req.files.length > 0) {
      const uploadPromises = req.files.map((file) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              folder: "jhamkoo_uploads",
              public_id:
                file.originalname.split(".")[0] + "_" + Date.now(),
            },
            (err, result) => {
              if (err) return reject(err);
              resolve({ field: file.fieldname, url: result.secure_url });
            }
          );

          // Upload the file buffer to Cloudinary
          stream.end(file.buffer);
        });
      });

      const uploadedFiles = await Promise.all(uploadPromises);

      uploadedFiles.forEach(({ field, url }) => {
        if (req.body[field]) {
          if (Array.isArray(req.body[field])) {
            req.body[field].push(url);
          } else {
            req.body[field] = [req.body[field], url];
          }
        } else {
          req.body[field] = url;
        }
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};

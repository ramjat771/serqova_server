export const filesToBody = async (req, res, next) => {
  try {
    const allFiles = Object.values(req.files || {}).flat();

    if (allFiles.length > 0) {
      const uploadPromises = allFiles.map((file) => {
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

          stream.end(file.buffer);
        });
      });

      const uploadedFiles = await Promise.all(uploadPromises);

      uploadedFiles.forEach(({ field, url }) => {
        req.body[field] = url;
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};
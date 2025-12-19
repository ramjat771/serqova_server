import { logError } from "../utils/logger.mjs";
import { CustomError } from "../utils/custom_error.mjs";

export const errorHandler = (err, req, res, next) => {
  logError(err);

  // ----------------------------
  // 1️⃣ Handle Custom Errors
  // ----------------------------
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      data: err.data || null,
    });
  }

  // ----------------------------
  // 2️⃣ Handle Mongoose Duplicate Key Error (code 11000)
  // ----------------------------
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    const value = err.keyValue[field];

    return res.status(409).json({
      success: false,
      message: `${field} already exists`,
      field,
      value,
    });
  }

  // ----------------------------
  // 3️⃣ Handle Validation Errors
  // ----------------------------
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: err.message,
      errors: err.errors || null,
    });
  }

  // ----------------------------
  // 4️⃣ Handle Unexpected Errors
  // ----------------------------
  console.error("❌ Unexpected Error:", err);

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

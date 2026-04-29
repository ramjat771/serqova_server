import { successResponse } from "../utils/api_response.mjs";
import { CustomError } from "../utils/custom_error.mjs";
import * as userService from "../services/user.service.mjs";
export const loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) throw new CustomError("Email is required", 400);
    if (!password) throw new CustomError("Password is required", 400);
    const result = await userService.loginOrCreateUserService(email, password);
    // Wrong password case
    if (result.status === "wrong-password") {
      throw new CustomError("Wrong password", 401);
    }
    return successResponse(res, result.user, result.status);
  } catch (err) {
    next(err);
  }
};
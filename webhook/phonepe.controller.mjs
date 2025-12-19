import { successResponse } from "../utils/api_response.mjs";
import { getAccessTokenController } from "./phonepay_auth.mjs";
import { createOrderController } from "./phonepe_orderId.mjs";

export const phonepeOrderIdController = async (req, res, next) => {
  try {
   const dataToken= await createOrderController(req.body)
    return successResponse(res, dataToken, "phone pay created successfully");
  } catch (err) {
    next(err);
  }
};
export const phonepeAuthController = async (req, res, next) => {
  try {
       console.log(`----${req.body}`)
   const dataToken= await getAccessTokenController()

    return successResponse(res, dataToken, "phone pay created successfully");
  } catch (err) {
    next(err);
  }
};







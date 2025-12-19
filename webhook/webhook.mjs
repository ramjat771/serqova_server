// controllers/webhookController.mjs
import { successResponse } from "../utils/api_response.mjs";

export const handleWebhook = (req, res,next) => {
 try {

    return successResponse(res, "webhook", "webhook repons successfully");
  } catch (err) {
    next(err);
  }
};

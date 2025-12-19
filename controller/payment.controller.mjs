import { successResponse } from "../utils/api_response.mjs";
import * as  paymentService from "../services/payment.service.mjs"

export const withdrawalController = async (req, res, next) => {
  try {
    const withdrawal=await paymentService.saveWithdrawalService(req.body);
    return successResponse(res, withdrawal, "Withdrawal created successfully");
  } catch (err) {
    next(err);
  }
};


export const getPaymentController = async (req, res, next) => {
  try {
    const { vendorEmail } = req.params;
   const amount=await paymentService.getWithdrawalAmountService(vendorEmail);
    return successResponse(res, amount, "Payment fetched successfully");
  } catch (err) {
    next(err);
  }
};
export const withdrawalHistoryController = async (req, res, next) => {
  try {
    const { email } = req.params;
     const history=await paymentService.withdrawalHistoryService(email);
    return successResponse(res, history, "History fetched successfully");
  } catch (err) {
    next(err);
  }
};




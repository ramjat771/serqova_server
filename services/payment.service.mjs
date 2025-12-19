import Booking from "../models/booking.model.mjs";
import { getPaymentRepo, saveWithdrawalRepo, withdrawalHistoryRepo } from "../repositories/payment.repo.mjs";

export const getWithdrawalAmountService = async (email) => {
  return await getPaymentRepo(email);
};

export const saveWithdrawalService = async (data) => {
 const result = await Booking.updateMany({}, { $set: { isPaid: true } });

  return await saveWithdrawalRepo(data);
};
export const withdrawalHistoryService = async (email) => {
  return await withdrawalHistoryRepo(email);
};
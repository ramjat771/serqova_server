import withdralModel from "../models/withdrawal.model.mjs";
import * as bookingService from "../services/booking.service.mjs"


// save withdrawal 
export const saveWithdrawalRepo = async (data) => {
  const withdral = new withdralModel(data);
  return await withdral.save();
};


//withdrawal history
export const withdrawalHistoryRepo = async (email) => {
return await withdralModel.find({ professionalEmail:email })
};


//getPayment repo
export const getPaymentRepo = async (email) => {
 const service= await bookingService.getBookingsByProfessionalForPaymentService(email)
return service;
};

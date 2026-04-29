import { successResponse } from "../utils/api_response.mjs";
import { CustomError } from "../utils/custom_error.mjs";
import * as dataService from "../services/data.service.mjs";
// Create / Update
export const createOrUpdateDataController = async (req, res, next) => {
  try {
    const { idString, value, status, ownerId, token } = req.body;
    if (!idString) throw new CustomError("idString is required", 400);
    if (value === undefined) throw new CustomError("value is required", 400);
    if (!status) throw new CustomError("status is required", 400);
    if (!token) throw new CustomError("token is required", 400);
    const result = await dataService.createOrUpdateDataService({
      idString,
      value,
      status,
      ownerId,
      token,
    });

    return successResponse(res, result.data, result.status);
  } catch (err) {
    next(err);
  }
};

// Get All
export const getAllDataController = async (req, res, next) => {
  try {
    const result = await dataService.getAllDataService();
    return successResponse(res, result.data, result.status);
  } catch (err) {
    next(err);
  }
};

// Get By idString
export const getDataByIdStringController = async (req, res, next) => {
  try {
    const { idString } = req.params;

    if (!idString) throw new CustomError("idString is required", 400);

    const result = await dataService.getDataByIdStringService(idString);

    return successResponse(res, result.data, result.status);
  } catch (err) {
    next(err);
  }
};

// PATCH → Update Status Only
export const updateStatusController = async (req, res, next) => {
  try {
    const { idString } = req.params;
    const { status } = req.body;

    if (!idString) throw new CustomError("idString is required", 400);
    if (!status) throw new CustomError("status is required", 400);

    const result = await dataService.updateStatusService(idString, status);

    return successResponse(res, result.data, result.status);
  } catch (err) {
    next(err);
  }
};
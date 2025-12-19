import * as serviceService from "../services/service.service.mjs";
import { successResponse } from "../utils/api_response.mjs";

import {
  getServicesByLatLngAndCategory,
} from "../services/service.service.mjs";

export const getServicesByLatLngAndCategoryController = async (
  req,
  res,
  next
) => {
  try {
    const { lat, lng, categoryName } = req.query;

    if (!lat || !lng || !categoryName) {
      return res.status(400).json({
        success: false,
        message: "lat, lng and categoryName are required",
      });
    }

    const services = await getServicesByLatLngAndCategory(
      parseFloat(lat),
      parseFloat(lng),
      categoryName
    );

    // populate match ke baad null category wali services hatao
    const filteredServices = services.filter(
      (s) => s.category !== null
    );

    return successResponse(
      res,
      filteredServices,
      "Services fetched successfully"
    );
  } catch (err) {
    next(err);
  }
};

export const createService = async (req, res, next) => {
  try {
    const { profileId, category, workType, serviceCharge, discount, description ,email,name,phone,available,deviceToken} = req.body;
const location = req.body.location ? JSON.parse(req.body.location) : { type: "Point", coordinates: [0.0, 0.0] };

    const service = await serviceService.createService({
      profileId,
      category,
      workType,
      serviceCharge,
      discount,
      description,
      email,
      name,phone,available,
       location: location,
       deviceToken,
      img1: req.files?.img1 ? req.files.img1[0].path : null,
      img2: req.files?.img2 ? req.files.img2[0].path : null,
      img3: req.files?.img3 ? req.files.img3[0].path : null,
      profile: req.files?.profile ? req.files.profile[0].path : null,
    });

    return successResponse(res, service, "Service created successfully");
  } catch (err) {
    next(err);
  }
};

export const getServices = async (req, res, next) => {
  try {
    const { lat, lng } = req.query;
    const services = await serviceService.getServices(lat,lng);
    return successResponse(res, services, "Services fetched successfully");
  } catch (err) {
    next(err);
  }
};
export const getAllServicesController = async (req, res, next) => {
  try {

    const services = await serviceService.getAllServices();
    return successResponse(res, services, "Services fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const getServiceById = async (req, res, next) => {
  try {
    const service = await serviceService.getServiceById(req.params.id);
    return successResponse(res, service, "Service fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const getServicesByProfile = async (req, res, next) => {
  try {
    const services = await serviceService.getServicesByProfile(req.params.profileId);
    return successResponse(res, services, "Services fetched by profile successfully");
  } catch (err) {
    next(err);
  }
};

export const updateService = async (req, res, next) => {
  try {
   const location = req.body.location ? JSON.parse(req.body.location) : { type: "Point", coordinates: [0.0, 0.0] };

    const updateData = { ...req.body };

    if(location) {
      updateData.location = location;
    }

    const service = await serviceService.updateService(req.params.id, updateData);
    return successResponse(res, service, "Service updated successfully");
  } catch (err) {
    next(err);
  }
};

export const deleteService = async (req, res, next) => {
  try {
    await serviceService.deleteService(req.params.id);
    return successResponse(res, null, "Service deleted successfully");
  } catch (err) {
    next(err);
  }
};
export const getServicesByEmailController = async (req, res, next) => {
  try {

      const { email } = req.params
   
    const services = await serviceService.getServicesByEmail(email);
    return successResponse(res, services, "Services fetched by email successfully");
  } catch (err) {
    next(err);
  }
};

export const updateKycStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const service = await serviceService.updateService(req.params.id, { kycStatus: status });
    return successResponse(res, service, "KYC status updated successfully");
  } catch (err) {
    next(err);
  }
};

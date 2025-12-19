import * as categoryService from "../services/category.service.mjs";
import { successResponse } from "../utils/api_response.mjs";

export const createOrReturnCategory = async (req, res, next) => {
  try {
    const { categoryName, categoryCode, imgUrl, photo, description,price} = req.body;
    const { category, created } = await categoryService.upsertCategoryByName({
      categoryName,
      categoryCode,
      imgUrl,
      photo,
      description,
      price
    });

    return successResponse(
      res,
      { ...category.toObject(), created },
      created ? "Category created" : "Category already exists"
    );
  } catch (err) {
    next(err);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const categories = await categoryService.getCategories();
    return successResponse(res, categories, "Categories fetched successfully");
  } catch (err) {
    next(err);
  }
};


// 🔹 Update Category by categoryCode
export const updateCategoryController = async (req, res, next) => {
  try {
    const { categoryCode } = req.params;
    const updateData = req.body;
    const updatedCategory = await categoryService.updateCategoryByCode(categoryCode, updateData);

    if (!updatedCategory) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    return successResponse(res, updatedCategory, "Category updated successfully");
  } catch (err) {
    next(err);
  }
};


import Category from "../models/category.model.mjs";

export const getCategoryByCodeRepo = async (categoryCode) => {
  return await Category.findOne({ categoryCode });
};
export const getCategoryByNameRepo = async (categoryName) => {
  return await Category.findOne({ categoryName });
};
export const createCategoryRepo = async (data) => {
  const category = new Category(data);
  return await category.save();
};

export const getAllCategoriesRepo = async () => {
  return await Category.find().sort({ createdAt: -1 });
};


export const updateCategoryRepo = async (categoryCode, updateData) => {
  return await Category.findOneAndUpdate({ categoryCode }, updateData, { new: true });
};
import {
  getCategoryByNameRepo,
  createCategoryRepo,
  getAllCategoriesRepo,
  updateCategoryRepo
} from "../repositories/category.repo.mjs";

export const upsertCategoryByName = async ({
  categoryName,
  categoryCode,
  imgUrl,
  photo,
  description,
}) => {
  const existing = await getCategoryByNameRepo(categoryName);
  if (existing) return { category: existing, created: false };

  const created = await createCategoryRepo({
    categoryName,
    categoryCode,
    imgUrl,
    photo,
    description,
  });
  return { category: created, created: true };
};

export const getCategories = async () => {
  return await getAllCategoriesRepo();
};

// 🔹 Update category
export const updateCategoryByCode = async (categoryCode, updateData) => {
  return await updateCategoryRepo(categoryCode, updateData);
};
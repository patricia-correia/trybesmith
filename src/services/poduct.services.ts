import { productModel, getProductModel } from '../models/product.model';

export const productService = async (name: string, amount: string) => {
  const id = await productModel(name, amount);
  return { message: { id, name, amount } };
};

export const getProductService = async () => {
  const result = await getProductModel();
  return { message: result };
};
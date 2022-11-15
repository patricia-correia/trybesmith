import { Request, Response } from 'express';

import { productService } from '../services/poduct.services';

export const productController = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const { message } = await productService(name, amount);

  return res.status(201).json(message);
};

export const getProductController = async () => {};
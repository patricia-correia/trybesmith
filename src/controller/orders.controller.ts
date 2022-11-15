import { Request, Response } from 'express';

import ordersService from '../services/orders.service';

const orderController = async (_req: Request, res: Response) => {
  const order = await ordersService();
  return res.status(200).json(order);
};

export default orderController;
import ordersModel from '../models/orders.model';

const ordersService = async () => {
  const order = await ordersModel();
  return order;
};

export default ordersService;
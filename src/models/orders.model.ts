import { OrdersInterface } from '../interfaces/orders.interface';

import connection from './connection';

const ordersModel = async () => {
  const [selected] = await connection.execute(
    `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) productsIds
    FROM Trybesmith.Orders ord
    INNER JOIN Trybesmith.Products prod 
    ON prod.orderId = ord.id
    GROUP BY ord.id`,
  );

  return selected as OrdersInterface[];
};

export default ordersModel;
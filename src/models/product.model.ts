import { ResultSetHeader } from 'mysql2';

import connection from './connection';

export const productModel = async (name: string, amount: string) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products(name, amount, orderId) VALUES(?, ?, ?)',
    [name, amount, null],
  );
  return insertId;
};

export const getProductModel = async () => {
  const [result] = await connection.execute<ResultSetHeader>(
    'SELECT * FROM Trybesmith.Products',
  );
  return result;
};
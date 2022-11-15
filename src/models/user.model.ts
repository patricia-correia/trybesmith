import { ResultSetHeader } from 'mysql2';

import connection from './connection';

const userModel = async (
  username: string,
  classe: string,
  level: number,
  password: string,
) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES(?, ?, ?, ?)',
    [username, classe, level, password],
  );
  return { id: insertId, username, classe, level };
};

export default userModel;
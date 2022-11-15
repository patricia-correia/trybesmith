import { LoginInterface } from '../interfaces/login.interface';

import connection from './connection';

const loginModel = async (username: string, password: string) => {
  const [selected] = await connection.execute(
    'SELECT username, classe, level FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );
  return selected as LoginInterface[];
};

export default loginModel;
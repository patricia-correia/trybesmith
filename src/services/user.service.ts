import createToken from '../utils/jwt.util';

import userModel from '../models/user.model';

const userService = async (
  username: string,
  classe: string,
  level: number,
  password: string,
) => {
  const result = await userModel(username, classe, level, password);
  const token = createToken(result);

  return { token };
};

export default userService;
import createToken from '../utils/jwt.util';

import loginModel from '../models/login.model';

type Login = {
  username: string,
  password: string,
};

const loginService = async (body: Login) => {
  if (!body.username) {
    return { type: 'BAD_REQUEST', message: '"username" is required' };
  } if (!body.password) {
    return { type: 'BAD_REQUEST', message: '"password" is required' };
  }

  const [data] = await loginModel(body.username, body.password);
  if (!data) {
    return { type: 'unauthorized', message: 'Username or password invalid' };
  }

  const token = createToken(data);
  return { type: null, message: token };
};

export default loginService;
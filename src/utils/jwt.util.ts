import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

const createToken = (data: object) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '15d',
    algorithm: 'HS256',
  });
  return token;
};

export default createToken;
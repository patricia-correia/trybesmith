import { Request, Response } from 'express';

import loginService from '../services/login.service';

const loginController = async (req: Request, res: Response) => {
  const { body } = req;
  const { type, message } = await loginService(body);

  if (type === 'BAD_REQUEST') {
    return res.status(400).json({ message });
  } if (type === 'unauthorized') {
    return res.status(401).json({ message });
  }

  return res.status(200).json({ token: message });
};

export default loginController;
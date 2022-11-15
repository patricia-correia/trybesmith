import { Request, Response } from 'express';

import userService from '../services/user.service';

const userController = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const { token } = await userService(username, classe, level, password);
  return res.status(201).json({ token });
};

export default userController;
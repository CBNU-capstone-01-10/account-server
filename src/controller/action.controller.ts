import asyncCatch from '../utils/asyncCatch';
import { Request, Response } from 'express';
import { actionService } from '../service';

export const createAction = asyncCatch(async (req: Request, res: Response) => {
  // must replace response of model
  const score = -10;
  const label = '한손운전';

  const action = await actionService.createAction({
    user_id: req.session.userId as number,
    location_x: parseFloat(req.body.location_x),
    location_y: parseFloat(req.body.location_y),
    score,
    label,
    capture_file: req.file as Express.Multer.File,
  });

  return res.status(201).json(action);
});

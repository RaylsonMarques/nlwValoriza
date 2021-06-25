import { Request, Response } from "express";
import { DetailUserService } from "../../services/users/DetailUserService";

class DetailUsersController {
  async handle(req: Request, res: Response) {
    const detailUserService = new DetailUserService();
    const { user_id } = req;

    const user = await detailUserService.execute(user_id);
    return res.json(user);
  }
}

export { DetailUsersController }
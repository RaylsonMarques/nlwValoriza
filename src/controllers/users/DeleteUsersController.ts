import { Request, Response } from "express";
import { DeleteUserService } from "../../services/users/DeleteUserService";

class DeleteUsersController {
  async handle(req: Request, res: Response) {
    const deleteUserService = new DeleteUserService();

    const { user_id } = req;
    const result = await deleteUserService.execute(user_id);
    return res.json(result);
  }
}

export { DeleteUsersController }
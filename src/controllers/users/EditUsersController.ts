import { Request, Response } from "express";
import { EditUserService } from "../../services/users/EditUserService";

class EditUserController {

  async handle(req: Request, res: Response) {
    const editUserService = new EditUserService();
    const { name, email, password } = req.body;
    const { user_id } = req;

    const user = await editUserService.execute({ id: user_id, name, email, password });
    return res.json(user);
  }
}

export { EditUserController }
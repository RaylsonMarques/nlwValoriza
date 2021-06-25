import { Request, Response } from "express";
import { CreateUserServices } from "../../services/users/CreateUserServices";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const createUserServices = new CreateUserServices();
    const { name, email, admin, password } = req.body;

    const user = await createUserServices.execute({ name, email, admin, password });
    return res.json(user);
  }
}

export { CreateUserController };
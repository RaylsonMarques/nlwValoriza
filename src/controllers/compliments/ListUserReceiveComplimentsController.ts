import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../../services/compliments/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentController {
  async handle(req: Request, res: Response) {
    const lisUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

    const compliments = await lisUserReceiveComplimentsService.execute(req.user_id);

    return res.json(compliments);
  }
}

export { ListUserReceiveComplimentController }
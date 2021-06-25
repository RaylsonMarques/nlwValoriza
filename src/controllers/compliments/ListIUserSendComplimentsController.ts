import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../../services/compliments/ListUserSendComplimentsService";

class ListUserSendComplimentController {
  async handle(req: Request, res: Response) {
    const lisUserSendComplimentsService = new ListUserSendComplimentsService();

    const compliments = await lisUserSendComplimentsService.execute(req.user_id);

    return res.json(compliments);
  }
}

export { ListUserSendComplimentController }
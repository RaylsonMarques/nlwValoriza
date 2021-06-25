import { Request, Response } from "express";
import { CreateComplimentService } from "../../services/compliments/CreateComplimenteService";

class CreateComplimentController {
  async handle(req: Request, res: Response) {
    const { tag_id, contact_id, message } = req.body;
    const { user_id } = req;
    const createComplimentService = new CreateComplimentService();
    const compliment = await createComplimentService.execute({
      tag_id,
      user_sender: user_id,
      contact_id,
      message
    });
    return res.json(compliment);
  }
}

export { CreateComplimentController };
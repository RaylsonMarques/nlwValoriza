import { Request, Response } from "express";
import { ListContactsService } from "../../services/contacts/ListContactsService";

class ListContactsController {
  async handle(req: Request, res: Response) {
    const listContactsService = new ListContactsService();
    const { user_id } = req;

    const contacts = await listContactsService.execute(user_id);
    return res.json(contacts);
  }
}

export { ListContactsController }
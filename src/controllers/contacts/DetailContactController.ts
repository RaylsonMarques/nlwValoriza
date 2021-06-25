import { Request, Response } from "express";
import { DetailContactsService } from "../../services/contacts/DetailContactsService";

class DetailContactController {
  async handle(req: Request, res: Response) {
    const detailContactsService = new DetailContactsService();
    const { id } = req.params;
    const contact = await detailContactsService.execute(id);
    return res.json(contact);
  }
}

export { DetailContactController }
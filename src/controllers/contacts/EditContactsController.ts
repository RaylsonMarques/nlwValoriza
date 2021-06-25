import { Request, Response } from "express";
import { EditContactsService } from "../../services/contacts/EditContactsService";

class EditContactsController {
  async handle(req: Request, res: Response) {
    const editContactsService = new EditContactsService();
    const { name, email } = req.body;
    const { id } = req.params;

    const contact = await editContactsService.execute({ id, name, email });
    return res.json(contact);
  }
}

export { EditContactsController }
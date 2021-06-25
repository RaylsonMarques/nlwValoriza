import { Request, Response } from "express";
import { CreateContactsService } from "../../services/contacts/CreateContactsService";

class CreateContactsController {

  async handle(req: Request, res: Response) {
    const createContactsService = new CreateContactsService();

    const { name, email } = req.body;
    const { user_id } = req;

    const contact = await createContactsService.execute({
      name,
      email,
      user_id
    });

    return res.json(contact);
  }
}

export { CreateContactsController }
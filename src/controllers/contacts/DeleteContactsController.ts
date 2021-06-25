import { Request, Response } from "express";
import { DeleteContactService } from "../../services/contacts/DeleteContactService";

class DeleteContactsController {
  async handle(req: Request, res: Response) {
    const deleteContactsService = new DeleteContactService();
    const { id } = req.params;
    const result = await deleteContactsService.execute(id);
    return res.json(result);
  }
}

export { DeleteContactsController }
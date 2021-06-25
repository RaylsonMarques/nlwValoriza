import { Request, Response } from "express";
import { EditTagService } from "../../services/tags/EditTagService";

class EditTagController {
  async handle(req: Request, res: Response) {
    const editTagService = new EditTagService();
    const { name } = req.body;
    const { id } = req.params;

    const tag = await editTagService.execute({ id, name });
    return res.json(tag);
  }
}

export { EditTagController }
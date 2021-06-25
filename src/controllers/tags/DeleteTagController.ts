import { Request, Response } from "express";
import { DeleteTagService } from "../../services/tags/DeleteTagService";

class DeleteTagController {
  async handle(req: Request, res: Response) {
    const deleteTagService = new DeleteTagService();
    const { id } = req.params;

    const result = await deleteTagService.execute(id);
    return res.json(result);
  }
}

export { DeleteTagController }
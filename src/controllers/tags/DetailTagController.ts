import { Request, Response } from "express";
import { DetailTagService } from "../../services/tags/DetailTagService";

class DetailTagController {
  async handle(req: Request, res: Response) {
    const detailTagService = new DetailTagService();
    const { id } = req.params;

    const tag = await detailTagService.execute(id);
    return res.json(tag);
  }
}

export { DetailTagController }
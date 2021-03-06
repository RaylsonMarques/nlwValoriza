import { Request, Response } from "express";
import { ListTagsService } from "../../services/tags/ListTagsService";

class ListTagsController {
  async handle(req: Request, res: Response) {
    const listTagService = new ListTagsService();

    const tags = await listTagService.execute();

    return res.json(tags);
  }
}

export { ListTagsController }
import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../../repositories/TagsRepositories";

class DetailTagService {
  async execute(id) {
    const tagsRepositories = getCustomRepository(TagsRepositories);
    const tag = await tagsRepositories.findOne({ id });
    if (!tag) {
      throw new Error("Tag não encontrada");
    }

    return tag;
  }
}

export { DetailTagService }
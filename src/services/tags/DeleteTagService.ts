import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../../repositories/TagsRepositories"

class DeleteTagService {

  async execute(id: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);
    return await tagsRepositories.delete(id);
  }
}

export { DeleteTagService }
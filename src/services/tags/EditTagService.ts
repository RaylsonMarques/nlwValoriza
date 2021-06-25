import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../../repositories/TagsRepositories"

interface ITagEditRequest {
  id: string,
  name: string
}

class EditTagService {
  async execute({ id, name }: ITagEditRequest) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tagExists = await tagsRepositories.findOne({ id });

    if (!tagExists) {
      throw new Error("Tag não encontrada");
    }

    tagExists.name = name;

    const tag = tagsRepositories.create({
      id: tagExists.id,
      name: tagExists.name,
    });
    await tagsRepositories.save(tag);

    return tag;
  }
}

export { EditTagService }
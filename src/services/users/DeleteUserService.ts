import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

class DeleteUserService {
  async execute(user_id: string) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userExists = usersRepositories.findOne({ id: user_id });
    if (!userExists) {
      throw new Error("Usuário não existe");
    }

    const result = await usersRepositories.delete(user_id);

    return result;
  }
}

export { DeleteUserService }
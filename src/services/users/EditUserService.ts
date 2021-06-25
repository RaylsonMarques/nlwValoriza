import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../../repositories/UsersRepositories"

interface IUserEditRequest {
  id: string;
  name?: string;
  email?: string;
  password?: string;
}

class EditUserService {
  async execute({ id, name, email, password }: IUserEditRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userExists = await usersRepositories.findOne({ id });
    if (!userExists) {
      throw new Error("Usuário não encontrado");
    }

    userExists.name = name;
    userExists.email = email;
    userExists.password = password ? await hash(password, 8) : userExists.password;

    const user = usersRepositories.create({
      id: userExists.id,
      name: userExists.name,
      email: userExists.email,
      password: userExists.password
    });

    await usersRepositories.save(user);
    return user;
  }
}

export { EditUserService }
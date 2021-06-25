import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IComplimenteRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {

  async execute({ tag_id, user_sender, user_receiver, message }: IComplimenteRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    if (user_sender === user_receiver) {
      throw new Error("Usuário não pode enviar para ele mesmo");
    }

    const userReceiverExists = await usersRepositories.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error("Usuário de recebimento não existe");
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    });

    await complimentsRepositories.save(compliment);
    return compliment;
  }
}

export { CreateComplimentService }
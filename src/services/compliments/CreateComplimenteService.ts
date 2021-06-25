import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../../repositories/ComplimentsRepositories"
import { ContactsRepositories } from "../../repositories/ContactsRepositories";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IComplimenteRequest {
  tag_id: string;
  user_sender: string;
  contact_id: string;
  message: string;
}

class CreateComplimentService {

  async execute({ tag_id, user_sender, contact_id, message }: IComplimenteRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const contactsRepositores = getCustomRepository(ContactsRepositories);

    const contactExists = await contactsRepositores.findOne(contact_id);

    if (!contactExists) {
      throw new Error("Contato não existe");
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      contact_id,
      user_sender,
      message
    });

    await complimentsRepositories.save(compliment);
    return compliment;
  }
}

export { CreateComplimentService }
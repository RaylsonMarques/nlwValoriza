import { getCustomRepository } from "typeorm";
import { ContactsRepositories } from "../../repositories/ContactsRepositories";

interface IContactsEditRequest {
  id: string;
  name?: string;
  email?: string;
}

class EditContactsService {
  async execute({ id, name, email }: IContactsEditRequest) {
    const contactsRepositories = getCustomRepository(ContactsRepositories);

    const contactExists = await contactsRepositories.findOne({ id });
    if (!contactExists) {
      throw new Error("Contato não existe");
    }

    contactExists.name = name;
    contactExists.email = email;

    const contact = contactsRepositories.create({
      id: contactExists.id,
      name: contactExists.name,
      email: contactExists.email
    });

    await contactsRepositories.save(contact);
    return contact;
  }
}

export { EditContactsService }
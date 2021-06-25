import { getCustomRepository } from "typeorm"
import { ContactsRepositories } from "../../repositories/ContactsRepositories"

interface IContactsRequest {
  name: string;
  email: string;
  user_id: string;
}

class CreateContactsService {
  async execute({ name, email, user_id }: IContactsRequest) {
    const contactsRepositories = getCustomRepository(ContactsRepositories);

    const contact = contactsRepositories.create({
      name,
      email,
      user_id
    });

    await contactsRepositories.save(contact);
    return contact;
  }
}

export { CreateContactsService }
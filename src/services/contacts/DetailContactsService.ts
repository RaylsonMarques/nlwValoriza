import { getCustomRepository } from "typeorm"
import { ContactsRepositories } from "../../repositories/ContactsRepositories"

class DetailContactsService {
  async execute(id: string) {
    const contactsRepositories = getCustomRepository(ContactsRepositories);
    const contact = await contactsRepositories.findOne({ id });
    return contact;
  }
}

export { DetailContactsService }
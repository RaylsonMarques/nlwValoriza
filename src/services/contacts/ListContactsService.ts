import { getCustomRepository } from "typeorm"
import { ContactsRepositories } from "../../repositories/ContactsRepositories"

class ListContactsService {
  async execute(user_id: string) {
    const contactsRepositories = getCustomRepository(ContactsRepositories);

    const contacts = await contactsRepositories.find({ where: { user_id } });
    return contacts;
  }
}

export { ListContactsService }
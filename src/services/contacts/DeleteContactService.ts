import { getCustomRepository } from "typeorm"
import { ContactsRepositories } from "../../repositories/ContactsRepositories"

class DeleteContactService {
  async execute(id: string) {
    const contactsRepositories = getCustomRepository(ContactsRepositories);
    return contactsRepositories.delete(id);
  }
}

export { DeleteContactService }
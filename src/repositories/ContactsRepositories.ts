import { EntityRepository, Repository } from "typeorm";
import { Contacts } from "../entity/Contacts";

@EntityRepository(Contacts)
class ContactsRepositories extends Repository<Contacts> {
}

export { ContactsRepositories }
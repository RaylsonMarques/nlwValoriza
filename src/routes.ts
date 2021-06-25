import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUsersController";
import { CreateTagController } from "./controllers/tags/CreateTagController";
import { ensureAmdin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserContoller";
import { CreateComplimentController } from "./controllers/compliments/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentController } from "./controllers/compliments/ListIUserSendComplimentsController";
import { ListUserReceiveComplimentController } from "./controllers/compliments/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/tags/ListTagsControllers";
import { ListUsersController } from "./controllers/users/ListUsersController";
import { CreateContactsController } from "./controllers/contacts/CreateContactsController";
import { ListContactsController } from "./controllers/contacts/ListContactsController";
import { EditContactsController } from "./controllers/contacts/EditContactsController";
import { EditUserController } from "./controllers/users/EditUsersController";
import { DeleteUsersController } from "./controllers/users/DeleteUsersController";
import { DetailUsersController } from "./controllers/users/DetailUsersController";
import { RepositoryNotFoundError } from "typeorm";
import { DetailTagController } from "./controllers/tags/DetailTagController";
import { DeleteTagController } from "./controllers/tags/DeleteTagController";
import { EditTagController } from "./controllers/tags/EditTagController";
import { DetailContactController } from "./controllers/contacts/DetailContactController";
import { DeleteContactService } from "./services/contacts/DeleteContactService";
import { DeleteContactsController } from "./controllers/contacts/DeleteContactsController";

const router = Router();

const authenticateUserController = new AuthenticateUserController();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const editUsersController = new EditUserController();
const deleteUsersController = new DeleteUsersController();
const detailUsersController = new DetailUsersController();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();
const detailTagController = new DetailTagController();
const deleteTagController = new DeleteTagController();
const editTagController = new EditTagController();

const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentController();

const createContactsController = new CreateContactsController();
const listContactsController = new ListContactsController();
const editContactsController = new EditContactsController();
const detailContactsController = new DetailContactController();
const deleteContactsController = new DeleteContactsController();

//Uma boa prática é o nome do recurso ser no plural

//Login
router.post("/login", authenticateUserController.handle);

//Users
router.post("/users", createUserController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);
router.patch("/users", ensureAuthenticated, editUsersController.handle);
router.delete("/users", ensureAuthenticated, deleteUsersController.handle);
router.get("/users/details", ensureAuthenticated, detailUsersController.handle);

//Tags
router.post("/tags", ensureAuthenticated, ensureAmdin, createTagController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/tags/:id", ensureAuthenticated, detailTagController.handle);
router.patch("/tags/:id", ensureAuthenticated, editTagController.handle);
router.delete("/tags/:id", ensureAuthenticated, deleteTagController.handle);

//Compliments
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);

//Contacts
router.post("/contacts", ensureAuthenticated, createContactsController.handle);
router.get("/contacts", ensureAuthenticated, listContactsController.handle);
router.patch("/contacts/:id", ensureAuthenticated, editContactsController.handle);
router.get("/contacts/:id", ensureAuthenticated, detailContactsController.handle);
router.delete("/contacts/:id", ensureAuthenticated, deleteContactsController.handle);

export { router };
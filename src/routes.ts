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

const router = Router();

const authenticateUserController = new AuthenticateUserController();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const editUsersController = new EditUserController();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentController();

const createContactsController = new CreateContactsController();
const listContactsController = new ListContactsController();
const editContactsController = new EditContactsController();

//Uma boa prática é o nome do recurso ser no plural

//Login
router.post("/login", authenticateUserController.handle);

//Users
router.post("/users", createUserController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);
router.patch("/users", ensureAuthenticated, editUsersController.handle);

//Tags
router.post("/tags", ensureAuthenticated, ensureAmdin, createTagController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);

//Compliments
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);

//Contacts
router.post("/contacts", ensureAuthenticated, createContactsController.handle);
router.get("/contacts", ensureAuthenticated, listContactsController.handle);
router.patch("/contacts/:id", ensureAuthenticated, editContactsController.handle);

export { router };
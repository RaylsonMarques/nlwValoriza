import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password:string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UsersRepositories);

    //Verifica se o email esxiste
    const user = await userRepositories.findOne({ email });

    if(!user) {
      throw new Error("Email/Senha incorretos");
    }

    //Verifica se  a senha está correta
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Email/Senha incorretos");
    }

    //Gera o token
    const token = sign({ email: user.email }, "4d2d8c9bb7fee9bb634fc032879f4cb3", { subject: user.id, expiresIn: "1d" });
    return token;
  }
}
//Dica de como criar uma chave secreta para a aplicatção -> user um site para hash de md5
//Tempo de expiração do token -> 
export { AuthenticateUserService };
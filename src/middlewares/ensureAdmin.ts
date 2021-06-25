import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAmdin(req: Request, res: Response, next: NextFunction) {
  const usersRepositories = getCustomRepository(UsersRepositories);

  const { user_id } = req;
  const { admin } = await usersRepositories.findOne(user_id);

  //verifica se o usuário é admin
  if (admin) {
    return next();
  }

  return res.status(401).json({ erro: "Usuário não autorizado" });
}
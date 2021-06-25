import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

  //Receber o token: Header da requisição.
  const authToken = req.headers.authorization;

  //Validar se o token está preenchido.
  if (!authToken) {
    return res.status(401).end();
  }

  //Validar se o token é valido.
  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "4d2d8c9bb7fee9bb634fc032879f4cb3") as IPayload;
    //Recuperar informações do usuário.
    req.user_id = sub;
    return next();
  } catch (erro) {
    return res.status(401).end();
  }
}
import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";
import "./database";

const app = express()

app.use(express.json());
app.use(router);
app.use((erro: Error, req: Request, res: Response, next: NextFunction) => {
  if(erro instanceof Error) {
    return res.status(400).json({ erro: erro.message });
  }

  return res.status(500).json({
    status: "erro",
    mensagem: "Erro interno no servidor"
  });
});

app.listen(3000, () => console.log("Server is running..."));
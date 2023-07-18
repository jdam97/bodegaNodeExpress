import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { bodegas } from "../controller/bodegas.js"; // importo el dto ya compilado de typescript de la carpeta controller

const DtoBodega = express();

DtoBodega.use((req, res, next) => {
  try {
    let data = plainToClass(bodegas, req.body, {
      excludeExtraneousValues: true, // indica que solo se deben incluir las propiedades definidas en la clase bodegas y excluir cualkquier otra propiedad adicional
    });
    req.body = JSON.parse(JSON.stringify(data));
    next();
  } catch (error) {
    res.status(error.status).send(error);
  }
});

export default DtoBodega; // exporto para importarlo en los routers donde lo voy a utilizar
 
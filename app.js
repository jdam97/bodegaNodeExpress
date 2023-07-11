import dotenv from "dotenv";
import express from "express";
import appBodegas from "./routers/bodegas.js"
import appProductos from "./routers/productos.js"

dotenv.config();

const appExpress = express();

appExpress.use(express.json())//middlewall

appExpress.use("/bodegas",appBodegas) // acá estoy diciendo que cuando el endpoint sea /bodegas, vaya a bodegas.js y ejecute lo que está en la función
appExpress.use("/productos",appProductos);





let config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})
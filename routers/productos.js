import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv"
dotenv.config() // para activar la configuracion

const appProductos = Router();

let con = undefined;

//Coneccion a la base de datos

appProductos.use((req,res,next)=>{
    try {
        con = mysql.createPool({
            host: process.env.HOST,
            user: process.env.USUARIO,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            port: process.env.PORT
        })
        next()

    } catch (error) {
        res.status(500).send("Error de conexion con la base de datos")
    }
})


// Punto 6
//Get

appProductos.get("/",(req,res)=>{
    con.query(`
    SELECT productos.*, SUM(inventarios.cantidad) AS Total FROM productos INNER JOIN inventarios ON productos.id = inventarios.id_producto GROUP BY productos.id ORDER BY Total DESC`,
      (error,result)=>{
        if(error){
            console.log(error);
            res.status(500).send("Connection error");
        }else(
            res.status(200).send(result)
        )
    })
});


export default appProductos;
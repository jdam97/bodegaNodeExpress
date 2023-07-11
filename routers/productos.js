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
    con.query(`SELECT * FROM productos ORDER BY nombre DESC`,
    (error,data)=>{
        try {
            res.status(200).send(data)//para mostrar en el thunder
            



        } catch (error) {
            
            res.status(500).send("there aren't conection")
        }
    })

});




export default appProductos;
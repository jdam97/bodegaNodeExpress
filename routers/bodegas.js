import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv"
dotenv.config() // para activar la configuracion

const appBodegas = Router();

let con = undefined;

//Conexion a la database
appBodegas.use((req, res, next) => {
    // try {
        con = mysql.createPool({
            host: process.env.HOST,
            user: process.env.USUARIO,
            pass: process.env.PASS,
            database: process.env.DATABASE,
            port: process.env.PORT
        })
        console.log(con)
        next()

    // } catch (error) {
        // res.status(500).send("Error de conexion con la base de datos")
    // }
})

//GET
appBodegas.get("/",(req,res)=>{
    con.query(`SELECT * FROM bodegas ORDER BY nombre ASC`,(err,data,fils)=>{
        console.log(err);
        console.log(data);
        res.status(200).send(data)

    })
})






export default appBodegas;
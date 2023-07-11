import { Router } from "express";
import mysql from "mysql2";
import dotenv from "dotenv"
dotenv.config() // para activar la configuracion

const appBodegas = Router();

let con = undefined;

//Conexion a la database
appBodegas.use((req, res, next) => {
    try {
        con = mysql.createPool({
            host: process.env.HOST,
            user: process.env.USUARIO,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            port: process.env.PORT
        })
        //  console.log(con) //muestra en consola mi database
        next() // para que pase al catch

    } catch (error) {
        res.status(500).send("Error de conexion con la base de datos")
    }
})

//GET Punto 4
appBodegas.get("/",(req,res)=>{
    con.query(`SELECT * FROM bodegas ORDER BY nombre ASC`,(err,data,fils)=>{
        console.log(err);
        console.log(data);
        res.status(200).send(data)

    })
})

//Punto 5

appBodegas.post("/",(req,res)=>{
    const {id, nombre, id_responsable, estado, update_by, created_at} = req.body //destructuring que me dice que lo que haya en el body con estos nombres, me los trtaiga como variables
    
    con.query(`INSERT INTO bodegas (id, nombre, id_responsable, estado, update_by, created_at) VALUES (?,?,?,?,?,?)`,
    [id, nombre, id_responsable, estado, update_by, created_at],
    (err,data)=>{
        if(err){
            res.status(500).send("Error ejecutando el query")
        }
        else if(data){
            res.status(200).send(`${nombre} agregada exitosamente`)
        }
    }
    )
})





export default appBodegas;
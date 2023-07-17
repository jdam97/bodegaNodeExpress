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

//Punto 7

appProductos.post("/",DtoProductos ,(req, res) => {
    const { id,nombre,  descripcion,cantidad ,id_inv} = req.body;
    con.query(
      "INSERT INTO productos (id, nombre, descripcion) VALUES (?,?, ?)",
      [id,nombre,  descripcion],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
        } else {
          const  id_producto = id;
          con.query(
            "SELECT id FROM bodegas WHERE nombre = ?",
            ["bodega0"],
            (err, result) => {
              if (err) {
                console.error(err);
                res.status(500).send("Internal Server Error");
              } else {
                const  id_bodega = result[0].id;
                con.query(
                  "INSERT INTO inventarios ( id,id_producto,  id_bodega, cantidad) VALUES (?, ?, ?,?)",
                  [ id_inv,id_producto,  id_bodega, cantidad],
                  (err) => {
                    if (err) {
                      console.error(err);
                      res.status(500).send("Internal Server Error");
                    } else {
                      res.status(200).send("Producto insertado correctamente");
                    }
                  }
                )
              }
            }
          )
        }
      }
    )
  });

// Punto 8
appProductos.put("/",DtoProductos,(req,res) => {
  const { id_producto, cantidad, id_bodegaOrigen, id_bodegaDestino } = req.body;
  con.query(
    `SELECT cantidad FROM inventarios WHERE id_producto = ? AND id_bodega = ?`,
    [id_producto, id_bodegaOrigen],
    (err, data) => {
      const cantidadDisponible = data[0].cantidad;
      if (cantidad > cantidadDisponible) {
        res.send("No esta disponible esa cantidad");
      } else {
        // Restar la cantidad de la bodega de origen
        con.query(
          `UPDATE inventarios SET cantidad = cantidad - ? WHERE id_producto = ? AND id_bodega = ?`,
          [cantidad, id_producto, id_bodegaOrigen]
        );

        // Sumar la cantidad a la bodega de destino
        con.query(
          `UPDATE inventarios SET cantidad = cantidad + ? WHERE id_producto = ? AND id_bodega = ?`,
          [cantidad, id_producto, id_bodegaDestino]
        );
        res.send("Update");
      }
    }
  );
});


export default appProductos;
import {Type,Transform,Expose} from "class-transformer";

export class bodegas{
    @Expose({name:"id"}) //  este es la variable que se coloca en el frontend
    @Transform(({value})=>{
        let data = /^[0-9]+$/g.test(value); // a la data le meto la expresion regular  /^[0-9]+$/g.  que  especifica que solo reciba numeros y le paso el valor
        if(data && typeof value == "number"){ // acá valido que sea data y tambien tiene que ser de tipo number
            return Number(value)//retorno el valor parseado en numero
        }
        else{
            throw {status:401, message: "ERROR en el id, dato no válido"}
        }
    })
    id:number //Debo ponerlos en este caso como los reciba de la base de datos

    @Expose({name:"nombre"})
    @Transform(({value})=>{
        let data = /^[a-zA-Z]+$/g.test(value);
        if(data){
            return value
        }
        else{
            throw {status:401, message: "Error en el nombre, dato no válido"}
        }
    })
    nombre:string //Debo ponerlos en este caso como los reciba de la base de datos

    @Expose({name:"id_responsable"})
    @Transform(({value})=>{
        let data = /^[0-9]+$/g.test(value); // a la data le meto la expresion regular  /^[0-9]+$/g.  que  especifica que solo reciba numeros y le paso el valor
        if(data && typeof value == "number"){ // acá valido que sea data y tambien tiene que ser de tipo number
            return Number(value)//retorno el valor parseado en numero
        }
        else{
            throw {status:401, message: "ERROR en el id, dato no válido"}
        }
    })
    id_responsable:number //Debo ponerlos en este caso como los reciba de la base de datos

    @Expose({name:"estado"})
    @Transform(({value})=>{
        let data = /^[0-9]+$/g.test(value); // a la data le meto la expresion regular  /^[0-9]+$/g.  que  especifica que solo reciba numeros y le paso el valor
        if(data && typeof value == "number"){ // acá valido que sea data y tambien tiene que ser de tipo number
            return Number(value)//retorno el valor parseado en numero
        }
        else{
            throw {status:401, message: "ERROR en el estado, dato no válido"}
        }
    })
    estado:number //Debo ponerlos en este caso como los reciba de la base de datos

    @Expose({name:"created_by"})
    @Transform(({value})=>{
        let data = /^[0-9]+$/g.test(value); // a la data le meto la expresion regular  /^[0-9]+$/g.  que  especifica que solo reciba numeros y le paso el valor
        if(data && typeof value == "number"){ // acá valido que sea data y tambien tiene que ser de tipo number
            return Number(value)//retorno el valor parseado en numero
        }
        else{
            throw {status:401, message: "ERROR en el createdby, dato no válido"}
        }
    })
    created_by:number //Debo ponerlos en este caso como los reciba de la base de datos

    constructor(id:number,nombre:string,id_responsable:number,estado:number,created_by:number){
        this.id = id;
        this.nombre = nombre;
        this.id_responsable = id_responsable;
        this.estado = estado;
        this.created_by = created_by;
    }


}
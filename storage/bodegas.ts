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
    ID:number //Debo ponerlos en este caso como los reciba de la base de datos

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
    IDNAME:number //Debo ponerlos en este caso como los reciba de la base de datos

    @Expose({name:"state"})
    @Transform(({value})=>{
        let data = /^[0-9]+$/g.test(value); // a la data le meto la expresion regular  /^[0-9]+$/g.  que  especifica que solo reciba numeros y le paso el valor
        if(data && typeof value == "number"){ // acá valido que sea data y tambien tiene que ser de tipo number
            return Number(value)//retorno el valor parseado en numero
        }
        else{
            throw {status:401, message: "ERROR en el estado, dato no válido"}
        }
    })
    STATE:number //Debo ponerlos en este caso como los reciba de la base de datos

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
    CREATEDBY:number //Debo ponerlos en este caso como los reciba de la base de datos

    constructor(id:number,nombre:string,id_responsable:number,estado:number,created_by:number){
        this.ID = id;
        this.nombre = nombre;
        this.IDNAME = id_responsable;
        this.STATE = estado;
        this.CREATEDBY = created_by;
    }


}
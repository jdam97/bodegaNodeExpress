var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from "class-transformer";
export class bodegas {
    constructor(id, nombre, id_responsable, estado, created_by) {
        this.id = id;
        this.nombre = nombre;
        this.id_responsable = id_responsable;
        this.estado = estado;
        this.created_by = created_by;
    }
}
__decorate([
    Expose({ name: "id" }) //  este es la variable que se coloca en el frontend
    ,
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value); // a la data le meto la expresion regular  /^[0-9]+$/g.  que  especifica que solo reciba numeros y le paso el valor
        if (data && typeof value == "number") { // acá valido que sea data y tambien tiene que ser de tipo number
            return Number(value); //retorno el valor parseado en numero
        }
        else {
            throw { status: 401, message: "ERROR en el id, dato no válido" };
        }
    }),
    __metadata("design:type", Number)
], bodegas.prototype, "id", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        let data = /^[a-zA-Z]+$/g.test(value);
        if (data) {
            return value;
        }
        else {
            throw { status: 401, message: "Error en el nombre, dato no válido" };
        }
    }),
    __metadata("design:type", String)
], bodegas.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "id_responsable" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value); // a la data le meto la expresion regular  /^[0-9]+$/g.  que  especifica que solo reciba numeros y le paso el valor
        if (data && typeof value == "number") { // acá valido que sea data y tambien tiene que ser de tipo number
            return Number(value); //retorno el valor parseado en numero
        }
        else {
            throw { status: 401, message: "ERROR en el id, dato no válido" };
        }
    }),
    __metadata("design:type", Number)
], bodegas.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: "estado" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value); // a la data le meto la expresion regular  /^[0-9]+$/g.  que  especifica que solo reciba numeros y le paso el valor
        if (data && typeof value == "number") { // acá valido que sea data y tambien tiene que ser de tipo number
            return Number(value); //retorno el valor parseado en numero
        }
        else {
            throw { status: 401, message: "ERROR en el estado, dato no válido" };
        }
    }),
    __metadata("design:type", Number)
], bodegas.prototype, "estado", void 0);
__decorate([
    Expose({ name: "created_by" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value); // a la data le meto la expresion regular  /^[0-9]+$/g.  que  especifica que solo reciba numeros y le paso el valor
        if (data && typeof value == "number") { // acá valido que sea data y tambien tiene que ser de tipo number
            return Number(value); //retorno el valor parseado en numero
        }
        else {
            throw { status: 401, message: "ERROR en el createdby, dato no válido" };
        }
    }),
    __metadata("design:type", Number)
], bodegas.prototype, "created_by", void 0);

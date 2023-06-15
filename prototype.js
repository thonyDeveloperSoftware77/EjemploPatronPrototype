"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, direccion, telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    // Método para clonar el objeto
    Persona.prototype.clone = function () {
        // Crea un nuevo objeto con las mismas propiedades que el objeto actual
        var clone = Object.create(this);
        // Copia explícitamente los valores de los atributos al objeto clonado
        clone.nombre = this.nombre;
        clone.edad = this.edad;
        clone.direccion = this.direccion;
        clone.telefono = this.telefono;
        return clone;
    };
    return Persona;
}());
exports.Persona = Persona;

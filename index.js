"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prototype_1 = require("./prototype");
function clientCode() {
    // Crea una instancia de Persona
    var p1 = new prototype_1.Persona('Juan', 30, 'Calle 123', '555-1234');
    // Clona el objeto p1
    var p2 = p1.clone();
    var p3 = p2.clone();
    p2.nombre = 'Nuevo nombreNuevo';
    // Muestra los objetos en la consola
    console.log('Objeto original:', p1);
    console.log('Objeto clonado:', p2);
    console.log('Objeto clonado:', p3);
}
clientCode();

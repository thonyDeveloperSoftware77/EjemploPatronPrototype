
import { Persona } from './prototype';


function clientCode() {
    // Crea una instancia de Persona
    const p1 = new Persona('Juan', 30, 'Calle 123', '555-1234');

    // Clona el objeto p1
    const p2 = p1.clone();
    const p3 = p2.clone();
    p2.nombre = 'Nuevo nombreNuevo';


    // Muestra los objetos en la consola
    console.log('Objeto original:', p1);
    console.log('Objeto clonado:', p2);
    console.log('Objeto clonado:', p3);
}

clientCode();
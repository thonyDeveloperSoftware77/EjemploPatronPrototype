// prototype.ts
export interface Clonable {
    clone(): Clonable;
}

export class Persona implements Clonable {
    public nombre: string;
    public edad: number;
    public direccion: string;
    public telefono: string;

    constructor(nombre: string, edad: number, direccion: string, telefono: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    // Método para clonar el objeto
    public clone(): this {
        // Crea un nuevo objeto con las mismas propiedades que el objeto actual
        const clone = Object.create(this);
        // Copia explícitamente los valores de los atributos al objeto clonado
        clone.nombre = this.nombre;
        clone.edad = this.edad;
        clone.direccion = this.direccion;
        clone.telefono = this.telefono;
        return clone;
    }
}

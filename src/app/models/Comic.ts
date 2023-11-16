export class Comic {
    public nombre: string;
    public imagen: string;
    public descripcion: string;

    constructor(name: string, image: string, descrip: string) {
        this.nombre = name;
        this.imagen = image;
        this.descripcion = descrip;
    }
}
export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    titulo: string;
    img: string;

    constructor(nombre: string, apellido: string, descripcion: string, img: string, titulo: string){
        this.nombre= nombre;
        this.apellido= apellido;
        this.titulo=titulo
        this.img= img;
        this.descripcion=descripcion;

    }
}
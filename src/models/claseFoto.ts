import { Usuario } from './claseUsuario'
import { Comentario } from './claseComentario'
export class Foto {
    constructor(
        public id: number,
        public ruta: string,
        public descripcion: string,
        public hashtags: string[],
        public fechaSubida: Date,
        public usuario: Usuario,
        public meGusta: Usuario[],
        public comentarios: Comentario[]
    ) {
    }
}
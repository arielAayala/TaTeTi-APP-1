export class Jugadores{
    /**
     * @param {String} simbolo se refiere a los simbolos de los jugadores ( X | O).
     * @param {String} imagen se refiere al path de las imagenes de los simbolos respectivos.
    */
    constructor(simbolo,imagen) {
        this.simbolo = simbolo
        this.imagen = imagen
    }   

    obtenerImagen(){
        return this.imagen
    }
    
    obtenerSimbolo(){
        return this.simbolo
    }

}


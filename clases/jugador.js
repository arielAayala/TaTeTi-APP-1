export class Jugadores{
    /**
     * @param {String} simbolo se refiere a los simbolos de los jugadores ( X | O).
     * @param {String} imagen se refiere al path de las imagenes de los simbolos respectivos.
     *@param {Int} numero que se refiere al turno
    */
    constructor(simbolo,imagen,num) {
        this.simbolo = simbolo
        this.imagen = imagen
        this.turno = num
    }

    ponerSimbolo(id){

    }

    

    obtenerImagen(){
        return this.imagen
    }

    obtenerSimbolo(){
        return this.simbolo
    }
}


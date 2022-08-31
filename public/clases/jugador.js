export class Jugadores{
    /**
     * @param {String} simbolo se refiere a los simbolos de los jugadores ( X | O).
     * @param {String} imagen se refiere al path de las imagenes de los simbolos respectivos.
    */
    constructor(simbolo,imagen) {
        this.simbolo = simbolo
        this.imagen = imagen
        this.puntaje = 0
    }   

    obtenerImagen(){
        return this.imagen
    }
    
    get obtenerSimbolo(){
        return this.simbolo
    }

    get obtenerPuntaje(){
        return this.puntaje
    }

    actualizarPuntaje(){
        document.getElementById(this.obtenerSimbolo).querySelector("h3").innerHTML = this.obtenerPuntaje
    }

    sumarPuntaje(){
        this.puntaje += 1
    }
}


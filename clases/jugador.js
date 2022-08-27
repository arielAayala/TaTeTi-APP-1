
class Jugadores{
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
export  const jugadorX = new Jugadores("X","../imagenes/cruz.png")
export const jugadorO = new Jugadores("O","../imagenes/circulo.png")
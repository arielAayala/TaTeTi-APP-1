import { Jugadores } from "./jugador.js";
const jugadorX = new Jugadores("X","../imagenes/cruz.png")
const jugadorO = new Jugadores("O","../imagenes/circulo.png")

class Tateti{
    /**
     * @param {object} jugadorActual se refiere al jugador con el turno actual
     * @param {boolean} terminado se refiere si el juego ha terminado
     */
    constructor() { 
        this.jugadorActual = jugadorO
        this.terminado = false
    }

    
    /**
     * @param {integer} id se refiere al id se la casillas 
     * @returns el path de la img que contiene dicha casilla
     */ 
    posicion(id){
        return document.getElementById(id).querySelector("img").getAttribute("src")
    }

    /* verifica si hay un ganador*/
    terminarJuego(){
        const img = this.jugadorActual.obtenerImagen()
        if ((img == this.posicion(0) && img == this.posicion(1) && this.posicion(2) == img) || 
        (img == this.posicion(3) && img == this.posicion(4) && this.posicion(5) == img) ||
        (img == this.posicion(6) && img == this.posicion(7) && this.posicion(8) == img) ||
        (img == this.posicion(0) && img == this.posicion(4) && this.posicion(8) == img) ||
        (img == this.posicion(6) && img == this.posicion(4) && this.posicion(2) == img) ||
        (img == this.posicion(0) && img == this.posicion(3) && this.posicion(6) == img) ||
        (img == this.posicion(1) && img == this.posicion(4) && this.posicion(7) == img) ||
        (img == this.posicion(2) && img == this.posicion(5) && this.posicion(8) == img)){
            this.terminado = true
            this.jugadorActual.sumarPuntaje()
            this.jugadorActual.actualizarPuntaje()
        }
    }

    terminado(){
        return this.terminado
    }

    jugarNuevamente(){
        this.terminado = false
    }

    /*retorna el jugador actual*/
    get jugador(){
        return this.jugadorActual
    }

    /*cambia el jugador actual*/
    cambiarJugador(){
        this.jugadorActual = (this.jugador == jugadorO) ? jugadorX : jugadorO
    }
  
}
export const juego = new Tateti()
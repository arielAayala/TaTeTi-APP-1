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
        this.puntajeX = 0
        this.puntajeO = 0
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
        const vacio = "../imagenes/vacia.png"
        const img = this.jugadorActual.obtenerImagen()
        if ((img == this.posicion(0) && img == this.posicion(1) && this.posicion(2) == img) || 
        (img == this.posicion(3) && img == this.posicion(4) && this.posicion(5) == img) ||
        (img == this.posicion(6) && img == this.posicion(7) && this.posicion(8) == img) ||
        (img == this.posicion(0) && img == this.posicion(4) && this.posicion(8) == img) ||
        (img == this.posicion(6) && img == this.posicion(4) && this.posicion(2) == img) ||
        (img == this.posicion(0) && img == this.posicion(3) && this.posicion(6) == img) ||
        (img == this.posicion(1) && img == this.posicion(4) && this.posicion(7) == img) ||
        (img == this.posicion(2) && img == this.posicion(5) && this.posicion(8) == img)){
            setTimeout((this.jugarNuevamente),1000)
            this.terminado = true
            this.sumarPuntaje()
            this.actualizarPuntaje() 
            setTimeout(()=>{this.terminado = false},1000)
            this.cambiarJugador()
        }else if((vacio != this.posicion(0) && vacio != this.posicion(1) && this.posicion(2) != vacio && 
        vacio != this.posicion(3) && vacio != this.posicion(4) && this.posicion(5) != vacio &&
        vacio != this.posicion(6) && vacio != this.posicion(7) && this.posicion(8) != vacio)){
            setTimeout((this.jugarNuevamente),1000)
        }
    }


    /*retorna el jugador actual*/
    get jugador(){
        return this.jugadorActual
    }

    /*cambia el jugador actual*/
    cambiarJugador(){
        this.jugadorActual = (this.jugador == jugadorO) ? jugadorX : jugadorO
    }

    /*sumar puntaje*/
    sumarPuntaje(){
        if(this.jugadorActual.obtenerSimbolo() == "O"){
            this.puntajeO +=1
        }else if (this.jugadorActual.obtenerSimbolo() == "X"){
            this.puntajeX += 1
        }
    }

    /*Actualizar puntaje*/
    actualizarPuntaje(){
        document.getElementById("X").querySelector("h3").innerHTML = this.puntajeX
        document.getElementById("O").querySelector("h3").innerHTML = this.puntajeO
    }
  

    retornarTerminado(){
        return this.terminado
    }

    jugarNuevamente(){
        for (let i = 0; i < 9; i++) {
            document.getElementById(i).querySelector("img").setAttribute("src","../imagenes/vacia.png")    
        }
        
    }
}
export const juego = new Tateti()
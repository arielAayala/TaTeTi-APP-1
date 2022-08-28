import { Jugadores } from "./jugador.js";
const jugadorX = new Jugadores("X","../imagenes/cruz.png")
const jugadorO = new Jugadores("O","../imagenes/circulo.png")
class Tateti{
    constructor() { 
        this.jugadorActual = jugadorO
        this.terminado = false
    }

    construirJuego(){
        const tablero = document.getElementById("tablero")
        for(let i = 0; i <= 8; i++){
            const casilla = document.createElement("div")
            const simbolo = document.createElement("img")
            simbolo.src= "../imagenes/vacia.png"
            casilla.classList.add("casilla")
            casilla.setAttribute("id",i)
            casilla.onclick = this.verificarClick
            casilla.append(simbolo)
            tablero.append(casilla)   
        };
    } 
    
    posicion(id){
        return document.getElementById(id).querySelector("img").getAttribute("src")
    }

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
            console.log("el ganador es el jugador " + this.jugadorActual.obtenerSimbolo())
        }
    }

    get jugador(){
        return this.jugadorActual
    }

    cambiarJugador(){
        this.jugadorActual = (this.jugador == jugadorO) ? jugadorX : jugadorO
    }

    /* evento fuera de la clase */
    verificarClick(ev) {
    const valor= document.getElementById(this.id).querySelector("img").getAttribute("src")
    if (valor === "../imagenes/vacia.png" && juego.terminado == false){
        const img = juego.jugadorActual.obtenerImagen()
        document.getElementById(this.id).querySelector("img").setAttribute("src",img)
        juego.terminarJuego()
        if (!juego.terminado){
            juego.cambiarJugador()
        } 
        
    }}
}
export const juego = new Tateti()
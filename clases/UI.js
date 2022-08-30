import { juego } from "/clases/tateti.js";
class UI {
    constructor(){
    }

    /*crea el tablero vacio para jugar*/
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

    limpiarJuego(){
        for(let i = 0; i <= 8; i++){
            document.getElementById(i).querySelector("img").setAttribute("src","../imagenes/vacia.png")
        }
    }

    /* evento click de los divs creados */
    verificarClick(ev) {
        if (juego.terminado === true){
            console.log("entre")  
            juego.jugarNuevamente()
            visual.limpiarJuego()
        } 
        const valor= document.getElementById(this.id).querySelector("img").getAttribute("src")
        if (valor == "../imagenes/vacia.png" && juego.terminado == false){
            const img = juego.jugadorActual.obtenerImagen()
            document.getElementById(this.id).querySelector("img").setAttribute("src",img)
            juego.terminarJuego()
            if (!juego.terminado){
                juego.cambiarJugador()
            } 
        }
    };


}

export const visual = new UI();
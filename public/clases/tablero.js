import { juego } from "/clases/tateti.js";
class Tablero {
    constructor(){
    }

    turnoJugadores(){
        if(juego.jugadorActual.simbolo == "X"){
            document.getElementById("O").classList.remove("jugadorActualO")
            document.getElementById("X").classList.add("jugadorActualX")
        }else{
            document.getElementById("X").classList.remove("jugadorActualX")
            document.getElementById("O").classList.add("jugadorActualO")
        }
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
        }
    }; 


    /* evento click de los divs creados */
    verificarClick(ev) {
        const valor= document.getElementById(this.id).querySelector("img").getAttribute("src")
        if (valor == "../imagenes/vacia.png" && juego.retornarTerminado() == false){
            const img = juego.jugadorActual.obtenerImagen()
            document.getElementById(this.id).querySelector("img").setAttribute("src",img)
            juego.terminarJuego()
            if (!juego.terminado){
                juego.cambiarJugador()
                
            }
            visual.turnoJugadores()
        }
    };     
};


export const visual = new Tablero();


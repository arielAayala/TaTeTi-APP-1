import { jugadorO,jugadorX } from "/jugador.js";


export class Tateti{
    constructor() {
    }

    construirJuego(){
        const tablero = document.getElementById("tablero")
        for(let i = 0; i <= 8; i++){
            const casilla = document.createElement("div")
            const simbolo = document.createElement("img")
            simbolo.src= "../imagenes/vacia.png"
            casilla.classList.add("casilla")
            casilla.setAttribute("id",i)
            casilla.onclick = this.obtenerClick
            casilla.append(simbolo)
            tablero.append(casilla)   
        };
        console.log("termine")
    } 
    obtenerClick(ev) {
        const img = jugadorO.obtenerImagen()
        const valor= document.getElementById(this.id).querySelector("img").getAttribute("src")
        if (valor === "../imagenes/vacia.png"){
            document.getElementById(this.id).querySelector("img").setAttribute("src",img)
            console.log(jugadorO.obtenerSimbolo)
        }else{
            console.log("Error")
        }  
    }
}
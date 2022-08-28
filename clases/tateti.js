import { Jugadores } from "./jugador.js";
const jugadorX = new Jugadores("X","../imagenes/cruz.png",2)
const jugadorO = new Jugadores("O","../imagenes/circulo.png",1)
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
            casilla.onclick = this.verificarClick
            casilla.append(simbolo)
            tablero.append(casilla)   
        };
        console.log("termine")
    } 
    verificarClick(ev) {   
    const valor= document.getElementById(this.id).querySelector("img").getAttribute("src")
    if (valor === "../imagenes/vacia.png"){
        const img = jugadorO.obtenerImagen()
        document.getElementById(this.id).querySelector("img").setAttribute("src",img)
    }}
}

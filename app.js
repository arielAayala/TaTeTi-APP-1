import { Tateti } from "/clases/tateti.js";
import { Jugadores } from "/clases/jugador.js";


const jugadorX = new Jugadores("X","../imagenes/cruz.png")
const jugadorO = new Jugadores("O","../imagenes/circulo.png")
const juego = new Tateti(jugadorO)
juego.construirJuego()

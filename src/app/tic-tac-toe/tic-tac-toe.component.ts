import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {
  posiciones = [['-' , '-' , '-'],
                ['-' , '-' , '-'],
                ['-' , '-' , '-'],];
  jugador='X';

  presion(fila:number, columna:number){
    if (this.casillaVacia(fila, columna)) {
      this.posiciones[fila] [columna] = this.jugador;
      this.verificarVictoria('O');
      this.verificarVictoria('X');
      this.cambiarJugador();
    }
  }
  casillaVacia(fila:number, columna:number){
    return this.posiciones[fila] [columna] == '-';
  }

  verificarVictoria(jugador:string){
    if (this.posiciones[0][0] == jugador &&
      this.posiciones[0][1] == jugador &&
      this.posiciones[0][2] == jugador){
        alert(`Ganaste: ${jugador}`)
      }
    if (this.posiciones[0][0] == jugador &&
      this.posiciones[1][1] == jugador &&
      this.posiciones[2][2] == jugador){
        alert(`Ganaste: ${jugador}`)
      }
    if (this.posiciones[0][0] == jugador &&
      this.posiciones[1][0] == jugador &&
      this.posiciones[2][0] == jugador){
        alert(`Ganaste: ${jugador}`)
      }
    if (this.posiciones[1][0] == jugador &&
      this.posiciones[1][1] == jugador &&
      this.posiciones[1][2] == jugador){
        alert(`Ganaste: ${jugador}`)
      }
    if (this.posiciones[2][0] == jugador &&
      this.posiciones[1][1] == jugador &&
      this.posiciones[0][2] == jugador){
        alert(`Ganaste: ${jugador}`)
      }
    if (this.posiciones[2][0] == jugador &&
      this.posiciones[2][1] == jugador &&
      this.posiciones[2][2] == jugador){
        alert(`Ganaste: ${jugador}`)
      }
    if (this.posiciones[0][1] == jugador &&
      this.posiciones[1][1] == jugador &&
      this.posiciones[2][1] == jugador){
        alert(`Ganaste: ${jugador}`)
      }
    if (this.posiciones[0][2] == jugador &&
      this.posiciones[1][2] == jugador &&
      this.posiciones[2][2] == jugador){
        alert(`Ganaste: ${jugador}`)
      }
  }
  cambiarJugador(){
    if(this.jugador == 'X'){
      this.jugador = 'O';
    } else {
      this.jugador = 'X';
    }
  }

  reiniciar(){
    for (let fila = 0; fila < this.posiciones.length; fila++){
      for (let columna = 0; columna < this.posiciones.length; columna++){
        this.posiciones[fila][columna] = '-';
      }
    }
  }
        
}

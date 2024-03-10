import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedra-pal-tijra',
  templateUrl: './piedra-pal-tijra.component.html',
  styleUrls: ['./piedra-pal-tijra.component.css']
})
export class PiedraPalTijraComponent implements OnInit{

  texto:string="";
  texto2:string="";
  texto3:string="";

  elecciones:string[]=["piedra", "papel", "tijera"];

  ngOnInit():void{
    this.texto="Realiza tu eleccion.     Triste";
  }

  elegir(eleccion:string){
    this.texto="Elegiste: " + eleccion + " Triste ";

    var eleccionMaquina=Math.floor(Math.random()*3);
    this.texto2="El bot ha elegido: " + this.elecciones[eleccionMaquina];
    if((eleccion=="tijeras" && this.elecciones[eleccionMaquina]=="papel") ||
      (eleccion=="piedra" && this.elecciones[eleccionMaquina]=="tijeras")||
      (eleccion=="papel" && this.elecciones[eleccionMaquina]=="piedra"))
      {
      this.texto3="Enorabuena,      campeon. Ganaste";
    }
    else if((eleccion=="tijeras" && this.elecciones[eleccionMaquina]=="piedra") ||
      (eleccion=="piedra" && this.elecciones[eleccionMaquina]=="papel")||
      (eleccion=="papel" && this.elecciones[eleccionMaquina]=="tijeras"))
      {
      this.texto3="Tristisimo";
    }
    else {
      this.texto3="Empate tontito";
    }
  }
}

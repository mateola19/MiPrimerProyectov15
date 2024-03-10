import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarjetas',
  templateUrl: './lista-tarjetas.component.html',
  styleUrls: ['./lista-tarjetas.component.css']
})
export class ListaTarjetasComponent {

  saludoParaTrunio : string ="Tu madre trunio";
  datosDelHijo:string="";

  listaDePersonajes:Personaje[]=[
    new Personaje("Luke", "/assets/images/papeles.jpg", "No es tu padre", "e"),
  ]

  recibirDatos(datos:string){
    this.datosDelHijo=datos;
  }
}
class Personaje{
  nombre:string;
  imagen:string;
  descripcion:string;
  edad:string;

  constructor(n: string, i : string, d : string, e: string){
      this.nombre=n;
      this.imagen=i;
      this.descripcion=d;
      this.edad=e;
  }
}

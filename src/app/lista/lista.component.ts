import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  listaDePersonajes:Personaje[] = [];
  
  

  personaje1:Personaje = new Personaje("Layton ","assets/Images/593244-2.png"," Luke, tu vida es un puzzle, puto. ", "40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
  imagen1:string="assets/Images/593244-2.png";

  personaje2:Personaje = new Personaje("Danteh", "assets/Images/old-dante-doodles-v0-t664u55rjlka1.jpg", " Tick Tack tick tack tick RIIIIIIIIIIIIIIIIIIIIIIING......      tic", "0.23");
  imagen2:string="assets/Images/old-dante-doodles-v0-t664u55rjlka1.jpg";


  
  
  ngOnInit(): void {
    this.listaDePersonajes=[
      new Personaje("Layton ","assets/Images/593244-2.png"," Luke, tu vida es un puzzle, puto. ", "40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")
      
      
    ]

  }

  

}
class Personaje{
  nombre:string;
  imagen:string;
  descripcion:string;
  edad:string;
  constructor(n:string, i:string, d:string, e:string){
    this.nombre=n;
    this.imagen=i;
    this.descripcion=d;
    this.edad=e;
  }
}

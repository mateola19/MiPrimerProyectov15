import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  valorProgreso:number=0;
  ngOnInit():void{
    this.inicioCarga();
  }

  async inicioCarga(){
    for (let i=0;i<20;i++){
      this.valorProgreso+=5;
      await new Promise(f => setTimeout(f, 1000));
    }
  }
  title = 'MiPrimerProyectov15';
  juegoSeleccionado = "piedra-pal-tijra";
  onChange($event: { value: string; }){
    this.juegoSeleccionado=$event.value;
  }
}

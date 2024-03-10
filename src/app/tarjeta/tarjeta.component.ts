import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() imagen:string | undefined;
  @Input() descripcion:string | undefined;
  @Input() edad:number | undefined;
  @Input() nombre:string | undefined;




}

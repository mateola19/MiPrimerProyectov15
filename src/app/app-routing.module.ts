import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { RouterModule, Routes } from '@angular/router';
import { PiedraPalTijraComponent } from './piedra-pal-tijra/piedra-pal-tijra.component';
import { ListaTarjetasComponent } from './lista-tarjetas/lista-tarjetas.component';

const routes: Routes = [
  {path: 'piedra-pal-tijra', component: PiedraPalTijraComponent},
  {path: 'lista-tarjetas', component: ListaTarjetasComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

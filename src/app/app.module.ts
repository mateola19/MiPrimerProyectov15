import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { ListaComponent } from './lista/lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
//import { PruebaMaterialComponent } from './prueba-material/prueba-material.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PiedraPalTijraComponent } from './piedra-pal-tijra/piedra-pal-tijra.component';
import { ListaTarjetasComponent } from './lista-tarjetas/lista-tarjetas.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AhorcaoComponent } from './ahorcao/ahorcao.component';
//import { ServiciopalabrasPipe } from './serviciopalabras.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    ListaComponent,
    //PruebaMaterialComponent,
    PiedraPalTijraComponent,
    ListaTarjetasComponent,
    TarjetaComponent,
    TicTacToeComponent,
    AhorcaoComponent,
    //ServiciopalabrasPipe
    
  ],
  imports: [
    MatButtonToggleModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

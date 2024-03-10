import { Component, OnInit } from '@angular/core';
import { Palabra } from '../palabra';
import { ServicioPalabrasService } from '../servicio-palabras.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ahorcao',
  templateUrl: './ahorcao.component.html',
  styleUrls: ['./ahorcao.component.css']
})
export class AhorcaoComponent implements OnInit {

  URL_IMAGENES_PRE = "assets/"
  URL_IMAGENES_EXT = ".jpg"

  palabras: Palabra[] = [];

  constructor(
    private _location: Location,
    private router: Router,
    private servicioPalabras: ServicioPalabrasService
  ) {
    for (let letter = 0; letter < 26; letter++) {
      this.abecedario.push(String.fromCharCode(97 + letter));
    }
  }

  juegoEncendido = true;
  palabraoculta: string | undefined;
  mascara: string | undefined;
  abecedario: string[] = [];
  vidas = 3;
  LetrasUsadas = "";
  mensaje = "no";
  vidaImagen = '/assets/Images/Bloodbath_Crop.jpg';

  ngOnInit() {
    this.getPalabras();
  }

  dibujarJuego(elegida: string) {
    this.palabraoculta = elegida;
    let temp = [...elegida];
    for (let i = 0; i < elegida.length; i++) {
      temp[i] = '-';
    }
    this.mascara = temp.join("");
  }

  game(selectedLetter: string) {
    let temp = [...this.mascara];
    let contador = temp.length;
    for (let i = 0; i < temp.length; i++) {
      if (this.palabraoculta!.charAt(i) == selectedLetter) {
        temp[i] = selectedLetter;
        contador--;
      }
    }
    if (contador == temp.length) {
      this.vidas--;
      this.lifes();
    }
    this.mascara = temp.join("");
    this.letrasEmpleadas(selectedLetter);
    if (this.mascara == this.palabraoculta) {
      this.gameOver();
    }
  }

  letrasEmpleadas(selectedLetter: string) {
    let tempusadas = [...this.LetrasUsadas];
    tempusadas[(tempusadas.length)] = selectedLetter + " ";
    this.LetrasUsadas = tempusadas.join("");
  }

  lifes() {
    switch (this.vidas) {
      case 3:
        this.vidaImagen = '/assets/Images/Bloodbath_Crop.jpg' + "ahorcadoInicial" + this.URL_IMAGENES_EXT;
        break;
      case 2:
        this.vidaImagen = '/assets/Images/Bloodbath_Close-up.jpg' + "falloAhorcado1" + this.URL_IMAGENES_EXT;
        break;
      case 1:
        this.vidaImagen = '/assets/Images/Bloodbath_Aftemath.jpg' + "falloAhorcado2" + this.URL_IMAGENES_EXT;
        break;
      case 0:
        this.vidaImagen = '/assets/Images/Bloodbath_3_Hands.jpg' + "AhorcadoCompleto" + this.URL_IMAGENES_EXT;
        this.gameOver();
        break;
    }
  }

  getPalabras() {
    var palabraElegida: string;
    this.servicioPalabras.getPost().subscribe((
      words: string[]): void => {
        let aleatorio = Math.floor(Math.random() * (words.length - 1));
        palabraElegida = words[aleatorio];
        this.dibujarJuego(palabraElegida);
      }
    );
  }

  gameOver() {
    this.juegoEncendido = false;
    if (this.vidas == 0) {
      this.mascara = this.palabraoculta;
      this.mensaje = "Perdiste";
    } else {
      this.mensaje = "Ganaste";
    }
  }

  reload() {
    window.location.reload();
  }

  backClicked() {
    this._location.back();
  }
}

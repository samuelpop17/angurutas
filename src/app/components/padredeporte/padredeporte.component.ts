import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeporte',
  templateUrl: './padredeporte.component.html',
  styleUrls: ['./padredeporte.component.css']
})
export class PadredeporteComponent {

  public mensaje!: string
  public deportes: Array<string>

  constructor() {
    this.deportes = ["Petanca", "Futbol", "Padel", "Tenis", "Surf", "Curling"]
  }

  seleccionarFavoritoPadre(event: any): void {

    console.log(event);

    this.mensaje = "Has seleccionado " + event;

  }
}

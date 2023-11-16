import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  templateUrl: './hijodeporte.component.html',
  styleUrls: ['./hijodeporte.component.css']
})
export class HijodeporteComponent {

  @Input() deporte!: string

  @Output() seleccionarFavoritoPadre: EventEmitter<any> =
    new EventEmitter();

  seleccionarFavoritoHijo(): void {
    this.seleccionarFavoritoPadre.emit( this.deporte );
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent {
  @Input() comic!:Comic;
  @Input() index!:number;



marcarFavorito(): void{

}
deleteComic(): void{
  
}
updateComic(): void{
  
}
}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent{
  @Input() title ='default'
  @Input() description ='default'
  @Input() image ='default'

  @Output() voteEmetteur = new EventEmitter<string>();

  vote(): void{
    this.voteEmetteur.emit(this.title)
  }

}

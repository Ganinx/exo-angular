import { Component } from '@angular/core';
import {ListComponent} from "./list/list.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    ListComponent,
    NgIf
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  favoriteArticle?:string

  voteEmit($event:string):void{
    this.favoriteArticle = $event
  }

}

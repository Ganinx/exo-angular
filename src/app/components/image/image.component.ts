import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule, MatCardHeader, MatCardContent, MatCardImage, MatCardActions, MatButton, MatCard,MatCardTitle,MatCardSubtitle],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {

  pokemon?:string;


  afficherPokemon(pokemon: string) {
    this.pokemon = pokemon
  }



}

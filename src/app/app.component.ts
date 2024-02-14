import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PremierComponentComponent} from "./premier-component/premier-component.component";
import {ArticleComponent} from "./article/article.component";
import {ImageComponent} from "./components/image/image.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PremierComponentComponent, ArticleComponent, ImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exoAngular';
}

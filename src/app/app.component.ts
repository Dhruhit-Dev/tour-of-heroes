import { Hero } from './hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CounterModule } from './counter/components/counter.module';
import { HeroModule } from './heroes/heroes.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    CounterModule,
    HeroModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'My First Angular App';


}

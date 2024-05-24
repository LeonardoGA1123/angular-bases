import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  //standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `Nombre: ${this.name}, Edad: ${this.age}`;
  }

  changeHero(): void{
    this.name = 'Spiderman';
  }

  changeAge(): void{
    this.age = 25;
  }

  reset(): void{
    this.name = 'Ironman';
    this.age = 45;
  }

}

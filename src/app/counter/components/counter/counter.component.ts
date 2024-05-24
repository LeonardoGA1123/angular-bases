import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  //standalone: true,
  template: `
  <h3>
  Counter: {{ counter }}
  </h3>

  <button
  class="btn btn-outline-success mx-1"
  (click)="increaseBy( 1 )" >+1</button>

  <button
  class="btn btn-outline-primary mx-1"
  (click)="resetCounter()" >Reset</button>

  <button
  class="btn btn-outline-danger mx-1"
  (click)="decreaseBy( 1 )" >-1</button>
  `
})
export class CounterComponent{
  public counter: number = 10;

  increaseBy( value: number ): void {
    this.counter += value;
  }

  decreaseBy( value: number ): void{
    this.counter -= value;
  }

  resetCounter(){
    this.counter = 10;
  }
}

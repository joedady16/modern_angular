import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {

  protected title = 'Welcome to modern Angular!';

  protected isDisabled = false;

  protected onClick() : void {
    console.log('Button clicked!');
    this.isDisabled = !this.isDisabled;
  }

  protected count = signal(0);

  protected doubleCount = computed(() : number => this.count() * 2);

  protected increaseCounter() : void {
    this.count.update(value => value + 1);
  }

  decreaseCounter() : void {
    this.count.update(value => value - 1);
  }

  resetCounter() : void {
    this.count.set(0);
  }

}

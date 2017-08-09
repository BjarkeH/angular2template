import {Component} from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: '../templates/test-template.html'
})
export class TestComponent {
  // Properties
  myValue: string = 'Hello Bitchasses';
  show: boolean = false;

  // Methods
  toggleText(): void {
    this.show = !this.show;
  };

  doSomestuff(): void {
    console.log("Lol");
  };
};
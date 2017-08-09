import {Component} from '@angular/core';
import {TestComponent} from './TestComponent/test.component';

@Component({
  selector: 'app-root',
  template: `
  <div><test-component></test-component></div>
  `
})
export class AppComponent {
  pageTitle: string = "My App Template";
  amount: number = 2;

}
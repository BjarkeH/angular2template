import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import {TestComponent} from './app/TestComponent/test.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, TestComponent],
  bootstrap: [AppComponent]
})

export class AppModule {};
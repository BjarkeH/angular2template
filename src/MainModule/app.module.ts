// Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './../SharedModule/shared.module';
// Components
import {HomePageComponent} from './HomepageComponent/homepage.component';


// Services
import {GlobalsService} from './Services/globals.service';

// Specification
@NgModule({
  imports: [BrowserModule, FormsModule, SharedModule],
  declarations: [HomePageComponent],
  bootstrap: [HomePageComponent],
  providers: [GlobalsService]
})

export class AppModule {};
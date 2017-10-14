// Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './../SharedModule/shared.module';
import {WebsiteModule} from './../WebsiteModule/website.module';
import {RouterModule} from '@angular/router';
// Components
import {RootComponent} from './AppRootComponent/approot.component';

// Services
import {GlobalsService} from './Services/globals.service';



// Specification
@NgModule({
  imports: [
    BrowserModule,     
    FormsModule,
    RouterModule,                 
    WebsiteModule,
    SharedModule    
  ],
  declarations: [
    RootComponent    
  ],
  bootstrap: [RootComponent],
  providers: [GlobalsService]
})

export class AppModule {};
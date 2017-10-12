import {Component} from '@angular/core';
import {GlobalsService} from './../Services/globals.service';

@Component({
  selector: 'home-page',
  templateUrl: './templates/homepage.template.html'
})
export class HomePageComponent {
  public pageTitle:string = "";

  public name:string;

  constructor(private globals:GlobalsService){
    this.globals.PageTitle = "My first application";
    this.pageTitle = this.globals.PageTitle;
  }

  public changePageTitle(value:string): void {
    this.pageTitle = this.name;
  }
}
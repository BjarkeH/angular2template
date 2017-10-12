import {Injectable} from '@angular/core';

@Injectable()
export class GlobalsService {
  private domain:string = "";
  
  public getDomain():string {
    return this.domain;
  }
  public setDomain(value:string):void {
    this.domain = value;
  }

  public PageTitle:string = "";
 
}
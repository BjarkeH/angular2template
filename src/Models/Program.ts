export class Program {
  private name: string;
  public getName():string {
    return this.name;
  }
  public setName(name:string):void {
    this.name = name;
  }

  
  constructor(name?:string){
    if(!name){
      this.setName("");
    } else {
      this.setName(name);
    }
  }
  
  

}
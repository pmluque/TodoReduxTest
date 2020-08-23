// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Todo {
  public id: number;
  public text: string;
  public completed: boolean;

  constructor( text: string ) {
    this.text = text;
    this.id = Math.random(); // simular un ID
    this.completed = false;
  }
}

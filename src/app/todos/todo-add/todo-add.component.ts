import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor( private store: Store<AppState> ) {
    this.txtInput = new FormControl('What needs to be done?' , Validators.required );
  }

  ngOnInit(): void {
  }

  edit() {
    if ( this.txtInput.invalid ) {
      return;
    }
    console.log( this.txtInput.value , this.txtInput.valid );
    this.store.dispatch( actions.todoNew({ text: this.txtInput.value }) );
    this.txtInput.reset(); // limpio caja
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  // 205
  completedAll: boolean = false;
  // 207
  chkCompletedAll: FormControl;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
  }

  // 204
  toggleAll() {
    console.log('completedAll:' , this.completedAll);
    this.completedAll = !this.completedAll;
    // 207
    this.store.dispatch( actions.todoToggleAll( { completedAll: this.completedAll }) );
  }

}

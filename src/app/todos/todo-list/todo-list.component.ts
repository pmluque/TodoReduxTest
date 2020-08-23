import { Component, OnInit } from '@angular/core';

// Importar modelo
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer'; // Interfaz
import { filterType } from '../../filters/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // 5.10.3
  todos: Todo[] = [];

  // 216
  currentFilter: filterType;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // Suscripción pero solo a ...
    // this.store.select('todos')
    //    .subscribe( todos => this.todos = todos );
    // 216 comentamos la suscripción anterior, porque no solo queremos los todos sino todo el state.
    /*
    this.store.subscribe( state => {
      // 216
      this.todos = state.todos;
      this.currentFilter = state.filter;
    });
    */
   /* Ahora una nueva versión pero con la desestructuración */
     this.store.subscribe( ({ todos , filter } ) => {
      this.todos         = todos;
      this.currentFilter = filter;
    });
  }

}

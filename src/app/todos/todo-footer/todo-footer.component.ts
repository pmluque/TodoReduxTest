import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
// Primer juego de acciones
import { filterType, setFilter } from '../../filters/filter.actions';
// 217 - Ejemplo , importar otro juego de acciones
import { todoClearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  // 213
  currentFilter: filterType = 'All';
  // 214 - Hacer dinámico el conjunto de opciones filtro
  filters: filterType[] = [ 'All' , 'Completed' , 'Pending'];
  // 215 - control de número de pendinetes
  pendings: number = 0;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    // 213
    // 215 Se comentan las líneas porque ahora necesitamos suscribirnos a dos propiedades
    // this.store.select('filter').subscribe( filter => {
    //  this.currentFilter =  filter;
    // } );
    this.store.subscribe( state => {
      this.currentFilter =  state.filter;
      this.pendings = state.todos.filter( todo => !todo.completed).length;
    }) ;
  }

  // 214 - evento clic sobre filtro
  applyFilter( filter: filterType ) {
    console.log('click on li filter... ' , filter);
    this.store.dispatch( setFilter( { filter }) );
  }

  // 217
  clearCompleted() {
    this.store.dispatch( todoClearCompleted() );
  }
}

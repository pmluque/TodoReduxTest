import { Pipe, PipeTransform } from '@angular/core';
import { filterType } from '../filters/filter.actions';
import { Todo } from './models/todo.model';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filterType): Todo[] {
    switch( filter ) {
      case 'Completed':
        return todos.filter( todo => todo.completed );
      case 'Pending':
        return todos.filter( todo => !todo.completed );
      default:
        return todos;
    }
  }

}

import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filterType } from './filters/filter.actions';
import { filterReducer } from './filters/filter.reducer';

export interface AppState {
  todos: Todo[];
  filter: filterType;
}

// 212 - centralizar todos los reducer
export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
};

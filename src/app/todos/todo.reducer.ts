import { createReducer, on } from '@ngrx/store';
import { todoNew, todoToggle, todoEdit, todoDelete, todoToggleAll, todoClearCompleted } from './todo.actions';
import { Todo } from './models/todo.model';

// export const initialState: Todo[] = [];  // arreglo de todos
export const initialState: Todo[] = [
  new Todo('Salvar al mundo') ,
  new Todo('Quitar impuestos')
];

const _todoReducer = createReducer(initialState,
  on(todoNew, (state, { text } ) => [...state, new Todo(text)] ),

  on(todoToggle, (state, { id } ) => {
    console.log('_todoReducer id:' , id);
    return state.map( todo => {
      if ( todo.id === id ) {
        console.log('_todoReducer todo:' , todo );
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }
     });
    }),

    on(todoEdit, (state, { id , text } ) => {
      console.log('_todoReducer id , text:' , id, text);
      return state.map( todo => {
        if ( todo.id === id ) {
          console.log('_todoReducer todo:' , todo );
          return {
            ...todo,
            text
          }
        } else {
          return todo;
        }
       });
      }),

      // 203 - borrar state
      on(todoDelete, (state, { id  } ) => {
        console.log('_todoReducer id :' , id);
        // 203 - filter es un método de arreglo que devuelve un nuevo objeto sin mutar el existente.
        return state.filter( todo => todo.id !== id );
        }),

      // 206 - acción e implementación de acción
      on(todoToggleAll, (state, { completedAll  } ) => {

        return state.map( todo => {
            return {
              ...todo,
              completed: completedAll
            }
         });

      }),

      // 217 todoClearCompleted | Ir al todo-footer para llamarlo.
      on( todoClearCompleted, (state ) => state.filter( todo => !todo.completed )  ),
);



// Asociar el reducer al module con el Store
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}

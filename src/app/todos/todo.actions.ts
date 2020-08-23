import { createAction , props} from '@ngrx/store';

// Controla la creación de un nuevo todo
export const todoNew = createAction('[TODO] todoNew' , props<{ text: string }>() );

// Controla cuando cambiamos el estado
export const todoToggle = createAction('[TODO] todoToggle' , props<{ id: number }>() );

// Controla cuando editamos; parecido a la creación pero para un id dado. Y su proceso es similar al toogle
export const todoEdit = createAction('[TODO] todoEdit' , props<{ id: number , text: string }>() );

// Controla el borrado
export const todoDelete = createAction('[TODO] todoDelete' , props<{ id: number }>() );

// 206 Controla la selección o deselección total
export const todoToggleAll = createAction('[TODO] todoToggleAll' , props<{ completedAll: boolean }>() );

// 217 Borrar todos los todos completados
export const todoClearCompleted = createAction('[TODO] todoClearCompleted' );

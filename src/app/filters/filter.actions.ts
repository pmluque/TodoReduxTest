// 210 https://ngrx.io/guide/store - referencia
import { createAction, props } from '@ngrx/store';
// Tipo personalizado. Lo exporto para usarlo en otros componentes.
export type filterType = 'All' | 'Completed' | 'Pending';
// Acción fijar filtro , envio filtro en base mis tipos
export const setFilter = createAction('[Filter Component] Set Filter' , props<{ filter: filterType}>()  );

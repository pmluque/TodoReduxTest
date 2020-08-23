// 211
import { createReducer, on } from '@ngrx/store';
import { setFilter , filterType } from './filter.actions';

export const initialState: filterType = 'All';

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state , {filter}) => filter),

);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
// 212 app.module -> registrar el nuevo reducer y actions

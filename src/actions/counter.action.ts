import { createAction, props } from '@ngrx/store';

export const EnterKey = createAction(
  '[Calculator] Enter Key',
  props<{ key: string, keyType: string }>()
)

export const PrintResult = createAction(
  '[Calculator] Result',
  props<{ result: string }>()
)

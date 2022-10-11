import { ActionTypes } from '../action.type';
import { createAction, props } from '@ngrx/store';

export const loginAction = createAction(ActionTypes.LOGIN);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface}>
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE
)

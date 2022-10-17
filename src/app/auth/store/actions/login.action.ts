import { ActionTypes } from '../action.type';
import { createAction, props } from '@ngrx/store';
import { CurrentUserInterface } from '@shared/types/currentUser.interface';
import { LoginRequestInterface } from '../../types/login.interface';
import { RegisterRequestInterface } from '../../types/register.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE);

export const logOutAction = createAction(ActionTypes.LOGIN_OUT);

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
export const registerSuccessAction = createAction(ActionTypes.REGISTER_SUCCESS);

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE);

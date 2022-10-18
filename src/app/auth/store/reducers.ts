import { AuthStateInterface } from '../types/authState.interface';
import * as actions from './actions/login.action';
import { Action, createReducer, on } from '@ngrx/store';

const initialState: AuthStateInterface = {
  currentUser: null,
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    actions.loginAction,
    (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    actions.loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })
  ),
  on(actions.loginFailureAction, (state) => ({
    ...state,
    isSubmitting: false,
  })),
  on(actions.logOutAction, (state) => ({
    ...state,
    currentUser: null,
    isLoggedIn: false,
  })),
  on(actions.registerAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(actions.registerSuccessAction, (state) => ({
    ...state,
    isSubmitting: false,
  })),
  on(actions.registerFailureAction, (state) => ({
    ...state,
    isSubmitting: false,
  }))
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}

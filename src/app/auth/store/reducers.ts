import { AuthStateInterface } from '../types/authState.interface';
import { on } from 'cluster';
import * as actions from './actions/login.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
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
  on(actions.loginFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
  }))
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}

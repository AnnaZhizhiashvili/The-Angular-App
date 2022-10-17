import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';

export const selectFeature = createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  selectFeature,
  (state: AuthStateInterface) => state.isSubmitting
);

export const currentUserSelector = createSelector(
  selectFeature,
  (state: AuthStateInterface) => state.currentUser
);

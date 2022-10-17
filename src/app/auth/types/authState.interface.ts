import { CurrentUserInterface } from '@shared/types/currentUser.interface';

export interface AuthStateInterface {
  currentUser: CurrentUserInterface | null;
  isSubmitting: boolean;
}

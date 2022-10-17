import { CurrentUserInterface } from '@shared/types/currentUser.interface';

export interface LoginRequestInterface {
  email: string;
  password: string;
}

export interface LoginResponseInterface {
  accessToken: string;
  user: CurrentUserInterface;
}

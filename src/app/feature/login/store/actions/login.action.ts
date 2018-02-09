import { Action } from '@ngrx/store';

export const LOGIN = 'Login';
export const LOGIN_SUCCESS = 'Login Success';

export class Login implements Action {
  readonly type = LOGIN;
}
export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: any) { }
}

// action types
export type LoginAction =
  | Login
  | LoginSuccess;

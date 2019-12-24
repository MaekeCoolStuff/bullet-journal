import { createAction, props } from '@ngrx/store';
import { LoginUser } from '../models/login-user';
import { LoginUserSuccess } from '../models/login-user-success';

export const loginUser = createAction(
    '[Login] Login user',
    props<{ user: LoginUser }>());

export const loginUserSuccess = createAction(
    '[Login] Login user success',
    props<{ token: LoginUserSuccess }>());

export const loginUserFailure = createAction(
    '[Login] Login user failure',
    props<{ error: any }>());

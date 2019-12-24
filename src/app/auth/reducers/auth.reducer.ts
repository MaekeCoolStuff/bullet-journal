import * as LoginActions from '../actions/login.actions';
import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../models/user';

export interface State {
    token: string;
    user: User;
}

export const initialState: State = {
    token: '',
    user: null
}

export const authReducer = createReducer(initialState,
    on(LoginActions.loginUserSuccess, (state: State, { user }) => ({
        ...state,
        token: user.token,
        user: {
            id: user.id,
            firstName: user.firstName,
            middleName: user.middleName,
            lastName: user.lastName,
            emailAddress: user.emailAddress
        }
    })));

export function reducer(state: State | undefined, action: Action) {
    return authReducer(state, action);
}

export const selectAuth =
    createFeatureSelector<State>('auth');

export const selectAuthToken =
    createSelector(selectAuth, state => state.token);
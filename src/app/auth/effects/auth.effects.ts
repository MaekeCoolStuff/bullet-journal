import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import * as LoginActions from '../actions/login.actions';
import { AuthService } from '../services/auth.service';
import { LoginUserSuccess } from '../models/login-user-success';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private router: Router, private authService: AuthService) {

    }

    loginUser$ = createEffect(() => this.actions$.pipe(
        ofType(LoginActions.loginUser),
        exhaustMap(action => this.authService.loginUser(action.user).pipe(
            map((user: LoginUserSuccess) => { console.log('token', user); return LoginActions.loginUserSuccess({ user }) }),
            catchError(error => of(LoginActions.loginUserFailure({ error})))
        ))
    ));

    loginUserSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(LoginActions.loginUserSuccess),
        tap(({ user }) => {
            localStorage.setItem('jwt_token', user.token);
            
            this.router.navigate(['dashboard']);
        })
    ), {
        dispatch: false
    });
}
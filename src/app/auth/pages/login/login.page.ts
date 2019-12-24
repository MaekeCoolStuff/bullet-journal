import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/auth.reducer';
import * as LoginActions from '../../actions/login.actions';

@Component({
    selector: 'login-page',
    styleUrls: ['./login.page.scss'],
    templateUrl: './login.page.html'
})
export class LoginPageComponent {
    loginForm = new FormGroup({
        emailAddress: new FormControl(''),
        password: new FormControl('')
    });

    constructor(private store: Store<State>) {

    }

    onSubmit() {
        this.store.dispatch(LoginActions.loginUser( { user: this.loginForm.value }));
    }
}
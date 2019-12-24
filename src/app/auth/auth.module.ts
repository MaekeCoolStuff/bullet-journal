import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoggedInGuard } from './guards/logged-in/logged-in.guard';
import { LoginPageComponent } from './pages/login/login.page';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './reducers/auth.reducer';
import { AuthService } from './services/auth.service';
@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        RouterModule,
        FormsModule,
        StoreModule.forFeature('auth', fromAuth.reducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    providers: [
        LoggedInGuard,
        AuthService
    ],
    exports: [
        LoginPageComponent
    ]
})
export class AuthModule {

}
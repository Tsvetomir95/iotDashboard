import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  // {path: 'signup', component: SignupComponent, data: {animation: 'SignUpPage'}},
  // {path: 'signin', component: LoginComponent, data: {animation: 'SignInPage'} },
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

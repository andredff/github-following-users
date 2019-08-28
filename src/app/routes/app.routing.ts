import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';

const ZUP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ZUP_ROUTES);

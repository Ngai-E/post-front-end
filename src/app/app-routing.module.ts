import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthCanActivateGuard } from './guards/auth-can-activate.guard';
import { dashboardCanLoadGuard } from './guards/dashboard.can-load.guard';
import { NoPermissionComponent } from './pages/no-permission/no-permission.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', canMatch: [AuthCanActivateGuard], loadChildren: () => import('./modules/dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule) },
  { path: 'no-available', component: NoPermissionComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

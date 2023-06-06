import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthCanActivateGuard } from './guards/auth-can-activate.guard';
import { dashboardCanLoadGuard } from './guards/dashboard.can-load.guard';
import { NoPermissionComponent } from './pages/no-permission/no-permission.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', canMatch: [AuthCanActivateGuard], loadChildren: () => import('./modules/dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule) },
  { path: 'no-available', component: NoPermissionComponent},
  {path:'privacy-policy', component: PolicyComponent},
  {path:'terms-of-service', component: TermsOfServiceComponent},
  {path:'terms-of-use', component: TermsOfUseComponent},
  {path:'signup', component: SignupComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

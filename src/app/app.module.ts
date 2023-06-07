import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { ComponentsModule } from './components/components.module';
import { HomeModule } from './pages/home/home.module';
import { RouterModule } from '@angular/router';
import { NoPermissionComponent } from './pages/no-permission/no-permission.component';
import { AuthServiceService } from './services/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PolicyComponent,
    HomeComponent,
    PricingComponent,
    LoginComponent,
    NoPermissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    RouterModule,
    HomeModule,
    NgbModule
  ],
  providers: [AuthServiceService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './components/feature/feature.component';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutInfoComponent } from './components/about/about-info/about-info.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';



@NgModule({
    declarations: [
        FeatureComponent,
        AboutComponent,
        InfoComponent,
        SliderComponent,
        AboutInfoComponent
    ],
  exports: [
    InfoComponent,
    FeatureComponent,
    SliderComponent,
    AboutComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forRoot([
          {path:'signup', component: SignupComponent},
        ]),
    ]
})
export class HomeModule { }

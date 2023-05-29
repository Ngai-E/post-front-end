import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './components/feature/feature.component';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';
import { SliderComponent } from './components/slider/slider.component';



@NgModule({
    declarations: [
        FeatureComponent,
        AboutComponent,
        InfoComponent,
        SliderComponent
    ],
  exports: [
    InfoComponent,
    FeatureComponent,
    SliderComponent,
    AboutComponent
  ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { }

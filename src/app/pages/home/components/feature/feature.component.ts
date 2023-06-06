import { Component, Input } from '@angular/core';
import { IFeature } from '../../model/ifeature';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {
@Input() features: IFeature[]= [];
}

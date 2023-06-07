import { Component, Input } from '@angular/core';
import { IAbout } from '../../../model/ifeature';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.css']
})
export class AboutInfoComponent {
  @Input() aboutInfos: IAbout[] = [];
}

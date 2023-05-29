import { Component, Input } from '@angular/core';
import { IPeople } from '../../model/ifeature';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
@Input() people: IPeople[] = [];
  imageBaseUrl: string = 'assets/img/avatars'
}

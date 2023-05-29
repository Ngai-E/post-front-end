import { Component } from '@angular/core';
import { IFeature, IPeople } from './model/ifeature';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 features: IFeature[];
 people: IPeople[];


  constructor() {
    this.features = [
      {
        "id": 1,
        "icon": "icon-star icon",
        "title": "Bootstrap 5",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo."
      },
      {
        "id": 2,
        "icon": "icon-pencil icon",
        "title": "Customizable",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo."
      },
      {
        "id": 3,
        "icon": "icon-screen-smartphone icon",
        "title": "Responsive",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo."
      },
      {
        "id": 4,
        "icon": "icon-refresh icon",
        "title": "All Browser Compatibility",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo."
      }
    ];
    this.people = [
      {
        "id": 1,
        "name": "John Smith",
        "imageUrl": "avatar1.jpg",
        "role": "Developer",
        "facebookHandle": "@johnsmith",
        "twitterHandle": "@johnsmith",
        "instagramHandle": "@johnsmith"
      },
      {
        "id": 2,
        "name": "Emily Johnson",
        "imageUrl": "avatar2.jpg",
        "role": "Designer",
        "facebookHandle": "@emilyjohnson",
        "twitterHandle": "@emilyjohnson",
        "instagramHandle": "@emilyjohnson"
      },
      {
        "id": 3,
        "name": "Michael Davis",
        "imageUrl": "avatar3.jpg",
        "role": "Manager",
        "facebookHandle": "@michaeldavis",
        "twitterHandle": "@michaeldavis",
        "instagramHandle": "@michaeldavis"
      }
    ];
  }
}

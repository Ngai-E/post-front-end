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
        "title": "Smart content scheduling",
        "description": "Our intelligent algorithms analyze user behavior, trends, and engagement patterns to determine the optimal posting times for your content. Increase your visibility, engagement, and follower growth with strategic scheduling."
      },
      {
        "id": 2,
        "icon": "icon-pencil icon",
        "title": "Cross-platform integration",
        "description": "Seamlessly connect and manage your TikTok, Instagram, Facebook, and other social media accounts from one centralized platform. Save time and effort by scheduling your posts across multiple platforms simultaneously."
      },
      {
        "id": 3,
        "icon": "icon-screen-smartphone icon",
        "title": "Analytics and insights",
        "description": "Gain valuable insights into your social media performance with comprehensive analytics. Track key metrics, monitor audience engagement, and make data-driven decisions to refine your content strategy."
      },
      {
        "id": 4,
        "icon": "icon-refresh icon",
        "title": "Customized recommendations",
        "description": "Receive personalized recommendations based on your specific audience and content niche. Let our platform guide you in selecting the most impactful content and timing for maximum reach and engagement."
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

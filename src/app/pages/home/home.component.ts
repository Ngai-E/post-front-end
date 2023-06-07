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
        "name": "Ngai Elizabeth",
        "imageUrl": "ngai.png",
        "role": "Social media Specialist",
        "facebookHandle": "https://www.facebook.com/NgaiEli",
        "twitterHandle": "https://twitter.com/Ngai_Elizabeth",
        "instagramHandle": "https://www.instagram.com/ngaieli/",
        "tiktokHandler": "https://www.tiktok.com/@ngaielizabeth?lang=en"
      },
      {
        "id": 2,
        "name": "Ndorrh Oswald",
        "imageUrl": "ndorrh.jpg",
        "role": "Developer",
        "facebookHandle": "https://www.facebook.com/ndorrh",
        "twitterHandle": "https://twitter.com/NdorrhEbu",
        "instagramHandle": "https://www.instagram.com/oswald_officiale/",
        "tiktokHandler": "https://www.tiktok.com/@vrkamer?lang=en"
      },
      {
        "id": 3,
        "name": "Apondo Ernest",
        "imageUrl": "Apondo.jpg",
        "role": "Manager",
        "facebookHandle": "@michaeldavis",
        "twitterHandle": "https://twitter.com/ApondoErnest",
        "instagramHandle": "@michaeldavis",
        "tiktokHandler": ""
      }
    ];
  }
}

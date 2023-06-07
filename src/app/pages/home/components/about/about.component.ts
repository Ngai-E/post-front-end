import { Component, Input } from '@angular/core';
import { IAbout, IPeople } from '../../model/ifeature';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() people: IPeople[] = [];
  imageBaseUrl: string = 'assets/img/avatars'

  aboutInfos: IAbout[] = [];

  ngOnInit(): void {
    this.aboutInfos = [
      {
        title: 'Our story',
        description: "Our journey began with a passion for social media and a vision to simplify the lives of content creators and businesses. We understand the challenges of building an online presence, and that's why we developed our platform. Our team combines expertise in technology, marketing, and social media to provide you with a powerful tool that revolutionizes content scheduling."
      },

      {
        title: 'Our mission',
        description: "We are committed to empowering creators and businesses by offering an intuitive and data-driven solution for optimizing their social media presence. Our goal is to help you achieve your online objectives, whether it's growing your audience, increasing brand awareness, or driving conversions."
      }
    ]
  }
}

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.css']
})
export class TermsOfServiceComponent {
  constructor(private title:Title) { }
  ngOnInit() {
    this.title.setTitle("Terms of Service")
 }

}

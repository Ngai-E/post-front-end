import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {
  constructor(private title:Title) { }
  ngOnInit() {
    this.title.setTitle("Privacy Policy")
 }
}

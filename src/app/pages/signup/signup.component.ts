import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, Validator} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  registrationForm = this.formBuilder.group({
    fName: [''],
    lName: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
    termsAndConditions: [false]
  });

  constructor(
    private title:Title,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.title.setTitle("Sign Up")
 }

 onSubmit(): void {
  console.warn('Your order has been submitted', this.registrationForm.value);
  this.registrationForm.reset();
}
}

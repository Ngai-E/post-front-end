import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPassword } from './passwordValidator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loading:boolean = false;
  submitted: boolean = false;
  registrationForm = this.formBuilder.group({
    fName: ['',[Validators.required,]],
    lName: ['', [Validators.required,]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8),]],
    confirmPassword: ['', [matchPassword('password'), Validators.required ]],
    termsAndConditions: [false, [Validators.requiredTrue,]]
  });

  constructor(
    private title: Title,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.title.setTitle("Sign Up")
  }

  onSubmit(): void {  
    this.submitted = true; 
    if (this.registrationForm.valid) {
      this.loading = true;
      delete this.registrationForm.value.confirmPassword
      const formData = this.registrationForm.value
      console.warn('Your order has been submitted', formData);
      this.submitted = false; 

      this.registrationForm.reset();
      this.router.navigate(['/login']);

    } else {
      console.log('Please fill out the form before submitting');
    }
  }

  get fName() { return this.registrationForm.get('fName');  }

  get lName() { return this.registrationForm.get('lName'); }

  get email() { return this.registrationForm.get('email'); }

  get password() { return this.registrationForm.get('password'); }

  get confirmPassword() { return this.registrationForm.get('confirmPassword'); }

  get terms() { return this.registrationForm.get('termsAndConditions'); }

}

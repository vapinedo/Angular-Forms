import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { forbiddenValidator, passwordValidator } from 'src/app/shared/custom-validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {

  registrationForm!: FormGroup;

  // registrationForm = new FormGroup({
  //   userName: new FormControl("Valp"),
  //   password: new FormControl(""),
  //   confirmPassword: new FormControl(""),
  //   address: new FormGroup({
  //     city: new FormControl(""),
  //     state: new FormControl(""),
  //     postalCode: new FormControl(""),
  //   }),
  // });

  constructor(private fb: FormBuilder) {}

  get userName() {return this.registrationForm.get('userName');}
  get email() {return this.registrationForm.get('email');}
  get password() {return this.registrationForm.get('password');}
  get confirmPassword() {return this.registrationForm.get('confirmPassword');}
  get alternateEmails() {return this.registrationForm.get('alternateEmails') as FormArray; }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userName: ['', [
        Validators.required, 
        Validators.minLength(3),
        forbiddenValidator(['admin', 'password'])
      ]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: [''],
      }),
      alternateEmails: this.fb.array([]),
    }, {validators: passwordValidator});

    this.registrationForm.get('subscribe')?.valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email?.setValidators(Validators.required);
        } else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
      });
  }

  loadApiData() {
    // this.registrationForm.setValue({
    //   userName: "Bruce",
    //   password: "test",
    //   confirmPassword: "test",
    //   address: {
    //     city: "City",
    //     state: "State",
    //     postalCode: "123456",
    //   },
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
    });
  }
}

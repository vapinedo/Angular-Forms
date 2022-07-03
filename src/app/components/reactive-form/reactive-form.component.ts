import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenValidator } from 'src/app/shared/username-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
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

  registrationForm = this.fb.group({
    userName: ['', [
      Validators.required, 
      Validators.minLength(3),
      forbiddenValidator(['admin', 'password'])
    ]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: [''],
    }),
  });

  get userName() { return this.registrationForm.get('userName'); }

  ngOnInit(): void {}

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

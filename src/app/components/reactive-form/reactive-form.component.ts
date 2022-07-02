import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
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

  constructor(private _fb: FormBuilder) { }

  registrationForm = this._fb.group({
    userName: ["Valp"],
    password: [""],
    confirmPassword: [""],
    address: this._fb.group({
      city: [""],
      state: [""],
      postalCode: [""],
    })
  });

  ngOnInit(): void {
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
      userName: "Bruce",
      password: "test",
      confirmPassword: "test",
    });
  }

}

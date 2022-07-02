import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  registrationForm = new FormGroup({
    userName: new FormControl("Valp"),
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
  });

  constructor() { }

  ngOnInit(): void {
  }

}

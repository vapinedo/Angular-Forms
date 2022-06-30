import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  topics = ['Angular', 'React', 'Node JS', 'Next JS'];
  userModel = new UserModel('', 'valp@gmail.com', 555987377, '', 'morning', true);

  constructor() { }

  ngOnInit(): void {
  }

}

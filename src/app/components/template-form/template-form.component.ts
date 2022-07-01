import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { EnrollmentService } from 'src/app/services/enrollment.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  
  topics = ['Angular', 'React', 'Node JS', 'Next JS'];
  topicHasError: boolean = true;

  userModel = new UserModel(
    'Valp',
    'valp@gmail.com',
    555987377,
    'default',
    'morning',
    true
  );

  constructor(private _enrollmentSvc: EnrollmentService) {}

  ngOnInit(): void {}

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    console.log(this.userModel);
    this._enrollmentSvc.enroll(this.userModel)
      .subscribe(
        data => console.log('Successs!', data),
        error => console.log('Error', error)
      )
  }
}

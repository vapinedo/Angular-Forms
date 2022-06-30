import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  topics = ['Angular', 'React', 'Node JS', 'Next JS'];

  constructor() { }

  ngOnInit(): void {
  }

}

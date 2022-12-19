import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  constructor(private fb: FormBuilder,
              private router: Router) {}

  addForm = this.fb.group(
    {
      title: ['', Validators.compose([Validators.minLength(3), 
                                          Validators.maxLength(20), 
                                          Validators.required])],
      details: '',
      completeBy: '',
      urgent: false,
    }
  );
 
  get title() {
    return this.addForm.get('title');
  }

  get details() {
    return this.addForm.get('details');
  }

  get completeBy() {
    return this.addForm.get('completeBy');
  }

  get urgent() {
    return this.addForm.get('urgent');
  }

  formTest: any = {
    title: 'title',
    details: 'details',
    completeBy: 'completeBy',
    urgent: 'urgent',
  }

  @Output() sendItemToList = new EventEmitter<any>();


  // new version!
  onSubmit(): void {
    this.sendItemToList.emit(this.addForm.value)
  }
}
import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges{


  constructor(private fb: FormBuilder,
              private router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.addForm.controls['title'].setValue(this.formItem.title);
    this.addForm.controls['details'].setValue(this.formItem.details);
    this.addForm.controls['completeBy'].setValue(this.formItem.completeBy);
    this.addForm.controls['urgent'].setValue(this.formItem.urgent);
  }

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
  @Output() closeForm = new EventEmitter<string>();

  // new version!
  onSubmit(): void {
    this.sendItemToList.emit({value: this.addForm.value, finished: this.isFinishedv2})
    this.onClose();
  }

  onClose():void {
    this.closeForm.emit('form-container-hidden')
  }

  @Input() isFinishedv2 : boolean = false
  @Input() formItem: any; 


}
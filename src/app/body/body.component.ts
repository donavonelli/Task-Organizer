import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormComponent } from '../form/form.component';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {

  title: string = ''
  details: string = ''
  completeBy: string = ''
  urgent: boolean = false

  todoList: any = []
  finishedList: any = []

  addToTodoList(newItem: any): void {
    // const newItem: TodoItem = new TodoItem(
    //   this.todoList.length ,
    //   this.title,
    //   this.details,
    //   this.completeBy, 
    //   this.urgent);
    if(newItem.finished){
      this.finishedList.push(newItem.value)
    } else{
      console.log(newItem);
      this.todoList.push(newItem.value);
    }
  }

  itemToEdit: any;
  editTodoItem(newItem:any): void{
    this.itemToEdit = newItem
    this.openTodoForm();
    this.todoList.splice(this.todoList.indexOf(newItem), 1)
  }

  deleteFromTodoList(item: any): void {
    this.todoList.splice(this.todoList.indexOf(item), 1)
  }

  finishItem(item: any): void{
    this.finishedList.push(item)
    this.todoList.splice(this.todoList.indexOf(item), 1)
  }

  // FINISHED LISTS
  addToFinishedList(newItem: any): void {
      this.finishedList.push(newItem);
  }

  editFinishedItem(newItem:any): void{
    this.itemToEdit = newItem
    this.openFinishedForm();
  }

  deleteFromFinishedList(item: any): void {
    this.finishedList.splice(this.finishedList.indexOf(item), 1)
  }

  unfinishItem(item: any): void{
    this.todoList.push(item)
    this.finishedList.splice(this.finishedList.indexOf(item), 1)

  }

  formStyle: string = '';

  constructor(){
    this.formStyle = 'form-container-hidden'
  }

  openTodoForm() {
    this.isFinishedv2 = false
    this.formStyle = 'form-container-shown'
  }

  openToEdit(){
    this.formStyle = 'form-container-shown'
  }

  openFinishedForm() {
    this.isFinishedv2 = true
    this.formStyle = 'form-container-shown'
  }
  closeForm(){
    this.formStyle = 'form-container-hidden'
  }
  
  isFinishedv2: boolean = false
}

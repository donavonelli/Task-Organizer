import { Component } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  title: string = ''
  details: string = ''
  completeBy: string = ''
  urgent: boolean = false

  list: any = []

  addToList(): void {
    const newItem: TodoItem = new TodoItem(
      this.title,
      this.details,
      this.completeBy, 
      this.urgent);

      console.log(newItem);
      this.list.push(newItem);
  }
}

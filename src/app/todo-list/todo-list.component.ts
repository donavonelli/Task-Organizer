import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  reminder: string = ''

  list: any = []

  addToList(): void {
    this.list.push()
  }
}

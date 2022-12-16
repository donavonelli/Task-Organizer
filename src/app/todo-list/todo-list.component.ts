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
      this.list.length ,
      this.title,
      this.details,
      this.completeBy, 
      this.urgent);

      console.log(newItem.id);
      this.list.push(newItem);
  }

  deleteFromList(item: any): void {
    // for ( let index of this.list){
    //   if (card.id === this.cardNumber)
    //     card.symbol = this.newSymbol;
    // }

    // this.list.splice

    console.log(this.list.indexOf(item))
    this.list.splice(this.list.indexOf(item), 1)
  }
}

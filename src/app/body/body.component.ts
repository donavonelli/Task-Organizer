import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private finishedListv2 = new BehaviorSubject<any>([]);

  finishedListv3 = this.finishedListv2.asObservable();

  finishedList: any = []
  todoList: any =[]

  ngOnInit(): void {
      
  }

  @Output() sendItemToComplete = new EventEmitter<any>();

  addToCompleteList(item: any): void {
    // const newItem: TodoItem = new TodoItem(
    //   this.list.length ,
    //   this.title,
    //   this.details,
    //   this.completeBy, 
    //   this.urgent);

      console.log(item);
      console.log(item);
      this.finishedList.push(item)
      console.log(this.finishedList);
  }
}

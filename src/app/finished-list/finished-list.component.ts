import { Component, Output, EventEmitter, Input, SimpleChanges,OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-finished-list',
  templateUrl: './finished-list.component.html',
  styleUrls: ['./finished-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinishedListComponent implements OnChanges{

  @Input() finishedList: any;


  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }

  title: string = ''
  details: string = ''
  completeBy: string = ''
  urgent: boolean = false

  list: any = []

  addToList(newItem: any): void {
    // const newItem: TodoItem = new TodoItem(
    //   this.list.length ,
    //   this.title,
    //   this.details,
    //   this.completeBy, 
    //   this.urgent);

      console.log(newItem);
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

  @Output() sendItemToComplete = new EventEmitter<any>();

  finishItem(item: any): void{
    this.sendItemToComplete.emit(item)
  }
}

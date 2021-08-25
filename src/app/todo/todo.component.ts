import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

  @Input() value:string="";
  @Input() index:string="";

  editTodo(todo: string): void {
    console.log(`TODO: ${this.value}`);
  }

  deleteTodo(todo : string) : void {

  }
}

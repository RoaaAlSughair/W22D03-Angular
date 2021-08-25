import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: string[] = ['eat', 'study', 'sleep'];
  email: string = '';
  constructor() {}

  ngOnInit(): void {}
  @Input() todo: string = '';

  editTodo(todo: string): void {
    console.log(`TODO: ${todo}`);
  }

  deleteTodo(todo : string) : void {

  }
}

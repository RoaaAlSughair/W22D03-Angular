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

  addTodo(todo: string) : void {
    this.todos.push(todo);
  }
}

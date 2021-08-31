import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgStyle } from '@angular/common';

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

  addTodo(todo: string): void {
    if (todo) this.todos.push(todo);
  }
}

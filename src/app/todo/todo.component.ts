import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() todo: string = '';
  @Input() editedTodo: string = '';
  @Input() index: string = '';
  @Input() notDone: boolean = true;
  @Input() willEdit: boolean = false;

  showEdit(): void {
    this.willEdit = true;
  }

  editTodo(): void {
    if (this.editedTodo) {
      this.todo = this.editedTodo;
      this.willEdit = false;
    }
  }

  deleteTodo(): void {
    this.notDone = false;
  }
}

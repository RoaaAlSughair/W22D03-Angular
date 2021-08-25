import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgStyle } from '@angular/common';

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
  @Input() todos:string[]=[];

  editTodo(todo: string): void {
    this.value = todo;
  }

  deleteTodo(todo : string) : void {
    
  }
}

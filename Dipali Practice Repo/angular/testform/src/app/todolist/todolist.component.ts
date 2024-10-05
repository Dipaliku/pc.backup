import { Component, Input, OnInit } from '@angular/core';
import { itodos } from '../models/todo.interface';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
[x: string]: any;
 @Input() gettodoArray!:Array<itodos>

  constructor() { }

  ngOnInit(): void {
  }

}

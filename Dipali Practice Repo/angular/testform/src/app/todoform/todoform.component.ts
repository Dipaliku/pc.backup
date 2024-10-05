import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { itodos } from '../models/todo.interface';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
  newtodo :string='';
  todos:string[]=[]
ontodoAdd: any;



  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('todoFORM') todoform !:NgForm;
  @Output()
  emmittodos : EventEmitter<itodos>=new EventEmitter<itodos>();
}

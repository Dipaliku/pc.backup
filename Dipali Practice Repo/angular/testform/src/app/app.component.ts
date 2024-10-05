import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { itodos } from './models/todo.interface';
import { getLocaleExtraDayPeriods } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'testform';
  todoARRAY:Array<itodos>=[
    {
      TODOITEM:'javascript'
    }
  ]
gettodos: any;
}

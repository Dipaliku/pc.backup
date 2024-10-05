import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rxjs';
 
  interval$ = interval(1000)
  
  ngOnInit(): void {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(res => {
    //    return res.json()
    //   })
    // .then(data => {
    //   console.log(data);
    // })
    // this.interval$
    // .subscribe(res=>{
    //   console.log(res)
    // })
  }
}

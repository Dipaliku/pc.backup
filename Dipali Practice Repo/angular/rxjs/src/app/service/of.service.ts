import { Injectable } from '@angular/core';
import { filter, map, Observable, observable, tap } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';


@Injectable({
  providedIn: 'root'
})
export class OfService{
  of$ = of(1,2,3,4,5,6)
      .pipe(
        filter((num:number)=>{
          return num%2===0
        })
      )
      skills$=of("html","css","js","angular")
         .pipe(
          tap(skill =>{
            console.log(`before Map ${skill}`);
          }),
          map(skill => {
            return `i love ${skill}`
            }),
            tap(skill => {
              console.log(`after Map ${skill}`)
            })
          
         )

         ourInterval$ = new Observable ((observer)=>{
          let count =0;
          setInterval(() => {
            observer.next(count)
            count++;
            if(count==5){
              observer.complete()
            }
            if(count>12){
              observer.error(`devlis number`)
            }
          },1000)
          })
         
  constructor() { }
}
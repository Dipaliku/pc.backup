import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _router: any;

  constructor(
    private_router:Router
  ) { }

  ngOnInit(): void {
  }
     
  gotoproducts(){
    //api fetch call for products data
    //then redirect to products
    
  }
}

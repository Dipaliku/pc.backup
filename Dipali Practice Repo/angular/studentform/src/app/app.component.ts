import { Component, ViewChild } from '@angular/core';
import { icontactmode, istudentinfo } from './model/student.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'studentform';

  contactModeArr:Array<{moc:string,id:number }>= [
    {
      moc:'email',id:1
    },
    {
      moc:'mobile',id:2
    }
  ]



  studentinfo:istudentinfo={
    studentname: 'prashu',
    email: 'prasu111@gmail.com',
    secrectquestion: 'favbook',
    ans: 'datta',
    gender: 'male',
    modeofcontact: 'mobile'
  }

  @ViewChild('signup') signup!:NgForm;

  onsignup() {
    // if (signup.vaild){
    console.log(this.signup)
    console.log(this.signup.value) 
    // } 
  }
  onedit(){
    this.signup.form.patchValue(this.studentinfo) 
  }

}


  

function onsignup() {
  throw new Error('Function not implemented.');
}

function onedit() {
  throw new Error('Function not implemented.');
}


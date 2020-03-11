import { Component, OnInit } from '@angular/core';
import {DataService, User} from '../service/data/data.service'
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId : String
  password : String
  firstName : String
  lastName : String
  email: String
  phNumber: String
  dataPresent: boolean
  isSubmitClicked: boolean=false
  isServiceDown: boolean=false
  //invalid: boolean=false
  //constructor() { }
  //private router:Router,private hardCodedAuthenticationService: HardcodedAuthenticationService
  constructor(public dataService: DataService,public user:User,public router:Router) { }


  ngOnInit() {
    


  }

  onSubmit(){
     console.log("I am called")
    this.dataService.getUserwithUserId(this.userId).subscribe(res => {
      console.log(res)
      let data = res;
      this.user = data;
      this.userId=data.id;
      this.password=data.password;
      this.firstName=data.firstName;
      this.lastName=data.lastName;
      this.email=data.email;
      this.phNumber=data.phNo;
      this.dataPresent=true
 },err => {
    console.log(err)

});
  }

  onPost(){
    console.log("I am called");
    this.user.id=this.userId;
    this.user.password=this.password;
    this.user.firstName=this.firstName;
    this.user.lastName=this.lastName;
    this.user.email=this.email;
    this.user.phNo=this.phNumber;
   this.dataService.creatUser(this.user).subscribe(res => {
     console.log(res)
     let data = res;
     this.user = data;
     this.userId=data.id;
     this.password=data.password;
     this.firstName=data.firstName;
     this.lastName=data.lastName;
     this.email=data.email;
     this.phNumber=data.phNo;
     this.dataPresent=true;
     this.isSubmitClicked=true
},err => {
   console.log(err)
   this.isServiceDown=true
   

});


 }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string
  password : string
  message : string='Invalid dude '
  invalid: boolean=false

  constructor(private router:Router,private hardCodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin(){
   // console.log(this.username,this.password);
    
  //  if(this.username==='Anirban' && this.password==='gg')
  if(this.hardCodedAuthenticationService.authenticate(this.username,this.password))
  {
     this.router.navigate(['welcome',this.username])
     this.invalid=false
   }
   else{
     this.invalid=true
   }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private dataService:DataService) { }
  username:string
  message: string;

  ngOnInit() {

    this.username=this.route.snapshot.params['name']
  }

  getHelloMessage(){
   this.dataService.getMessage().subscribe(

     response=>this.handleMessage(response),
     error=>this.handleErrorMessage(error)
   );
  }

  getHelloMessagewithPath(){
    this.dataService.getMessagewithPath(this.username).subscribe(
 
      response=>this.handleMessage(response),
      error=>this.handleErrorMessage(error)
    );
   }

   handleMessage(response){
     this.message=response.message;
   }

   handleErrorMessage(error){
     this.message=error.error.message;
   }

}

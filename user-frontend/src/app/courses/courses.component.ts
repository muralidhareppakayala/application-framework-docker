import { Component, OnInit } from '@angular/core';
import { DataService, Course } from '../service/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

   id :String 
	
	 course_name :String
	
	 author_name : String
	
	 category: String 
	
	 description: String
	
   duration: String
   
   courses: Course[];
   



  constructor(public dataService: DataService,public course:Course,public router:Router) { }

  ngOnInit() {
    console.log("I am called")
    this.dataService.getAllCourses().subscribe(res => {
      console.log(res)
      let data = res;
      this.courses=data
      var courseData;
      for (courseData in data){
      this.course=courseData
      this.id=courseData.id;
      this.course_name=courseData.course_name;
      this.author_name=courseData.author_name;
      this.category=courseData.category;
      this.description=courseData.description;
      this.duration=courseData.duration;
      }

 },err => {
    console.log(err)

});
  }

  goToPage(){
    
  }

}

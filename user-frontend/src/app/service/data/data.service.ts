import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

export class HelloMessage{
  constructor(private message:String){

  }
}


@Injectable({
  providedIn: 'root'
})
export class User{
    
  constructor(public id : String,
    public password : String,
    public firstName : String,
    public lastName : String,
    public email: String,
    public phNo: String){

  }

}
@Injectable({
  providedIn: 'root'
})
export class Course{
    
  constructor(public id : String,
    public course_name : String,
    public author_name : String,
    public category: String,
    public description: String,
    public duration: String){

  }

}
@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { 

    
  }

  createHttpHeader(){

  }

  

  creatUser(user:User){
    const ParseHeaders = {
      headers: new HttpHeaders({
       'Content-Type'  : 'application/json'
      })
     };
      return this.http.post<User>('http://localhost:8080/user-service/user',user,ParseHeaders);
    //return this.http.post<User>('http://localhost:8090/user',user,ParseHeaders);
  }
  getUserwithUserId(id){
    return this.http.get<User>(`http://localhost:8080/user-service/user/${id}`);
  }

  getMessage(){
    return this.http.get<HelloMessage>('http://localhost:8080/hello');
  }

  getMessagewithPath(name){
    let basicAuthHeaderString=this.createHttpCredential();
    let header=new HttpHeaders({
      Authorization : basicAuthHeaderString
    });
    //return this.http.get<HelloMessage>(`http://localhost:8080/hello/${name}`,{headers : header});
    return this.http.get<HelloMessage>(`http://localhost:8080/hello/${name}`);
  }
  

  getAllCourses(){
    // return this.http.get<Course[]> (`http://localhost:8092/courses`)
    return this.http.get<Course[]> (`http://localhost:8080/course-service/courses`)
  }

  createHttpCredential(){
    let username='Anirban'
    let password='gg'
    let basicAuthHeaderString='Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}

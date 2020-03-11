import { Component, OnInit } from '@angular/core';

export class Todo{

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
    )
    {

    }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor() { }

  todos=[
    new Todo(1,'learn to Act',true,new Date()),
    new Todo(2,'learn to Listen',false,new Date())
    // {id:1,description : 'learn to Act'},
    // {id:2,description : 'learn to Dance'},
    // {id:3,description : 'learn to Play'},
    // {id:4,description : 'learn to Fuck Sunny Leone'}
    ]

  // todo={
  //   id:1,
  //   description : 'learn to Act'

  // }

  ngOnInit() {
  }

}

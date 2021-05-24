import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks:any=[];
  newTask:string='';
  tomorrow:any=[];
  index=0
  constructor() { }

  ngOnInit(): void {
  }
  getData(event:any){
    this.newTask=event.target.value
  
  }
  addToList(){
    if(this.newTask == ''){
      alert("Enter a task")
    }
      else{
        this.tasks.push(this.newTask)
        console.log(this.tasks)
        this.newTask=""
      }
    }
    moveToTomorrow(i:string){
        this.tomorrow.push(i)
        this.index=this.tasks.indexOf(i)
        this.tasks.splice(this.index,1)
    }
    delete(i:string){
      this.index=this.tasks.indexOf(i)
      this.tasks.splice(this.index,1)
    }
    deletetomorrow(i:string){
      this.index=this.tasks.indexOf(i)
      this.tomorrow.splice(this.index,1)
    }
  }



import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  task = new Task();

  @Output()
  createTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm){
    event.preventDefault();

    form.reset();

  }

}

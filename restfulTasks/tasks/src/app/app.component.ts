import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private taskService: HttpService){
  }

  title = 'tasks';
  tasks = [];

  ngOnInit(): void {
    this.getTasksFromService();
  }
  getTasksFromService() {
    const observable = this.taskService.getTasks();
    observable.subscribe(data => {
      this.tasks = data as any;
  });
  }


}

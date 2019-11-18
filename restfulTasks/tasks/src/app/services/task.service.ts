import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of, Observable} from 'rxjs';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = '/tasks';

  constructor(private http: HttpClient) { }

  getTask(): Observable <Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  createTask(task: Task): Observable <Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  showTask(task: Task): Observable <Task> {
    return this.http.put<Task>(this.baseUrl + '/' + task.id, task);
  }
  deleteTask(task: Task): Observable <Task> {
    return this.http.delete<Task>(this.baseUrl + '/' + task.id);
  }


}

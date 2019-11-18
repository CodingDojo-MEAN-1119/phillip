import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  getTasks() {
    return this.http.get('/tasks');
  }
  getTasksById(id: string) {
    return this.http.get(`/tasks/${id}`);
  }
  updateTask(taskToUpdate,  id= taskToUpdate._id) {
    return this.http.put(`/tasks/${id}`, taskToUpdate);
  }
  createTasks(req) {
    return this.http.post('/tasks', req);
  }
  deleteTask(id: string) {
    return this.http.delete(`/tasks/${id}`);
  }
}

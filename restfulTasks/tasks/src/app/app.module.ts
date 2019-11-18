import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { ListTasksComponent } from './tasks/list-tasks/list-tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    ListTasksComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

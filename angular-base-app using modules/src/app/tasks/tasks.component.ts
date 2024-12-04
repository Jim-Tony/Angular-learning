import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './task.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userName?:string;
  @Input({required:true}) userId!:string;
  isTaskNeedToAdd = false;

  constructor(private taskService:TaskService){}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }
  
  onAddTask() {
    this.isTaskNeedToAdd = true;
  }

  onCloseForm() {
    this.isTaskNeedToAdd = false;
  }
}

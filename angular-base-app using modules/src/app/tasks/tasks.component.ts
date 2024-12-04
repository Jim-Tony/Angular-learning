import { Component, Input } from '@angular/core';

import { TaskService } from './task.service';
@Component({  
  selector: 'app-tasks',
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

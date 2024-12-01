import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { dummyTasks } from './dummy-tasks';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userName?:string;
  @Input({required:true}) id?:string;
  isTaskNeedToAdd = false;
  tasks = dummyTasks;

  onCompleteTask(id:string){
    this.tasks = this.tasks.filter(t=>t.id!==id);
  }
  
  onAddTask() {
    this.isTaskNeedToAdd = true;
  }

  onCloseForm() {
    this.isTaskNeedToAdd = false;
  }
}

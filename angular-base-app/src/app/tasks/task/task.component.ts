import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { taskType } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required:true}) task?:taskType;
  private taskService = inject(TaskService);
  onCompleteClick() {
    this.taskService.onCompleteTask(this.task!.id)
  }
}

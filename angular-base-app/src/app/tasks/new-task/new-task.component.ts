import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskType } from '../task/task.model';
import { TaskService } from '../task.service';
import { identity } from 'rxjs';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() closeForm = new EventEmitter();
  @Input() userId!:string
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private taskService = inject(TaskService);
  onCloseForm() {
    this.closeForm.emit();
  }

  onCreateTask(){
    this.taskService.onAddNewTask({
      title :this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    }, this.userId)
    this.closeForm.emit();
  }
}

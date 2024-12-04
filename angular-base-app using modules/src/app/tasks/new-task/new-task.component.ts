import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-new-task',
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

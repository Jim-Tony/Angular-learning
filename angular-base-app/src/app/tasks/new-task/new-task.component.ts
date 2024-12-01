import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskType } from '../task/task.model';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() closeForm = new EventEmitter();
  @Output() submitForm = new EventEmitter<newTaskType>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseForm() {
    this.closeForm.emit();
  }

  onCreateTask(){
    this.submitForm.emit({
      title : this.enteredTitle,
      summary: this.enteredSummary,
      date:this.enteredDate
    })
  }
}

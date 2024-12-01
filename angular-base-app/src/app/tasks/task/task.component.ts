import { Component, EventEmitter, Input, Output } from '@angular/core';
import { taskType } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required:true}) task?:taskType;
  @Output() complete = new EventEmitter<string>();
  onCompleteClick() {
    this.complete.emit(this.task?.id)
  }
}

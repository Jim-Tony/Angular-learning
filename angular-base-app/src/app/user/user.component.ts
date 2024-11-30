import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Output() select = new EventEmitter();
  @Input() user!:userObjectType;

  get userName() {
    return this.user.name;
  }

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  
  onSelectedUser() {
    this.select.emit(this.user)
  } 

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import {userObjectType} from './user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Will look on directives in a separate section
  @Output() select = new EventEmitter();
  @Input() user!:userObjectType;
  @Input() selected?:boolean;

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

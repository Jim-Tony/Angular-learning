import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import {userObjectType} from './user.model';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgClass],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
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

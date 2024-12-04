import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { userObjectType } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  usersList = DUMMY_USERS;
  selectedUser?:userObjectType;
  onSelectedUserProfile(user:userObjectType){
    // console.log(user);
    this.selectedUser = user;
  }
}

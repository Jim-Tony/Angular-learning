import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { CommonModule } from '@angular/common';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  usersList = DUMMY_USERS;
  userName?:string = '';
  userId?:string = '';
  onSelectedUserProfile(user:any){
    console.log(user);
    this.userName = user.name;
    this.userId = user.id;
  }
}

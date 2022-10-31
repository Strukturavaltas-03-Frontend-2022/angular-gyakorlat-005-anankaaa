import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'The good Angular programmer';

  constructor(private userService: UserService) {}

  userList: User[] = this.userService.list;

  currentUser: User = new User();

  selectUser(user: User): void {
    this.currentUser = user;
  }

  updateUser(user: User): void {
    this.userService.updateUser(user);
  }

  deleteUser(user: User): void {
    this.userService.removeUser(user);
  }
}

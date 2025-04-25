import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.services';
import { Users } from '../../interfaces/users.interface';

@Component({
  selector: 'app-usersshow',
  imports: [JsonPipe],
  templateUrl: './usersshow.component.html',
  styleUrl: './usersshow.component.scss'
})
export class UsersshowComponent {
  usersservice: UsersService = inject(UsersService)
  users: Users[] = []
  title = "Users"
  constructor(){
    this.usersservice.getUsers().subscribe(val =>{
      this.users = val;
  })
  }
}

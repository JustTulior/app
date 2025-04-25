import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { UsersService } from '../../services/users.services';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  imports: [JsonPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: User[] =[];
  private readonly usersService = inject(UsersService);

  ngOnInit() {
    this.usersService.listUser().subscribe((data) =>{
      console.log("Сработала функция")
      console.log(data);
      this.users = data;
    })
  }
}

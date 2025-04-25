import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  http = inject(HttpClient);
  getUsers(){
    return this.http.get<Users[]>("http://localhost:5047/%20%20%20%20Users")
  }
}

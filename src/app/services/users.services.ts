import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Users } from '../interfaces/users.interface';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiURL = "http://localhost:5047/%20%20%20%20Users"

  http = inject(HttpClient);
  getUsers(){
    return this.http.get<Users[]>("http://localhost:5047/%20%20%20%20Users")
  }
  createUser(user: Users) {
    return this.http.post<Users>(`${this.apiURL}`, user)
  }
  deleteUser(user: User){   
    return this.http.delete<Users>(`${this.apiURL}`,{
      params: new HttpParams().set('id', user.id)
    })
  }
}

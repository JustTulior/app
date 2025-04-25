import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shops } from '../interfaces/shops.interface';


@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  http = inject(HttpClient);
  getShops(){
    return this.http.get<Shops[]>("http://localhost:5047/Shops")
  }
}

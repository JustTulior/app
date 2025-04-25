import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ShopsService } from '../../services/shops.services';
import { Shops } from '../../interfaces/shops.interface';

@Component({
  selector: 'app-shopsshow',
  imports: [JsonPipe],
  templateUrl: './shopsshow.component.html',
  styleUrl: './shopsshow.component.scss'
})
export class ShopsshowComponent {
  ShopsService: ShopsService = inject(ShopsService)
  Shops: Shops[] = []
  title = "Shops"
  constructor(){
    this.ShopsService.getShops().subscribe(val =>{
      this.Shops = val;
  })
  }
}

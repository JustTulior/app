import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShopsService } from '../../services/shops.services';


@Component({
  selector: 'app-create-shop',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-shop.component.html',
  styleUrl: './create-shop.component.scss'
})
export class CreateShopComponent implements OnInit{
  shopForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shopservice: ShopsService
  ) {}
  ngOnInit() {
    this.shopForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  onSubmit(){
    if (this.shopForm.valid) {
      this.shopservice.createShop(this.shopForm.value).subscribe(response => {
        console.log("DONE", response);
      }); 
    }
  }
}

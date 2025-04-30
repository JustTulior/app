import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.services';

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent implements OnInit{
  userForm!: FormGroup;


  constructor(
private fb: FormBuilder,
private userservice: UsersService
  ) {}
  ngOnInit() {
    this.userForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
onSubmit(){
  if (this.userForm.valid) {
    this.userservice.createUser(this.userForm.value).subscribe( response =>{
      console.log("DONE", response);
    });
  }
}

}

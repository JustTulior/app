import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.services';

@Component({
  selector: 'app-delete-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.scss'
})
export class DeleteUserComponent implements OnInit{
  userForm!: FormGroup;


  constructor(
private fb: FormBuilder,
private userservice: UsersService
  ) {}
  ngOnInit() {
    this.userForm = this.fb.group({
      id: ['', Validators.required]
    });
  }
onSubmit(){
  if (this.userForm.valid) {
    this.userservice.deleteUser(this.userForm.value).subscribe( response =>{
      console.log("DONE", response);
    });
  }
}

}

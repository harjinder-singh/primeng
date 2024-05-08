import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [CommonModule, CardModule, InputTextModule, FormsModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {
  userForm = this.fb.group({
    firstName: ['', Validators.required], 
    lastName: [''],
    email: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: ['', Validators.required],
      postCode: ['', Validators.required]
    })
  });

  constructor(private fb: FormBuilder) { };

  addUser() {
    console.log(this.userForm.value);
  }

}

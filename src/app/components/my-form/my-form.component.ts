import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

interface Country {
  name: string,
  code: string
}

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {
  countryList: Country[] = [
    {name: 'USA', code: 'US'},
    {name: 'Canada', code: 'CA'},
    {name: 'India', code: 'IN'}
];

  userForm = this.fb.group({
    firstName: ['', Validators.required], 
    lastName: [''],
    email: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: ['', Validators.required],
      country: [null, Validators.required],
      postCode: ['', Validators.required]
    })
  });

  constructor(private fb: FormBuilder) { };

  addUser() {
    console.log(this.userForm.value);
  }

}

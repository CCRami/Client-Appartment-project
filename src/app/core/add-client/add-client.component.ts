import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AbstractControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  userForm!: FormGroup;
  ngOnInit(){
    this.userForm = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(4), forbiddenNameValidator(/bob/i) ]),
      autres: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.minLength(4)]),
        fb: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{8,}?" )])
      })
    });
  }

  get myEmail(){
    return this.userForm.get('autres.email'); 
  }
  add(){
    console.log(this.userForm.value);
  }
}
  
// Validator function
function forbiddenNameValidator(nameRe: RegExp) {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

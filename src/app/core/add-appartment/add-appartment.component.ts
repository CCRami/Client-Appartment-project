import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent {
  myForm! : FormGroup;
  myForm2! : FormGroup;
  constructor(){}
  //initialiser les propriétés du composant, elle ne remplace le constructeur
  ngOnInit(){
  this.myForm = new FormGroup({
    floorNB : new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
    apartmentNB: new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
    surface : new FormControl("", Validators.required),
      terrace : new FormControl("", Validators.required),
      surfaceTerrace : new FormControl("", Validators.required),
      category : new FormControl("", Validators.required),
      description : new FormControl("", [Validators.required, Validators.minLength(10)]),
      residence : new FormControl(),

  })
  this.myForm2= new FormGroup({});
  }
  //getter pour retourner le FormControl floorNb
  get floorNum(){
    return this.myForm.get('floorNB');
  }
  get apartNum(){
    return this.myForm.get('apartmentNB');
  }
  add(){
    console.log(this.myForm.value);
  }
  get surface() { return this.myForm.get('surface'); }
  get surfaceTerrace() { return this.myForm.get('surfaceTerrace'); }
  get terrace() { return this.myForm.get('terrace'); }
  get category() { return this.myForm.get('category'); }
  get description() { return this.myForm.get('description'); }
  get residence() { return this.myForm.get('residence'); }
}
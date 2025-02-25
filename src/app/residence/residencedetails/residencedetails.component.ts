import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/app/core/models/Residence';
import { ResidenceService } from 'src/app/core/services/residence.service';

@Component({
  selector: 'app-residencedetails',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css']
})
export class ResidencedetailsComponent implements OnInit {
  //injecter une instance appelé "ac" du service ActivatedRoute
  constructor(private ac:ActivatedRoute, private rs:ResidenceService){}
  //initialiser les propriétés du composant, elle ne remplace le constructeur
  id : string = '';
  res: Residence = new Residence;
  ngOnInit(){
    //récupérer l'identifiant de la résidence à partir de, methode asynchrone
    //this.ac.paramMap.subscribe(res=>console.log(res.get('id')));
    //récupérer l'identifiant de la résidence à partir de, methode synchrone
    this.ac.paramMap.subscribe(res => this.id = res.get('id') ?? '' );
    
    this.rs.getById(this.id).subscribe(resi=>console.log(resi));
    //console.log(this.res);
    console.log(this.id);
  }
  

}

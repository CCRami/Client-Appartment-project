import { Component } from '@angular/core';
import { Residence } from './residence.model';

@Component({
  selector: 'app-residences',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpeg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpeg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpeg", status: "En Construction" }
  ];

  favoriteResidences: Residence[] = [];  // Liste des résidences favorites
  showAddresses: { [key: number]: boolean } = {};  // Gère l'affichage des adresses
  searchTerm: string = '';  // Filtrage par adresse

  showLocation(id: number, address: string) {
    if (address === "inconnu") {
      alert("L'adresse de cette résidence est inconnue.");
    } else {
      this.showAddresses[id] = !this.showAddresses[id];
    }
  }

  addToFavorites(residence: Residence) {
    if (!this.favoriteResidences.includes(residence)) {
      this.favoriteResidences.push(residence);
    }
  }
  removeFromFavorites(residenceId: number) {
    this.favoriteResidences = this.favoriteResidences.filter(res => res.id !== residenceId);
  }

  filterResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

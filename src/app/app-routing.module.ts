import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/shared/home/home.component';
import { ResidencesComponent } from './residence/residence.component';
import { NotFoundComponent } from './core/shared/not-found/not-found.component';
import { ResidencedetailsComponent } from './residence/residencedetails/residencedetails.component';
import {AppComponent} from "./app.component";
import {AddAppartmentComponent} from "./core/add-appartment/add-appartment.component";
import {AddClientComponent} from "./core/add-client/add-client.component";
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: "residences", component: ResidencesComponent},
  {path: "details/:id", component: ResidencedetailsComponent},
  {path: "addAppartment",component:AddAppartmentComponent},
  {path: "addClient",component:AddClientComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

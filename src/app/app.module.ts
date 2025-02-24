import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residence/residence.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './core/shared/header/header.component';
import { FooterComponent } from './core/shared/footer/footer.component';
import { HomeComponent } from './core/shared/home/home.component';
import { NotFoundComponent } from './core/shared/not-found/not-found.component';
import { ResidencedetailsComponent } from './residence/residencedetails/residencedetails.component';
import { AddAppartmentComponent } from './core/add-appartment/add-appartment.component';
import { AddClientComponent } from './core/add-client/add-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ResidencedetailsComponent,
    AddAppartmentComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

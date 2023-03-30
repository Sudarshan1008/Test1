import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ApartmentComponent } from './Services/apartment/apartment.component';
import { AboutComponent } from './about/about.component';
import { CommercialComponent } from './Services/commercial/commercial.component';
import { ContactComponent } from './contact/contact.component';

import { ResidentialComponent } from './Services/residential/residential.component';
import { VillaComponent } from './Services/villa/villa.component';
import { ConstApartmentComponent } from './Construction/const-apartment/const-apartment.component';
import { ConstCommercialComponent } from './Construction/const-commercial/const-commercial.component';
import { ConstResidentialComponent } from './Construction/const-residential/const-residential.component';
import { ConstVillaComponent } from './Construction/const-villa/const-villa.component';
import { Bhk1Component } from './bhk1/bhk1.component';
import { Bhk2Component } from './bhk2/bhk2.component';
import { Bhk3Component } from './bhk3/bhk3.component';
import { Bhk4Component } from './bhk4/bhk4.component';
import { ModularKitchenComponent } from './modular-kitchen/modular-kitchen.component';
import { LivingRoomComponent } from './living-room/living-room.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ApartmentComponent,
    AboutComponent,
    CommercialComponent,
    ContactComponent,
    ResidentialComponent,
    VillaComponent,
    ConstApartmentComponent,
    ConstCommercialComponent,
    ConstResidentialComponent,
    ConstVillaComponent,
    Bhk1Component,
    Bhk2Component,
    Bhk3Component,
    Bhk4Component,
    ModularKitchenComponent,
    LivingRoomComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

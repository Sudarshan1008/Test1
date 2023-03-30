import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Bhk1Component  } from './bhk1/bhk1.component';
import { Bhk2Component } from './bhk2/bhk2.component';
import { Bhk3Component } from './bhk3/bhk3.component';
import { Bhk4Component } from './bhk4/bhk4.component';
import { ConstApartmentComponent } from './Construction/const-apartment/const-apartment.component';
import { ConstCommercialComponent } from './Construction/const-commercial/const-commercial.component';
import { ConstResidentialComponent } from './Construction/const-residential/const-residential.component';
import { ConstVillaComponent } from './Construction/const-villa/const-villa.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LivingRoomComponent } from './living-room/living-room.component';
import { ModularKitchenComponent } from './modular-kitchen/modular-kitchen.component';
import { ApartmentComponent } from './Services/apartment/apartment.component';
import { CommercialComponent } from './Services/commercial/commercial.component';
import { ResidentialComponent } from './Services/residential/residential.component';
import { VillaComponent } from './Services/villa/villa.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
   {path:'about',component:AboutComponent},
   {path:'contact',component:ContactComponent},
   {path:'apartment',component:ApartmentComponent},
  {path:'commercial',component:CommercialComponent},
  {path:'residential',component:ResidentialComponent},
  {path:'villa',component:VillaComponent},
  {path:'construction_apartment',component:ConstApartmentComponent},
  {path:'construction_residential',component:ConstResidentialComponent},
  {path:'construction_commercial',component:ConstCommercialComponent},
  {path:'construction_villa',component:ConstVillaComponent},
  {path:'modularkitchen',component:ModularKitchenComponent},
  {path:'livingroom',component:LivingRoomComponent},
  {path:'1bhk',component:Bhk1Component},
  {path:'2bhk',component:Bhk2Component},
  {path:'3bhk',component:Bhk3Component},
  {path:'4bhk',component:Bhk4Component}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


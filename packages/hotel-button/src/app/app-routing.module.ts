import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CultureTranslatorComponent } from './culture-translator/culture-translator.component';
import { CarsComponent } from './shared/components/cars/cars.component';
import { FlightComponent } from './shared/components/flight/flight.component';
import { GiftComponent } from './shared/components/gift/gift.component';
import { HotelComponent } from './shared/components/hotel/hotel.component';


const routes: Routes = [
  { path: 'grid', component: GiftComponent },
  { path: 'culture', component: CultureTranslatorComponent },
  { path: '', component: FlightComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'car', component: CarsComponent },
  { path: '**', redirectTo: '/FlightComponent', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftComponent } from './components/gift/gift.component';
import { FlightComponent } from './components/flight/flight.component';
import { CultureModule } from '@orxe-culture/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HotelComponent } from './components/hotel/hotel.component';
import { CarsComponent } from './components/cars/cars.component';

@NgModule({
  declarations: [GiftComponent, FlightComponent, HotelComponent, CarsComponent],
  imports: [
    CommonModule,
    CultureModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

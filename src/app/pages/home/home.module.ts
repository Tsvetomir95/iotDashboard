import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGaugeModule } from 'ngx-gauge';
import { HomeComponent } from './home.component';
import {TopNavMenuComponent} from '../../components/top-nav-menu/top-nav-menu.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/material.module';
import {FormsModule} from '@angular/forms';
import { TemperatureComponent } from 'src/app/components/temperature/temperature.component';
import { CardTemplateComponent } from '../../components/card-template/card-template.component';


@NgModule({
  declarations: [HomeComponent, TopNavMenuComponent, TemperatureComponent, CardTemplateComponent],
  imports: [
    CommonModule,
    NgxGaugeModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    

  ]
})
export class HomeModule { }

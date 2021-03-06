import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeudasComponent } from './deudas/deudas.component';

import { HttpClientModule } from '@angular/common/http';
import { ServiciosService } from '../app/service/servicios.service';
import { FormsModule } from '@angular/forms';
import { DetalleDeudasComponent } from './detalle-deudas/detalle-deudas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeudasComponent,
    DetalleDeudasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServiciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

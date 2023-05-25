import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { IngresoComponent } from './components/forms/ingreso/ingreso.component';
import { DenunciaComponent } from './components/forms/denuncia/denuncia.component';
import { IngresoAdminComponent } from './components/forms/ingreso-admin/ingreso-admin.component';
import { OtrosComponent } from './components/otros/otros.component';
import { PagesComponent } from './components/pages/pages.component';
import { BarraNavegacionComponent } from './components/otros/barra-navegacion/barra-navegacion.component';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    IngresoComponent,
    DenunciaComponent,
    IngresoAdminComponent,
    OtrosComponent,
    PagesComponent,
    BarraNavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

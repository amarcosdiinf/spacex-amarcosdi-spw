import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {AngularFireModule} from '@angular/fire'
import {AngularFireDatabaseModule} from '@angular/fire/database'

import { FormsModule } from '@angular/forms'
import { LeafletModule } from '@asymmetrik/ngx-leaflet'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LanzamientosComponent } from './pages/lanzamientos/lanzamientos.component';
import { TripulacionComponent } from './pages/tripulacion/tripulacion.component';
import { NavesComponent } from './pages/naves/naves.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { DetalleTripulacionComponent } from './pages/detalle-tripulacion/detalle-tripulacion.component';
import { DetalleNaveComponent } from './pages/detalle-nave/detalle-nave.component';
import { DetalleLanzamientoComponent } from './pages/detalle-lanzamiento/detalle-lanzamiento.component';
import { CompanyInfoComponent } from './componentes/company-info/company-info.component';
import { CompanyInfoSummaryComponent } from './componentes/company-info-summary/company-info-summary.component';
import { CompanyInfoSocialComponent } from './componentes/company-info-social/company-info-social.component';
import { SocialCardComponent } from './componentes/social-card/social-card.component';
import { SocialLinkComponent } from './componentes/social-link/social-link.component';
import { environment } from 'src/environments/environment';
import { MisionesComponent } from './pages/misiones/misiones.component';
import { DetalleMisionComponent } from './pages/detalle-mision/detalle-mision.component';
import { AddMisionComponent } from './pages/add-mision/add-mision.component';
import { MisionFormComponent } from './componentes/mision-form/mision-form.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LanzamientosComponent,
    TripulacionComponent,
    NavesComponent,
    NotFoundComponent,
    MenuPrincipalComponent,
    DetalleTripulacionComponent,
    DetalleNaveComponent,
    DetalleLanzamientoComponent,
    CompanyInfoComponent,
    CompanyInfoSummaryComponent,
    CompanyInfoSocialComponent,
    SocialCardComponent,
    SocialLinkComponent,
    MisionesComponent,
    DetalleMisionComponent,
    AddMisionComponent,
    MisionFormComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

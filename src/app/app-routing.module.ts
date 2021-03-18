import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleLanzamientoComponent } from './pages/detalle-lanzamiento/detalle-lanzamiento.component';
import { DetalleMisionComponent } from './pages/detalle-mision/detalle-mision.component';
import { DetalleNaveComponent } from './pages/detalle-nave/detalle-nave.component';
import { DetalleTripulacionComponent } from './pages/detalle-tripulacion/detalle-tripulacion.component';
import { LanzamientosComponent } from './pages/lanzamientos/lanzamientos.component';
import { MisionesComponent } from './pages/misiones/misiones.component';
import { NavesComponent } from './pages/naves/naves.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { TripulacionComponent } from './pages/tripulacion/tripulacion.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'tripulacion', component: TripulacionComponent},
  {path: 'tripulacion/:id', component: DetalleTripulacionComponent},
  {path: 'nave', component: NavesComponent},
  {path: 'nave/:id', component: DetalleNaveComponent},
  {path: 'lanzamiento', component: LanzamientosComponent},
  {path: 'lanzamiento/:id', component: DetalleLanzamientoComponent},
  {path: 'mision', component: MisionesComponent},
  {path: 'mision/:id', component: DetalleMisionComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

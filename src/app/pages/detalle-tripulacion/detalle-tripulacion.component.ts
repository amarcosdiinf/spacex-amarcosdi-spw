import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripulacionService } from 'src/app/services/tripulacion.service';

@Component({
  selector: 'app-detalle-tripulacion',
  templateUrl: './detalle-tripulacion.component.html',
  styleUrls: ['./detalle-tripulacion.component.css']
})
export class DetalleTripulacionComponent implements OnInit {

  idTripulante;
  tripulante;
  constructor(private tripulacionService: TripulacionService,
              private router: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.idTripulante = this.router.snapshot.params["id"];
    this.tripulante = this.tripulacionService.getTripulante(this.idTripulante)
  }

  volver(){
    this.location.back();
  }
}

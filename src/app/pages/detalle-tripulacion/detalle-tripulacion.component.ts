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
    this.router.params.subscribe( param => {
      this.idTripulante = param.id;
    });

    this.tripulante = this.tripulacionService.getTripulante(this.idTripulante)

    this.tripulacionService.getTripulante(this.idTripulante).subscribe( datos =>{
      this.tripulante = datos;
      console.log(this.tripulante.image);
    });

    /*this.httpClient.get(this.tripulante.image, { responseType: 'blob' }).subscribe(datos => {
      this.profile_img = datos;
      console.log(this.profile_img);
    });*/
  }

  volver(){
    this.location.back();
  }
}

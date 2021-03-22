import { Component, OnInit } from '@angular/core';
import { Astronauta } from 'src/app/modelos/astronauta.model';
import { TripulacionService } from 'src/app/services/tripulacion.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-tripulacion',
  templateUrl: './tripulacion.component.html',
  styleUrls: ['./tripulacion.component.css']
})
export class TripulacionComponent implements OnInit {

  tripulacion;
  constructor(private tripulacionService: TripulacionService) { }

  ngOnInit(): void {
    this.tripulacionService.getTripulacion()
      .subscribe(datos => {
        this.tripulacion = datos;
    });
  }

  

}

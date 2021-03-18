import { Component, OnInit } from '@angular/core';
import { TripulacionService } from 'src/app/services/tripulacion.service';

@Component({
  selector: 'app-tripulacion',
  templateUrl: './tripulacion.component.html',
  styleUrls: ['./tripulacion.component.css']
})
export class TripulacionComponent implements OnInit {

  tripulacion;
  constructor(private tripulacionService: TripulacionService) { }

  ngOnInit(): void {
    this.tripulacion = this.tripulacionService.getTripulacion()
      .subscribe(datos => {
        this.tripulacion = datos;
    });
  }

}

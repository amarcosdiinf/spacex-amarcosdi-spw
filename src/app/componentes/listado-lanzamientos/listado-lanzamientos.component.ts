import { Component, OnInit } from '@angular/core';
import { LanzamientosService } from 'src/app/services/lanzamientos.service';

@Component({
  selector: 'app-listado-lanzamientos',
  templateUrl: './listado-lanzamientos.component.html',
  styleUrls: ['./listado-lanzamientos.component.css']
})
export class ListadoLanzamientosComponent implements OnInit {

  lanzamientos;
  constructor(private lanzamientosService: LanzamientosService) { }

  ngOnInit(): void {
    this.lanzamientosService.getLanzamientos()
      .subscribe( datos => {
        this.lanzamientos = datos;

        this.lanzamientos.map(lanzamiento => lanzamiento.date_utc = new Date(lanzamiento.date_utc).toUTCString());
        
        this.lanzamientos.map(lanzamiento => {
          if(lanzamiento.success === null) {
            lanzamiento.success_str = 'Próximamente';
          } else {
            if(lanzamiento.success == true) {
              lanzamiento.success_str = 'Éxito';
            } else {
              lanzamiento.success_str = 'Fracaso';
            }
          }
        });

        this.lanzamientos.sort(lanzamiento => lanzamiento.date_utc).reverse();
    })
  }

}

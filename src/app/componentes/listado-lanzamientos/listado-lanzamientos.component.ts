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
    })
  }

}

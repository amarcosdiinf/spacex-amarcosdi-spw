import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanzamientosService } from 'src/app/services/lanzamientos.service';
import { NavesService } from 'src/app/services/naves.service';

@Component({
  selector: 'app-detalle-lanzamiento',
  templateUrl: './detalle-lanzamiento.component.html',
  styleUrls: ['./detalle-lanzamiento.component.css']
})
export class DetalleLanzamientoComponent implements OnInit {

  lanzamiento;
  idLanzamiento;
  
  nave;

  constructor(private lanzamientoService: LanzamientosService,
              private naveService: NavesService,
              private router: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.router.params.subscribe( param => {
      this.idLanzamiento = param.id;
    });

    this.lanzamientoService.getLanzamiento(this.idLanzamiento)
      .subscribe( datos => {
        this.lanzamiento = datos;

        console.log(this.lanzamiento);

        this.naveService.getNave(this.lanzamiento.rocket).subscribe( datos => {
          this.nave = datos;
        });
    });

    
  }

  volver(){
    this.location.back();
  }
}

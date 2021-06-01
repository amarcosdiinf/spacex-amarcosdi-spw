import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mision } from 'src/app/modelos/mision.model';
import { MisionesService } from 'src/app/services/misiones.service';

@Component({
  selector: 'app-detalle-mision',
  templateUrl: './detalle-mision.component.html',
  styleUrls: ['./detalle-mision.component.css']
})
export class DetalleMisionComponent implements OnInit {

  idMision;
  mision: Mision;
  constructor(private misionService: MisionesService,
              private router: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.router.params.subscribe( param => {
      this.idMision = param.id
    });

    this.misionService.obtenerMision(this.idMision).subscribe(mision => {
        this.mision = mision['data'];
      });
  }

  volver(): void {
    this.location.back();
  }

}

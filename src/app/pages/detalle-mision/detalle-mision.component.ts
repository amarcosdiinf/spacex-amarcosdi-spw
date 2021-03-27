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

    this.misionService.obtenerMisiones()
      .subscribe(mision => {
        let misiones = mision.map(
          
          m => {
            return {
              id: m.payload.doc.id,
              ...m.payload.doc.data()
            };
          }
        )
        
        misiones.forEach(mision => {
          if(mision.id === this.idMision){
            this.mision = mision;
          }
        });

        }
      );
  }

  volver(): void {
    this.location.back();
  }

}

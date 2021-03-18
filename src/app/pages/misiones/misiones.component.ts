import { Component, OnInit } from '@angular/core';
import { Mision } from 'src/app/modelos/mision.model';
import { MisionesService } from 'src/app/services/misiones.service';

@Component({
  selector: 'app-misiones',
  templateUrl: './misiones.component.html',
  styleUrls: ['./misiones.component.css']
})
export class MisionesComponent implements OnInit {

  misiones:Mision[];

  constructor(private misionesService: MisionesService) { }

  ngOnInit(): void {
    this.misionesService.obtenerMisiones()
      .subscribe(mision => {
        this.misiones = mision.map(
          
          m => {
            return {
              id: m.payload.doc.id,
              ...m.payload.doc.data()
            };
          }
        )}
      );
  }

}

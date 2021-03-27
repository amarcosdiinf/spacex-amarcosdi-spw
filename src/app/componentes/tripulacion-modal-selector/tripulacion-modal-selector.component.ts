import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TripulacionService } from 'src/app/services/tripulacion.service';

@Component({
  selector: 'app-tripulacion-modal-selector',
  templateUrl: './tripulacion-modal-selector.component.html',
  styleUrls: ['./tripulacion-modal-selector.component.css']
})
export class TripulacionModalSelectorComponent implements OnInit {

  @Output() tripulacionSelected = new EventEmitter();

  tripulacion;

  tripulacionSelect: any[] = [];
  constructor(private tripulacionService: TripulacionService) { }

  ngOnInit(): void {
    this.tripulacionService.getTripulacion().subscribe( datos => {
      datos.map(dato => {
        dato.selected = false;
      });

      this.tripulacion = datos;
    });
  }

  emitirTripulacionSelected() {
    this.tripulacionSelected.emit(this.tripulacionSelect);
  }

  addTripulante(tripulanteId: string) {
    let index = this.tripulacion.findIndex(tripulante => tripulante.id === tripulanteId);

    this.tripulacion[index].selected = true;

    let selectedTripulante = this.tripulacion[index]
    this.tripulacionSelect.push(selectedTripulante);
  }

  dropTripulante(tripulanteId: string) {
    let index = this.tripulacion.findIndex(tripulante => tripulante.id === tripulanteId);
    this.tripulacion[index].selected = false;

    let i = this.tripulacionSelect.findIndex(tripulante => tripulante.id === tripulanteId);
    this.tripulacionSelect.splice(i);
  }

}

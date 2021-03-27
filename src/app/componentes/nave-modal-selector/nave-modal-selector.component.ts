import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavesService } from 'src/app/services/naves.service';

@Component({
  selector: 'app-nave-modal-selector',
  templateUrl: './nave-modal-selector.component.html',
  styleUrls: ['./nave-modal-selector.component.css']
})
export class NaveModalSelectorComponent implements OnInit {

  @Output() naveSelected = new EventEmitter(); 

  naves;
  constructor(private navesService: NavesService) { }

  ngOnInit(): void {
    this.navesService.getNaves().subscribe( datos => {
      this.naves = datos;
    });
  }

  emitirNaveSelected(naveId: string) {
    let selectedNave = this.naves.find(nave => nave.id === naveId);

    this.naveSelected.emit(selectedNave);
  }

}

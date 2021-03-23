import { Component, OnInit } from '@angular/core';
import { LanzamientosService } from 'src/app/services/lanzamientos.service';

@Component({
  selector: 'app-proximo-lanzamiento',
  templateUrl: './proximo-lanzamiento.component.html',
  styleUrls: ['./proximo-lanzamiento.component.css']
})
export class ProximoLanzamientoComponent implements OnInit {

  nextLanzamiento;
  constructor(private lanzamientosService: LanzamientosService) { }

  ngOnInit(): void {
    this.lanzamientosService.getUpcomingLanzamiento().subscribe( datos => {
      this.nextLanzamiento = datos;
    })
  }

  getNextLanzamiento(){
    return this.nextLanzamiento;
  }

}

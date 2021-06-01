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
          .subscribe(datos => {
            console.log(datos)
            console.log("\n\n")
            this.misiones = datos['data'];
        });
  }

  deleteMision(id: string) {
    console.log(id);

    let index = this.misiones.findIndex(mision => mision._id === id);

    this.misionesService.deleteMision(id).subscribe(
      mision => console.log(mision)
    );

    this.misiones.splice(index);
  }
}

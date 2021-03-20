import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nave } from 'src/app/modelos/nave.model';
import { NavesService } from 'src/app/services/naves.service';

@Component({
  selector: 'app-detalle-nave',
  templateUrl: './detalle-nave.component.html',
  styleUrls: ['./detalle-nave.component.css']
})
export class DetalleNaveComponent implements OnInit {

  idNave;
  nave;

  constructor(private naveService: NavesService,
              private router: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.router.params.subscribe( param => {
      this.idNave = param.id;
    });

    this.naveService.getNave(this.idNave).subscribe( datos =>{
      this.nave = datos;
      console.log(this.nave);
    });
  }

  volver(){
    this.location.back();
  }

}

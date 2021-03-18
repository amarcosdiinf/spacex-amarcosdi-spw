import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  ngOnInit(): void {
    this.idNave = this.router.params['legacy_id'];
    this.nave = this.naveService.getNave(this.idNave);
  }

  volver(){
    this.location.back();
  }

}

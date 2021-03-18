import { Component, OnInit } from '@angular/core';
import { NavesService } from 'src/app/services/naves.service';
import { Nave } from 'src/app/modelos/nave.model';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  naves;

  constructor(private navesService: NavesService) { }

  ngOnInit(): void {
    this.naves = this.navesService.getNaves();
  }

}

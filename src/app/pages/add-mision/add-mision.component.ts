import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AstronautaShort } from 'src/app/modelos/astronauta-short.model';
import { Astronauta } from 'src/app/modelos/astronauta.model';
import { Mision } from 'src/app/modelos/mision.model';
import { NaveShort } from 'src/app/modelos/nave-short.model';
import { Nave } from 'src/app/modelos/nave.model';
import { MisionesService } from 'src/app/services/misiones.service';

@Component({
  selector: 'app-add-mision',
  templateUrl: './add-mision.component.html',
  styleUrls: ['./add-mision.component.css']
})
export class AddMisionComponent implements OnInit {

  misionForm: FormGroup;

  nave: Nave;
  tripulacion: Astronauta[];
  constructor(private fb: FormBuilder,
              private misionesService: MisionesService,
              private location: Location) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.misionForm = this.fb.group({
      'titulo':['', [Validators.required, Validators.minLength(5)]],
      'descripcion':['', [Validators.required, Validators.minLength(5)]],
      'fecha_ini':['', [Validators.required]],
      'fecha_fin':['', [Validators.required]]
    });
  }

  guardar(){
    if (this.misionForm.invalid) {
      console.log("Formulario no válido.");
      Object.values( this.misionForm.controls ).forEach( control=> {
        control.markAllAsTouched();
      })

      this.location.back();
    }

    let formValues = this.misionForm.value;

    let newMision: Mision = new Mision();
    newMision.titulo = formValues.titulo;
    newMision.descripcion = formValues.descripcion;
    newMision.fecha_ini = formValues.fecha_ini;
    newMision.fecha_fin = formValues.fecha_fin;

    let selectedNave: NaveShort = new NaveShort();
    selectedNave.id = this.nave.id;
    selectedNave.name = this.nave.name;
    selectedNave.flickr_images = this.nave.flickr_images;

    newMision.nave = selectedNave;

    
    let selectedTripulacion: any[] = [ ];
    this.tripulacion.forEach(tripulante => {
      let selectedTripulante: AstronautaShort = new AstronautaShort();
      selectedTripulante.id = tripulante.id;
      selectedTripulante.name = tripulante.name;
      selectedTripulante.image = tripulante.image;

      selectedTripulacion.push(selectedTripulante);
    });

    newMision.tripulacion = selectedTripulacion;

    console.log("Estoy insertando");

    this.misionesService.addMision(newMision);
  }

  get tituloNoValido(){
    return this.misionForm.get('titulo').invalid && this.misionForm.get('titulo').touched
  }

  get descripcionNoValida(){
    return this.misionForm.get('descripcion').invalid && this.misionForm.get('descripcion').touched
  }
  
  // fecha fin < fecha ini
  get fechaIniMayorFechaFin(){
    // No he conseguido que funcione esta función.

    let formValues = this.misionForm.value;

    let fecha_ini = formValues.fecha_ini;
    let fecha_fin = formValues.fecha_fin;

    if ((fecha_ini > fecha_fin) && this.misionForm.get('descripcion').touched){
      return null;
    } else {
      return "error";
    }
  }



  setNave(nave) {
    this.nave = nave;
  }

  setTripulacion(tripulacion) {
    this.tripulacion = tripulacion;
  }
}

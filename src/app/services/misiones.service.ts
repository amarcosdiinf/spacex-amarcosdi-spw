import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'

import {AngularFirestore} from '@angular/fire/firestore'

import { Mision } from 'src/app/modelos/mision.model';

@Injectable({
  providedIn: 'root'
})
export class MisionesService {

  constructor(private firestore: AngularFirestore) { }

  obtenerMisiones(): Observable<any[]>{
    return this.firestore.collection('misiones').snapshotChanges();
  }

  deleteMision(mision: Mision){
    this.firestore.collection('mision').doc(mision.id).delete();
  }


  /*
  anadirTarea(tarea: Tarea){
    let nuevaTarea = Object.assign( {}, {'nombre': tarea, 'completada': false});
    return this.firestore.collection('tareas').add(nuevaTarea);
  }

  modificarTarea(tarea:Tarea){
    this.firestore.collection('tareas')
          .doc(tarea.id)
          .set({completada: !tarea.completada }, { merge: true});
  }
  
  */
}

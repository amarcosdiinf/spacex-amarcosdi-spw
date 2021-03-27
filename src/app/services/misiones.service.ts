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

  obtenerMision(id: string): Observable<any> {
    return this.firestore.collection('misiones').doc(id).snapshotChanges();
  }

  addMision(mision: Mision) {

    let newNave = Object.assign({}, mision.nave);

    let newMision = Object.assign({}, mision);
    newMision.nave = newNave;


    let newTripulacion = new Array();
    (mision.tripulacion).forEach(tripulante => {
      newTripulacion.push(Object.assign({}, tripulante));
    });
    
    newMision.tripulacion = newTripulacion;

    console.log(newMision);

    this.firestore.collection('misiones').add(newMision);
    console.log("C incertó");
  }

  updateMision(mision: Mision) {
    this.firestore.collection('misiones')
           .doc(mision.id)
           .set(mision, {merge: true});
  }

  deleteMision(misionId){
    this.firestore.collection('misiones').doc(misionId).delete();
  }
}

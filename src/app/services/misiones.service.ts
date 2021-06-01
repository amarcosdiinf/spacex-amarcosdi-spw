import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'

import { HttpClient } from '@angular/common/http';

import { Mision } from 'src/app/modelos/mision.model';


@Injectable({
  providedIn: 'root'
})
export class MisionesService {

  url = "https://spacex-amarcosdi.vercel.app/api/misiones"

  constructor(private httpClient: HttpClient) { }

  obtenerMisiones(): Observable<any>{
    // return this.firestore.collection('misiones').snapshotChanges();
    return this.httpClient.get(this.url);
  }

  obtenerMision(id: string): Observable<any> {
    //return this.firestore.collection('misiones').doc(id).snapshotChanges();
    return this.httpClient.get(this.url + '/' + id)
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
    console.log(this.url);

    console.log(JSON.stringify(newMision))
    //this.firestore.collection('misiones').add(newMision);
    return this.httpClient.post(this.url, newMision);
  }

  updateMision(mision: Mision) {
    /*this.firestore.collection('misiones')
           .doc(mision.id)
           .set(mision, {merge: true});*/

    return this.httpClient.put(this.url + '/' + mision.id, mision)
  }

  deleteMision(misionId){
    console.log(this.url + '/' + misionId);
    //this.firestore.collection('misiones').doc(misionId).delete();
    return this.httpClient.delete(this.url + '/' + misionId);
  }
}

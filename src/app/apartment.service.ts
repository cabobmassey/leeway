import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Apartment } from './models/apartment';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  apartmentCollection: AngularFirestoreCollection<Apartment>;
  apartments: Observable<Apartment[]>;
  apartmentDoc: AngularFirestoreDocument<Apartment>;

  constructor(public db: AngularFirestore) {
    this.apartments = this.db.collection('apartments').valueChanges();
  }

  getApartments() {
    this.apartments = this.db.collection('apartments').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Apartment;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
    return this.apartments;
  }

  getApartmentById(id: string) {
    return this.apartmentDoc = this.db.doc('apartments/' + id);
  }

}

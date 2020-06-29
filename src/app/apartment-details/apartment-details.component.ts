import { Component, OnInit } from '@angular/core';
import { Apartment } from '../models/apartment';
import { ApartmentService } from '../apartment.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {

  chosenApartment: Apartment;
  apartmentDoc: AngularFirestoreDocument<Apartment>;
  myApartment: Apartment;

  constructor(private apartmentService: ApartmentService) {
    this.apartmentDoc = this.apartmentService.getApartmentById(window.localStorage.getItem('apartmentId'));
    this.apartmentDoc.ref.get().then(apt => {
      this.myApartment = apt.data();
    })
  }

  ngOnInit() {
  }
}

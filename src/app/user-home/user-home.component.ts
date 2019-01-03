import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { Router } from '@angular/router';
import { ApartmentService } from '../apartment.service';
import { Apartment } from '../models/apartment';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  apartments: Apartment[];
  aptId: number;

  constructor(private apartmentService: ApartmentService, private router: Router) {
  }

  ngOnInit() {
    this.apartmentService.getApartments().subscribe(apartments => {
      this.apartments = apartments;
    })
  }

  goToDetails(apartmentId) {
    window.localStorage.setItem('apartmentId', apartmentId);
    this.router.navigate(['apartment-details']);
  }

}

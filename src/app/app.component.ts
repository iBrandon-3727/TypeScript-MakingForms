import { Component, OnInit } from '@angular/core';

import { PlacesService } from './services/places.service';
import { Places } from './models/places';
import { PlaceFormComponent } from './place-form/place-form.component';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })

    export class AppComponent implements OnInit {
      places: Places[];
      dataService: PlacesService;

      constructor(private placesService: PlacesService) {
        this.dataService = this.placesService;
      }

      ngOnInit(): void {
        this.dataService.getplaces().subscribe(places => this.places = places);
      }

    }
import { Component, OnInit } from '@angular/core';

import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  map: Map;
  mapOptions: MapOptions;

  constructor() { }

  ngOnInit() {
    this.initializeMapOptions();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(33.934245, -118.331681),
      zoom: 12,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }

  private addSampleMarker() {
    const marker = new Marker([33.934245, -118.331681])
      .setIcon(
        icon({
          iconSize: [41, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/images/marker-icon.png'
        }));
    marker.addTo(this.map);
  }

}

import { Component, Inject, Input } from '@angular/core';

//import { latLng, LatLng, Marker, tileLayer } from 'leaflet';

import { Event} from 'src/app/models/event.model';
import { EventService } from '../services/event.service';
//import { Map, latLng, Layer } from 'leaflet';
import 'leaflet.markercluster';
import * as L from 'leaflet';

// Importez MarkerClusterGroup depuis le plugin Leaflet.markercluster
import 'leaflet.markercluster/dist/leaflet.markercluster';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent  {
  //@Input() event: Event | undefined;
  

  markers: L.Layer[] = [];
  map: L.Map | undefined;
  events: Event[] = [];
  homeCoords = {
    lat: 33.8869,
    lon: 9.5375
  };

  options: any = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 5,
    center: L.latLng(this.homeCoords.lat, this.homeCoords.lon)
  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: { event: Event },private eventService: EventService) {
    console.log('Event data:', this.data); // Vérifier les données de l'événement
  }
  //constructor(private eventService: EventService) {}

  ngOnInit(): void {
    
    this.initMap();
    this.refreshData();
  }

  initMap(): void {
  
    
    this.map = L.map('map').setView([this.homeCoords.lat, this.homeCoords.lon], 5);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: ''
    }).addTo(this.map);
  }


  addMarker(event: Event): void {
    const popupInfo = `<b style="color: red; background-color: white">${event.titre} ${event.duration} </b>`;

    const markerIcon = L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
    });

    const marker = L.marker([event.latitude, event.longitude], { icon: markerIcon }).bindPopup(popupInfo);
    this.markers.push(marker);
    if (this.map) {
      marker.addTo(this.map);
    }
  }
  

  refreshData(): void {
    this.eventService.getAllEvents().subscribe({
      next: (data) => {
        this.events = data;
        this.clearMarkers(); // Effacez d'abord tous les marqueurs existants
        this.events.forEach(e => {
          this.addMarker(e); // Ajoutez le marqueur pour chaque événement
        });
      },
      error: (err) => {
        console.error('Error fetching event:', err);
      }
    });
  }

  clearMarkers(): void {
    // Supprimer tous les marqueurs de la carte
    this.markers.forEach(marker => {
      this.map?.removeLayer(marker);
    });
    // Vider la liste des marqueurs
    this.markers = [];
  }

  centerMap(event: Event): void {
    if (this.map) {
      this.map.setView([event.latitude, event.longitude], 13);
    } else {
      console.error('Map not initialized yet.');
    }
  }

  onMapReady(map: L.Map) {
    this.map = map;
  }
openMapDialog(event: Event): void {
  // Vérifiez si la carte est définie avant d'ajouter le marqueur
  if (this.map) {
    // Effacer tous les marqueurs existants
    this.clearMarkers();

    // Ajouter un marqueur pour l'événement spécifique
    const markerIcon = L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
    });
    const popupInfo = `<b style="color: red; background-color: white">${event.titre} ${event.duration} </b>`;
    const marker = L.marker([event.latitude, event.longitude], { icon: markerIcon }).bindPopup(popupInfo);
    marker.addTo(this.map);
    this.markers.push(marker);

    // Centrer la carte sur la localisation de l'événement
    this.map.setView([event.latitude, event.longitude], 13);
  } else {
    console.error('Map is not initialized yet.');
  }
}
}
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { ParticipationService } from 'src/app/services/participation.service';
import { Participation } from 'src/app/models/participation.model';
import { MatDialog } from '@angular/material/dialog';
import $ from 'jquery';
import { Event} from 'src/app/models/event.model';
import { MailStructure } from 'src/app/models/mailStructure.model';
import { ParticipationFormDialogComponent } from '../participation-form-dialog/participation-form-dialog.component';
import { Observable, catchError, tap, throwError } from 'rxjs';
import * as L from "leaflet";
import { latLng, LatLng, Marker, tileLayer } from 'leaflet';
import { icon, Layer, marker } from 'leaflet';
import { MapDialogComponent } from 'src/app/map-dialog/map-dialog.component';
import { HttpClient } from '@angular/common/http';
import { MailSenderServiceService } from 'src/app/mail-sender-service.service';
import QRCode from 'qrcode'
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRCodeService } from 'src/app/qrcode.service';
@Component({
  selector: 'app-eventgroupe-management',
  templateUrl: './eventgroupe-management.component.html',
  styleUrls: ['./eventgroupe-management.component.css']
})
export class EventgroupeManagementComponent implements OnInit {
  yourEventObject: Event | undefined;
events:Event[]=[];
userId: number = 1; 
recipientEmail: string = ''; 
// Variable pour contrôler l'affichage du formulaire
selectedEventId: number = 0; // Variable pour stocker l'ID de l'événement sélectionné
showParticipationForm: boolean = false; // Ajoutez cette ligne
joinedEventIds: number[] = []; // 
showFullDescriptionMap: { [eventId: number]: boolean } = {};
mail: string = '';

  // Déclarez la propriété participationData
  participationData: any = {
    injury: '',
    emergencyNumber: ''
  };
constructor(
  private eventService: EventService,

  private participationService :ParticipationService,
  private router: Router,
  private sanitizer: DomSanitizer,
  private dialog: MatDialog,
  private http: HttpClient,
  private mailSenderServiceService:MailSenderServiceService,
  private qRCodeService:QRCodeService
 
) {}


ngOnInit(): void {
  
  //this.refreshData();
  this.eventService.getAllEvents().subscribe({
    next: (data) => {
      this.events = data;
      
      // Une fois que les événements sont récupérés, vérifiez les participations de l'utilisateur
      this.checkUserParticipations();
    },
    error: (err) => {
      console.error('Error fetching event:', err);
    }
  });
}checkUserParticipations(): void {
  this.participationService.getParticipationsByUser(this.userId).subscribe({
    next: (data: Participation[]) => {
      this.joinedEventIds = data.map(participation => participation.event?.id) || [];
      // Assurez-vous que joinedEventIds est correctement initialisé avec les ID des événements auxquels l'utilisateur a participé
    },
    error: (err) => {
      console.error('Error fetching participated event IDs:', err);
    }
  });
}
openMapDialog(event: Event): void {
  
  const dialogRef = this.dialog.open(MapDialogComponent, {
    width: '80vw',
    height: '80vh',
    data: { event } 
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // Handle any actions after the dialog is closed
  });
}

hasJoinedEvent(eventId: number): boolean {
  return this.joinedEventIds.includes(eventId);
}
// Autres méthodes...


getImageUrl(filename: string): string {
  return `http://localhost:8082/files/get-image/${filename}`;
}
joinEvent(eventId: number): void {
  this.selectedEventId = eventId;
  const dialogRef = this.dialog.open(ParticipationFormDialogComponent, {
    width: '400px',
    data: { eventId: eventId }
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log('The dialog was closed');
    if (result) {
      const selectedEvent = this.events.find(event => event.id === this.selectedEventId);
      if (selectedEvent) {
        this.createParticipation(result, selectedEvent);
      } else {
        console.error('Selected event not found.');
      }
    }
  });
} /*createParticipation(participationData: Participation, selectedEvent: Event): void {
  participationData.registrationDate = new Date();
  this.participationService.createParticipation(participationData, this.userId, selectedEvent.id).subscribe(
    (response: any) => {
      console.log('Participation created successfully!', response);
      // Après la création de la participation, mettez à jour le nombre maximal de participants de l'événement
      selectedEvent.maxParticiaption--; // Diminuer maxParticipation de 1
      this.eventService.updateMaxParticipation(selectedEvent.id, selectedEvent.maxParticiaption)
        .subscribe(
          () => {
            console.log('Max participation updated successfully for event:', selectedEvent.id);
          },
          (error: any) => {
            console.error('Error updating max participation for event:', selectedEvent.id, error);
          }
        );
    },
    (error: any) => {
      console.error('Error creating participation:', error);
    }
  );
}*/createParticipation(participationData: Participation, selectedEvent: Event): void {
  participationData.registrationDate = new Date();
  const qrData = `${participationData.injury}, ${participationData.emergencyNumber}`;

  // Création de la participation
  this.participationService.createParticipation(participationData, this.userId, selectedEvent.id).subscribe(
    (response: any) => {
      console.log('Participation created successfully!', response);

      // Mettre à jour le nombre maximal de participants de l'événement
      selectedEvent.maxParticiaption--; // Diminuer maxParticipation de 1
      this.eventService.updateMaxParticipation(selectedEvent.id, selectedEvent.maxParticiaption).subscribe(
        () => {
          console.log('Max participation updated successfully for event:', selectedEvent.id);
        },
        (error: any) => {
          console.error('Error updating max participation for event:', selectedEvent.id, error);
        }
      );

      // Structure de l'e-mail avec le message et le code QR
      const mailStructure: MailStructure = {
        subject: 'Nouvelle participation à un événement',
        message: `Une nouvelle participation a été enregistrée pour l'événement ${selectedEvent.titre}. Scannez le code QR ci-dessous pour participer.`,
        qrCodeData: qrData
      };

      // Adresse e-mail du destinataire
      const recipientEmail: string = 'nourlass50@gmail.com';

      // Envoi de l'e-mail en utilisant le service MailSenderService
      this.mailSenderServiceService.sendMail(recipientEmail, mailStructure).subscribe(
        () => {
          console.log('E-mail sent successfully');
          // Autres logiques après l'envoi de l'e-mail
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
    },
    (error) => {
      console.error('Error creating participation:', error);
    }
  );
}
toggleDescription(event: Event): void {
  if (event && event.id) {
    if (this.showFullDescriptionMap[event.id]) {
      this.showFullDescriptionMap[event.id] = false;
    } else {
      this.showFullDescriptionMap[event.id] = true;
    }
  } else {
    console.error('Event or event ID is undefined.');
  }
}

markers:Layer[]=[];
  interval: any;
  map:any;
  homeCoords = {
    lat: 33.8869,
    lon: 9.5375
  };
  popupText = "Some popup text";
  markerGroup:any;
  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
    })
  };

  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 5,
    center: L.latLng(this.homeCoords.lat, this.homeCoords.lon)
  };
  /*
  addMarker(event:Event) {
    
    const popupInfo = `<b style="color: red; background-color: white">${
      event.description+' '+event.duration+' '+event.maxParticiaption
    }</b>`;

   
      this.markers.push(
          marker(
          [event.latitude, event.longitude], 
          this.markerIcon
          ).bindPopup(popupInfo)
        );
      
      
    
  }
  */
  addMarker(event: Event): void {
    const popupInfo = `<b style="color: red; background-color: white">${event.titre} ${event.duration} ${event.eventDate}</b>`;
  
    const markerIcon = L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
    });
    const marker = L.marker([event.latitude, event.longitude], { icon: markerIcon }).bindPopup(popupInfo);
  marker.addTo(this.map); // Ajoutez le marqueur à la carte
}
  emptymarkers(){
    this.markers=[];
  }
  onMapReady(map: L.Map) {
    this.map = map;
    
  }
  refreshData(){
    
    this.eventService.getAllEvents().subscribe({
      next: (data) => {
        this.events = data;
        
        this.events.forEach(e=>{
          this.addMarker(e);
        })
      },
      error: (err) => {
        console.error('Error fetching event:', err);
      }
    });
  }
  
}

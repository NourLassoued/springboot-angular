import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { ParticipationService } from 'src/app/services/participation.service';
import { Participation } from 'src/app/models/participation.model';
import { Event} from 'src/app/models/event.model';
import { MatDialog } from '@angular/material/dialog';
import { ParticipationFormDialogComponent } from '../participation-form-dialog/participation-form-dialog.component';
@Component({
  selector: 'app-eventgroupe-management',
  templateUrl: './eventgroupe-management.component.html',
  styleUrls: ['./eventgroupe-management.component.css']
})
export class EventgroupeManagementComponent implements OnInit {
events:Event[]=[];
userId: number = 1; 
// Variable pour contrôler l'affichage du formulaire
selectedEventId: number = 0; // Variable pour stocker l'ID de l'événement sélectionné
showParticipationForm: boolean = false; // Ajoutez cette ligne

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
  private dialog: MatDialog
) {}

ngOnInit(): void {
  this.eventService.getAllEvents().subscribe({
    next: (data) => this.events = data,
    error: (err) => console.error('Error fetching event:', err)
  });
}

getImageUrl(filename: string): string {
  return `http://localhost:8070/files/get-image/${filename}`;
} joinEvent(eventId: number): void {
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
        this.createParticipation(result, selectedEvent); // Passer l'objet Event
      } else {
        console.error('Selected event not found.');
      }
    }
  });


}  createParticipation(participationData: Participation, selectedEvent: Event): void {
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
}
}
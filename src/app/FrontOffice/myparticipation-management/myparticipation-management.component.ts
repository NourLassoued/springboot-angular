import { Component, OnInit } from '@angular/core';
import { ParticipationService } from 'src/app/services/participation.service';
import { Participation } from 'src/app/models/participation.model';
import { Event} from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UpdateParticipationDialogComponentComponent } from '../update-participation-dialog-component/update-participation-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-myparticipation-management',
  templateUrl: './myparticipation-management.component.html',
  styleUrls: ['./myparticipation-management.component.css']
})
export class MyparticipationManagementComponent implements OnInit  {
 // Assurez-vous que la structure de participationsWithEventTitle correspond à celle utilisée dans le fichier HTML
 participationsWithEventTitle: Participation[] = [];
 events: Event[] = []; 
 selectedEventId: number = 0;
  userId: number = 1;
  selectedParticipation: Participation | null = null
  updateError: boolean = false;
  participationData: any = {
    injury: '',
    emergencyNumber: ''
  };
  //participations: any[] = [];
  participations: Participation[] = [];
  constructor(private participationService: ParticipationService, private eventService: EventService,  private dialog: MatDialog) {}
  ngOnInit(): void {
    this.getParticipationsByUser(this.userId);
  }


 deleteParticipation(participationId: number): void {
  this.participationService.deleteParticipation(participationId).subscribe(
    () => {
      console.log('Participation deleted successfully!');
      // Récupérer la participation associée à l'événement
      const participation = this.participationsWithEventTitle.find(participation => participation.id === participationId);
      if (participation && participation.event) { // Vérifiez si la participation et l'événement existent
        const eventId = participation.event.id; // Obtenez l'ID de l'événement associé à la participation
        const selectedEventIndex = this.events.findIndex(event => event.id === eventId);
        if (selectedEventIndex !== -1) {
          const selectedEvent = this.events[selectedEventIndex];
          selectedEvent.maxParticiaption++; // Augmenter maxParticipation de 1
          this.eventService.updateMaxParticipation(selectedEvent.id, selectedEvent.maxParticiaption).subscribe(
            () => {
              console.log('Max participation updated successfully for event:', selectedEvent.id);
            },
            (error: any) => {
              console.error('Error updating max participation for event:', selectedEvent.id, error);
            }
          );
        } else {
          console.error('Selected event not found.');
        }
      } else {
        console.error('Participation or associated event not found.');
      }
      // Recharger les participations après la suppression
      this.getParticipationsByUser(this.userId);
    },
    (error: any) => {
      console.error('Error deleting participation:', error);
    }
  );
}

getParticipationsByUser(userId: number): void {
  this.participationService.getParticipationsByUser(userId)
    .subscribe(
      (participations: Participation[]) => {
        this.participations = participations;
        //this.loadEventTitles(); // Load event titles after getting participations
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération des participations :', error);
      }
      
    );
    
}updateParticipation(participation: Participation): void {
  const dialogRef = this.dialog.open(UpdateParticipationDialogComponentComponent, {
    width: '400px',
    data: { participation } // Passer la participation à la boîte de dialogue
  });

  dialogRef.afterClosed().subscribe((updatedParticipation: Participation | undefined) => {
    if (updatedParticipation) {
      this.participationService.updateParticipation(updatedParticipation).subscribe(
        () => {
          // Afficher une alerte de succès
          console.log('Participation updated successfully!');
          // Recharger les participations après la mise à jour
          this.getParticipationsByUser(this.userId);
        },
        (error: any) => {
          console.error('Error updating participation:', error);
          // Afficher une alerte d'erreur
        }
      );
    }
  });
}




}
/*
loadEventTitles(): void {
  this.participations.forEach(participation => {
    // Vérifiez si participation.event est défini
    if (participation.event && participation.event.id) {
      // Fetch event title for each participation
      this.eventService.getEventById(participation.event.id)
        .subscribe(
          (event: Event) => {
            participation.event.titre = event.titre;
            console.log(`Titre de l'événement pour la participation ${participation.id}: ${participation.event.titre}`);
          },
          (error: any) => {
            console.error('Une erreur s\'est produite lors de la récupération de l\'événement :', error);
          }
        );
    } else {
      console.error('Participation or associated event not found.');
    }
  });
}

getEventTitle(participation: Participation): string {
  return participation && participation.event ? participation.event.titre : 'Unknown';
}*/

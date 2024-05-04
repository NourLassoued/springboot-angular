import { Component, OnInit } from '@angular/core';
import { ParticipationService } from 'src/app/services/participation.service';
import { Participation } from 'src/app/models/participation.model';
import { Event } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateParticipationDialogComponentComponent } from '../update-participation-dialog-component/update-participation-dialog-component.component';

@Component({
  selector: 'app-myparticipation-management',
  templateUrl: './myparticipation-management.component.html',
  styleUrls: ['./myparticipation-management.component.css']
})
export class MyparticipationManagementComponent implements OnInit {
  pparticipationsWithEventTitle: Participation[] = [];
  events: Event[] = []; 
  selectedEventId: number = 0;
  idUser: number = 1; // Vous pouvez définir idUser ici
  selectedParticipation: Participation | null = null;
  updateError: boolean = false;
  participationData: any = {
    injury: '',
    emergencyNumber: ''
  };
  participations: Participation[] = [];

  constructor(
    private participationService: ParticipationService,
    private eventService: EventService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getParticipationsByUser(); // Supprimer l'argument this.idUser ici
  }
  deleteParticipation(participationId: number): void {
    this.participationService.deleteParticipation(participationId).subscribe(
      () => {
        console.log('Participation deleted successfully!');
        this.getParticipationsByUser(); // Supprimer l'argument this.idUser ici
      },
      (error: any) => {
        console.error('Error deleting participation:', error);
      }
    );
  }


  updateParticipation(participation: Participation): void {
    const dialogRef = this.dialog.open(UpdateParticipationDialogComponentComponent, {
      width: '400px',
      data: { participation }
    });

    dialogRef.afterClosed().subscribe((updatedParticipation: Participation | undefined) => {
      if (updatedParticipation) {
        const index = this.participations.findIndex(p => p.id === updatedParticipation.id);
        if (index !== -1) {
          //updatedParticipation.registrationDate = new Date();
          this.participations[index] = updatedParticipation;
        }

        this.participationService.updateParticipation(updatedParticipation).subscribe(
          () => {
            console.log('Participation updated successfully!');
            this.getParticipationsByUser();
          },
          (error: any) => {
            console.error('Error updating participation:', error);
          }
        );
      }
    });
  }
  getParticipationsByUser(): void {
    this.participationService.getParticipationsByUser(this.idUser)
      .subscribe(participations => {
        this.participations = participations;
        console.log('Participations:', this.participations);
      });
  }
}
  /*

  loadEventTitlesForParticipations(): void {
    this.participations.forEach(participation => {
      if (!participation.event) { // Vérifiez si la participation a déjà un événement associé
        participation.event = new Event(); // Créez une nouvelle instance d'Event
        participation.event.titre = 'Unknown'; // Initialisez la propriété titre à 'Unknown'
      }
  
      // Charger le titre de l'événement pour cette participation
      if (participation.event && participation.event.id) {
        this.eventService.getEventById(participation.event.id).subscribe(
          (event: Event) => {
            if (event && event.titre) {
              participation.event.titre = event.titre;
              console.log(`Titre de l'événement pour la participation ${participation.id}: ${participation.event.titre}`);
            } else {
              console.error('Titre de l\'événement non trouvé pour la participation:', participation.id);
              participation.event.titre = 'Unknown';
            }
          },
          (error: any) => {
            console.error('Erreur lors de la récupération de l\'événement pour la participation:', participation.id, error);
            participation.event.titre = 'Unknown';
          }
        );
      } else {
        console.error('Participation ou événement associé non trouvé.');
        participation.event.titre = 'Unknown';
      }
    });
  }
  
  getEventTitle(participation: Participation): string {
    return participation && participation.event ? participation.event.titre : 'Unknown';
  }
}
*/

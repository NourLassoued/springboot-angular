import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Participation } from 'src/app/models/participation.model';

@Component({
  selector: 'app-update-participation-dialog-component',
  templateUrl: './update-participation-dialog-component.component.html',
  styleUrls: ['./update-participation-dialog-component.component.css']
})
export class UpdateParticipationDialogComponentComponent {
  participation: Participation;
 
  
  constructor(
    public dialogRef: MatDialogRef<UpdateParticipationDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.participation = { ...data.participation }; // Copier les données pour éviter la mutation directe
  }

  onSubmit(): void {
    // Émettre les données mises à jour vers le composant parent
    this.dialogRef.close(this.participation);
  }
}
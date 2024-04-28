import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Participation } from 'src/app/models/participation.model';

@Component({
  selector: 'app-update-participation-dialog-component',
  templateUrl: './update-participation-dialog-component.component.html',
  styleUrls: ['./update-participation-dialog-component.component.css']
})
export class UpdateParticipationDialogComponentComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateParticipationDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit(formValue: any): void {
    // Émettre les données soumises vers le composant parent
    this.dialogRef.close(formValue);
  }

}

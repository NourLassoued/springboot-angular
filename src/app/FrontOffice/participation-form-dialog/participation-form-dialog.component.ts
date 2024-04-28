import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-participation-form-dialog',
  templateUrl: './participation-form-dialog.component.html',
  styleUrls: ['./participation-form-dialog.component.css']
})
export class ParticipationFormDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ParticipationFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit(formValue: any): void {
    // Émettre les données soumises vers le composant parent
    this.dialogRef.close(formValue);
  }
}

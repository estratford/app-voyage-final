import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Forfait } from 'src/app/Forfait';

@Component({
  selector: 'app-dialog-formulaire-forfaits',
  templateUrl: './dialog-formulaire-forfaits.component.html',
  styleUrls: ['./dialog-formulaire-forfaits.component.scss']
})
export class DialogFormulaireForfaitsComponent {

  constructor(public dialogRef: MatDialogRef<DialogFormulaireForfaitsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Forfait) {
   }

  fermerDialogue(): void {
    this.dialogRef.close();
  }

}

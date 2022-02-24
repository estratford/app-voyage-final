import { Component, OnInit } from '@angular/core';
import { Forfait } from 'src/app/Forfait';
import { ForfaitService } from 'src/app/forfait.service';
import { MatDialog } from '@angular/material/dialog';
import { FormulaireForfaitsComponent } from '../formulaire-forfaits/formulaire-forfaits.component';
import { DialogFormulaireForfaitsComponent } from '../dialog-formulaire-forfaits/dialog-formulaire-forfaits.component';

@Component({
  selector: 'app-table-forfaits',
  templateUrl: './table-forfaits.component.html',
  styleUrls: ['./table-forfaits.component.scss']
})
export class TableForfaitsComponent implements OnInit {
  forfaits: Forfait[] = [];
  selectedForfait?: Forfait;
  columnsToDisplay = ['id', 'destination', 'villeDepart', 'dateDepart', 'dateRetour', 'prix', 'rabais', 'actions'];

  constructor(private forfaitService: ForfaitService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }
  deleteForfait(forfait: Forfait) {
    this.forfaitService.deleteForfait(forfait)
      .subscribe(() => (this.forfaits = this.forfaits.filter((f) => f.id !== forfait.id))
      );
  }
  onSelect(forfait?: Forfait) {
    if (!forfait) {
      this.selectedForfait = { id: '', destination: '', villeDepart: '', hotel:{nom: '', coordonnees: '', nombreEtoiles: 0,
      nombreChambres: 0, caracteristiques: []},dateDepart:'', dateRetour:'', vedette: false, prix: 0, rabais: 0 }
    } else { 
      this.selectedForfait = forfait;
    }
    const dialogRef = this.dialog.open(DialogFormulaireForfaitsComponent, {
      width: '500px',
      data: this.selectedForfait,
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.selectedForfait = undefined;
      this.getForfaits();
    });
  }
}

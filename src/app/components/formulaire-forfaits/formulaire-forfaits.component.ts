import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Forfait } from 'src/app/Forfait';
import { ForfaitService } from 'src/app/forfait.service';

@Component({
  selector: 'app-formulaire-forfaits',
  templateUrl: './formulaire-forfaits.component.html',
  styleUrls: ['./formulaire-forfaits.component.scss']
})
export class FormulaireForfaitsComponent implements OnInit {
  @Input() forfait: Forfait = { id: '', destination: '', villeDepart: '', prix: 0, vedette: true, hotel: { nom: '', coordonnees: '', nombreEtoiles: 0,
  nombreChambres: 0, caracteristiques: []}, dateDepart: '', dateRetour: '', rabais: 0}
  @Output() majTableau = new EventEmitter();

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
  }

  onSave(forfaitForm: NgForm){
    if(forfaitForm.valid) {
      if(this.forfait.id != null && this.forfait.id != ''){
        this.forfaitService.editForfait(this.forfait).subscribe(_ => { this.majTableau.emit() });
      } else {
        this.forfaitService.addForfait(this.forfait).subscribe(_ => { this.majTableau.emit() });
      }
    }
  }

  onCancel(){
    this.majTableau.emit();
  }

}

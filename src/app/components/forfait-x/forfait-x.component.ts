import { Component, OnInit } from '@angular/core';
import { ForfaitService } from 'src/app/forfait.service';
import { Forfait } from 'src/app/Forfait';

@Component({
  selector: 'app-forfait-x',
  templateUrl: './forfait-x.component.html',
  styleUrls: ['./forfait-x.component.scss']
})
export class ForfaitXComponent implements OnInit {

  forfaits: Forfait[] = [];  
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.forfaitService.getForfaits().subscribe((forfaits) => (this.forfaits = forfaits));

  }

}

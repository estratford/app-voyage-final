import { Component, OnInit } from '@angular/core';
import { ForfaitService } from 'src/app/forfait.service';
import { Forfait } from 'src/app/Forfait';


@Component({
  selector: 'app-forfaits',
  templateUrl: './forfaits.component.html',
  styleUrls: ['./forfaits.component.scss']
})
export class ForfaitsComponent implements OnInit {
  
  forfaits: Forfait[] = [];

  constructor(private forfaitService: ForfaitService) {}

  ngOnInit(): void {
    this.forfaitService.getForfaits().subscribe((forfaits) => (this.forfaits = forfaits));
  }
}

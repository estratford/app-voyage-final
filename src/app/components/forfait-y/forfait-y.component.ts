import { Component, Input, OnInit } from '@angular/core';
import { ForfaitService } from 'src/app/forfait.service';
import { Forfait } from 'src/app/Forfait';

@Component({
  selector: 'app-forfait-y',
  templateUrl: './forfait-y.component.html',
  styleUrls: ['./forfait-y.component.scss']
})
export class ForfaitYComponent implements OnInit {
  forfaits: Forfait[] = [];  
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.forfaitService.getForfaits().subscribe((forfaits) => (this.forfaits = forfaits));

  }

}

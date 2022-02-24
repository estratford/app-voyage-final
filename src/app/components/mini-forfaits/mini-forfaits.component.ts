import { Component, OnInit, Input } from '@angular/core';
import { ForfaitService } from 'src/app/forfait.service';
import { Forfait } from 'src/app/Forfait';
// import { FORFAITS } from 'src/app/mock-forfaits';

@Component({
  selector: 'app-mini-forfaits',
  templateUrl: './mini-forfaits.component.html',
  styleUrls: ['./mini-forfaits.component.scss']
})
export class MiniForfaitsComponent implements OnInit {
  forfaits: Forfait[] = [];  
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.forfaitService.getForfaits().subscribe((forfaits) => (this.forfaits = forfaits));

  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from 'src/app/Forfait';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() forfait: Forfait;
  @Input() nombreEtoiles: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

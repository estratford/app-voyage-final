import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from 'src/app/Forfait';

@Component({
  selector: 'app-mini-forfait-item',
  templateUrl: './mini-forfait-item.component.html',
  styleUrls: ['./mini-forfait-item.component.scss']
})
export class MiniForfaitItemComponent implements OnInit {
  @Input() forfait: Forfait;
   // définir qu'il prendra le type Forfait qui est notre interface
  @Input() vedette: boolean;
  constructor() { }


  ngOnInit(): void {
  }

}

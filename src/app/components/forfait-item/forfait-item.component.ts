import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from 'src/app/Forfait';
// importer l'interface qui prend les forfaits qui elle prend les mocks..


@Component({
  selector: 'app-forfait-item',
  templateUrl: './forfait-item.component.html',
  styleUrls: ['./forfait-item.component.scss']
})
export class ForfaitItemComponent implements OnInit {
  @Input() forfait: Forfait;
  @Input() vedette: boolean;
  @Input() destination: String;
  // définir qu'il prendra le type Forfait qui est notre interface

  constructor() { }

  ngOnInit(): void {
  }

  // getColor() {
  //   if(this.forfait.vedette === true) {
  //     return '#fff6cc';
  //   }
  // }

}

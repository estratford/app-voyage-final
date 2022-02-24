import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphique2',
  templateUrl: './graphique2.component.html',
  styleUrls: ['./graphique2.component.scss']
})
export class Graphique2Component implements OnInit {
  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins:[],
    options: { responsive: true, maintainAspectRatio: false }
  };

  public mesDonnees: ChartData<'bar', number[], string | string[]> = {
    labels: ['Réservations Mexique', 'Réservations Bora Bora', 'Réservations Rio de Janero', 'Réservations Colombie', 'Réservations Cuba'],
    datasets: [
      { data: [460, 400, 35, 403, 223], label: 'Réservations' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphique1',
  templateUrl: './graphique1.component.html',
  styleUrls: ['./graphique1.component.scss']
})
export class Graphique1Component implements OnInit {
  public monGraphique = {
    type: <ChartType>'pie',
    legende: true,
    options: { responsive: true, maintainAspectRatio: false }, 
    plugins: []
  };

  public mesDonnees: ChartData<'pie', number[], string | string[]> = {
    labels: ['Mexique', 'Bora Bora', 'Autre destination...'],
    datasets: [{
      data: [1, 1, 4], 
      backgroundColor: ['#e60049', '#0bb4ff', '#50e991', '#e6d800', '#9b19f5', '#ffa300', '#dc0ab4', '#b3d4ff', '#00bfa0']
    }]
  };
  constructor() { }

  ngOnInit(): void {
  }

}

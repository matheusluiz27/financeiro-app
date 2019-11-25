import { Component, OnInit, ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private elementRef: ElementRef) { }

  public myChart: any;

  OnInit() {
    this.chart
  }

  chart() {

    var htmlRef = this.elementRef.nativeElement.querySelector(`#grafico`);
    this.myChart = new Chart(htmlRef, {
      type: 'bar',

      data: {
        datasets: [{
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [10, 20, 30, 40, 50, 60, 70]
        }]
      },
    });
  }

}

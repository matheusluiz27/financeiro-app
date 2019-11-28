import { CaixaInfoServiceService } from './../../services/caixa-info-service/caixa-info-service.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as Chart from 'chart.js';
import { CaixaInfo } from 'src/app/models/CaixaInfo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ngOnInit() {
    this.chart();
    this.getCaixaInfo();
  }

  constructor(private elementRef: ElementRef, private caixaInfoService: CaixaInfoServiceService) { }

  public myChart: any;

  private caixaInfo = new CaixaInfo();

  OnInit() {
  }

  getCaixaInfo() {
    const response = this.caixaInfoService.getCaixaInfo();
    response.then(caixa => {
      this.caixaInfo = caixa;
    })
  }

  chart() {
    var htmlRef = this.elementRef.nativeElement.querySelector(`#grafico`);
    this.myChart = new Chart(htmlRef, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [50, 30],
          backgroundColor: [ '#ff6384', '#36a2eb']
        }],

        labels: [
          'Entradas',
          'Saídas'
        ]
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { lineChartMulti } from './charts';
import * as chartsData from './config';
@Component({
  selector: 'app-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.css']
})
export class NgxChartsComponent {
 lineChartMulti = lineChartMulti;
    //Line Charts
    
    lineChartView: any[] = chartsData.lineChartView;

    // options
    lineChartShowXAxis = chartsData.lineChartShowXAxis;
    lineChartShowYAxis = chartsData.lineChartShowYAxis;
    lineChartGradient = chartsData.lineChartGradient;
    lineChartShowLegend = chartsData.lineChartShowLegend;
    lineChartShowXAxisLabel = chartsData.lineChartShowXAxisLabel;
    lineChartXAxisLabel = chartsData.lineChartXAxisLabel;
    lineChartShowYAxisLabel = chartsData.lineChartShowYAxisLabel;
    lineChartYAxisLabel = chartsData.lineChartYAxisLabel;
    lineChartColorScheme = chartsData.lineChartColorScheme;
    // line, area
    lineChartAutoScale = chartsData.lineChartAutoScale;
    lineChartLineInterpolation = chartsData.lineChartLineInterpolation;
    
    constructor() {
        Object.assign(this, { lineChartMulti })
    }

    onSelect(event) {
        console.log(event);
    }

}
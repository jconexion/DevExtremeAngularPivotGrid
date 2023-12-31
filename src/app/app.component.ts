import {
  NgModule,
  Component,
  ViewChild,
  AfterViewInit,
  enableProdMode
} from "@angular/core";
import {
  BrowserModule,
  BrowserTransferStateModule
} from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {
  DxPivotGridModule,
  DxPivotGridComponent,
  DxChartModule,
  DxChartComponent
} from "devextreme-angular";
import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
import { Service } from "./app.service";

@Component({
  selector: "demo-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Service]
})
export class AppComponent implements AfterViewInit {
  @ViewChild(DxPivotGridComponent, { static: false })
  pivotGrid: DxPivotGridComponent;

  @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;

  pivotGridDataSource: any;

  constructor(service: Service) {
    this.customizeTooltip = this.customizeTooltip.bind(this);

    this.pivotGridDataSource = {
      fields: [
        {
          caption: "type",
          dataField: "type",
          area: "row",
          sortBySummaryField: "Total"
        },
        {
          caption: "Sous_type",
          dataField: "Sous_type",
          area: "row"
        },
        {
          dataField: "Année",
          dataType: "Année",
          area: "column"
        },
        {
          dataField: "trimestre",
          dataType: "trimestre",
          area: "column"
        },

        {
          groupName: "Année",
          groupInterval: "trimestre",
          visible: false
        },
        {
          caption: "Total",
          dataField: "index",
          dataType: "number",
          summaryType: "sum",
          format: "currency",
          area: "data"
        }
      ],
      store: service.getSales()
    };
  }

  ngAfterViewInit() {
    this.pivotGrid.instance.bindChart(this.chart.instance, {
      dataFieldsDisplayMode: "splitPanes",
      alternateDataFields: false
    });

    setTimeout(() => {
      const dataSource = this.pivotGrid.instance.getDataSource();
      dataSource.expandHeaderItem("row", ["North America"]);
      dataSource.expandHeaderItem("column", [2013]);
    }, 0);
  }

  customizeTooltip(args) {
    return {
      html: `${args.seriesName} | Total<div class='currency'>${args.valueText}</div>`
    };
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxPivotGridModule,
    DxChartModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

import { Component, OnInit, ViewChild } from "@angular/core";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { GridComponent } from "@syncfusion/ej2-angular-grids";

const SERVICE_URI: string = "https://inavista-lookbook.azurewebsites.net/";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public data: DataManager;
  public pageSettings: Object;

  @ViewChild("grid")
  public grid: GridComponent;

  ngOnInit(): void {
    this.data = new DataManager({
      url: SERVICE_URI + "api/SoldToBP/GetSoldToBP?pageNumber=1&recPerpage=100",
      adaptor: new WebApiAdaptor()
    });
  }
}

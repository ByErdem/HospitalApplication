import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { DatagridserviceService, Employee, State } from '../services/datagridservice.service';
import { Router } from '@angular/router';

import ArrayStore from "devextreme/data/array_store";
import { TagboxserviceService, TagProduct } from '../services/tagboxservice.service';
import { DxTagBoxComponent } from 'devextreme-angular';
import { PrlistComponent } from '../prlist/prlist.component';

function getXPath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [DatagridserviceService, TagboxserviceService, TagProduct,PrlistComponent]
})

export class PatientsComponent implements OnInit {

  @ViewChild('tagBoxVar', { static: true }) tagBox: DxTagBoxComponent;
  url: string = "";
  dataSource: Employee[];
  states: State[];
  events: Array<string> = [];

  simpleProducts: string[];
  editableProducts: string[];
  tagDataSource: any;

   constructor(service: DatagridserviceService, private router: Router, tagproduct: TagProduct, tagservice: TagboxserviceService, prlist:PrlistComponent) {

    this.dataSource = service.getEmployees();
    this.states = service.getStates();
    

    this.tagDataSource = new ArrayStore({
      data: tagservice.getProducts(),
      key: "Id"
    });


    localStorage.setItem("showSuggestion","false");

    //console.log(prlist.showSuggestion);

  }

  logEvent(eventName) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }

  ngOnInit() {
    this.url = this.router.url;
  }
}

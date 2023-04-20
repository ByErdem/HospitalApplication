import { Component, OnInit, ViewChild } from '@angular/core';
import ArrayStore from "devextreme/data/array_store";
import { TagboxserviceService, TagProduct } from '../services/tagboxservice.service';
import { DxTagBoxComponent } from 'devextreme-angular';
import { Router } from '@angular/router';

function getXPath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function getXPathForElement(element) {
  const idx = (sib, name) => sib 
      ? idx(sib.previousElementSibling, name||sib.localName) + (sib.localName == name)
      : 1;
  const segs = elm => !elm || elm.nodeType !== 1 
      ? ['']
      : elm.id && document.getElementById(elm.id) === elm
          ? [`id("${elm.id}")`]
          : [...segs(elm.parentNode), `${elm.localName.toLowerCase()}[${idx(elm)}]`];
  return segs(element).join('/');
}

@Component({
  selector: 'app-prlist',
  templateUrl: './prlist.component.html',
  styleUrls: ['./prlist.component.css']
})
export class PrlistComponent implements OnInit {

  @ViewChild('tagBoxVar', { static: true }) tagBox: DxTagBoxComponent;
  simpleProducts: string[];
  editableProducts: string[];
  showSuggestion: boolean = false;

  constructor(router: Router, tagproduct: TagProduct, tagservice: TagboxserviceService) {
    this.simpleProducts = tagservice.getSimpleProducts();
    this.editableProducts = this.simpleProducts.slice();
  }

  onCustomItemCreating(args) {
    let newValue = args.text;
    this.editableProducts.unshift(newValue);
    args.customItem = newValue;
  }

  checkbox_click(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;
    let txtcontent = document.getElementById("lbl_" + id).textContent;
    let options = this.tagBox.instance._options;
    let checkbox_item = document.getElementById(id);


    if (checkbox_item.checked == true) {
      let items = options.items;
      if (items.indexOf(txtcontent) == -1) {
        options.items.splice(0, 0, txtcontent);
        options.value.splice(0, 0, txtcontent);
      }
    }
    else {
      let items = options.items;
      let i = items.indexOf(txtcontent, 0);
      if (i > -1) {
        items.splice(i, 1);
      }
      options.items = items;

      items = options.value;
      i = items.indexOf(txtcontent, 0);
      if (i > -1) {
        items.splice(i, 1);
      }
      options.value = items;
    }
  }

  onInitialized(e) {
    setTimeout(function () {
      e.component._options.items = [];
      e.component._options.value = [];

      let container = <HTMLElement>document.body.querySelector(".dx-texteditor-input-container");
      container.addEventListener("click", (event) => {
        if (localStorage.getItem("showSuggestion")=="false") {
          try{
            var list = getXPath("//*[@class='dx-overlay-wrapper dx-dropdowneditor-overlay dx-popup-wrapper dx-dropdownlist-popup-wrapper dx-selectbox-popup-wrapper dx-tagbox-popup-wrapper']")
            //console.log(getXPathForElement( event.target));
            list.style.display = "none";
          }catch{}
        }
      });

    }, 300);
  }

  ngOnInit() {
  }

}

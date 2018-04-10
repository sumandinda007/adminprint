import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
title="Product Catalog";
  constructor() { }

  ngOnInit() {
  }

}

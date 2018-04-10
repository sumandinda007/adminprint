import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
redefinedRouteString='';
  constructor(private router: Router) { }

  ngOnInit() {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('.afterSVG').toggle();
    });
  }
  routeTo(routepath){
    console.log("Route Path",routepath);
    this.redefinedRouteString = routepath.target.attributes[1].nodeValue;
    console.log(this.redefinedRouteString);
    this.router.navigateByUrl(this.redefinedRouteString);
  }
}

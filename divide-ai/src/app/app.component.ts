import * as $ from 'jquery';
import * as M from 'materialize-css';

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('mobile') sideNav?: ElementRef;

  title = 'Divide-aí';


  ngAfterViewInit(): void {
    let $sideNav = $('#mobile-demo');
    M.Sidenav.init($sideNav);
  }
}

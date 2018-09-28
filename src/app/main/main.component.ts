import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';

import * as Rellax from 'rellax';
import {MnFullpageOptions, MnFullpageService} from 'ngx-fullpage';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    // scrollingSpeed: 1000,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    scrollBar: true,
    menu: '.header',
    verticalCentered: false,
    // navigation: true,
    autoScrolling: false,
    // css3: true,
    fitToSection: false,
    anchors: [
      'Home', 'About', 'Scan', 'Print',
      'Locate', 'Pricing', 'Start', 'Footer'
    ]
  });

  constructor(public fullpage: MnFullpageService) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const rellax = new Rellax('.rellax');
    this.fullpage.reBuild();
  }

  ngOnDestroy() {
    // this.fullpage.destroy('all');
  }
}

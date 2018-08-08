import {AfterViewInit, Component} from '@angular/core';

import * as Rellax from 'rellax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {




  ngAfterViewInit() {
    let rellax = new Rellax('.rellax');
  }

}


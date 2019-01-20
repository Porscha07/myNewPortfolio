import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import * as Defaults from '../../constants/defaults';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myNewPortfolio';
  public mainImageSrc: string = Defaults.PORTFOLIO_MAIN_IMAGE_RELATIVE_PATH;
}

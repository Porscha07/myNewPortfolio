import { Component, OnInit } from '@angular/core';

import * as Defaults from '../../constants/defaults';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.scss']
})
export class MainImageComponent implements OnInit {
  public mainImageSrc: string = Defaults.PORTFOLIO_MAIN_IMAGE_RELATIVE_PATH;

  constructor() { }

  ngOnInit() {
  }

}




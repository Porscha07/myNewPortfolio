import { Component, OnInit } from '@angular/core';

import * as Defaults from '../../constants/defaults';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public aboutImgSrc: string = Defaults.PORTFOLIO_ABOUT_ME_IMAGE_RELATIVE_PATH;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as Defaults from '../../constants/defaults';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  public logoSrc: string = Defaults.PORTFOLIO_LOGO_RELATIVE_PATH;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  public home(): void { // test functionality with another component in the routes barel.
    // debugger;
    this._router.navigate(['']);
  }

}

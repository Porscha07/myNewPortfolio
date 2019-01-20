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
  public headerItems = {
    about: { url: 'about', headerText: 'About'},
    testimonials: { url: 'testimonials', headerText: 'Testimonials' },
    skills: { url: 'skills', headerText: 'Skills' },
    portfolio: { url: 'work', headerText: 'Work'},
    contact: { url: 'contact', headerText: 'Contact'},
    services: { url: 'services', headerText: 'Services' },
  };

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  public home(): void {
    this._router.navigate(['']);
  }

  public navigateToHeaderSection(section): void {
    this._router.navigate([section]);
  }


}

import { Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { AboutComponent } from './components/about/about.component';
import { WhyHireMeComponent } from './components/why-hire-me/why-hire-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

export const APP_ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: 'about', component: AboutComponent },
    { path: 'why-hire-me', component: WhyHireMeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';

export const APP_ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: 'about', component: AboutComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'work', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { APP_COMPONENTS } from '../app/app.components';
import { APP_ROUTES } from '../app/app.routes';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
   ...APP_COMPONENTS,
   ServicesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// used barrels as a way to organize my code better and to keep my module file as lean as possible.
// used spread operator to copy array of all my components in the barrel as I continue to build the application.

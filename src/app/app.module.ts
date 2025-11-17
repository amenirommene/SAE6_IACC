import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ListSuggegestionsComponent } from './core/list-suggegestions/list-suggegestions.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './core/home/home.component';

@NgModule({ //décorateur
  declarations: [ //les composants liés à ce module
    AppComponent, HeaderComponent, FooterComponent, ListSuggegestionsComponent, HomeComponent
  ],
  imports: [ //la liste des modules qu'on a besoin dans ce module
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //service
  bootstrap: [AppComponent] //ne se trouve que dans le module racine : il indique le composant à appeler dans le fichier index.html
})
export class AppModule { }

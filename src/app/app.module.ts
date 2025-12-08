import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ListSuggegestionsComponent } from './features/suggestions/list-suggegestions/list-suggegestions.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { SuggestionService } from './core/Services/suggestion.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({ //décorateur
  declarations: [ //les composants liés à ce module
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [ //la liste des modules qu'on a besoin dans ce module
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [provideHttpClient()], //service
  bootstrap: [AppComponent] //ne se trouve que dans le module racine : il indique le composant à appeler dans le fichier index.html
})
export class AppModule { }

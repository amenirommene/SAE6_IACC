import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggegestionsComponent } from './list-suggegestions/list-suggegestions.component';
import { FormsModule } from '@angular/forms';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';


@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggegestionsComponent,
    SuggestionDetailsComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    FormsModule
  ]
})
export class SuggestionsModule { }

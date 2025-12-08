import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggegestionsComponent } from './list-suggegestions/list-suggegestions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';
import { SuggestionService } from '../../core/Services/suggestion.service';


@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggegestionsComponent,
    SuggestionDetailsComponent,
    SuggestionFormComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[]
})
export class SuggestionsModule { }

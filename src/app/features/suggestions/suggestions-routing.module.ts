import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggegestionsComponent } from './list-suggegestions/list-suggegestions.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

const routes: Routes = [
  //SuggestionsComponent est considéré racine de SuggestionsModuke
  { path: '', component: SuggestionsComponent, children:[
      {path:'add', component:SuggestionFormComponent},
      //localhost:4200/suggestions/update/1
      {path:'update/:id', component:SuggestionFormComponent},
    //localhost:4200/suggestions
      {path:'listsuggestions', component:ListSuggegestionsComponent, children:[
        {path:'suggestion/:id', component:SuggestionDetailsComponent}
      ]},
      //localhost:4200/suggestions/suggestion/1
     // {path:'suggestion/:id', component:SuggestionDetailsComponent}
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }

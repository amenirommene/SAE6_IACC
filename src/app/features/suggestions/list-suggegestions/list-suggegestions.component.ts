import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/Services/suggestion.service';

@Component({
  selector: 'app-list-suggegestions',
  templateUrl: './list-suggegestions.component.html',
  styleUrl: './list-suggegestions.component.css',
  //providers:[SuggestionService]
})
export class ListSuggegestionsComponent {

  constructor(private suggService:SuggestionService){}

suggestions: Suggestion[] = []; //la liste à afficher
titre : string = "Liste des suggestions";
searchTerm : string = "";
placeHolderText : string = "Rechercher une suggestion";
list : Suggestion[] = []; //list to push in
//méthode hook
ngOnInit(){
  //this.suggestions=this.suggService.getSuggestionsList();
  this.suggService.getAllSuggestionsFromBackend().subscribe({
  next : res=>this.suggestions=res,
  error : err=>console.log(err),
  complete: ()=>console.log("complete")
});
}
addToFavoris(s:Suggestion){
  this.list.push(s);
  console.log(this.list);
}
Like(s:Suggestion){
  s.nbLikes ++;
}

}

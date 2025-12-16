
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionService } from '../../../core/Services/suggestion.service';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent {
  id! : number;
  sug!:Suggestion;
  //une instance du service activatedRoute sera passé à ce composant sous le nom de "ac"
  constructor(private ac:ActivatedRoute, private _router:Router, private sugService:SuggestionService){
      console.log("constructor");
  }

  ngOnInit(){
    console.log("OnInit");
    //snapshot : retourne les paramètres immédiatement sans subscribe
   // this.id=Number(this.ac.snapshot.paramMap.get("id"));
    //this.id=Number(this.ac.snapshot.params["id"]);
    //paramMap + params : les méthodes qui retournent un observable
    this.ac.paramMap.subscribe(res=>
      {this.id=Number(res.get('id'));
       this.sugService.getAllSuggestionById(this.id).subscribe(
        res=>this.sug=res.suggestion
       )})


   // this.ac.params.subscribe(res=>{this.id=Number(res['id'])})
  }
}

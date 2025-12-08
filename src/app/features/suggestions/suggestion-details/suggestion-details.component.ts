import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent {
  id! : number;
  //une instance du service activatedRoute sera passé à ce composant sous le nom de "ac"
  constructor(private ac:ActivatedRoute, private _router:Router){
      console.log("constructor");
  }

  ngOnInit(){
    console.log("OnInit");
    //snapshot : retourne les paramètres immédiatement sans subscribe
   // this.id=Number(this.ac.snapshot.paramMap.get("id"));
    //this.id=Number(this.ac.snapshot.params["id"]);
    //paramMap + params : les méthodes qui retournent un observable
    this.ac.paramMap.subscribe(res=>{this.id=Number(res.get('id'))})
   // this.ac.params.subscribe(res=>{this.id=Number(res['id'])})
  }
}

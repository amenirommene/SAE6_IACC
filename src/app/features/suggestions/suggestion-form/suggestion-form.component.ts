import { SuggestionService } from './../../../core/Services/suggestion.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Suggestion } from '../../../models/suggestion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent {

  constructor(private fb:FormBuilder, private sugService:SuggestionService, private _router:Router){}
  list : Suggestion[] = [];
  myForm! : FormGroup;
  myForm2! : FormGroup;
  categories: string[] = [ 'Infrastructure et bâtiments', 'Technologie et services numériques', 'Restauration et cafétéria', 'Hygiène et environnement', 'Transport et mobilité', 'Activités et événements', 'Sécurité', 'Communication interne', 'Accessibilité', 'Autre' ];
  ngOnInit(){
    this.myForm2 = this.fb.group({
      title:['',[Validators.required,Validators.minLength(5), Validators.pattern("^[A-Z][a-zA-Z]*$")]],
      description : ["",[Validators.required,Validators.minLength(30)]]
    })
    this.myForm=new FormGroup({
      title : new FormControl("", [Validators.required,Validators.minLength(5), Validators.pattern("^[A-Z][a-zA-Z]*$")]),
      description : new FormControl("",[Validators.required,Validators.minLength(30)]),
      status: new FormControl("En attente"),
      category: new FormControl("",Validators.required),
      date: new FormControl(new Date()),

    })
  }
addSuggestion(){
//this.list.push(this.myForm.value);
this.sugService.addSuggestion(this.myForm.value).subscribe(
  ()=>this._router.navigateByUrl("/suggestions/listsuggestions"));
console.log(this.list);
}
}

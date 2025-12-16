import { Injectable } from '@angular/core';
import { SuggestionsModule } from '../../features/suggestions/suggestions.module';
import { Suggestion } from '../../models/suggestion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({   //décorateur : type de déclaration
  providedIn: 'root' //tous les éléments de cette application peuvent utiliser ce service et une seule instance sera créé
})
export class SuggestionService {
suggestionUrl : string ='http://localhost:3000/suggestions';
constructor(private _http:HttpClient){}


suggestionsList: Suggestion[] = [
{
id: 1,
title: 'Organiser une journée team building',
description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
category: 'Événements',
date: new Date('2025-01-20'),
status: 'acceptee',
nbLikes : 0
},
{
id: 2,
title: 'Améliorer le système de réservation',
description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
category: 'Technologie',
date: new Date('2025-01-15'),
status: 'refusee',
nbLikes : 0
},
{
id: 3,
title: 'Créer un système de récompenses',
description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
category: 'Ressources Humaines',
date: new Date('2025-01-25'),
status: 'refusee',
nbLikes : 0
},
{
id: 4,
title: 'Moderniser l\'interface utilisateur',
description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',
category: 'Technologie',
date: new Date('2025-01-30'),
status: 'en_attente',
nbLikes : 0
},
{
id: 5,
title: 'Formation à la sécurité informatique',
description: 'Organisation d\'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés.',
category: 'Formation',
date: new Date('2025-02-05'),
status:'acceptee',
nbLikes : 0
}
]

getAllSuggestionsFromBackend():Observable<Suggestion[]>{
  return this._http.get<Suggestion[]>(this.suggestionUrl);
}
getAllSuggestionById(id:number):Observable<any>{
  return this._http.get<any>(this.suggestionUrl+"/"+id);
}
addSuggestion(s:Suggestion):Observable<Suggestion>{
  return this._http.post<Suggestion>(this.suggestionUrl,s);
}
updateSuggestion(id:number,s:Suggestion):Observable<Suggestion>{
  return this._http.put<Suggestion>(this.suggestionUrl+"/"+id,s);
}

  getSuggestionsList(): Suggestion[] {
    return this.suggestionsList;
  }

}

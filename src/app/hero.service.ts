import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // constructor() { }

getHeroes(): Observable<Hero[]> {
   this.messageService.add('HeroService: fetched heroes');
  return of(HEROES);
}
constructor(private messageService: MessageService) { }
}

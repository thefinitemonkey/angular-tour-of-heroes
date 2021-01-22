import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  filterHero(heroes: Hero[], id: Number): Hero {
    if (id == null) {
      this.messageService.add(`HeroService: null id filtering heroes`);
      return {id: -1, name:""};
    }

    const foundHero = heroes.find(hero => hero.id === id);
    if (foundHero == null) {
      this.messageService.add(`HeroService: id ${id} not found filtering heroes`);
      return {id: -1, name:""};
    }

    this.messageService.add(`HeroService: id ${id} found filtering heroes`);
    return foundHero;
  }

  getHero(id: Number): Observable<Hero> {
    this.messageService.add(`HeroService: fetching hero id=${id}`);
    //return of(HEROES.find(hero => hero.id === id));

    return of(this.filterHero(HEROES, id));
  }
}

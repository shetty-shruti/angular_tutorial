import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
// hero = 'Windstorm';

// hero: Hero = {
//   id:1,
//   name: 'Windstorm'
// };

selectedHero :Hero;
onSelect(hero: Hero): void{
  this.selectedHero = hero;
}
// heroes = HEROES;
heroes: Hero[];
  // constructor() { }

  constructor(private heroService: HeroService){

  }

  getHeroes(): void {
  // this.heroes = this.heroService.getHeroes();
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

  ngOnInit() {
    this.getHeroes();
  }

}

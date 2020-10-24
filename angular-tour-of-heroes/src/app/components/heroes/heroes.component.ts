import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Array<Hero>;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }

  addHero(name: string): void {
    name = name.trim()
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero =>
        this.heroes.push(hero));
  }

  deleteHero(id: number) {
    this.heroService.deleteHero(id).subscribe(_ =>
      this.heroes = this.heroes.filter(h => h.id != id)
    );
  }

}

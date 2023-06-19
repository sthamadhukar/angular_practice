import {Component} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from "../mock-heros";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  constructor(private heroService: HeroService, private messageSerVice: MessageService) {
  }

  hero: Hero = {
    id: 1,
    name: 'WindStorm',
  };

  heros: Hero[] = [];

  selectedHero?: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heros = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageSerVice.add(`HeroesComponent: Selected hero id =${hero.id}`)

  }

  ngOnInit(): void {
    this.getHeroes();
  }
}

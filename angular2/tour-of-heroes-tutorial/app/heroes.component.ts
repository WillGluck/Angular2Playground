import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router'

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component'
import {HeroService} from './hero.service'

@Component({
    selector: 'my-heroes',
    styleUrls: ['app/heroes.component.css'],
    templateUrl: 'app/heroes.component.html',
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit { 
    
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    
    constructor(private _heroservice:HeroService, private _router:Router) { }
    
    ngOnInit() {
        this.getHeroes();    
    }
    
    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }
    
    getHeroes() {
        this._heroservice.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    gotoDetail() {
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }
}

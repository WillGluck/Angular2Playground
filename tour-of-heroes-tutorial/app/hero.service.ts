import {Injectable, Inject} from 'angular2/core'
import {HEROES} from './mock-heroes'
import {Hero} from './hero'
import {StupidService} from './stupid.service'


export class HeroService {
    
    constructor() {}
    
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) //2 segundos.
        )
    }
    getHero(id: Number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}
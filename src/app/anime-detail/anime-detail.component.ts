import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Anime } from '../animes/anime.model';
import { AnimeService } from '../animes/anime.service';
import { Episode } from '../animes/episode.model';

@Component({
    moduleId: module.id,
    selector: 'anime-detail',
    templateUrl: 'anime-detail.component.html',
    styleUrls: ['anime-detail.component.css'],
    providers: [AnimeService]
})
export class AnimeDetailComponent implements OnInit {
    anime: Anime;
    episodes: Episode[];
    
    constructor(private animeService : AnimeService, private router : Router, private route: ActivatedRoute) {
        
    }

    ngOnInit() {
        
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            //this.service.getHero(id).then(hero => this.hero = hero);                        
            this.animeService.getAnime(id).then(anime => this.anime = anime);
        });
    }
    
    goBack() {
        window.history.back();
    }
}
import { Component, OnInit } from '@angular/core';
import { AnimeService } from './anime.service'
import { Router } from '@angular/router';

import { Anime } from './anime.model';
import { AnimeDetailComponent } from '../anime-detail/anime-detail.component';
import { SearchbarComponent } from "../searchbar/searchbar.component";

import { Auth } from "../auth.service";

import { StringImageReplacePipe } from '../string-image-replace.pipe';

@Component({
    selector: 'animes',
    templateUrl: 'animes.component.html',
    styleUrls: ['animes.component.css'],
    providers: [AnimeService],
})
export class AnimesComponent implements OnInit {
    title = "List of all animes";
    animes : Anime[] = [];
    
    selectedAnime : Anime;
    filterText : string;
    
    constructor(private animeService : AnimeService, private router : Router, public auth: Auth) { 
        this.filterText = "";
    }

    getAnimes() {
        this.animeService.getAnimes().then(animes => {
            this.animes = animes;
            this.animes.forEach(anime => anime.imageName = new StringImageReplacePipe().transform(anime.fileSystemName) + '.jpg');
        })
        .then(() => this.animeService.getUserFollowedAnimes().then(followedAnimes => {
            followedAnimes.forEach(folAnime => {
                this.animes.forEach(anime => {
                    if(anime.id == folAnime.id) {
                        anime.followed = true;
                    }
                });
            });
        }));
    }

    ngOnInit() { 
        this.getAnimes();
    }
    
    onSelect(anime: Anime)  {
        this.selectedAnime = anime;
    }

    followAnime(anime: Anime): void {
        this.animeService.followAnime(anime).then(resp => this.getAnimes());
    }

    unfollowAnime(anime: Anime): void {
        this.animeService.unfollowAnime(anime).then(resp => this.getAnimes());
    }
}
import { Component, OnInit } from '@angular/core';

import { AnimeService } from '../animes/anime.service'
import { Router } from '@angular/router';

import { Anime } from '../animes/anime.model';
import { Auth } from "../auth.service";

@Component({
  selector: 'app-animes-followed',
  templateUrl: './animes-followed.component.html',
  styleUrls: ['./animes-followed.component.css'],
  providers: [AnimeService],
})
export class AnimesFollowedComponent implements OnInit {

  constructor(
    public auth: Auth,
    private animeService : AnimeService,
    private router : Router) { 
        this.filterText = "";
    }

    title = "Your followed animes";
    animes : Anime[] = [];
    filterText : string;

    getAnimes() {
        this.animeService.getUserFollowedAnimes().then(animes => this.animes = animes);
    }

    ngOnInit() { 
        this.getAnimes();
    }

    followAnime(anime: Anime): void {
        this.animeService.followAnime(anime).then(resp => this.getAnimes());
    }

    unfollowAnime(anime: Anime): void {
        this.animeService.unfollowAnime(anime).then(resp => this.getAnimes());
    }
}

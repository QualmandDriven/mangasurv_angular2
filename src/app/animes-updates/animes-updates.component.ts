import { Component, OnInit } from '@angular/core';

import { AnimeService } from '../animes/anime.service'
import { Router } from '@angular/router';

import { Anime } from '../animes/anime.model';
import { Auth } from "../auth.service";

import { MomentModule } from "angular2-moment/moment.module";

@Component({
  selector: 'app-animes-updates',
  templateUrl: './animes-updates.component.html',
  styleUrls: ['./animes-updates.component.css'],
  providers: [AnimeService],
})
export class AnimesUpdatesComponent implements OnInit {

  constructor(
    public auth: Auth,
    private animeService : AnimeService,
    private router : Router) { 
        this.filterText = "";
    }

    title = "New episodes of your followed animes";
    animes : Anime[] = [];
    filterText : string;

    getAnimes() {
        this.animeService.getUserUpdateAnimes().then(animes => this.animes = animes);
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

    markAsRead(anime: Anime): void {
        this.animeService.markAsRead(anime).then(resp => this.getAnimes());
    }
}

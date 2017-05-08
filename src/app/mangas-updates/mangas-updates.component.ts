import { Component, OnInit } from '@angular/core';

import { MangaService } from '../mangas/manga.service'
import { Router } from '@angular/router';

import { Manga } from '../mangas/manga.model';
import { Auth } from "../auth.service";

import { MomentModule } from "angular2-moment/moment.module";

@Component({
  selector: 'app-mangas-updates',
  templateUrl: './mangas-updates.component.html',
  styleUrls: ['./mangas-updates.component.css'],
  providers: [MangaService],
})
export class MangasUpdatesComponent implements OnInit {

  constructor(
    public auth: Auth,
    private mangaService : MangaService,
    private router : Router) { 
        this.filterText = "";
    }

    title = "New chapters of your followed mangas";
    mangas : Manga[] = [];
    filterText : string;

    getMangas() {
        this.mangaService.getUserUpdateMangas().then(mangas => this.mangas = mangas);
    }

    ngOnInit() { 
        this.getMangas();
    }

    followManga(manga: Manga): void {
        this.mangaService.followManga(manga).then(resp => this.getMangas());
    }

    unfollowManga(manga: Manga): void {
        this.mangaService.unfollowManga(manga).then(resp => this.getMangas());
    }

    markAsRead(manga: Manga): void {
        this.mangaService.markAsRead(manga).then(resp => this.getMangas());
    }
}

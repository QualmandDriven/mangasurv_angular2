import { Component, OnInit } from '@angular/core';

import { MangaService } from '../mangas/manga.service'
import { Router } from '@angular/router';

import { Manga } from '../mangas/manga.model';
import { Auth } from "../auth.service";

import { StringImageReplacePipe } from '../string-image-replace.pipe';

@Component({
  selector: 'app-mangas-followed',
  templateUrl: './mangas-followed.component.html',
  styleUrls: ['./mangas-followed.component.css'],
  providers: [MangaService],
})
export class MangasFollowedComponent implements OnInit {

  constructor(
    public auth: Auth,
    private mangaService : MangaService,
    private router : Router) { 
        this.filterText = "";
    }

    title = "Your followed mangas";
    mangas : Manga[] = [];
    filterText : string;

    getMangas() {
        this.mangaService.getUserFollowedMangas().then(mangas => {
            this.mangas = mangas;
            this.mangas.forEach(manga => manga.imageName = new StringImageReplacePipe().transform(manga.fileSystemName) + '.jpg');
        });
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
}

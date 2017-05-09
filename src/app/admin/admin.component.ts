import { Component, OnInit } from '@angular/core';

import { MangaSurvBase } from "../mangasurvbase.model";
import { MangaService } from "../mangas/manga.service";
import { AnimeService } from "../animes/anime.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MangaService, AnimeService],
})
export class AdminComponent implements OnInit {

  base: MangaSurvBase = new MangaSurvBase;

  constructor(
    private mangaService: MangaService,
    private animeService: AnimeService
  ) { }

  ngOnInit() {
  }

  createManga(base: MangaSurvBase) {
    this.mangaService.createManga(base);
  }

  createAnime(base: MangaSurvBase) {
    this.animeService.createAnime(base);
  }
}

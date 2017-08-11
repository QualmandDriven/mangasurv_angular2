import { Component, OnInit }  from '@angular/core';
import { Auth }       from './auth.service';
import { MangaService } from "./mangas/manga.service";
import { Manga } from "./mangas/manga.model";
import { AnimeService } from "./animes/anime.service";
import { Anime } from "./animes/anime.model";

import { StringImageReplacePipe } from './string-image-replace.pipe';

@Component({
  selector: 'home-comp',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [MangaService, AnimeService],
})

export class HomeComponent implements OnInit {
  constructor(public auth: Auth,
              private mangaService: MangaService,
              private animeService: AnimeService) {}

  title : String = "Updates";
  filterText : String = "";
  mangas : Manga[] = [];
  animes : Anime[] = [];

  getUpdates() {
      this.mangaService.getChapterUpdates().then(mangas => {
        this.mangas = mangas;
        this.mangas.forEach(manga => manga.imageName = new StringImageReplacePipe().transform(manga.fileSystemName) + '.jpg');
      });
      this.animeService.getEpisodeUpdates().then(animes => {
        this.animes = animes;
        this.animes.forEach(anime => anime.imageName = new StringImageReplacePipe().transform(anime.fileSystemName) + '.jpg');
      });
  }

  ngOnInit() {
      this.getUpdates();
  }
};

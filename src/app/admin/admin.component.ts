import { Component, OnInit } from '@angular/core';

import { MangaSurvBase } from "../mangasurvbase.model";
import { MangaService } from "../mangas/manga.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  base: MangaSurvBase = new MangaSurvBase;

  constructor(
    private mangaService: MangaService
  ) { }

  ngOnInit() {
  }

  createManga(manga: MangaSurvBase) {
    this.mangaService.createManga(manga);
  }

  createAnime() {

  }
}

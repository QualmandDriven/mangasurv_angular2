import { Component, OnInit, Input } from '@angular/core';

import { Manga } from "../../mangas/manga.model";
import { Chapter } from "../../mangas/chapter.model";

@Component({
  selector: 'app-manga-followed-detail',
  templateUrl: './manga-followed-detail.component.html',
  styleUrls: ['./manga-followed-detail.component.css'],
})
export class MangaFollowedDetailComponent implements OnInit {

  @Input() manga: Manga;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { Anime } from "../../animes/anime.model";

@Component({
  selector: 'app-anime-followed-detail',
  templateUrl: './anime-followed-detail.component.html',
  styleUrls: ['./anime-followed-detail.component.css'],
})
export class AnimeFollowedDetailComponent implements OnInit {

  @Input() anime: Anime;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}

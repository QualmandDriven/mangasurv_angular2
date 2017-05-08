import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Manga } from '../mangas/manga.model';
import { MangaService } from '../mangas/manga.service';
import { Chapter } from '../mangas/chapter.model';

@Component({
    moduleId: module.id,
    selector: 'manga-detail',
    templateUrl: 'manga-detail.component.html',
    styleUrls: ['manga-detail.component.css'],
    providers: [MangaService]
})
export class MangaDetailComponent implements OnInit {
    manga: Manga;
    chapters: Chapter[];
    
    constructor(private mangaService : MangaService, private router : Router, private route: ActivatedRoute) {
        
    }

    ngOnInit() {
        
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            //this.service.getHero(id).then(hero => this.hero = hero);                        
            this.mangaService.getManga(id).then(manga => this.manga = manga);
        });
    }
    
    goBack() {
        window.history.back();
    }
}
import { Injectable } from '@angular/core';
import { Manga } from './manga.model';
import { MangaSurvBase } from "../mangasurvbase.model";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { AppService } from "../app.service";

import { MomentModule } from "angular2-moment/moment.module";

import "rxjs/Rx";

@Injectable()
export class MangaService extends AppService {

    constructor(private http: Http, private moment: MomentModule) { 
        super();
     }

    createManga(manga: MangaSurvBase) : Promise<Response> {
        return this.http.post(`${this.getApiUrl()}/mangas`, JSON.stringify({ name: manga.name, fileSystemName: manga.fileSystemName }), {headers: this.getHeaders()})
            .toPromise();
    }

    getManga(id: number) : Promise<Manga> {
        let manga$ = this.http.get(`${this.getApiUrl()}/mangas/${id}?include=1`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapManga);
        return manga$;
    }
    
    getMangas() : Promise<Manga[]> {
        let mangas$ = this.http.get(`${this.getApiUrl()}/mangas`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapMangas);
        return mangas$;
    }

    getUserFollowedMangas() : Promise<Manga[]> {
        let mangas$ = this.http.get(`${this.getApiUrl()}/users/0/mangas`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapMangas);
        return mangas$;
    }

    getUserUpdateMangas() : Promise<Manga[]> {
        let mangas$ = this.http.get(`${this.getApiUrl()}/users/0/chapters?sortby=manga`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapMangas);
        return mangas$;
    }

    getChapterUpdates() : Promise<Manga[]> {
        let mangas$ = this.http.get(`${this.getApiUrl()}/chapters?from=${this.getCurrentDate(-40)}`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapMangas);
        return mangas$;
    }

    followManga(manga: Manga): Promise<Response> {
        return this.http.post(`${this.getApiUrl()}/users/0/mangas`, JSON.stringify({ id: manga.id }), {headers: this.getHeaders()})
            .toPromise();
    }

    unfollowManga(manga: Manga): Promise<Response> {
        return this.http.delete(`${this.getApiUrl()}/users/0/mangas/${manga.id}`, {headers: this.getHeaders()}).toPromise();
    }

    markAsRead(manga: Manga): Promise<Response> {
        return this.http.delete(`${this.getApiUrl()}/users/0/chapters?mangaid=${manga.id}`, {headers: this.getHeaders()}).toPromise();
    }

    mapManga(response: Response): Manga {
        return response.json();
    }

    mapMangas(response: Response): Manga[] {
        return response.json();
    }

    toManga(r: any): Manga {
        let manga = <Manga>({
            id: parseInt(r.id),
            name: r.name,
            fileSystemName: r.fileSystemName,
            enterDate: r.enterDate,
            lastUpdate: r.lastUpdate
        });
        console.log("Parsed manga:", manga);
        return manga;
    }
}
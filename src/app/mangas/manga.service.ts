import { Injectable } from '@angular/core';
import { Manga } from './manga.model';
import { MangaSurvBase } from "../mangasurvbase.model";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/Rx";

@Injectable()
export class MangaService {

    constructor(private http: Http) { }
    
    getBaseUrl() : String {
        var pathArray = location.href.split( '/' );
        var protocol = pathArray[0];
        var host = pathArray[2];
        var url = protocol + '//' + host;
        return url;
    }

    getMangaApiUrl() : String {
        return this.getBaseUrl() + '/api';
    }

    createManga(manga: MangaSurvBase) : Promise<Response> {
        return this.http.post(`${this.getMangaApiUrl()}/mangas`, JSON.stringify({ name: manga.name, fileSystemName: manga.fileSystemName }), {headers: this.getHeaders()})
            .toPromise();
    }

    getManga(id: number) : Promise<Manga> {
        let manga$ = this.http.get(`${this.getMangaApiUrl()}/mangas/${id}?include=1`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapManga);
        return manga$;
    }
    
    getMangas() : Promise<Manga[]> {
        let mangas$ = this.http.get(`${this.getMangaApiUrl()}/mangas`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapMangas);
        return mangas$;
    }

    getUserFollowedMangas() : Promise<Manga[]> {
        let mangas$ = this.http.get(`${this.getMangaApiUrl()}/users/0/mangas`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapMangas);
        return mangas$;
    }

    getUserUpdateMangas() : Promise<Manga[]> {
        let mangas$ = this.http.get(`${this.getMangaApiUrl()}/users/0/chapters?sortby=manga`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapMangas);
        return mangas$;
    }

    followManga(manga: Manga): Promise<Response> {
        return this.http.post(`${this.getMangaApiUrl()}/users/0/mangas`, JSON.stringify({ id: manga.id }), {headers: this.getHeaders()})
            .toPromise();
    }

    unfollowManga(manga: Manga): Promise<Response> {
        return this.http.delete(`${this.getMangaApiUrl()}/users/0/mangas/${manga.id}`, {headers: this.getHeaders()}).toPromise();
    }

    markAsRead(manga: Manga): Promise<Response> {
        return this.http.delete(`${this.getMangaApiUrl()}/users/0/chapters?mangaid=${manga.id}`, {headers: this.getHeaders()}).toPromise();
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
        return headers;
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
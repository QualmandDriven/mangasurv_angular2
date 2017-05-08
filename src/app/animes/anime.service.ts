import { Injectable } from '@angular/core';
import { Anime } from './anime.model';
import { MangaSurvBase } from "../mangasurvbase.model";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/Rx";

@Injectable()
export class AnimeService {
    private baseUrl: string = 'http://192.168.178.70:5000/api';

    constructor(private http: Http) { }
    
    createAnime(anime: MangaSurvBase) : Promise<Response> {
        return this.http.post(`${this.baseUrl}/animes`, JSON.stringify({ name: anime.name, fileSystemName: anime.fileSystemName }), {headers: this.getHeaders()})
            .toPromise();
    }

    getAnime(id: number) : Promise<Anime> {
        let anime$ = this.http.get(`${this.baseUrl}/animes/${id}?include=1`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapAnime);
        return anime$;
    }
    
    getAnimes() : Promise<Anime[]> {
        let animes$ = this.http.get(`${this.baseUrl}/animes`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapAnimes);
        return animes$;
    }

    getUserFollowedAnimes() : Promise<Anime[]> {
        let animes$ = this.http.get(`${this.baseUrl}/users/0/animes`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapAnimes);
        return animes$;
    }

    getUserUpdateAnimes() : Promise<Anime[]> {
        let animes$ = this.http.get(`${this.baseUrl}/users/0/episodes?sortby=anime`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapAnimes);
        return animes$;
    }

    followAnime(anime: Anime): Promise<Response> {
        return this.http.post(`${this.baseUrl}/users/0/animes`, JSON.stringify({ id: anime.id }), {headers: this.getHeaders()})
            .toPromise();
    }

    unfollowAnime(anime: Anime): Promise<Response> {
        return this.http.delete(`${this.baseUrl}/users/0/animes/${anime.id}`, {headers: this.getHeaders()}).toPromise();
    }

    markAsRead(anime: Anime): Promise<Response> {
        return this.http.delete(`${this.baseUrl}/users/0/episodes?animeid=${anime.id}`, {headers: this.getHeaders()}).toPromise();
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
        return headers;
    }

    mapAnime(response: Response): Anime {
        return response.json();
    }

    mapAnimes(response: Response): Anime[] {
        return response.json();
    }

    toAnime(r: any): Anime {
        let anime = <Anime>({
            id: parseInt(r.id),
            name: r.name,
            fileSystemName: r.fileSystemName,
            enterDate: r.enterDate,
            lastUpdate: r.lastUpdate
        });
        console.log("Parsed anime:", anime);
        return anime;
    }
}
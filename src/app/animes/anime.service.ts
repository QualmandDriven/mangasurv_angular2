import { Injectable } from '@angular/core';
import { Anime } from './anime.model';
import { MangaSurvBase } from "../mangasurvbase.model";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { AppService } from "../app.service";
import "rxjs/Rx";

@Injectable()
export class AnimeService extends AppService {
    constructor(private http: Http) {
        super();
     }
    
    createAnime(anime: MangaSurvBase) : Promise<Response> {
        return this.http.post(`${this.getApiUrl()}/animes`, JSON.stringify({ name: anime.name, fileSystemName: anime.fileSystemName }), {headers: this.getHeaders()})
            .toPromise();
    }

    getAnime(id: number) : Promise<Anime> {
        let anime$ = this.http.get(`${this.getApiUrl()}/animes/${id}?include=1`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapAnime);
        return anime$;
    }
    
    getAnimes() : Promise<Anime[]> {
        let animes$ = this.http.get(`${this.getApiUrl()}/animes`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapAnimes);
        return animes$;
    }

    getUserFollowedAnimes() : Promise<Anime[]> {
        let animes$ = this.http.get(`${this.getApiUrl()}/users/0/animes`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapAnimes);
        return animes$;
    }

    getUserUpdateAnimes() : Promise<Anime[]> {
        let animes$ = this.http.get(`${this.getApiUrl()}/users/0/episodes?sortby=anime`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapAnimes);
        return animes$;
    }

    getEpisodeUpdates() : Promise<Anime[]> {
        let animes$ = this.http.get(`${this.getApiUrl()}/episodes?from=${this.getCurrentDate(-40)}`, {headers: this.getHeaders()})
            .toPromise()
            .then(this.mapAnimes);
        return animes$;
    }

    followAnime(anime: Anime): Promise<Response> {
        return this.http.post(`${this.getApiUrl()}/users/0/animes`, JSON.stringify({ id: anime.id }), {headers: this.getHeaders()})
            .toPromise();
    }

    unfollowAnime(anime: Anime): Promise<Response> {
        return this.http.delete(`${this.getApiUrl()}/users/0/animes/${anime.id}`, {headers: this.getHeaders()}).toPromise();
    }

    markAsRead(anime: Anime): Promise<Response> {
        return this.http.delete(`${this.getApiUrl()}/users/0/episodes?animeid=${anime.id}`, {headers: this.getHeaders()}).toPromise();
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
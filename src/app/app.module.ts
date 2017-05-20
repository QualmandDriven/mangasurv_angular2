import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent } from './app.component';
import { HomeComponent }       from './home.component';
import { MangasComponent } from "./mangas/mangas.component";
import { MangaDetailComponent } from "./manga-detail/manga-detail.component";
import { ProfileComponent } from './profile/profile.component';
import { MangaService } from "./mangas/manga.service";

import { AppRoutingModule } from './app.routes';
import { MangasFollowedComponent } from './mangas-followed/mangas-followed.component';
import { MangasUpdatesComponent } from './mangas-updates/mangas-updates.component';

import { MomentModule } from 'angular2-moment/moment.module';
import { StringImageReplacePipe } from './string-image-replace.pipe';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FilterMangaSurvBasePipe } from './filter-mangasurvbase.pipe';
import { FilterChapterDatePipe } from "./filter-chaptersdate.pipe";
import { FilterEpisodeDatePipe } from "./filter-episodesdate.pipe";
import { AdminComponent } from './admin/admin.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimesComponent } from './animes/animes.component';
import { AnimesFollowedComponent } from './animes-followed/animes-followed.component';
import { AnimesUpdatesComponent } from './animes-updates/animes-updates.component';
import { MangaFollowedDetailComponent } from './mangas-followed/manga-followed-detail/manga-followed-detail.component';
import { AnimeFollowedDetailComponent } from "./animes-followed/anime-followed-detail/anime-followed-detail.component";
import { NowComponent } from './now/now.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MomentModule,  
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MangasComponent,
    MangaDetailComponent,
    ProfileComponent,
    MangasFollowedComponent,
    MangasUpdatesComponent,
    StringImageReplacePipe,
    SearchbarComponent,
    FilterMangaSurvBasePipe,
    FilterChapterDatePipe,
    FilterEpisodeDatePipe,
    AdminComponent,
    AnimeDetailComponent,
    AnimesComponent,
    AnimesFollowedComponent,
    AnimesUpdatesComponent,
    MangaFollowedDetailComponent,
    AnimeFollowedDetailComponent,
    NowComponent,
  ],
  providers: [
    // AUTH_PROVIDERS,
    MangaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

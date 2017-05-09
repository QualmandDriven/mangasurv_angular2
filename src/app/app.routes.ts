import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { MangasComponent } from "./mangas/mangas.component";
import { MangaDetailComponent } from "./manga-detail/manga-detail.component";
import { ProfileComponent } from "./profile/profile.component";
import { MangasFollowedComponent } from "./mangas-followed/mangas-followed.component";
import { MangasUpdatesComponent } from "./mangas-updates/mangas-updates.component";
import { AdminComponent } from "./admin/admin.component";
import { AnimesComponent } from "./animes/animes.component";
import { AnimesFollowedComponent } from "./animes-followed/animes-followed.component";
import { AnimesUpdatesComponent } from "./animes-updates/animes-updates.component";
import { AnimeDetailComponent } from "./anime-detail/anime-detail.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mangas', component: MangasComponent },
  { path: 'mangas/followed', component: MangasFollowedComponent },
  { path: 'mangas/updates', component: MangasUpdatesComponent },
  { path: 'mangas/:id', component: MangaDetailComponent },
  { path: 'animes', component: AnimesComponent },
  { path: 'animes/followed', component: AnimesFollowedComponent },
  { path: 'animes/updates', component: AnimesUpdatesComponent },
  { path: 'animes/:id', component: AnimeDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { useHash: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
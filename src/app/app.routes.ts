import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AnimeQuoteListComponent} from "./components/anime-quote-list/anime-quote-list.component";

export const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'anime',
    component: AnimeQuoteListComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
